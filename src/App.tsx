import React, { useState } from 'react'

import Card from './classes/Card'
import shuffle from './utils/shuffle'

function App (): JSX.Element {
  const [hand, setHand] = useState<Card[]>([])

  const handleDealClick = (): void => {
    const dealtCards: Card[] = []
    const deck: Card[] = []

    for (let num = 1; num <= 13; num++) {
      Card.suits.forEach(suit => {
        deck.push(new Card(suit, num))
      })
    }

    shuffle(deck)

    for (let i = 0; i < 5; i++) {
      const card: Card | undefined = deck.pop()
      if (card !== undefined) dealtCards.push(card)
    }

    setHand(dealtCards)
  }

  return (
    <div className="App">
      <button onClick={handleDealClick}>Deal</button>
      {hand.map((card: Card) => {
        return (
          <div key={card.id}>
            <p>{card.suit} {card.num}</p>
          </div>
        )
      })}
    </div>
  )
}

export default App
