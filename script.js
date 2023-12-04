function calculateMinCost() {
  //your code here
	let ans = document.getElementById("result");
  let input = document.getElementById("rope-lengths");
	let arr = input.value.split(",").map((num)=>{
		return parseInt(num);
	});
	
	let minCost = 0;
	while(arr.length > 1){
		arr.sort((a,b)=>{
		return a - b;
	});
		let a = arr.shift();
		let b = arr.shift();
		minCost = a + b + minCost;
		arr.push(a+b);
	}

	ans.innerText = minCost;
}  
