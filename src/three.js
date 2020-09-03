import React, { Component } from "react";

export default class Three extends Component {
  render() {
      return (
        <div className="three">
            <iframe
            src="https://astr.maps.arcgis.com/apps/webappviewer3d/index.html?id=9cd6bed3f5f2432884f6f3f77dfb8b0f"
                  title="3D Rendered Web GIS Map Application of San Diego"
                  width="1000"
                  height="500"
                ></iframe>
        </div>
    );
  };
}