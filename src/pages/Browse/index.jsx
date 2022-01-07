import ANIAPI from "@mattplays/aniapi";
import { filter } from "app/selectors";
import Card from "components/Card";
import DropDown from "components/DropDown";
import { useEffect, useRef, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "app/filtersSlice";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./styles.scss";
import data from "./supportData";
import { isEmptyObject, sleep } from "utils";

function Browse(props) {
  const API = new ANIAPI.API("DUMMY_JWT");
  const { type } = useParams();
  const [dataList, setDataList] = useState([]);
  const [filters, setFilters] = useState({});
  const [searchFilter, setSearchFilter] = useState("");
  const debounceTime = useRef();
  const dataFlow = useRef({
    current_page: 1,
  });
  const filterFromRedux = useSelector(filter);
  const dispatch = useDispatch();

  //update filters follow dropdown
  const triggerFilters = (key, value) => {
    setFilters((prev) => {
      if (value === "Tất cả") {
        delete prev[key];
        return prev;
      }
      if (key === "formats") {
        return { ...prev, [key]: [ANIAPI.ENUMS.AnimeFormat[value]] };
      }
      if (key === "status") {
        return { ...prev, [key]: [ANIAPI.ENUMS.AnimeStatus[value]] };
      }
      if (key === "title") {
        return { [key]: value };
      }
      return { ...prev, [key]: value };
    });
  };

  //support first fetch
  const fetchData = async () => {
    // console.log(filters);
    if (!isEmptyObject(filters)) {
      const response = await API.Anime.Get(filters, 1, 12);
      return response.data?.documents;
    }
  };
  //support infinite scroll
  const fetchMoreData = async () => {
    await sleep(200);
    const response = await API.Anime.Get(
      filters,
      dataFlow.current.current_page,
      12
    );
    // console.log(response);
    if (response.status_code === 200) {
      setDataList((prev) => {
        prev = prev.concat(response.data.documents);
        const uniqueData = [...new Set(prev.map(JSON.stringify))].map(
          JSON.parse
        );
        return uniqueData;
      });
      dataFlow.current.current_page++;
    }
  };

  //first fetch
  useEffect(() => {
    //reset when filters change

    setDataList([]);
    fetchData().then((value) => setDataList(value));
    dataFlow.current.current_page++;
  }, [filters]);

  //custom filters follow params
  useEffect(() => {
    const debounceFetch = async () => {
      await sleep(300);
      setFilters({
        year: type === "new" ? new Date().getFullYear() : 2021,
      });
    };
    debounceFetch();
  }, [type]);

  //debounce reduce call API
  useEffect(() => {
    const searchTitleWithDebounce = async (key, value) => {
      if (debounceTime.current) {
        clearTimeout(debounceTime.current);
      }
      debounceTime.current = setTimeout(() => {
        triggerFilters("title", value);
      }, 300);
    };
    if (searchFilter.length > 0) {
      searchTitleWithDebounce("title", searchFilter);
    } else {
      // console.log(searchFilter.length);
      triggerFilters("title", "Tất cả");
      triggerFilters("year", type === "new" ? 2022 : 2021);
    }
  }, [searchFilter]);

  //read filters from redux
  useEffect(() => {
    const filter = filterFromRedux;
    if (filter) {
      if (!isNaN(filter)) {
        triggerFilters("season", filter);
        triggerFilters("year", "Tất cả");
      } else {
        triggerFilters("genres", filter);
        triggerFilters("year", "Tất cả");
      }
    }

    return () => {
      //reset filter in redux
      dispatch(setFilter(null));
    };
  }, []);

  return (
    <div className="browse w-full">
      <Container className="browse__filters w-full">
        <Row className="w-full d-flex justify-content-center">
          <div className="inputWrapper d-flex">
            <input
              className="inputWrapper__search"
              type="text"
              name="inputFilter"
              placeholder="Nhập tên anime..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(() => e.target.value)}
            />
            <i className="bi bi-search d-flex align-items-center justify-content-center"></i>
          </div>
        </Row>

        {/* filters: năm, mùa, thể loại, trạng thái, định dạng, sắp xếp */}
        <Row>
          {data &&
            data.map((elem, index) => {
              return (
                <Col
                  key={index}
                  className="d-flex flex-column align-items-center justify-content-center"
                  lg="2"
                  md="4"
                  sm="6"
                  xs="6"
                >
                  <span className="filter-title">{elem.title}</span>
                  <DropDown
                    id={index}
                    title={elem.data[0]}
                    listItem={elem.data}
                    triggerFunction={triggerFilters}
                  />
                </Col>
              );
            })}
        </Row>
      </Container>

      <Container id="scrollableDiv" className="browse__animeCards w-full">
        {dataList && dataList.length > 0 && (
          <InfiniteScroll
            dataLength={dataList.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
            hasChildren={false}
          >
            <Row>
              {dataList.map((e, index) => {
                return (
                  <Col
                    key={e.anilist_id}
                    lg="2"
                    md="4"
                    sm="6"
                    xs="6"
                    className="card-column d-flex flex-column align-items-center justify-content-center"
                  >
                    <Card
                      id={e.id}
                      typeCard={"details"}
                      imgSrc={e.cover_image}
                      episode_count={e.episodes_count}
                      title={e.titles.en || e.titles.jp}
                    />
                  </Col>
                );
              })}
            </Row>
          </InfiniteScroll>
        )}
      </Container>
    </div>
  );
}

Browse.propTypes = {};

export default Browse;
