import { format } from '../src/utils/date'
const date = new Date(Date.parse('10/23/2022'))

test('if return correct result', () => {
  expect(format(date, 'yyyy-MM')).toEqual('2022-10')
  expect(format(date, 'yyyy-MM-DD')).toEqual('2022-10-23')
})

test('if case matters', () => {
  expect(format(date, 'YYYY-MM-DD')).toEqual('2022-10-23')
  expect(format(date, 'yyyy-MM-dd')).toEqual('2022-10-23')
})
