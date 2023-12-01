import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import styled from "styled-components";

const StyledMapContainer = styled(MapContainer)`
  height: 50vh;
  width: 100%;
  margin-bottom: 8rem;
  @media screen and (max-width: 1100px) {
  }
`;

function Map({ position, popup = "" }) {
  return (
    <div id="map" style={{ height: "100%", width: "100%" }}>
      <StyledMapContainer center={position} zoom={4} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}"
        />
        <Marker position={position}>
          <Popup>{popup}</Popup>
        </Marker>
      </StyledMapContainer>
    </div>
  );
}

export default Map;
