import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"
import { useFlip } from "./hooks";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [flipped, setFlipped] = useFlip();
  return (
    <img
      src={flipped ? front : back}
      alt="playing card"
      onClick={setFlipped}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
