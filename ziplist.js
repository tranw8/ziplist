function zipList(list1, list2) {
  const result = [];
  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i], list2[i]);
  }
  return result;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

const zippedList = zipList(list1, list2);
const simpleZippedList = zipListTheSimpleWay(list1, list2);
console.log(zippedList);
console.log(simpleZippedList);
