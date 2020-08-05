const fullArr = [
  { title: 'eee', vote_average: 10 },
  { title: 'bbb', vote_average: 100 },
  { title: 'ccc', vote_average: 97 },
  { title: 'ddd', vote_average: 45 },
  { title: 'aaa', vote_average: 1 },
  { title: 'fff', vote_average: 20 },
  { title: 'ggg', vote_average: 93 },
  { title: 'hhh', vote_average: 15 },
  { title: 'iii', vote_average: 98 },
  { title: 'jjj', vote_average: 96 },
  { title: 'kkk', vote_average: 92 }
]
const unchangedArray = [
  { title: 'eee', vote_average: 10 },
  { title: 'bbb', vote_average: 100 },
  { title: 'ccc', vote_average: 97 },
  { title: 'ddd', vote_average: 45 },
  { title: 'aaa', vote_average: 1 },
  { title: 'fff', vote_average: 20 },
  { title: 'ggg', vote_average: 93 },
  { title: 'hhh', vote_average: 15 },
  { title: 'iii', vote_average: 98 },
  { title: 'jjj', vote_average: 96 },
  { title: 'kkk', vote_average: 92 }
]

const sortedByTitle = [
  { title: 'aaa', vote_average: 1 },
  { title: 'bbb', vote_average: 100 },
  { title: 'ccc', vote_average: 97 },
  { title: 'ddd', vote_average: 45 },
  { title: 'eee', vote_average: 10 },
  { title: 'fff', vote_average: 20 },
  { title: 'ggg', vote_average: 93 },
  { title: 'hhh', vote_average: 15 },
  { title: 'iii', vote_average: 98 },
  { title: 'jjj', vote_average: 96 },
  { title: 'kkk', vote_average: 92 }
]

const sortedByTitleRev = [
  { title: 'kkk', vote_average: 92 },
  { title: 'jjj', vote_average: 96 },
  { title: 'iii', vote_average: 98 },
  { title: 'hhh', vote_average: 15 },
  { title: 'ggg', vote_average: 93 },
  { title: 'fff', vote_average: 20 },
  { title: 'eee', vote_average: 10 },
  { title: 'ddd', vote_average: 45 },
  { title: 'ccc', vote_average: 97 },
  { title: 'bbb', vote_average: 100 },
  { title: 'aaa', vote_average: 1 }
]

const sortedByScore = [
  { title: 'bbb', vote_average: 100 },
  { title: 'iii', vote_average: 98 },
  { title: 'ccc', vote_average: 97 },
  { title: 'jjj', vote_average: 96 },
  { title: 'ggg', vote_average: 93 },
  { title: 'kkk', vote_average: 92 },
  { title: 'ddd', vote_average: 45 },
  { title: 'fff', vote_average: 20 },
  { title: 'hhh', vote_average: 15 },
  { title: 'eee', vote_average: 10 },
  { title: 'aaa', vote_average: 1 }
]

const sortedByScoreRev = [
  { title: 'aaa', vote_average: 1 },
  { title: 'eee', vote_average: 10 },
  { title: 'hhh', vote_average: 15 },
  { title: 'fff', vote_average: 20 },
  { title: 'ddd', vote_average: 45 },
  { title: 'kkk', vote_average: 92 },
  { title: 'ggg', vote_average: 93 },
  { title: 'jjj', vote_average: 96 },
  { title: 'ccc', vote_average: 97 },
  { title: 'iii', vote_average: 98 },
  { title: 'bbb', vote_average: 100 }
]
const sortedByTitleAndLimited = [
  { title: 'aaa', vote_average: 1 },
  { title: 'bbb', vote_average: 100 },
  { title: 'ccc', vote_average: 97 },
  { title: 'ddd', vote_average: 45 },
  { title: 'eee', vote_average: 10 }
]
const sortedByTitleRevAndLimited = [
  { title: 'kkk', vote_average: 92 },
  { title: 'jjj', vote_average: 96 },
  { title: 'iii', vote_average: 98 },
  { title: 'hhh', vote_average: 15 }
]
const sortedByScoreAndLimited = [
  { title: 'bbb', vote_average: 100 },
  { title: 'iii', vote_average: 98 },
  { title: 'ccc', vote_average: 97 },
  { title: 'jjj', vote_average: 96 }
]
const sortedByScoreRevAndLimited = [
  { title: 'aaa', vote_average: 1 },
  { title: 'eee', vote_average: 10 },
  { title: 'hhh', vote_average: 15 },
  { title: 'fff', vote_average: 20 }
]
const unsortedLimited = [
  { title: 'eee', vote_average: 10 },
  { title: 'bbb', vote_average: 100 },
  { title: 'ccc', vote_average: 97 }
]
const problemArr = [
  { title: 'eee', vote_average: 10 },
  { txyzitle: 'bbb', vote_average: 100 },
  { title: 'ccc', vote_average: 97 }
]

export { fullArr }
export { unchangedArray }
export { sortedByTitle }
export { sortedByTitleRev }
export { sortedByScore }
export { sortedByScoreRev }
export { sortedByTitleAndLimited }
export { sortedByTitleRevAndLimited }
export { sortedByScoreAndLimited }
export { sortedByScoreRevAndLimited }
export { unsortedLimited }
export { problemArr }
