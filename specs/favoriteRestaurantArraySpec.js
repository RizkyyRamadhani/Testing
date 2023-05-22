import { itActsAsFavoriteRestaurantModel } from "./contract/favoriteRestaurantContract";

let favoriteRestaurant = [];

const FavoriteRestaurantArray = {

  getResto(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurant.find((restaurant) => restaurant.id === id);
  },

  getAllResto() {
    return favoriteRestaurant;
  },

  putResto(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    if (this.getResto(restaurant.id)) {
      return;
    }
    favoriteRestaurant.push(restaurant);
  },

  deleteResto(id) {
    favoriteRestaurant = favoriteRestaurant.filter((restaurant) => restaurant.id !== id);
  },
};

describe('Favorite restaurant Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestaurant = []);

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});