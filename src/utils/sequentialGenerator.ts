import { useRef, useState } from 'react'

interface node {
  next: node
  pre: node
  value: number
}

function createNode(value: number, next: node = null, pre: node = null): node {
  return {
    value,
    next,
    pre,
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
      newNode.pre = lastNode
      lastNode = newNode
    }
    this.current.pre = lastNode
    lastNode.next = this.current
  }
  /**
   * getNext
   */
  public getNext() {
    this.current = this.current.next
    return this.iter(this.current, (item) => item.next)
  }
  /**
   * get
   */
  public get() {
    return this.iter(this.current, (item) => item.next)
  }
  /**
   * iter
   */
  private iter(start: node, func: (item: node) => node) {
    const result = [start.value]
    let temp = func(start)
    while (temp !== start) {
      result.push(temp.value)
      temp = func(temp)
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
