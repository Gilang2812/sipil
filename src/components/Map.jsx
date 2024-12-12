import React, { useEffect, useRef } from 'react';
import { mapLoader } from '../utils/mapLoader';

export function Map() {
    const mapRef = useRef(null);

    useEffect(() => {
        async function loadMap() {
            if (mapRef.current) {

                new Loader({
                    apiKey: 'AIzaSyB8B04MTIk7abJDVESr6SUF6f3Hgt1DPAY',
                    version: 'weekly'
                }).load().then((google) => {
                    const map = new google.maps.Map(mapRef, {
                        center: {
                            lat: -6.200000,
                            lng: 106.816666,
                        },
                    })

               
                    
                }).catch((error) => {console.log(error)})
            }


        }

        loadMap();
    }, []);

    return <div ref={mapRef} style={{ height: '500px', width: '100%' }}></div>;
}

