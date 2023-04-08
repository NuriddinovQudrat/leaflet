import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import "react-leaflet-markercluster/dist/styles.min.css"
import "leaflet/dist/images/marker-shadow.png";
import icon from '../constants'

export default function Markers() {
    return (
        <MapContainer
            className="markercluster-map"
            center={[41.30035606776697, 69.24165842035302]}
            zoom={12}
            maxZoom={18}
            style={{ width: '100%', height: '100vh' }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />

            <Marker position={[41.340454924920486, 69.28743720101868]} icon={icon}>
                <Popup>Popup for Marker</Popup>
                <Tooltip>TATU E-bino</Tooltip>
            </Marker>
            <Marker position={[41.34099462026896, 69.2867505555061]} icon={icon}>
                <Popup>Popup for Marker</Popup>
                <Tooltip>TATU A-bino</Tooltip>
            </Marker>
            <Marker position={[41.3414215402868, 69.28766250657749]} icon={icon}>
                <Popup>Popup for Marker</Popup>
                <Tooltip>TATU D-bino</Tooltip>
            </Marker>
            <Marker position={[41.35254734345331, 69.28864759380808]} icon={icon}>
                <Popup>Popup for Marker</Popup>
                <Tooltip>TATU F-bino</Tooltip>
            </Marker>
        </MapContainer>
    );
}
