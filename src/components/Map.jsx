/* eslint-disable no-undef */

import { useEffect, useRef, useState } from 'react';
import { mapLoader, mapOptions, position } from '../utils/mapUtils';

export function Map() {


    const mapRef = useRef(null);
    const [wisata,setWisata]= useState(null)
    const initMap = async () => {
        const { Map } = await mapLoader.importLibrary('maps')
        window.google = google
        let map = new Map(mapRef.current, mapOptions)

        let marker = new google.maps.Marker({
            map,
            draggable: true,
            position,
            animation: google.maps.Animation.DROP,
            title:'koto gadang'
        })
        marker.addListener('click',(e)=>{
            console.log(e)
        })

        map.data.addListener('click',(e)=>{
            console.log(e.feature.getProperty('NAMA'))
        })
        wisata&& map.data.addGeoJson(wisata)
    }
    useEffect(() => {
        const fetchData =async ()=>{
            const response = await fetch('/maps/objek_wisata.geojson')
            const data = await response.json()
            setWisata(data)
        }
        fetchData()
    }, [wisata])
  
    useEffect(() => {
        initMap()
    }, []);
  
    if (!wisata)return <div>loading...</div>
    return <div ref={mapRef} className='size-64 bg-slate-500' style={{ height: '500px', width: '100%' }}></div>;
}

