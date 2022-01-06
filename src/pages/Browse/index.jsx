import ANIAPI from "@mattplays/aniapi";
import DropDown from "components/DropDown";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Card from "components/Card";
import "./styles.scss";
import data from "./supportData";

function Browse(props) {
  const params = useParams();
  const API = new ANIAPI.API("DUMMY_JWT");
  // console.log(params);

  //fetch API in filters
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await API.Anime.Get(
  //       {
  //         year: 2021,
  //         season: 1,
  //       },
  //       1,
  //       10
  //     );
  //     console.log(response);
  //   };

  //   fetchData();
  // }, []);

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
                  />
                </Col>
              );
            })}
        </Row>
      </Container>

      <Container className="browse__animeCards w-full">
        <Row>
          <Col
            lg="2"
            md="4"
            sm="6"
            xs="6"
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <Card />
          </Col>
          <Col
            lg="2"
            md="4"
            sm="6"
            xs="6"
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <Card />
          </Col>
          <Col
            lg="2"
            md="4"
            sm="6"
            xs="6"
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <Card />
          </Col>
          <Col
            lg="2"
            md="4"
            sm="6"
            xs="6"
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <Card />
          </Col>
          <Col
            lg="2"
            md="4"
            sm="6"
            xs="6"
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <Card />
          </Col>
          <Col
            lg="2"
            md="4"
            sm="6"
            xs="6"
            className="d-flex flex-column align-items-center justify-content-center"
          >
            <Card />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

Browse.propTypes = {};

export default Browse;
