document.getElementById("demo").innerHTML = document.lastModified;

const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector(".navigation");

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

const listify = document.querySelector('.listify');
const gridify = document.querySelector(".gridify");
const directory = document.querySelector('.cards');

listify.addEventListener('click', () => {directory.classList.remove('cards'), directory.classList.add('list')});
gridify.addEventListener('click', () => {directory.classList.remove('list'), directory.classList.add('cards')});

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

const requestURL = 'json/directory.json';
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const directory = jsonObject['directory']; 
    for (let i = 0; i < directory.length; i++ ) {

        let card = document.createElement('section');
        let h2 = document.createElement('p');
        let add = document.createElement('span');
        let city = document.createElement('span');
        let img = document.createElement('img');
        let web = document.createElement('a');
        let phone = document.createElement('p');

        h2.textContent = directory[i].name;
        h2.setAttribute('class','title');
        add.textContent = directory[i].address + "\n";
        city.textContent = directory[i].city;
        img.setAttribute('src', directory[i].logo);
        img.setAttribute('alt', directory[i].name + "'s logo image");
        web.setAttribute('href', directory[i].website);
        web.textContent = 'Website';
        phone.textContent= directory[i].phone;
        
        card.appendChild(h2);
        card.appendChild(img);
        card.appendChild(add);
        card.appendChild(city);
        card.appendChild(phone);
        card.appendChild(web);
        
        document.querySelector('div.cards').appendChild(card);}});