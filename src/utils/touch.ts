import React, { useState } from 'react'

type run = () => void
type point = [number, number]
enum Direction {
  LEFT = 'left',
  RIGHT = 'right',
  UP = 'up',
  BOTTOM = 'bottom',
}
function getDirection([startX, startY]: point, [endX, endY]: point): Direction | null {
  const [movedX, movedY] = [endX - startX, endY - startY]
  if (Math.max(Math.abs(movedX), Math.abs(movedY)) < 5) return null
  const directions = [Direction.RIGHT, Direction.BOTTOM, Direction.LEFT, Direction.UP]
  return directions[getTransformIndex(getAngle(movedX, movedY))]

  function getAngle(x: number, y: number): number {
    return (Math.atan2(y, x) * 180) / Math.PI
  }
  function getTransformIndex(angle) {
    return (Math.floor((angle + 45) / 90) + directions.length) % directions.length
  }
}

function useTouch(touchFunc: {
  [Direction.LEFT]?: run
  [Direction.RIGHT]?: run
  [Direction.UP]?: run
  [Direction.BOTTOM]?: run
}): [(e: React.TouchEvent<HTMLDivElement>) => void, (e: React.TouchEvent<HTMLDivElement>) => void] {
  const [touchStart, setTouchStart] = useState([0, 0] as [number, number])
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchPoint = e.touches[0]
    setTouchStart([touchPoint.pageX, touchPoint.pageY])
  }
  const onTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const touchPoint = e.changedTouches[0]
    const direction = getDirection(touchStart, [touchPoint.pageX, touchPoint.pageY])
    touchFunc[direction]?.()
  }
  return [onTouchStart, onTouchEnd]
}
function fromBottom(distance: number, target: React.MutableRefObject<undefined>) {
  const dom = target.current as any
  const { scrollHeight, clientHeight, scrollTop } = dom
  if (Math.abs(scrollTop + clientHeight - scrollHeight) >= distance) {
    return false
  }
  return true
}

function fromTop(distance: number, target: React.MutableRefObject<undefined>) {
  const dom = target.current as any
  const { scrollTop } = dom
  if (scrollTop >= distance) {
    return true
  }
  return false
}
export { useTouch, fromBottom, fromTop }
