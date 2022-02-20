    let fibonacci_array = [1,1];
    
    function getFibonacciArray(array, length) {
    
    	for(let i = 0; i < length; i ++) {
    		array.push(array[i] + array[i+1])
    	}
        console.log(array)
    }
    
    getFibonacciArray(fibonacci_array, 6)
