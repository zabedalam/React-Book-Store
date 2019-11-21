import React from 'react';
import {
    Card,
    CardBody,
    CardImg,
    CardTitle,
    
    CardDeck
  } from "reactstrap";

class SingleBook extends React.Component {
    state = {  }
    render() { 
        return (
            <CardDeck className="cardDisplay">
            <Card className="m-2">
              <CardImg
                top
                width="100%"
                
                src={this.props.selectedBook.img}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Title: {this.props.selectedBook.title.slice(0, 25).concat("...")}</CardTitle>
                
              </CardBody>
            </Card>
          </CardDeck>
          );
    }
}
 
export default SingleBook;