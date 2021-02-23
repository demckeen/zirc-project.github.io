
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