let occurrences = (given) => {
  let occurenceCount = {};

  for (i=0; i<given.length; i++) {
    if (occurenceCount.hasOwnProperty(given[i])) {
      occurenceCount[given[i]] += 1;
    } else {
      occurenceCount[given[i]]=1;
    }
  }

  let answer = [];
  let min = given.length;
  for (var key in occurenceCount) {
    if (occurenceCount[key] < min) {
      min = occurenceCount[key];
      answer = [];
      answer.push(key);
    } else if (occurenceCount[key] == min) {
      answer.push(key);
    }
  }

  return answer;
}

given = [1,2,3,4,1,2,3];

console.log(occurrences(given));
