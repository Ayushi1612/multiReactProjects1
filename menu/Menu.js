import React from "react";
import "./index.css";
const Menu = ({ data }) => {
  return (
    <div className="section-center">
      {data.map((items) => {
        const { id, title, category, price, img, desc } = items;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo"></img>
            <div className="item-info">
              <header>
                <h4>{title}</h4>

                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
