import React, { useEffect, useState } from "react";
import "./Card.styles.css";

const Card = ({ cards }) => {
  //const [isHovering, setIsHovering] = useState(false);
  const [cardsList, setCardsList] = useState([]);

  const sortByPoints = (cards) =>
    cards.sort((pilot, otherPilot) => otherPilot.points - pilot.points);

  console.log(cardsList);
  console.log(sortByPoints(cardsList));

  useEffect(() => setCardsList(cards), []);

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

  //   const handleMouseEnter = () => {
  //     setIsHovering(true);
  //   };

  //   const handleMouseLeave = () => {
  //     setIsHovering(false);
  //   };
  return (
    <>
      {sortByPoints(cardsList).map(
        (
          { firstName, lastName, number, team, points, image, country, hex },
          index
        ) => (
          <article className="card" key={number}>
            <div
              className="border"
              //   onMouseEnter={handleMouseEnter}
              //   onMouseLeave={handleMouseLeave}
              //   style={{
              //     borderTopColor: isHovering ? hex : "",
              //     borderRightColor: isHovering ? hex : "",
              //   }}
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
                  <p className="country-flag">{country}</p>
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
