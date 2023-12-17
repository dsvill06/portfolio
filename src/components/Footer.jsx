import React, { Component } from "react";


export default class Footer extends Component {
  render() {
    return (
      <div class="flex items-center justify-center bg-[#333333] text-stone-500 h-fit">
        <div className="grid grid-flow-row m-3 text-center">
          <p>dsvill06@unc.edu</p>
          <p>©Copyright 2023 David Villavicencio</p>
        </div>
      </div>
    );
  }
}
