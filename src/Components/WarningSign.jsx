import React from "react"
import {Alert} from "reactstrap"
class WarningSign extends React.Component {
    state = { 
        text:"You made mistake!Try again?"
     }
    render() { 
        return ( 
            <div>
                <Alert color="danger">
        {this.state.text}
      </Alert>
            </div>
         );
    }
}
 
export default WarningSign;