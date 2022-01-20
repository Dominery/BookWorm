import { useState } from 'react'

function useExclusiveButtons(ids: string[]): [object, (buttonId: string) => void] {
  const [buttons, setButtons] = useState(init(ids))
  const press = (buttonId) => {
    console.log(`press ${buttonId}`)
    const newButtons = init(ids)
    newButtons[buttonId] = !buttons[buttonId]
    setButtons(newButtons)
  }
  return [buttons, press]

  function init(keys: string[]) {
    return keys.reduce((pre, cur) => {
      pre[cur] = false
      return pre
    }, Object.create(null))
  }
}

export { useExclusiveButtons }
