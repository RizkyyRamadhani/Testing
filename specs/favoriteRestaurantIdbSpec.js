import { itActsAsFavoriteRestaurantModel } from "./contract/favoriteRestaurantContract";
import FavoriteRestaurantIdb from "../src/scripts/data/favorite-resto-idb";

describe('Favorite Movie Idb Contract Test Implementation', () => {
    afterEach(async () => {
        (await FavoriteRestaurantIdb.getAllResto()).forEach(async (restaurant) => {
            await FavoriteRestaurantIdb.deleteResto(restaurant.id);
        });
    });

    itActsAsFavoriteRestaurantModel(FavoriteRestaurantIdb);
});