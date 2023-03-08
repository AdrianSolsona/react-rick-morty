import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const InfoCard = ({ infoPj }) => {
    return (
        <>
    <Card bg="info" border="warning" style={{ width: '18rem' }} className="m-2">
        <Card.Img variant="top" src={infoPj.image} />
        <Card.Body>
            <Card.Title>{infoPj.name}</Card.Title>
            <Card.Text>{infoPj.status}</Card.Text>
            <Card.Text>{infoPj.species}</Card.Text>
            <Card.Text>{infoPj.id}</Card.Text>
            <Button variant="success">Go somewhere</Button>
        </Card.Body>
    </Card>
    </>
    );
};


