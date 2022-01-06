import React from "react";
import { Col, Container, Row } from "reactstrap";
import DropDown from "../../components/DropDown";
import "./styles.scss";
import data from "./supportData";

function Browse(props) {
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
                  <DropDown title={elem.data[0]} listItem={elem.data} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
}

Browse.propTypes = {};

export default Browse;
