import React from 'react';
import { loadModules } from 'esri-loader';
import './webmapview.css';
export class WebMapView extends React.Component {
    constructor(props) {
        super(props);
        this.mapRef = React.createRef();
    }

    componentDidMount() {
        // lazy load the required ArcGIS API for JavaScript modules and CSS
        loadModules(['esri/Map', 'esri/views/MapView'], { css: true })
            .then(([ArcGISMap, MapView]) => {
                const map = new ArcGISMap({
                    basemap: 'satellite'
                });

                this.view = new MapView({
                    container: this.mapRef.current,
                    map: map,
                    center: [-84.198578, 34.028927],
                    zoom: 15
                });
            });
    }

    componentWillUnmount() {
        if (this.view) {
            // destroy the map view
            this.view.container = null;
        }
    }

    render() {
        return (
            <div className="webmap" ref={this.mapRef} />
        );
    }
}