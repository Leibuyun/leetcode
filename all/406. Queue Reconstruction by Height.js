/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  people.sort((l1, l2) => {
    return l2[0] - l1[0] === 0 ? l1[1] - l2[1] : l2[0] - l1[0];
  });
  const res = [];
  for (let item of people) {
    res.splice(item[1], 0, item);
  }
  return res;
};

const people = [
  [9, 0],
  [7, 0],
  [1, 9],
  [3, 0],
  [2, 7],
  [5, 3],
  [6, 0],
  [3, 4],
  [6, 2],
  [5, 2],
];

console.log(reconstructQueue(people));

// [7, 0]
// [7, 1]
// [6, 1]
// [5, 0]
// [5, 2]
// [4, 4]
// [5, 0], [7, 0], [5, 2], [6, 1], [4, 4], [7, 1]

/*
[ [ 7, 0 ] ]
[ [ 7, 0 ], [ 7, 1 ] ]
[ [ 7, 0 ], [ 6, 1 ], [ 7, 1 ] ]
[ [ 5, 0 ], [ 7, 0 ], [ 6, 1 ], [ 7, 1 ] ]
[ [ 5, 0 ], [ 7, 0 ], [ 5, 2 ], [ 6, 1 ], [ 7, 1 ] ]
[ [ 5, 0 ], [ 7, 0 ], [ 5, 2 ], [ 6, 1 ], [ 4, 4 ], [ 7, 1 ] ]
[ [ 5, 0 ], [ 7, 0 ], [ 5, 2 ], [ 6, 1 ], [ 4, 4 ], [ 7, 1 ] ]
*/

/*
  [ 9, 0 ],
  [ 7, 0 ],
  [ 6, 0 ],
  [ 6, 2 ],
  [ 5, 2 ],
  [ 5, 3 ],
  [ 3, 0 ],
  [ 3, 4 ],
  [ 2, 7 ],
  [ 1, 9 ]
*/

/*
  [9, 0]
  [7, 0], [9, 0]
  [6, 0], [7, 0], [9, 0]
  [6, 0], [7, 0], [5, 2], [6, 2], [9, 0]
  [3, 0], [6, 0], [7, 0], [5, 2], [5, 3], [6, 2], [9, 0]
  [3, 0], [6, 0], [7, 0], [5, 2], [3, 4], [5, 3], [6, 2], [2, 7], [9, 0]
  [3, 0], [6, 0], [7, 0], [5, 2], [3, 4], [5, 3], [6, 2], [2, 7], [9, 0], [1, 9]
*/
