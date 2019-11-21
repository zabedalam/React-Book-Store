import React from "react"
import {Badge} from "reactstrap"

class MyBadge extends React.Component {
    state = {  }
    render() { 
        return ( <div>
            
              <Badge>{this.props.text} {this.props.color}</Badge>
            
          </div> );
    }
}
 
export default MyBadge;