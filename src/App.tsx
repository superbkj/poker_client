import React, { useEffect, useState } from 'react'

import Card from './classes/Card'
import shuffle from './utils/shuffle'

const deck: Card[] = []

function App (): JSX.Element {
  const [communityCards, setCommunityCards] = useState<Card[]>([])
  const [startingHand, setStartingHand] = useState<Card[]>([])
  // const [hand, setHand] = useState<Card[]>([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (startingHand.length > 0) {
      //
    }
  }, [startingHand, communityCards])

  const handlePreFlopClick = (): void => {
    const dealtCards: Card[] = []
    // const deck: Card[] = []

    for (let num = 1; num <= 13; num++) {
      Card.suits.forEach(suit => {
        deck.push(new Card(suit, num))
      })
    }

    shuffle(deck)

    for (let i = 0; i < 2; i++) {
      const card: Card | undefined = deck.pop()
      if (card !== undefined) dealtCards.push(card)
    }

    setStartingHand(dealtCards)
  }

  const handleFlopClick = (): void => {
    const dealtCards: Card[] = []

    for (let i = 0; i < 3; i++) {
      const card: Card | undefined = deck.pop()
      if (card !== undefined) dealtCards.push(card)
    }

    setCommunityCards(dealtCards)
  }

  const handleTurnClick = (): void => {
    const card: Card | undefined = deck.pop()
    const newCommunityCards = [...communityCards]
    if (card !== undefined) {
      newCommunityCards.push(card)
    }

    setCommunityCards(newCommunityCards)
  }

  const handleRiverClick = (): void => {
    const card: Card | undefined = deck.pop()
    const newCommunityCards = [...communityCards]
    if (card !== undefined) {
      newCommunityCards.push(card)
    }

    setCommunityCards(newCommunityCards)
  }

  const handleHelloClick = async (): Promise<void> => {
    const res = await fetch('/api/hello')
    const data = await res.json()
    setMessage(data.message)
    /*
    fetch('/api/hello')
      .then(async res => res.json())
      .then(data => {
        setMessage(data)
      })
      .catch(err => {
        console.error(err)
      })
    */
  }

  return (
    <div className="App">
      <button onClick={handleHelloClick}>Hello</button>
      <button onClick={handlePreFlopClick}>1. プリフロップ</button>
      <button onClick={handleFlopClick}>2. フロップ</button>
      <button onClick={handleTurnClick}>3. ターン</button>
      <button onClick={handleRiverClick}>4. リバー</button>

      <h3>Community</h3>
      <p>{message}</p>

      <h3>Community</h3>
      {communityCards.map((card: Card) => {
        return (
          <div key={card.id}>
            <p>{card.suit} {card.num}</p>
          </div>
        )
      })}

      <h3>Your Hand</h3>
      {startingHand.map((card: Card) => {
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
