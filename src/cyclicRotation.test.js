function cyclicRotation(A, K) {
	var index = (A.length - K) % A.length;
	var B = A.slice(0, index);
	var C = A.slice(index);
	
	return C.concat(B);
}