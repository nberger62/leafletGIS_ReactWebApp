import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'

export default class SimpleExample extends Component {
  state = {
    lat: 34.028927,
    lng: -84.198578,
    zoom: 15,
  };

  render() {
    console.log("map data", this.props.geoData);
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {this.props.geoData && (
          <GeoJSON
            key="rivers"
            data={this.props.geoData.features}
            onEachFeature={(feature, layer) => {
              const { properties: {Name}} = feature;
              if (!Name) {
                return;
              }
              layer.bindPopup(`<p>${Name}</p>`);
            }}
            style={() => ({
              color: "blue",
              weight: 3,
              fillColor: "#000",
              fillOpacity: 1,
            })}
          />
        )}
        <Marker position={position}>
          <Popup>
            Hydrology Network. <br /> Welcome to John's Creek, GA!
          </Popup>
        </Marker>
      </Map>
    );
  }
}