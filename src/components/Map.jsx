/* eslint-disable no-undef */

import { useEffect, useRef, useState } from 'react';
import { mapLoader, mapOptions, position } from '../utils/mapUtils';

export function Map() {
    const mapRef = useRef(null);
    const [wisata,setWisata]= useState(null)
    const initMap = async () => {
        const { Map } = await mapLoader.importLibrary('maps')
        const { AdvancedMarkerElement } = await mapLoader.importLibrary('marker')
        window.google = google
        let map = new Map(mapRef.current, mapOptions)

        let marker = new AdvancedMarkerElement({
            map,
            draggable: true,
            position, 
            title:'koto gadang'
        })
        marker.addListener('click',(e)=>{
            console.log(e)
        })

        map.data.addListener('click',(e)=>{
            console.log(e.feature.getProperty('NAMA'))
        })
         if(wisata){     
             map.data.addGeoJson(wisata)
        }  
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
        if(mapRef.current) initMap()
    }, [mapRef.current]);
  
    
    return <div ref={mapRef} className='size-64 bg-slate-500' style={{ height: '500px', width: '100%' }}></div>;
}

