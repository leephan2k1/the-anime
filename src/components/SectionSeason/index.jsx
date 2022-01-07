import { seasonBannerList } from "app/selectors";
import Box from "components/Box";
import MyLoader from "components/MyLoader";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";
import { seasonSectionLoaderSettings } from "settings";
import { Link } from "react-router-dom";
import "./styles.scss";

function SectionSeason(props) {
  const { target } = props;
  const data = useSelector(seasonBannerList);
  const [listSeason, setListSeason] = useState([]);

  useEffect(() => {
    for (const key in data) {
      setListSeason((prevState) => {
        //fix unknown
        data[key].forEach((e) => {
          if (e.season_period === "UNKNOWN") e.season_period = "WINTER";
        });
        //set state
        if (data[key][0].banner_image) {
          return [...prevState, data[key][0]];
        }
        return [...prevState, data[key][1]];
      });
    }
    return () => {
      setListSeason([]);
    };
  }, [data]);

  return (
    <section className="section sectionSeason d-flex flex-column justify-content-center ">
      <Link to={target} className="section__title">
        Bộ sưu tập
        <i className="fas fa-chevron-right"></i>
      </Link>
      <Container>
        <Row>
          {listSeason && listSeason.length
            ? listSeason.map((e) => {
                return (
                  <Col key={e.anilist_id} lg="3" md="6" sm="6">
                    <Box
                      classNames={{
                        wrapperClassName:
                          "sectionSeason__content overflow-hidden position-relative",
                        imgClassName:
                          "sectionSeason__content__image position-relative",
                        titleClassName: "sectionSeason__content__title",
                      }}
                      imgUrl={e.banner_image}
                      title={e.season_period}
                    />
                  </Col>
                );
              })
            : [...Array(4).keys()].map((e) => {
                return (
                  <Col key={e} lg="3" md="6" sm="6">
                    <MyLoader stloader={seasonSectionLoaderSettings} />
                  </Col>
                );
              })}
        </Row>
      </Container>
    </section>
  );
}

SectionSeason.propTypes = {};

export default SectionSeason;
