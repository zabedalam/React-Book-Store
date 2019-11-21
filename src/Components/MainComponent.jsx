import React from "react"
import {Container,Col} from "reactstrap"
import WarningSign from "./WarningSign"
import MyBadge from "./MyBadge"
import SingleBook from "./SingleBook"
import history from "../data/history";
import BookList from "./BookList"


class MainComponent extends React.Component {
    state = {  }
    render() { 
        return ( 
            
            <Container>

<WarningSign></WarningSign>
<MyBadge text="Book store" color=""></MyBadge>
<Col md="12">
    <SingleBook selectedBook={history[0]}></SingleBook>
</Col>

        <BookList></BookList>
            </Container>
         );
    }
}
 
export default MainComponent;