/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const res = Array.from({ length: ratings.length }, () => 0);
  // 记录这个数是否访问过
  const visited = Array.from({ length: ratings.length }, () => false);
  // 找到最小的那个数
  let ans = 0;
  while (true) {
    let minNum = 20001;
    let idx = -1;
    for (let i = 0; i < ratings.length; ++i) {
      if (!visited[i] && ratings[i] < minNum) {
        idx = i;
        minNum = ratings[i];
      }
    }
    if (minNum === 20001) break;
    else {
      visited[idx] = true;
      if (idx === 0) {
        if (idx + 1 < ratings.length && ratings[idx] > ratings[idx + 1]) {
          res[idx] = res[idx + 1] + 1;
          ans += res[idx];
        } else {
          res[idx] = 1;
          ans += 1;
        }
      } else if (idx === ratings.length - 1) {
        if (idx - 1 >= 0 && ratings[idx] > ratings[idx - 1]) {
          res[idx] = res[idx - 1] + 1;
          ans += res[idx];
        } else {
          res[idx] = 1;
          ans += 1;
        }
      } else {
        if (
          ratings[idx - 1] >= ratings[idx] &&
          ratings[idx] <= ratings[idx + 1]
        ) {
          res[idx] = 1;
          ans += 1;
        } else if (
          ratings[idx] > ratings[idx - 1] &&
          ratings[idx] <= ratings[idx + 1]
        ) {
          res[idx] = res[idx - 1] + 1;
          ans += res[idx];
        } else if (
          ratings[idx] > ratings[idx + 1] &&
          ratings[idx] <= ratings[idx - 1]
        ) {
          res[idx] = res[idx + 1] + 1;
          ans += res[idx];
        } else {
          res[idx] = Math.max(res[idx + 1], res[idx - 1]) + 1;
          ans += res[idx];
        }
      }
    }
  }
  return ans;
};

console.log(candy([1, 2, 87, 87, 87, 2, 1]));
console.log(candy([1, 0, 2]));
console.log(candy([1, 2, 2]));

/**
 *   int candy(vector<int> &ratings)
 {
	 int size=ratings.size();
	 if(size<=1)
		 return size;
	 vector<int> num(size,1);
	 for (int i = 1; i < size; i++)
	 {
		 if(ratings[i]>ratings[i-1])
			 num[i]=num[i-1]+1;
	 }
	 for (int i= size-1; i>0 ; i--)
	 {
		 if(ratings[i-1]>ratings[i])
			 num[i-1]=max(num[i]+1,num[i-1]);
	 }
	 int result=0;
	 for (int i = 0; i < size; i++)
	 {
		 result+=num[i];
	 }
	 return result;
 }
 */
