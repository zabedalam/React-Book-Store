import React from  "react"
 import {Container,Col,Row} from "reactstrap"
import SingleBook from "./SingleBook"
 import history from "../data/history";


class BookList extends React.Component {
    state = {  }
    render() { 
        return ( 
<Container>
    <Row>
{history.map((bookEntry, index) => (
    <Col md="3">
      <SingleBook selectedBook={bookEntry} key={index} />
    </Col>
  ))}
  </Row>
  </Container>
         );
    }
}
 
export default BookList;