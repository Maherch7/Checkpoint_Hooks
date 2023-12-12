import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from '@mui/material/Rating';

const CardMovie=({el})=>{
    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={el.posterURL} />
        <Card.Body>
          <Card.Title>{el.title}</Card.Title>
          <br/>
          <Card.Text>
           {el.description}
          </Card.Text>
          
          <Rating name="read-only" value={el.rating} readOnly />
        </Card.Body>
      </Card>

    )
}

export default CardMovie