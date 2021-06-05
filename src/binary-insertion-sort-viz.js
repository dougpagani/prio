import React, { useState, useEffect } from 'react'
import './binary-insertion-sort-viz.css'

const LIST_ITEM_TYPE = {
  numbers: "numbers",
  letters: "letters",
}

function BisVx(props) {
  const { children, ...otherProps } = props

  // Pieces of state that have to do with the interactivity component
  const [listItemType, setListItemType] = useState(LIST_ITEM_TYPE.numbers)

  // All the pieces of state for BIS
  const [leftPointer, setLeftPointer] = useState()
  const [rightPointer, setRightPointer] = useState()
  const [middlePointer, setMiddlePointer] = useState()
  const [unsortedSublistIndexInclusive, setUnsortedSublistIndexInclusive] = useState(0)
  const [list, setList] = useState([0, 1, 2])


  return (
    <div>
      <ListDisplay aList={list}/>
      <ActionsMenu/>
    </div>
    
  )
}

function ActionsMenu(props) {
  const { children, TODO, ...otherProps } = props
  return (
    <div>
      <SortButton/>
      <ShuffleResetButton/>
      <StepButton/>
    </div>
  )
}
function SortButton() {
  return (
    <button>Sort</button>
  )
}
function ShuffleResetButton() {
  return (
    <button>Shuffle</button>
  )
}
function StepButton() {
  return (
    <button>Step</button>
  )
}

function ListDisplay(props) {
  const { 
    children, 
    aList, 
    ...otherProps 
  } = props


  return (
    <div className="list-item-card-grid" >
      { aList.map( i => (
        <div className="normal-list-item-card" >{i}</div>
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
