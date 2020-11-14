import React from 'react';
import { useState, useEffect } from 'react';
import { loadModules } from 'esri-loader';
import { Scene } from '@esri/react-arcgis';

const BermudaTriangle = (props) => {

    const [basemapGallery, setBasemapGallery] = useState(null);
    useEffect(() => {

        loadModules(["esri/widgets/BasemapGallery"]).then(([BasemapGallery]) => {
            // Load the basemaps for your scene
            const basemapGallery = new BasemapGallery({
                view: props.view
            });

            // Add the widget to the top-right corner of the view
            props.view.ui.add(basemapGallery, {
                position: "top-right"
            });
            setBasemapGallery(basemapGallery)
        }).catch((err) => console.error(err));

        return function cleanup() {
            props.view.ui.remove(basemapGallery);
        };
    }, []);

    return null;

}

export default (props) => (
    <Scene
        style={{ width: '100vw', height: '100vh' }}
        mapProperties={{ basemap: 'satellite' }}
        viewProperties={{
            center: [-84.198578, 34.028927],
            zoom: 15
        }}
    >
        <BermudaTriangle />
    </Scene>
)