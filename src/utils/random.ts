function random(limit: number) {
  return Math.floor(Math.random() * limit)
}

function shuffle<T>(list: T[]): T[] {
  const result = [...list]
  const length = result.length
  for (let index = 0; index < length; index++) {
    const randomIndex = random(length)
    ;[result[index], result[randomIndex]] = [result[randomIndex], result[index]]
  }
  return result
}

export { shuffle }
