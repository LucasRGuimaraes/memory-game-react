import React, { useState, useEffect } from "react";
import GameOver from "./components/GameOver";
import GameBoard from "./components/GameBoard";
import game from "./game/game"

export default function MemoryGame() {

     const [gameOver, setGameOver] = useState(false)
     const [cards, setCards] = useState([])

     useEffect(() => {
          setCards(game.createCardsFromTechs())
       }, [])
     
     function restart() {
          game.clearCards()
          setCards(game.createCardsFromTechs())
          setGameOver(false)
     }

     function flipCard(card) {
          game.flipCard (card.id, () => {
               // GameOverCallBack
               setGameOver(true)
          } , () => {
               // NoMatchCallBack
               setCards([...game.cards])
          })
          setCards([...game.cards])
     }

     return (
          <div>
               <GameBoard flipCard={flipCard}  cards={cards}></GameBoard>
               <GameOver show={gameOver} onRestart={restart}></GameOver>
          </div>
     )
}