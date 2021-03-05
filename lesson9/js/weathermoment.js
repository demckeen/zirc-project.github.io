
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

/* JSON for Town Info */
const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns']; 
    for (let i = 0; i < towns.length; i++ ) {
      if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven") {

        let card = document.createElement('section');
        let info = document.createElement('div');
        let imgbox = document.createElement('div');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let img = document.createElement('img');

        h2.textContent = towns[i].name; 
        h3.textContent = towns[i].motto;
        p.textContent = 'Year Founded: ' + towns[i].yearFounded;
        p1.textContent = 'Population: ' + towns[i].currentPopulation;
        p2.textContent = 'Annual Rain Fall: ' + parseInt(towns[i].averageRainfall) + '"';
        img.setAttribute('src', 'images/' + towns[i].photo);
        img.setAttribute('alt', ('Image of the town of ' + towns[i].name));
        info.setAttribute('class', 'info');
        imgbox.setAttribute('class','imgbox');
        
        card.appendChild(info);
        card.appendChild(imgbox);
        info.appendChild(h2);
        info.appendChild(h3);
        info.appendChild(p);
        info.appendChild(p1);
        info.appendChild(p2);
        imgbox.appendChild(img);
        
        document.querySelector('div.cards').appendChild(card);}
  }});