function onGeoOK(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
}

function onGeoError() {
    alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);