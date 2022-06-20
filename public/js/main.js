const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name')
const cityName = document.getElementById('cityname')
const getInfo = (event) => {
    event.preventDefault();
    let cityval = cityName.value;
    if (cityval === "") {
        city_name.innerText = "Plz write the name of city becore search"
    } else {
        try {
            let url =  `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=ae35a7ee8d6a1e7500f2c07b65d851fc`
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
        } catch {
            city_name.innerHTML = `plz enter the city name properly`
        }
    }
}

submitBtn.addEventListener('click', getInfo);