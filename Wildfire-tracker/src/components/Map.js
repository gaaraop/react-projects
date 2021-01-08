import { useState } from 'react' 
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfo from './LocationInfo'


const Map = ({ eventData, center,zoom}) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map ( ev => {
        if(ev.categories[0].id === 8){
            return <LocationMarker lat={ev.geometries[0].coordinates[1]} lng={ev.geometries[0].coordinates[0]}
            onClick={() => setLocationInfo({ id: ev.id, title:ev.title })} />
        }
        return null;
    })
        
    return (
        <div className="map">
            <GoogleMapReact
            bootstrapURLKeys = {{ key: 'AIzaSyDSJUyOnN4rh1CBdn8-uTrWufYzS1DWuWs'}}
            defaultCenter={center}
            defaultZoom={ zoom}>
                {markers}

            </GoogleMapReact>
            { locationInfo && <LocationInfo info={locationInfo} /> }
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 20.2961,
        lng: 85.8245
    },
    zoom: 6
}


export default Map;