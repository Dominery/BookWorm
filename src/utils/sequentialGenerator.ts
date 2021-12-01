import { useRef, useState } from 'react'

interface node {
  next: node
  value: number
}

function createNode(value: number, next: node = null): node {
  return {
    value,
    next,
  }
}

class SequentialGenerator {
  private current: node
  public constructor(range: number) {
    this.current = createNode(0)
    let lastNode = this.current
    for (let i = 1; i < range; i++) {
      const newNode = createNode(i)
      lastNode.next = newNode
      lastNode = newNode
    }
    lastNode.next = this.current
  }
  /**
   * getNext
   */
  public getNext() {
    this.current = this.current.next
    return this.iter(this.current)
  }
  /**
   * get
   */
  public get() {
    return this.iter(this.current)
  }
  /**
   * iter
   */
  private iter(start: node) {
    const result = [start.value]
    let temp = start.next
    while (temp !== start) {
      result.push(temp.value)
      temp = temp.next
    }
    return result
  }
}

function useSequential(size: number): [number[], () => void] {
  const sequential = useRef(new SequentialGenerator(size))
  const [range, setRange] = useState(sequential.current.get())
  const next = (): void => {
    setRange(sequential.current.getNext())
  }
  return [range, next]
}

export { SequentialGenerator, useSequential }
