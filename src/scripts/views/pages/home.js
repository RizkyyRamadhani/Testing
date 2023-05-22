/* eslint-disable no-shadow */
import { createRestaurantItemTemplate } from '../templates/template';
import RestaurantDbSource from '../../data/restaurantdb-Source';

const Home = {
  async render() {
    return `
        <div class="hero">
            <div class="hero__inner">
            <h1 class="hero__title">Welcome To <span> Resto Apps </span></h1>
            <p class="hero__tagline">Come on, try the food here with a variety of dishes that have different characteristics and tastes</p>
            </div>
        </div>
        <div class="content">
        <div>
            <h2 class="content__heading" id="main" tabindex="0">Explore Restaurant</h2>
            <div id="restaurants" class="restaurants">
            </div>
        </div>
        `;
  },
  async afterRender() {
    const restaurant = await RestaurantDbSource.listRestaurant();
    const restaurantContainer = document.querySelector('#restaurants');
    restaurant.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },

};

export default Home;
