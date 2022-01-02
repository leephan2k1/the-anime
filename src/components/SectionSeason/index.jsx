import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "reactstrap";

import "./styles.scss";
function SectionSeason(props) {
  return (
    <section className="section sectionSeason d-flex flex-column justify-content-center ">
      <a href="#" className="section__title">
        Bộ sưu tập
        <i className="fas fa-chevron-right"></i>
      </a>
      <Container>
        <Row>
          <Col lg="3" md="6" sm="6">
            <div className="sectionSeason__content overflow-hidden position-relative">
              <img
                className="sectionSeason__content__image position-relative"
                src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/124858-3Kb09cB8JxnF.jpg"
                alt="anime-season-1"
              />
              <div className="sectionSeason__content__title">
                Anime mùa xuân
              </div>
            </div>
          </Col>
          <Col lg="3" md="6" sm="6">
            <div className="sectionSeason__content overflow-hidden position-relative">
              <img
                className="sectionSeason__content__image position-relative"
                src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/128547-aVWJmZz9dwJJ.jpg"
                alt="anime-season-1"
              />
              <div className="sectionSeason__content__title">
                Anime mùa xuân
              </div>
            </div>
          </Col>
          <Col lg="3" md="6" sm="6">
            <div className="sectionSeason__content overflow-hidden position-relative">
              <img
                className="sectionSeason__content__image position-relative"
                src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/128547-aVWJmZz9dwJJ.jpg"
                alt="anime-season-1"
              />
              <div className="sectionSeason__content__title">
                Anime mùa xuân
              </div>
            </div>
          </Col>
          <Col lg="3" md="6" sm="6">
            <div className="sectionSeason__content overflow-hidden position-relative">
              <img
                className="sectionSeason__content__image position-relative"
                src="https://s4.anilist.co/file/anilistcdn/media/anime/banner/128547-aVWJmZz9dwJJ.jpg"
                alt="anime-season-1"
              />
              <div className="sectionSeason__content__title">
                Anime mùa xuân
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

SectionSeason.propTypes = {};

export default SectionSeason;
