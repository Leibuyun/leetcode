const cmp = (arg) => (arg === undefined ? 1e7 : arg);

var findMedianSortedArrays = function (nums1, nums2) {
  const total = nums1.length + nums2.length;
  const half = parseInt(total / 2);
  if (total % 2 === 0) {
    for (let i = 0; i < half - 1; ++i) {
      const n1 = cmp(nums1[0]);
      const n2 = cmp(nums2[0]);
      if (n1 < n2) nums1.shift();
      else nums2.shift();
    }
    const t1 = cmp(nums1.shift());
    const t2 = cmp(nums2.shift());
    let s1 = (s2 = 0);
    if (t1 < t2) {
      s1 = t1;
      nums2.unshift(t2);
    } else {
      s1 = t2;
      nums1.unshift(t1);
    }
    s2 = Math.min(cmp(nums1.shift()), cmp(nums2.shift()));
    return ((s1 + s2) / 2).toFixed(5);
  } else {
    for (let i = 0; i < half; ++i) {
      const n1 = cmp(nums1[0]);
      const n2 = cmp(nums2[0]);
      if (n1 < n2) nums1.shift();
      else nums2.shift();
    }
    const n1 = cmp(nums1.shift());
    const n2 = cmp(nums2.shift());
    return Math.min(n1, n2).toFixed(5);
  }
};

// 1 2 3 4 5
// 1 2 3 4
// 0 1 2 3 4 5
console.log(findMedianSortedArrays([1, 3], [2]));
console.log(findMedianSortedArrays([1, 2], [3, 4]));
console.log(findMedianSortedArrays([0, 0], [0, 0]));
