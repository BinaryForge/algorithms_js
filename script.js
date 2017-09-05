
function insertionSort() {
	var startTime = performance.now();
	//Grab Data
	var list = document.getElementById("xx").value.split(",");;
	var userIN = [];

	for (var p = 0; p < list.length; p++) {
		list[p] = parseInt(list[p], 10)
		userIN.push(list[p])
	}
	
	var out = document.getElementById("Output");
	var key = 0;
	var i = 0;

	//Algorithm
	for(var x = 1; x < userIN.length; x++){
		key = userIN[x];	
	    i = x - 1;
	    console.log(userIN[i]);
		while(i >= 0 && userIN[i] > key){
			userIN[i+1] = userIN[i];
			i = i - 1;
		}
		userIN[i+1] = key;	
		
	}
	//Output
 	document.getElementById('Output').value = userIN;
 	var endTime = performance.now();
	console.log("Program took: " + (endTime - startTime));

}
