import React, { useState, useEffect } from 'react'
import './binary-insertion-sort-viz.css'
import shuffle from './shuffle.js'

const LIST_ITEM_TYPE = {
  numbers: "numbers",
  letters: "letters",
}

const ALPHABET_LIST = "abcdefghijklmnopqrstuvwxyz".split('')
const NUMBERS_LIST = [ 23, 10, 5, 23, 76, 91, 29, 3, 8 ]

// This injects a pause inbetween (what are otherwise very fast) algorithm
// operations, so that a human can conciously walk-through with the algorithm.
const ALGO_SLOW_MO_INTERVAL = 1000 // in milliseconds

function BisVx(props) {
  const { children, ...otherProps } = props

  // Pieces of state that have to do with the interactivity component
  const [listItemType, setListItemType] = useState(LIST_ITEM_TYPE.numbers)

  // All the pieces of state for BIS
  const [leftPointer, setLeftPointer] = useState()
  const [rightPointer, setRightPointer] = useState()
  const [middlePointer, setMiddlePointer] = useState()
  const [unsortedSublistIndexInclusive, setUnsortedSublistIndexInclusive] = useState(0)
  const [list, setList] = useState(NUMBERS_LIST)

  function sortDisplayList() {
    const listCopy = [ ...list ]
    listCopy.sort((a,b) => a - b) // ascending
    setList(listCopy)
  }
  function shuffleDisplayList() {
    const listCopy = [ ...list ]
    shuffle(listCopy)
    setList(listCopy)
  }


  return (
    <div>
      <ListDisplay aList={list}/>
      <ActionsMenu/>
    </div>
    
  )

  ///////////////
  //  HELPERS  //
  ///////////////

  function ActionsMenu(props) {
    const { children, TODO, ...otherProps } = props
    return (
      <div>
        <SortButton/>
        <ShuffleButton action={shuffleDisplayList}/>
        <StepButton/>
      </div>
    )
  }
  function SortButton() { return <button onClick={sortDisplayList}>Sort</button> }
  function ShuffleButton() { return <button onClick={shuffleDisplayList}>Shuffle</button> }
  function StepButton() { return <button>Step</button> }

}

function ListDisplay(props) {
  const { 
    aList, 
    ...otherProps 
  } = props


  return (
    <div className="list-item-card-grid" {...otherProps} >
      { aList.map( (item, i) => (
        <div className="normal-list-item-card" >{item}</div>
      ))}
    </div>
  )
}

function ListDisplayStylingExample() {
  return (
    <div className="list-item-card-grid" >
      <div className="normal-list-item-card">a</div>
      <div className="working-list-item-card">b</div>
      <div className="sorted-list-item-card">c</div>
    </div>
  )
}

export default BisVx
