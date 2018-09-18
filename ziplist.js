const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

function zipList(lis1,lis2){
  const totalList  = [];
  for (let i = 0; i < lis1.length; i++){
    totalList.push(lis1[i],lis2[i]);
  }
  return totalList;
}

console.log(zipList(list1,list2));

function zipListTheSimpleWay(lis1,lis2){
  return _.flatten(_.zip(lis1,lis2));
}

console.log(zipListTheSimpleWay(list1,list2));
