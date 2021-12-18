const FORMAT_RULE: [RegExp, (date: Date) => number][] = [
  [/[yY]+/, (date: Date) => date.getFullYear()],
  [/M+/, (date: Date) => date.getMonth() + 1],
  [/[Dd]+/, (date: Date) => date.getDay()],
  [/h+/, (date: Date) => date.getHours()],
  [/m+/, (date: Date) => date.getMinutes()],
]

function format(date: Date, formatString: string) {
  return FORMAT_RULE.reduce((pre, cur) => {
    const [pattern, func] = cur
    return pre.replace(pattern, () => String(func(date)))
  }, formatString)
}

export { format }
