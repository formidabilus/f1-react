import React, { useEffect, useState } from "react";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import "./Card.styles.css";

const Card = ({ cards }) => {
  const [cardsList, setCardsList] = useState([]);

  useEffect(() => setCardsList(cards), []);

  const sortByPoints = (cards) =>
    cards.sort((pilot, otherPilot) => otherPilot.points - pilot.points);

  const addPoints = (index) => {
    const newCard = { ...cardsList[index] };
    let currentCardPoints = newCard.points;
    const newPoints = parseInt(currentCardPoints) + 1;
    newCard.points = newPoints;
    setCardsList([
      ...cardsList.slice(0, index),
      newCard,
      ...cardsList.slice(index + 1, cardsList.length),
    ]);
  };

  function changeBorderColorHex(index) {
    const currentCard = document.getElementById(`card-number-${index}`);
    currentCard.addEventListener("mouseenter", (e) => {
      const border = currentCard.getElementsByClassName("border").item(0);
      border.style.borderTopColor = cardsList[index].hex;
      border.style.borderRightColor = cardsList[index].hex;
    });
  }

  function changeBorderColorBlack(index) {
    const currentCard = document.getElementById(`card-number-${index}`);
    currentCard.addEventListener("mouseleave", (e) => {
      const border = currentCard.getElementsByClassName("border").item(0);
      border.style.borderTopColor = "black";
      border.style.borderRightColor = "black";
    });
  }

  return (
    <>
      {sortByPoints(cardsList).map(
        (
          { firstName, lastName, number, team, points, image, country, hex },
          index
        ) => (
          <article className="card" key={number} id={`card-number-${index}`}>
            <div
              className="border"
              onMouseEnter={() => changeBorderColorHex(index)}
              onMouseLeave={() => changeBorderColorBlack(index)}
            >
              <div className="card-header">
                <p className="rank">{index + 1}</p>
                <span className="points-and-button">
                  <button
                    type="button"
                    className="add-points"
                    onClick={() => addPoints(index)}
                  >
                    Add PTS
                  </button>
                  <p className="points-text">{points}</p>
                </span>
              </div>
              <hr />
              <div className="card-body">
                <div className="container-name">
                  <div className="name-and-line">
                    <span
                      className="line-color"
                      style={{ background: hex }}
                    ></span>
                    <span className="name">
                      <p className="firstName">{firstName}</p>
                      <p className="lastName">{lastName}</p>
                    </span>
                  </div>
                  <span className="country-flag">
                    {getUnicodeFlagIcon(country)}
                  </span>
                </div>
                <hr />
                <p className="team-name">{team}</p>
                <div className="photo-container">
                  <div className="photo-background"></div>
                  <img src={image} alt="pilot" className="photo" />
                  <p className="number">{number}</p>
                </div>
              </div>
            </div>
          </article>
        )
      )}
    </>
  );
};

export default Card;
