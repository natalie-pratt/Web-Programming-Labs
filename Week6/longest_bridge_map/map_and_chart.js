
// Get center of US as focal point for map
let usCenterCoordinates = [38.967243, -98.77155]
let zoomLevel = 4 // Set zoom level to show entire US

// Create map using div, coordinates, and zoom level
let map = L.map('bridges-map').setView(usCenterCoordinates, zoomLevel)

// Add tiles for visual aid
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">' +
        'OpenStreetMap</a> contributors'
}).addTo(map);

// All needed data on each of the 5 bridges
let bridgeInfo = [

    {bridgeName: 'Verrazano-Narrows Bridge', // Name of bridge
        span: 1298.4, // Span in meters
        coordinates: [40.6066, -74.0447]}, // Coordinates of bridge
    {bridgeName: 'Golden Gate Bridge',
        span: 1280.2,
        coordinates: [37.8199, -122.4783]},
    {bridgeName: 'Mackinac Bridge',
        span: 1158.0,
        coordinates: [45.8174, -84.7278]},
    {bridgeName: 'George Washington Bridge',
        span: 1067.0,
        coordinates: [40.8517, -73.9527]},
    {bridgeName: 'Tacoma Narrows Bridge',
        span: 853.44,
        coordinates: [47.2690, -122.5517]},
]

// Get all information about bridges and create markers for them
bridgeInfo.forEach(function (key) {

    let bridgeName = key.bridgeName
    let bridgeSpan = key.span
    let bridgeCoordinates = key.coordinates

    let bridgeMarker = L.marker(bridgeCoordinates).bindPopup(bridgeName + '<br>Span (m): ' + bridgeSpan) // Create marker
    bridgeMarker.addTo(map) // Add new marker to map
})

// Use canvas from HTML file and create its context
let canvas = document.querySelector('#bridges-chart')
let cxt = canvas.getContext('2d')

// Empty arrays to define the labels and span data from the bridge info array
let chartLabels = []
let spanData = []
let barChartColors = ['#B0CB9A', '#A5C38B', '#8BC38D', '#8BC3A9', '#8BC1C3']

// Get bridge name and span from the array of objects named bridgeInfo and push
// the data into their respective arrays
bridgeInfo.forEach(function (key) {
    chartLabels.push(key.bridgeName)
    spanData.push(key.span)
})

// Create new bar chart, adding the chart labels and data
let chart = new Chart(cxt, {
    type: 'bar',
    data: {
        labels: chartLabels, // Labels = bridgeName key from bridgeInfo
        datasets: [ {
            label: "Bridge Span in Meters",
            data: spanData, // spanData = span key from bridgeInfo
            backgroundColor: barChartColors
        } ]
    }
})

chart.render() // Render (display) chart on canvas

// Below is the code that I used to try and add a custom icon.
// Can you tell me where I went wrong? My code works when I don't try to do this,
// but the markers don't show up when I use the custom ones.

// Icon made by Pixel perfect from www.flaticon.com

// let blackIcon = L.icon({
//     iconURL: 'bridge.png',
//     shadowUrl: 'bridge_shadow.png',
//     iconSize:     [38, 95],
//     shadowSize:   [50, 64],
//     iconAnchor:   [22, 94],
//     shadowAnchor: [4, 62],
//     popupAnchor:  [-3, -76]
// })
//
//
//
// bridgeInfo.forEach(function (key) {
//
//     let bridgeName = key.bridgeName
//     let bridgeSpan = key.span
//     let bridgeCoordinates = key.coordinates
//
//     let bridgeMarker = L.marker(bridgeCoordinates, {icon: blackIcon}).bindPopup(bridgeName + '<br>Span (m): ' + bridgeSpan)
//     bridgeMarker.addTo(map)
// })
