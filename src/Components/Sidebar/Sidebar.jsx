import { Link } from "react-router-dom";

import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <div className="main">
        <div className="filter-bar">
          <div className="filter-head">
            <h3>
              <span>Home/</span>product
            </h3>
            <i className="fas fa-times fa-1x"></i>
          </div>
          <h4>Sort by</h4>
          <div className="sort">
            <div className="filter-by-size">
              <label>
                <input className="radio" type="radio" name="sort" />
                <span>Price- Low to High</span>
              </label>
              <label>
                <input className="radio" type="radio" name="sort" />
                <span>Price- High to Low</span>
              </label>
            </div>
          </div>
          <h4>Filter by price</h4>
          <div className="price-range-star">
            <p> 1 ⭐</p>
            <p> 2 ⭐</p>
            <p> 3 ⭐</p>
            <p> 4 ⭐</p>
            <p> 5 ⭐</p>
          </div>
          <div className="price-range">
            <input className="input" type="range" min="1" max="5" step="1" />
            <div className="range value"></div>
          </div>

          <h4>Filter by Brands</h4>
          <div className="size">
            <div className="filter-by-size">
              <label>
                <input type="checkbox" name="category-filter" />
                <span>Adidas</span>
              </label>
              <label>
                <input type="checkbox" name="category-filter" />
                <span>Air Jordan</span>
              </label>
              <label>
                <input type="checkbox" name="category-filter" />
                <span>Nike</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { Sidebar };
