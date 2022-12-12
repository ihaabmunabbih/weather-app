import React from 'react';
import GoogleMapReact from 'google-map-react';
import {useLocation} from 'react-router-dom';

import Marker from './Marker';

const key = 'AIzaSyAo-tFjYwHRZgTCrCm-7HG-EnNp4DI6iPg';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Maps(props) {
    const location  = useLocation();
    let loc         = location.state.location;
    let aqi         = location.state.current;
    const defaultProps = {
        center: {
          lat: loc.lat,
          lng: loc.lon
        },
        zoom: 14
    };

    return (
        <div>
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: key }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <Marker
                        lat={loc.lat}
                        lng={loc.lon}
                        aqi={aqi}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        </div>
    )
}
