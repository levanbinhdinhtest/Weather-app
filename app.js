let search = document.querySelector('.search');
let city = document.querySelector('.city');
let country = document.querySelector('.country');
let value = document.querySelector('.value');
let short_desc = document.querySelector('.short-desc');
let visibility = document.querySelector('.visibility span');
let windy = document.querySelector('.windy span');
let cloud = document.querySelector('.cloud span');
let time = document.querySelector('.time')
let wrapper = document.querySelector('.wrapper');
let temperature = document.querySelector('sup')


async function changeWeather(){
    let isLocation = search.value.trim();
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${isLocation}&appid=0fa4e12973d0f7509ab934c5c915e07f`

    let data = await fetch(apiURL).then(res=> res.json())

    if(data.cod ==200)
    {
        city.innerText = data.name;
        country.innerText = data.sys.country;
        visibility.innerText = data.visibility + 'm';
        windy.innerText = data.wind.speed + 'm/s'
        cloud.innerText = data.main.humidity + '%'
        value.innerText = Math.round(data.main.temp - 273.15 );
        short_desc.innerText = data.weather[0].main;
        time.innerText = new Date().toLocaleString('vi');
        console.log(data)
    }
    else{
        console.log('not found')
    }

}

search.addEventListener('keypress', function(e){
    if(e.code==='Enter'){
        changeWeather()
    }
})