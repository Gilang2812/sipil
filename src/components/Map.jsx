/* eslint-disable no-undef */

import { useEffect, useRef, useState } from 'react';
import { mapLoader, mapOptions, position } from '../utils/mapUtils';

export function Map() {
    const mapRef = useRef(null);
    const [wisata,setWisata]= useState(null)
    const [loading,setLoading]=  useState(false);
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
        setLoading(true)
        const fetchData =async ()=>{
            const response = await fetch('/maps/objek_wisata.geojson')
            const data = await response.json()
            setWisata(data)
            setLoading(false)
        }
        fetchData()
    }, [])
  
    useEffect(() => {
        if(mapRef.current &&!loading) {initMap()}
        console.log(loading)
    }, [mapRef.current,wisata,loading]);
  
    
    return <div ref={mapRef} className='relative rounded-xl size-64 bg-slate-500' style={{ height: '500px', width: '100%' }}>
        <div className='bg-red-200  size-40 absolute top-0 right-0'>

        </div>
    </div>;
}

