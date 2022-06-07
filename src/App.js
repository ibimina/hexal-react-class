import React from "react";
import Header from "./Header";
import Main from "./Main";

class App extends React.Component {
  display = () => {
    const colorHex = [
      "#4e417e",
      "#02dc92",
      "#dfbaa0",
      "#d8394e",
      "#7c31d3",
      "#7fcfd2",
      "#0e5d46",
      "#d98590",
      "#7923d7",
      "#6e5eeb",
      "#2a176b",
      "#dea1d8",
      "#cbae6f",
      "#b6841d",
      "#62df7d",
      "#9e4d2c",
      "#393b73",
      "#8cface",
      "#1a4f07",
      "#045529",
      "#04e754",
      "#697980",
      "#018120",
      "#5bdcc7",
      "#7010b2",
      "#c50007",
      "#cfe583",
      "#cdb58e",
      "#298b5d",
      "#58e253",
      "#a9c3c5",
      "#66fec5",
    ];
    const dis = colorHex.map((list) => (
      <li key={list} style={{ backgroundColor: list }}>
        {list}
      </li>
    ));
    return dis;
  };
  // state = {};
  render() {
    let header = "30 days of React";
    let title = "Mapping out Hexidecimal Colors using react class";

    return (
      <div className="wrapper">
        <Header header={header} title={title} />
        <Main display={this.display} />
      </div>
    );
  }
}

export default App;
