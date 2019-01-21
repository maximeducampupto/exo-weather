let submit = document.getElementById('submitButton'),
    city_input = document.getElementById('city_input'),
    city = null;

submit.addEventListener('click', function(e){
    e.preventDefault();

    city = city_input.value;

    if (city.length === 0)
    {
        city = 'Paris';
        city_input.value = 'Paris';
    }

    let url = "../src/api_call.php",
        params = "city=" + city,
        results = null;
    let http = new XMLHttpRequest();

    http.open("GET", url+"?"+params, true);
    http.onreadystatechange = function()
    {
        if(http.readyState == 4 && http.status == 200) {
            results = JSON.parse(http.responseText);
            updateValues(results);
        }
    };
    http.send(null);
});

function updateValues(result)
{
    let bigTemp = document.getElementById('bigTemp'),
        tempMax = document.getElementById('tempMax'),
        tempMin = document.getElementById('tempMin'),
        pressure = document.getElementById('pressure'),
        wind = document.getElementById('wind'),
        humidity = document.getElementById('humidity'),
        lon = document.getElementById('lon'),
        lat = document.getElementById('lat');

    bigTemp.innerHTML = result.main.temp + '°';
    tempMax.innerHTML = result.main.temp_max;
    tempMin.innerHTML = result.main.temp_min;
    pressure.innerHTML = result.main.pressure;
    wind.innerHTML = result.wind.speed;
    humidity.innerHTML = result.main.humidity;
    lon.innerHTML = "Longitude: " + result.coord.lon;
    lat.innerHTML = "Latitude: " + result.coord.lat;
}
