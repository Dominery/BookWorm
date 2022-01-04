import React from 'react'
import { CheckIcon } from 'components/index'

import './index.scss'
interface ChoiceInfo {
  title: string
  id: string
}

function BookLayoutChange(props: {
  choices: ChoiceInfo[]
  choice: string
  setChoice: (choiceId: string) => void
  className?: string
  onClick?: (e?: React.MouseEvent<HTMLUListElement, MouseEvent>) => void
}) {
  const { choices, choice, setChoice, className = '', onClick = () => {} } = props
  return (
    <ul className={`book-layout-change ${className}`} onClick={onClick}>
      {generateChoices(choices, choice, setChoice)}
    </ul>
  )
}

function generateChoices(choices: ChoiceInfo[], choice: string, setChoice: (choiceId: string) => void) {
  return choices.map((choiceInfo) => (
    <li className="book-layout-change__item" onClick={() => setChoice(choiceInfo.id)} key={choiceInfo.id}>
      <CheckIcon checked={choiceInfo.id === choice}></CheckIcon>
      <span className="book-layout-change__info">{choiceInfo.title}</span>
    </li>
  ))
}

export default BookLayoutChange
