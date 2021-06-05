import React, { useState, useEffect } from 'react'
import './binary-insertion-sort-viz.css'

function BisVx(props) {
  const { children, ...otherProps } = props

  // All the pieces of state for BIS
  const [leftPointer, setLeftPointer] = useState()
  const [rightPointer, setRightPointer] = useState()
  const [middlePointer, setMiddlePointer] = useState()
  const [unsortedSublistIndexInclusive, setUnsortedSublistIndexInclusive] = useState(0)


  return (
    <div>
      <ListDisplayStylingExample/>
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
