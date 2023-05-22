class FavoriteRestaurantSearchPresenter {
    constructor({ favoriteRestaurants }) {
      this._listenToSearchRequestByUser();
      this._favoriteRestaurants = favoriteRestaurants;
    }
  
    _listenToSearchRequestByUser() {
      this._queryElement = document.getElementById('query');
      this._queryElement.addEventListener('change', (event) => {
        this._searchResto(event.target.value);
      });
    }

    async _searchResto(latestQuery) {
     this._latestQuery = latestQuery.trim();
      let foundRestaurants;
      if (this.latestQuery.length > 0) {
        foundRestaurants = await this._favoriteRestaurants.searchResto(this.latestQuery);
      } else {
        foundRestaurants = await this._favoriteRestaurants.getAllResto();
      }
      this._showFoundRestaurant(foundRestaurants);
    }

    _showFoundRestaurant(restaurants) {
      if (!restaurants) return;

      console.log(restaurants);
      const html = restaurants.reduce(
        (carry, restaurant) => carry.concat(`<li class="resto"><span class="resto__title">${restaurant.title || '-'}</span></li>`),
        '',
      );
      document.querySelector('.restaurants').innerHTML = html;
      document.getElementById('resto-search-container').dispatchEvent(new Event('restaurants:searched:updated'));
    };
  
    get latestQuery() {
      return this._latestQuery;
    }
  }
  
  export default FavoriteRestaurantSearchPresenter;