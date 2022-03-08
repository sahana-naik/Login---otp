import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Categories = ({ data }) => {
  const categories = data && data.result && data.result.category;

  console.log("cat", categories);
  return (
    <React.Fragment>
      <Container>
        <Row className="cat-row">
          {categories?.map((item) => {
            return (
              <Col lg={2} className="cat-col" key={item.id}>
                {item.name}
              </Col>
            );
          })}
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Categories;
