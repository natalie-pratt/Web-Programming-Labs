
let url = 'https://api.wheretheiss.at/v1/satellites/25544'

let issLat = document.querySelector('#iss-lat')
let issLong = document.querySelector('#iss-long')
let currentTime = document.querySelector('#current-time')

let update = 10000
let maxFailedAttempts = 3

let map = L.map('iss-map').setView([0, 0], 1)
let issMarker
let icon = L.icon({
    iconUrl: 'iss_icon.png',
    iconSize: [50, 50],
    iconAnchor: [25, 25]
})

// Add tiles for visual aid
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">' +
        'OpenStreetMap</a> contributors'
}).addTo(map);

iss(maxFailedAttempts)

function iss(attempts) {

    if (attempts <= 0) {
        alert('Error - failed to connect to server after several attempts.')
        return
    }

    fetch(url).then( (res) => {
        return res.json()
    }).then( (issData) => {
        console.log(issData)
        let lat = issData.latitude
        let long = issData.longitude
        issLat.innerHTML = lat
        issLong.innerHTML = long

        if (!issMarker) {
            issMarker= L.marker([lat, long], {icon: icon}).addTo(map)
        } else {
            issMarker.setLatLng([lat, long], {icon: icon})
        }
        currentTime.innerHTML = Date()

    }).catch( (err) => {
        console.log('ERROR', err)
        attempts--
    }).finally( () => {
        setTimeout(iss, update, attempts)
    })
}




