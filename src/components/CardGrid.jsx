
import React from 'react';
import { InfoCard } from './Card';
import { Container, Row, Col } from 'react-bootstrap';
import { data } from '../data/baseData';

function TarjetGrid() {
  return (
    <Container>
      <Row>
        {data.map(info => (
          <Col key={info.id} xs={12} sm={6} md={4} lg={3}>
            <InfoCard infoPj={info}/>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default TarjetGrid;