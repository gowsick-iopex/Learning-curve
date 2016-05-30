var givenArray = [1,2,3,4,5,3,8,9];
var diffArray = [];
var resultArray = [];
var diff = 2,x,y,combo;
var result = findDiff(givenArray,diff);
console.log(result);
function findDiff(givenArray,diff) {
	for( x = 0; x < givenArray.length; x++){
		for( y = x+1; y < givenArray.length; y++){
		 	if(Math.abs(givenArray[x] - givenArray[y]) == diff ) {
				combo = givenArray[x]+givenArray[y];
				// console.log(combo);
				// console.log(diffArray);
				// console.log($.inArray(combo,diffArray));
				if($.inArray(combo,diffArray) == -1) {
					diffArray.push(combo);
					resultArray.push(givenArray[x]+","+givenArray[y]+"=="+diff);
					//document.write("<br>");
				}
			}
	 	}
	}//console.log(diffArray);
	return resultArray;
}
