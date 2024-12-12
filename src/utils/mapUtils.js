import { Loader } from "@googlemaps/js-api-loader";

export const mapLoader = new Loader({
    apiKey: 'AIzaSyB8B04MTIk7abJDVESr6SUF6f3Hgt1DPAY',
    version: 'weekly'
})
export const position = { lat: -0.316691, lng: 100.343548 }

export const mapOptions = {
    center: position,
    zoom: 13,
    mapTypeId: 'satellite',
    mapId: 'ma koto gadang'
}
