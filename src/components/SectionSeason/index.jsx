import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";
import Box from "../../components/Box";

import { useSelector } from "react-redux";
import { seasonBannerList } from "../../app/selectors";

import "./styles.scss";
function SectionSeason(props) {
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
      {console.log(listSeason)}
      <a href="#" className="section__title">
        Bộ sưu tập
        <i className="fas fa-chevron-right"></i>
      </a>
      <Container>
        <Row>
          {listSeason &&
            listSeason.length &&
            listSeason.map((e) => {
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
            })}
        </Row>
      </Container>
    </section>
  );
}

SectionSeason.propTypes = {};

export default SectionSeason;
