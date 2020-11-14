import React, { Component } from "react";

export default class Project extends Component {
    render() {
        return (
            /// Just name the class the name of the project and change the div className to the same name
            <div className="project">
                <iframe
                    src="http://pns.maps.arcgis.com/apps/webappviewer/index.html?id=76107dc29697406ba282f7330dcbf324"
                    title="Whatever project you create for the course"
                    width="1200"
                    height="800"
                ></iframe>
            </div>
        );
    };
}