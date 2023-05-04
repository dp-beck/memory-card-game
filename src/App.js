import React, { useState } from "react";

import absol from './assets/absol.png';
import articuno from './assets/articuno.png';
import bulbasaur from './assets/bulbasaur.png';
import butterfree from './assets/butterfree.png';
import chansey from './assets/chansey.png';
import dragonite from './assets/dragonite.png';
import flareon from './assets/flareon.png';
import meowth from './assets/meowth.png';
import pikachu from './assets/pikachu.png';
import piplup from './assets/piplup.png';
import turtwig from './assets/turtwig.png';
import vivillon from './assets/vivillon.png';

function App() {
  const [currentScore, setCurrentScore] = useState(0);

  const [bestScore, setBestScore] = useState(0);

  const [cards, setCards] = useState([
    {
      key: 1,
      name: "Absol",
      beenClicked: false,
      photo: absol,
    },
    {
      key: 2,
      name: "Articuno",
      beenClicked: false,
      photo: articuno,
    },
    {
      key: 3,
      name: "Bulbasaur",
      beenClicked: false,
      photo: bulbasaur,
    },
    {
      key: 4,
      name: "Butterfree",
      beenClicked: false,
      photo: butterfree,
    },
    {
      key: 5,
      name: "Chansey",
      beenClicked: false,
      photo: chansey,
    },
    {
      key: 6,
      name: "Dragonite",
      beenClicked: false,
      photo: dragonite,
    },
    {
      key: 7,
      name: "Flareon",
      beenClicked: false,
      photo: flareon,
    },
    {
      key: 8,
      name: "Meowth",
      beenClicked: false,
      photo: meowth,
    },
    {
      key: 9,
      name: "Pikachu",
      beenClicked: false,
      photo: pikachu,
    },
    {
      key: 10,
      name: "Piplup",
      beenClicked: false,
      photo: piplup,
    },
    {
      key: 11,
      name: "Turtwig",
      beenClicked: false,
      photo: turtwig,
    },
    {
      key: 12,
      name: "Vivillon",
      beenClicked: false,
      photo: vivillon,
    }
      ]);

  const hasBeenClicked = (e) => {
    return cards.find(element => element.key === +e.target.className).beenClicked;
  }

  const updateBeenClicked = (e) => {
    const currentCardIndex = cards.findIndex(card => card.key === +e.target.className);
    const updatedCard = {...cards[currentCardIndex], beenClicked: true};
    const newCards = [...cards];
    newCards[currentCardIndex] = updatedCard;     
    setCards(newCards);
  }

  const incrementScore = () => {
    setCurrentScore(currentScore + 1);
  };

  const randomizeOrder = () => {
    const newOrder = cards;
    for (let i = newOrder.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = newOrder[i];
        newOrder[i] = newOrder[j];
        newOrder[j] = temp;
    };
    setCards(newOrder);
    };
  
  const reset = () => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    };
    const resetCards = [...cards];
    resetCards.forEach(card => card.beenClicked = false);
    setCards(resetCards);
    setCurrentScore(0);
  };
  
  const update = (e) => {
    if (hasBeenClicked(e) === false) {
      randomizeOrder();
      incrementScore();
      updateBeenClicked(e);
    } else {
      reset();
    };
  };

  return (
    <div className="app">
      <header>
      <h1>Memory Card Game</h1>
        <p id="description">
          You get a point everytime you click an image that you have not clicked before.
          The game restarts if you click an image twice. Try to remember what you have clicked!
        </p>
        <div className="score">
          <p>Current Score: {currentScore}</p>
          <p>High Score: {bestScore} </p>
        </div>
      </header>
      <div id="gameDiv">
        {[cards.map(card => 
          <div className={card.key} onClick={update}>
            <img src={card.photo} className={card.key} alt={card.name}/>
            <p className={card.key}>{card.name}</p>
          </div>)]}
      </div>
      <footer>Daniel Beck - Copyright 2023</footer>
    </div>
    );
  }

export default App;
