const forecasturl ="https://api.openweathermap.org/data/2.5/onecall?lat=33.5186&lon=-86.8104&exclude=minutely,hourly,daily,alerts&units=imperial&appid=abfad67969303897fc586f3ebbb1fd3e"

fetch(forecasturl)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);

  let card = document.createElement("div");
  let temp = document.createElement('p');
  let cond = document.createElement('p');
  let icon = document.createElement('img');
  let humidity = document.createElement('p');

  temp.textContent = jsObject.current.temp.toFixed(0) + '\u00B0 F';
  cond.textContent = jsObject.current.weather[0].main;
  icon.setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.current.weather[0].icon + '.png');
  icon.setAttribute('alt', jsObject.current.weather[0].description);
  humidity.textContent = 'Humidity: ' + jsObject.current.humidity + "%";
  
  card.appendChild(temp);
  card.appendChild(cond);
  card.appendChild(icon);
  card.appendChild(humidity);

  document.querySelector('div.currweather').appendChild(card); })

const forecast ="https://api.openweathermap.org/data/2.5/onecall?lat=33.5186&lon=-86.8104&exclude=current,minutely,hourly,alerts&units=imperial&appid=abfad67969303897fc586f3ebbb1fd3e"

fetch(forecast)
.then((response) => response.json())
.then((jsObject) => {

  console.log(jsObject);
  for (let i = 1; i < 4; i++ ) {
    
  let d = jsObject.daily[i].dt;
  var a = new Date(d*1000);
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var dayofWeek = days[a.getDay()]

  let card = document.createElement("div");
  let dow = document.createElement('p');
  let temp = document.createElement('p');
  let cond = document.createElement('p');
  let icon = document.createElement('img');

  dow.textContent = dayofWeek.toString().substr(0, 3);
  dow.setAttribute('class','medium');
  temp.textContent = jsObject.daily[i].temp.day.toFixed(0) + '\u00B0 F';
  cond.textContent = jsObject.daily[i].weather[0].main;
  icon.setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.daily[i].weather[0].icon + '.png');
  icon.setAttribute('alt', jsObject.daily[i].weather[0].description);
  
  card.appendChild(dow);
  card.appendChild(temp);
  card.appendChild(icon);
  card.appendChild(cond);

  document.querySelector('div.forecast').appendChild(card); }})



  