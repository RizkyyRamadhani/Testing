import FavoriteRestaurantSearchPresenter from '../src/scripts/views/pages/liked-movies/favorite-restaurant-search-presenter';
import FavoriteRestaurantIdb from '../src/scripts/data/favorite-resto-idb';

describe('Searching Restaurants', () => {
    let presenter;
    let favoriteRestaurants;
  
    const searchResto = (query) => {
      const queryElement = document.getElementById('query');
      queryElement.value = query;
      queryElement.dispatchEvent(new Event('change'));
    };
    const setRestoSearchContainer = () => {
        document.body.innerHTML = `
        <div id="resto-search-container">
            <input id="query" type="text">
            <div class="resto-result-container">
                <ul class="restaurants">
                </ul>
            </div>
        </div>
        `;
    };
    const constructPresenter = () => {
    favoriteRestaurants = spyOnAllFunctions(FavoriteMovieIdb);
    presenter = new FavoriteRestaurantSearchPresenter({
        favoriteRestaurants,
    });
    };

    beforeEach(() => {
        setRestoSearchContainer();
        constructPresenter();
    });

    describe('When query is not empty', () => {
        it('should be able to capture the query typed by the user', () => {
        searchResto('restaurant a');
        expect(presenter.latestQuery)
            .toEqual('restaurant a');
    });
    it('should ask the model to search for restaurants', () => {
        searchResto('restaurant a');
        expect(favoriteRestaurants.searchResto)
            .toHaveBeenCalledWith('restaurant a');
    });
    it('should show the found restaurants', () => {
        presenter._showFoundRestaurant([{ id: 1 }]);
        expect(document.querySelectorAll('.resto').length)
            .toEqual(1);
        presenter._showFoundRestaurant([{ id: 1, title: 'Satu' }, { id: 2, title: 'Dua' }]);
        expect(document.querySelectorAll('.resto').length)
            .toEqual(2);
    });
    it('should show the name of the found restaurants', () => {
        presenter._showFoundRestaurant([{ id: 1, title: 'Satu' }]);
        expect(document.querySelectorAll('.resto__title').item(0).textContent)
            .toEqual('Satu');
    });
    it('should show the title of the found restaurants', () => {
        presenter._showFoundRestaurant([{
            id: 1,
            title: 'Satu',
        }]);
        expect(document.querySelectorAll('.resto__title').item(0).textContent)
            .toEqual('Satu');
        presenter._showFoundRestaurant(
            [{
                id: 1,
                title: 'Satu',
            }, {
                id: 2,
                title: 'Dua',
            }],
        );
        const restoTitles = document.querySelectorAll('.resto__title');
        expect(restoTitles.item(0).textContent).toEqual('Satu');
        expect(restoTitles.item(1).textContent).toEqual('Dua');
    });
    it ('should show - for found resto without name', () => {
        expect(document.querySelectorAll('.resto__title').item(0).textContent)
            .toEqual('-');
    });

    it('should show the restaurants found by Favorite Restaurants', (done) => {
        document.getElementById('resto-search-container')
          .addEventListener('restaurants:searched:updated', () => {
            expect(document.querySelectorAll('.resto').length).toEqual(3);
            done();
          });
    
        FavoriteRestaurantIdb.searchResto.withArgs('restaurant a').and.returnValues([
          { id: 111, title: 'restaurant abc' },
          { id: 222, title: 'ada juga restaurant abcde' },
          { id: 333, title: 'ini juga boleh restaurant a' },
        ]);
    
        searchResto('restaurant a');
      });
      it('should show the name of the restaurants found by Favorite Restaurants', (done) => {
        document.getElementById('resto-search-container').addEventListener('restaurants:searched:updated', () => {
          const restoTitles = document.querySelectorAll('.resto__title');
          expect(restoTitles.item(0).textContent).toEqual('restaurant abc');
          expect(restoTitles.item(1).textContent).toEqual('ada juga restaurant abcde');
          expect(restoTitles.item(2).textContent).toEqual('ini juga boleh restaurant a');
    
          done();
        });
    
        FavoriteRestaurantIdb.searchResto.withArgs('restaurant a').and.returnValues([
          { id: 111, title: 'restaurant abc' },
          { id: 222, title: 'ada juga restaurant abcde' },
          { id: 333, title: 'ini juga boleh restaurant a' },
        ]);
    
        searchResto('restaurant a');
      });
    });
        describe('When query is empty', () => {
        it('should capture the query as empty', () => {
            searchResto(' ');

            expect(presenter.latestQuery.length).toEqual(0);

            searchResto('    ');
            expect(presenter.latestQuery.length).toEqual(0);

            searchResto('');
            expect(presenter.latestQuery.length).toEqual(0);

            searchResto('\t');
            expect(presenter.latestQuery.length).toEqual(0);
        });

        it('should show all favorite restaurants', () => {
            searchResto('    ');

            expect(favoriteRestaurants.getAllResto)
                .toHaveBeenCalled();
        });
    });
});