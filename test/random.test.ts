import { shuffle } from '../src/utils/random'

test('shuffle return list length', () => {
  let a = [1, 2, 3, 4, 5]
  expect(shuffle(a).length).toBe(a.length)
})

test('shuffle not affect origin list', () => {
  let a = [1, 2, 3, 4, 5, 1]
  shuffle(a)
  expect(a).toEqual([1, 2, 3, 4, 5, 1])
})
