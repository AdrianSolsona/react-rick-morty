import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Tarjet } from './Tarjet';

export const TarjetGrid = () => {
  return (
    <Container>
    <Row>
      <Col md={4}>
        <Tarjet />
      </Col>
      <Col md={4}>
        <Tarjet />
      </Col>
      <Col md={4}>
        <Tarjet />
      </Col>
    </Row>
  </Container>
  );
}
