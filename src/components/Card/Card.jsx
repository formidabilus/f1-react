import React from "react";
import "./Card.styles.css";

const Card = ({ cards }) => {
  const dataDescendentSortedByPoints = cards.sort(
    (pilotPoints, otherPilotPoints) =>
      otherPilotPoints.points - pilotPoints.points
  );
  return (
    <>
      {dataDescendentSortedByPoints.map(
        (
          { firstName, lastName, number, team, points, image, country, hex },
          index
        ) => (
          <article className="card" key={number}>
            <div className="border">
              <div className="card-header">
                <p className="rank">{index + 1}</p>
                <span className="points-and-button">
                  <button type="button" className="add-points">
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
