
/*rating adjust*/
function adjustRating(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}

document.getElementById("year").innerHTML = new Date().getFullYear();
const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

// To solve the mid resizing issue with responsive class on
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')}

//current day of week
(function() {
    var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    Date.prototype.getMonthName = function() {
        return months[ this.getMonth() ];
    };
    Date.prototype.getDayName = function() {
        return days[ this.getDay() ];
    };
})();
var now = new Date();
var day = now.getDayName();
var month = now.getMonthName();
var date = new Date().toLocaleDateString()
document.getElementById("dayofweek").innerHTML = day + ", " + now.getDate() + " " + month + " " + now.getFullYear();

var dow = new Date().getDay();

if (dow == 5) {
    document.getElementById("banner").style.display = "block";
}
    else {document.getElementById("banner").style.display = "none";};
 
function initMap() {
        // The location of Preston, ID
    const preston = { lat: 42.0963133, lng: -111.8766173 };
        // The map, centered at Preston, ID
    const map = new google.maps.Map(document.getElementById("mapimg"), {
          zoom: 9,
          center: preston,
        });
        // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
          position: preston,
          map: map,
        })};

        let imagesToLoad = document.querySelectorAll('img[data-src]');

        const loadImages = (image) => {
          image.setAttribute('src', image.getAttribute('data-src'));
          image.onload = () => {image.removeAttribute('data-src');};
        };
        
        if('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((items, observer) => {
              items.forEach((item) => {
                if(item.isIntersecting) {
                  loadImages(item.target);
                  observer.unobserve(item.target);
                }
              });
            });
            imagesToLoad.forEach((img) => {
              observer.observe(img);
            });
          } else {
            imagesToLoad.forEach((img) => {
              loadImages(img);
            });
          }

/* Weather API */
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=cbf6f180a0de7965e7eda02d85df55c9";
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

  const forecasturl = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=cbf6f180a0de7965e7eda02d85df55c9";
  fetch(forecasturl)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    for (let i = 1; i < jsObject.list.length; i++ ) {
    
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
