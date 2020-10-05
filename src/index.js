
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || !matrix){
    return [];
  }
var arr = matrix;
  var result =[];


  for (var i = 0; i < arr.length; i++){
    if (i%2 !== 0){
      arr[i].reverse();
    }
    result = result.concat(arr[i]);

  }
 return result;

}
