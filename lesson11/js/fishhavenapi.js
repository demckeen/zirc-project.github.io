/* Weather API */
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&appid=cbf6f180a0de7965e7eda02d85df55c9";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let temp = parseInt((jsObject.main.temp - 273.15) * (9/5) + 32);
    let speed = jsObject.wind.speed;

    document.getElementById('degrees').textContent = temp;
    document.getElementById('wind').textContent = speed;
    document.getElementById('weather').textContent = jsObject.weather[0].main;
    document.getElementById('humidity').textContent = jsObject.main.humidity;

    if ((temp < 50) && (speed > 3)) {
      var wc = 35.74 + (0.6215 * temp) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));
      document.getElementById("windchill").innerHTML = parseInt(wc);
  }
  
  else {document.getElementById("windchill").innerHTML = temp};


  });

  const forecasturl = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=cbf6f180a0de7965e7eda02d85df55c9";
  fetch(forecasturl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    for (let i = 0; i < jsObject.list.length; i++ ) {
    
      let sixo = jsObject.list[i].dt_txt.substr(11, 8);

    if (sixo == "18:00:00")  {

      let d = new Date(jsObject.list[i].dt_txt);
    
      let card = document.createElement('section');
      let date = document.createElement('p');
      let icon = document.createElement('img');
      let temp = document.createElement('p');

      date.textContent = d.toString().substr(0, 3);
      date.setAttribute('class', 'foredow');
      icon.setAttribute('src', 'https://openweathermap.org/img/w/' + jsObject.list[i].weather[0].icon + '.png');
      icon.setAttribute('alt', jsObject.list[i].weather[0].main);
      temp.textContent = parseInt((jsObject.list[i].main.temp - 273.15) * (9/5) + 32);
      temp.setAttribute('class', 'foretemp');

      card.appendChild(date);
      card.appendChild(icon);
      card.appendChild(temp);

      document.querySelector('div.forecast').appendChild(card);
    }

    }

  });

   /* JSON for Town Events */
const eventsURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(eventsURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns']; 
    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == "Fish Haven") {

        let list = document.createElement('section');
        let events = document.createElement('p');
        let ev1 = document.createElement('p');
        let ev2 = document.createElement('p');
        let ev3 = document.createElement('p');

        events.textContent = 'Upcoming Fish Haven Events';
        ev1.textContent = towns[i].events[0];
        ev2.textContent = towns[i].events[1];
        ev3.textContent = towns[i].events[2];

        
        list.appendChild(events);
        list.appendChild(ev1);
        list.appendChild(ev2);
        list.appendChild(ev3);
        events.setAttribute('class','title');
        
        document.querySelector('div.events').appendChild(list);}
  }});
