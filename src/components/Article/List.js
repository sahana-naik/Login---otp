import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const List = ({ data }) => {

    const articles = data && data.result && data.result.article;
  return <React.Fragment>
      <Container>
          <Row className="article-row">
              {articles?.map((item) => {
                  return (

                      <Col lg={5} sm={6} className="article-col">
                          {/* <img src={item.url} /> */}
                          <h6>{item.name}</h6>
                          <p>Author: {item.author}</p>
                          <p>Category: {item.categoryName}</p>
                          <p>{item.description}</p>
                          </Col>
                  )
              })}
          </Row>
      </Container>
  </React.Fragment>;
};

export default List;
