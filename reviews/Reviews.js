import React, { useState } from "react";
import people from "./data";
import "./index.css";
const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { name, job, text, image } = people[index];

  const checkIndex = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };
  const prev = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  const after = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  const surprise = () => {
    let randomIndex = Math.floor(Math.random() * people.length);
    if (randomIndex === index) {
      randomIndex = index - 1;
    }
    setIndex(checkIndex(randomIndex));
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prev}>
          previous
        </button>
        <button className="next-btn" onClick={after}>
          next
        </button>
      </div>
      <button className="random-btn" onClick={surprise}>
        surprise
      </button>
    </article>
  );
};

export default Reviews;
