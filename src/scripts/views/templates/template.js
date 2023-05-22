import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <div class = "information" tabindex="0">
    <img class="restaurant-poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous"/>
    <div class = "restaurant-info">
      <h2 class="restaurant-title">${restaurant.name}</h2>
      <h3 >Description</h3>
      <p>${restaurant.description}</p>
      <h3>City</h3>
      <p>${restaurant.city}</p>
      <h3>Address</h3>
      <p>${restaurant.address}</p>
        <div class = "menu">
          <div class="menu2">
            <h3 class="menu-title">Food menu</h3>
              <ol>
              ${restaurant?.menus.foods.map((food) => `
                  <li>${food.name}</li>
                `).join('')}
              </ol>
          </div>
          <div class = "menu2">
            <h3 class="menu-title">Drinks menu</h3>
              <ol>
              ${restaurant?.menus.drinks.map((drink) => `
                  <li>${drink.name}</li>
                `).join('')}
              </ol>
          </div>        
        </div>
    </div>
    </div>  
    <h3 class="review-title" tabindex="0">Customer Reviews</h3>
      <div class = "categories" tabindex="0">
          ${restaurant?.customerReviews.map((review) => `
            <div class="review">
                <div class="review-item">  
                <h3>${review.name}</h3>     
                </div>
                <div class="review-item">
                <h4>${review.review}</h4>
                </div>
                <div class="review-item">
                <p>${review.date}</p>
                </div>   
            </div>
            `).join('')}
      </div>   
    `;

const createRestaurantItemTemplate = (restaurant) => `
    <div class="resto-item" tabindex="0" >
    <div class="resto-item__header">
      <img class="resto-item__header__poster" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous">
      <div class="resto-item__header__rating">
        <p>⭐️<span class="resto-item__header__rating__score">${restaurant.rating}</span></p>
      </div>
    </div>
    <div class="resto-item__content">
      <h3><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h3>
      <p>${restaurant.description}</p>
    </div>
  </div>

    `;

const createLikeRestaurantButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
  `;

const createUnlikeRestaurantButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">
      <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
  `;
export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
