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

function randomChoose<T>(list: T[], limit): T[] {
  return shuffle(list).slice(0, limit)
}

function randomPick<T>(list: T[]): T {
  return list[random(list.length)]
}

export { shuffle, randomChoose, randomPick }
