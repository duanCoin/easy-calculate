function calculate_median(arr) {
  if(!(arr instanceof Array))
  	return ;
  	
  return arr[Math.floor(arr.length/2)];
}

module.exports = calculate_median;
