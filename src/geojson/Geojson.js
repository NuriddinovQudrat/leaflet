import React, { useEffect, useState } from 'react'
import { MapContainer, Polygon, Popup, TileLayer } from 'react-leaflet'
import { tatu, tower } from "./geo";
import tatupng from '../images/tatu.jpg'
import towerpng from '../images/tower.jpg'
import './geo.css'

const Geojson = () => {
    const [coordinates, setCoordinates] = useState([]);
    const [coordinates2, setCoordinates2] = useState([]);

    useEffect(() => {
        setCoordinates(tatu.map((row) => [row[1], row[0]]));
        setCoordinates2(tower.map((row) => [row[1], row[0]]));
    }, []);
    return (
        <div style={{ width: 100 + "vw", height: 100 + "vh" }}>
            <MapContainer
                style={{ width: 100 + "%", height: 100 + "%" }}
                center={[41.34042256913154, 69.28543214759073]}
                zoom={15}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <Polygon positions={coordinates}>
                    <Popup>
                        <div className='one-pop'>
                            <div>
                                <img src={tatupng} alt='' />
                                <p>TATU</p>
                            </div>
                            <p>Tatu description</p>
                        </div>
                    </Popup>
                </Polygon>

                <Polygon positions={coordinates2}>
                    <Popup>
                        <div className='one-pop'>
                            <div>
                                <img src={towerpng} alt='' />
                                <p>Tower</p>
                            </div>
                            <p>Tower description</p>
                        </div>
                    </Popup>
                </Polygon>

            </MapContainer>
        </div>
    )
}

export default Geojson