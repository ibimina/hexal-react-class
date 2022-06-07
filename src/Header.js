import React from "react";

class Header extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }
  // state = {  }
  render() {
    return (
      <header>
        <h1>{this.props.header}</h1>
        <p>{this.props.title}</p>
      </header>
    );
     
  }
}

export default Header;
