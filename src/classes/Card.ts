const numStregthMap: Record<number, number> = {
  1: 13,
  13: 12,
  12: 11,
  11: 10,
  10: 9,
  9: 8,
  8: 7,
  7: 6,
  6: 5,
  5: 4,
  4: 3,
  3: 2,
  2: 1
}

export default class Card {
  static suits: string[] = ['club', 'diamond', 'heart', 'spade']
  suit: string
  num: number
  strength: number
  id: number

  constructor (suit: string, num: number) {
    this.suit = suit
    this.num = num
    this.strength = numStregthMap[num]
    this.id = Card.suits.indexOf(suit) * num
  }
}
