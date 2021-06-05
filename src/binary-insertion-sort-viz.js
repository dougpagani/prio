import React, { useState, useEffect } from 'react'

function BisVx(props) {
  const { children, ...otherProps } = props

  // All the pieces of state for BIS
  const [leftPointer, setLeftPointer] = useState()
  const [rightPointer, setRightPointer] = useState()
  const [middlePointer, setMiddlePointer] = useState()
  const [unsortedSublistIndexInclusive, setUnsortedSublistIndexInclusive] = useState(0)


  return (
    <div>
      <ActionsMenu/>
      <ListDisplay/>
    </div>
    
  )
}

function ActionsMenu(props) {
  const { children, TODO, ...otherProps } = props
  return (
    <div>
      <SortButton/>
      <ShuffleResetButton/>
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
function ListDisplay() {
  return (
    <div>
      <div>a</div>
      <div>b</div>
      <div>c</div>
    </div>
  )
}

export default BisVx
