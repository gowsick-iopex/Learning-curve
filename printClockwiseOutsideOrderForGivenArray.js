var x,y,z;
var col = 6;
var rowcount = 6;
var ind = 1;
var row = [];
var twodArray = [];
var resultArray = [];
for( x = 0; x < rowcount; x++){
	for( y = 0; y < col; y++){
	    row.push(ind);
	    ind++;
	}
	twodArray.push(row);
        row = [];
}

var result = printingLogic(twodArray);
console.log(result);

function printingLogic(twodArray) {
	y=0;
      for(x=0;x<rowcount;x++) {
				if(x > 0){
					y=col-1;
				}
				for(;y<col;y++) {
					resultArray.push(twodArray[x][y]);
					//console.log(twodArray[x][y]);
				}
				if(x > 0 && x==twodArray.length-1) {
					for(var t=col-2;t>0;t--){
						//console.log(t);
						//console.log(twodArray[3][2]);
						resultArray.push(twodArray[rowcount-1][t]);
						//console.log(twodArray[rowcount-1][t]);
					}
					for(var o=rowcount-1;o>=1;o--){
						//console.log(twodArray[o][0]);
						resultArray.push(twodArray[o][0]);
					}
				}
      }return resultArray;
}

