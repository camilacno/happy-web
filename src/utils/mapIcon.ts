import Leaflet from 'leaflet';

import mapMarkerImg from '../images/icon.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 68],
  iconAnchor: [29, 68], // para que o ponto do mapa seja representado pelo
  // pointer do ícone, e não o centro dele
  popupAnchor: [170, 2],
});

export default mapIcon;
