import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import data from '../public/data/DATA.json';


const getRestaurant = (data) => {
  data.restaurants.forEach(restaurant => {
      const restaurantItem = document.querySelector('.posts');
      restaurantItem.innerHTML += `
        <article tabindex="0" class="post-item">
          <img
            tabindex="0"
            class="post-item_thumbnail"
            src="${restaurant.pictureId}" alt="${restaurant.name}"
          />
          <div class="post-item_content">
            <p tabindex="0" class="post-item_rating">Rating: ${restaurant.rating}</p>
            <h1 tabindex="0" class="post-item_title">${restaurant.name}</h1>
            <p tabindex="0" class="post-item_description">${restaurant.description}</p>
            <p tabindex="0" class="post-item_city">Location: ${restaurant.city}</p>
          </div>
        </article>
      `;
  })
}
getRestaurant(data);


const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', function (event) {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', function () {
  drawer.classList.remove('open');
});

main.addEventListener('click', function () {
  drawer.classList.remove('open');
});