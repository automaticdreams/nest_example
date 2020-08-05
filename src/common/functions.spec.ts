import { sort } from './functions'
import * as testArrays from '../../test/testArrays'

it('should return unchanged empty data set', () => {
  expect(sort([], 'title', 'rev')).toEqual([])
})
it('should return unchanged for unknown param', () => {
  expect(sort(testArrays.fullArr, 'nothing')).toEqual(testArrays.unchangedArray)
})
it('should return unchanged for empty param', () => {
  expect(sort(testArrays.fullArr, '')).toEqual(testArrays.unchangedArray)
})
it('should return unchanged for array that is missing a param', () => {
  expect(sort(testArrays.problemArr, 'title')).toEqual(testArrays.problemArr)
})

it('should sort data set when a param is provided', () => {
  expect(sort(testArrays.fullArr, 'title')).toEqual(testArrays.sortedByTitle)
})
it('should reverse sort data set when a param and direction: rev is provided', () => {
  expect(sort(testArrays.fullArr, 'title', 'rev')).toEqual(testArrays.sortedByTitleRev)
})

it('should sort data set (low -> high) when a numerical param is provided', () => {
  expect(sort(testArrays.fullArr, 'vote_average')).toEqual(testArrays.sortedByScoreRev)
})
it('should sort data set (high -> low) when a numerical param and direction is provided', () => {
  expect(sort(testArrays.fullArr, 'vote_average', 'rev')).toEqual(testArrays.sortedByScore)
})
