import React from "react";
class Main extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    // state = {  }
    render() { 
        return ( 
            <ul>
{this.props.display()}
            </ul>
         );
    }
}
 
export default Main;