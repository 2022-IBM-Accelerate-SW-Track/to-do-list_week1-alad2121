import React, { Component } from "react";
import image from "../assets/Picture.png"
import "./About.css"

export default class About extends Component {
  render() {
    return (
      <div>
        <div class="split left">
          <div className="centered">
            <img 
              className="profile_image"
              alt="Profile Pic"
              src={image}
              class></img>
          </div>
        </div>
        <div className="split right">
          <div className="centered">
            <div className="name_title">Alero Adegoroye</div>
            <div className="brief_description">
            Hi my name is Alero Adegoroye. I'm currently a junior attending Georgia state university and majoring in computer science. 
I enjoy watching sports like basketball and soccer. I also enjoy catching up on the latest tech news and dabble with electronics My true passion lies within robotics and would want my career goal to lie within the robotics field.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
