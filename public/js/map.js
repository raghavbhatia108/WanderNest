mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: coordinates,
    zoom: 10
});

// Navigation controls
map.addControl(new mapboxgl.NavigationControl(), 'top-right');

// Custom marker with popup
const popup = new mapboxgl.Popup({ offset: 25, closeButton: false })
    .setHTML('<p style="margin:0;font-weight:700;font-size:0.85rem;">📍 This listing</p>');

new mapboxgl.Marker({ color: '#7c3aed' })
    .setLngLat(coordinates)
    .setPopup(popup)
    .addTo(map);
