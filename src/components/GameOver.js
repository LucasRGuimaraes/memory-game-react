import React, { Fragment } from 'react'

export default function GameOver(props) {
  return (
     props.show ?
          <div id="gameOver">
               <div>
                    Parabéns, você completou o jogo!
               </div>
               <div id="restart" onClick={props.onRestart}>
                    Jogar novamente
               </div>
          </div>
          :
          <Fragment />
  )
}
