import React, { useEffect, useState } from 'react'
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


  // Other idea for more fine-grained step-throughs
  const [algoStep, setAlgoStep] = useState()
  const ALGO_INSTRUCTIONS = [
    'const x = asdfasdf',
    '',
  ]

  // All the pieces of state for BIS
  const [leftPointer, setLeftPointer] = useState(0)
  const [rightPointer, setRightPointer] = useState(0)
  const [middlePointer, setMiddlePointer] = useState(null)
  const [curIndex, setCurIndex] = useState(0)
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

  function step() {
    // needs to somehow keep track of _which_ step it's on...
    // ... which is VERY algorithm-dependent
    // ... OR a step is: indexDone 0 -> 1
    const middlePointer = Math.floor((leftPointer + rightPointer) / 2)
    setMiddlePointer(middlePointer)
    if (list[middlePointer] > list[curIndex]) {

    }

    // base case
    // if (rightPointer === list.length - 1) {
    //   // done sorting
    //   alert('done sorting!')
    //   return
    // } else {
      
    // }
  }

  function visibleSort() {
    throw Error('Function Not Yet Implemented')
  }


  return (
    <div>
      <ListDisplay aList={list}/>
      <MetaListDataIndicators/>
      <ActionsMenu/>
      <InternalsDashboard 
        internalsObject={{ 
          curIndex, leftPointer, middlePointer, rightPointer, list,
        }}
      />
    </div>
    
  )

  ///////////////
  //  HELPERS  //
  ///////////////
  function MetaListDataIndicators(props) {
    const {
      children, 
      TODO, 
      ...otherProps 
    } = props

    return (
      <div className="pointers-row" >

        <div className="pointer-indicator" >
          <div className="arrow-up"/>
          <div>L</div>
        </div>
        <div className="pointer-indicator" >
          <div className="arrow-up"/>
          <div>M</div>
        </div>
        <div className="pointer-indicator" >
          <div className="arrow-empty"/>
        </div>
        <div className="pointer-indicator" >
          <div className="arrow-up"/>
          <div>R</div>
        </div>
        <div className="pointer-indicator" >
          <div className="arrow-up"/>
          <div>L</div>
        </div>
        <div className="pointer-indicator" >
          <div className="arrow-up"/>
          <div>M</div>
        </div>
        <div className="pointer-indicator" >
          <div className="arrow-empty"/>
        </div>
        <div className="pointer-indicator" >
          <div className="arrow-up"/>
          <div>R</div>
        </div>

      </div>
    )
  }
  function InternalsDashboard(props) {
  // This could maybe be generalized for any arbitrary component with:
  // https://stackoverflow.com/questions/56875281/how-do-i-pass-all-state-variables-inside-react-hooks-to-my-child-component
  // ... basically as an equivalent to `...this.state`
    const { 
      ...otherProps 
    } = props

    return (
      <div className="internals-dashboard" >
        <div>leftPointer: <span className="value">{leftPointer}</span></div>
        <div>rightPointer: <span className="value">{rightPointer}</span></div>
        <div>middlePointer: <span className="value">{middlePointer}</span></div>
        <div>curIndex: <span className="value">{curIndex}</span></div>
        <div>list: <span className="value">{JSON.stringify(list)}</span></div>
      </div>
    )
  }

  function InternalsDashboard({internalsObject}) {
    const { 
      ...otherProps 
    } = props

    return (
      <div className="internals-dashboard">
        { Object.keys(internalsObject).map( k => {
          return (
            <div>
              {k}: 
              <span className="state-value">
                {contingentTransform(internalsObject[k])}
              </span>
            </div>
          )
        })}
      </div>
    )

    // Helpers
    function contingentTransform(value) {
      if (Array.isArray(value)) {
        return JSON.stringify(value)
      } else {
        return value // no transform
      }
    }
  }

  function ActionsMenu(props) {
    const { children, TODO, ...otherProps } = props
    return (
      <div>
        <VisibleSortButton/>
        <SortButton/>
        <ShuffleButton/>
        <StepButton/>
      </div>
    )
  }
  function VisibleSortButton() { return <button onClick={visibleSort}>See sort</button> }
  function SortButton() { return <button onClick={sortDisplayList}>Sort</button> }
  function ShuffleButton() { return <button onClick={shuffleDisplayList}>Shuffle</button> }
  function StepButton() { return <button onClick={step}>Step</button> }
  function ListDisplay(props) {
    const { 
      aList, 
      ...otherProps 
    } = props


    return (
      <div className="list-item-card-grid" {...otherProps} >
        { aList.map( (item, i) => { 
          if (i < curIndex) {
            return ( <div className="sorted-list-item-card" >{item}</div> )
          } else if (i === curIndex) {
            return ( <div className="working-list-item-card" >{item}</div> )
          } else {
            return ( <div className="normal-list-item-card" >{item}</div> )
          }
        })}
      </div>
    )
  }

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
