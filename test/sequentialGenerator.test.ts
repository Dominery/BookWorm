import { SequentialGenerator } from '../src/utils/sequentialGenerator'

test('init 3 and get', () => {
  expect(new SequentialGenerator(3).get()).toEqual([0, 1, 2])
})

test('getNext', () => {
  expect(new SequentialGenerator(3).getNext()).toEqual([1, 2, 0])
})
