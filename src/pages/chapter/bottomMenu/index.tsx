import React from 'react'

import './index.scss'
import { useExclusiveButtons } from 'utils/menu'

interface MenuItem {
  icon: string
  element: JSX.Element
  buttonId: string
}

function BottomMenu(props: { className?: string; menuItems: MenuItem[] }) {
  const { className, menuItems } = props
  const [buttons, press] = useExclusiveButtons(menuItems.map((item) => item.buttonId))
  return (
    <div className={`bottom-menu ${className}`}>
      {generateIcons(buttons, menuItems, press)}
      {generateMenuItems(menuItems, buttons)}
    </div>
  )
}
function generateIcons(buttons: object, menuItems: MenuItem[], press: (buttonId: string) => void) {
  return menuItems.map((item) => (
    <i
      className={`iconfont ${buttons[item.buttonId] ? 'button--active' : ''}`}
      onClick={() => press(item.buttonId)}
      dangerouslySetInnerHTML={{ __html: item.icon }}
      key={item.buttonId}
    />
  ))
}

function generateMenuItems(menuItems: MenuItem[], buttons: object) {
  return menuItems.map((item) => (
    <div
      key={item.buttonId}
      className={`bottom-menu__item ${buttons[item.buttonId] ? 'bottom-menu__item--active' : ''}`}
    >
      {item.element}
    </div>
  ))
}

export default BottomMenu
