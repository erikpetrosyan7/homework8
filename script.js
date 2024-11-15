// 1

function fn1(arr) {
	let result = {};

	for (let i = 0; i < arr.length; i++) {
		if (!result.hasOwnProperty(arr[i])) {
			result[arr[i]] = 1;
		} else {
			result[arr[i]]++;
		}
	}

	for (let key in result) {
		result[key] = result[key] / arr.length;
	}

	return result;
}
console.log(fn1([1, 2, 3]));

// 2

function fn2(arr) {
	let biggestNegatives = [];
	for (let i = 0; i < arr.length; i++) {
		if (Array.isArray(arr[i])) {
			let array = arr[i];
			let biggestInteger = -Infinity;
			for (let k = 0; k < array.length; k++) {
				if (array[k] < 0) {
					if (array[k] > biggestInteger) {
						biggestInteger = array[k];
					}
				}
			}
			if (biggestInteger !== -Infinity) {
				biggestNegatives.push(biggestInteger);
			}
		} else {
			return 'Invalid Argument';
		}
	}
	if (biggestNegatives.length === 0) {
		return 'No negatives';
	}

	let product = 1;
	for (let i = 0; i < biggestNegatives.length; i++) {
		product *= biggestNegatives[i];
	}

	return product;
}
console.log(
	fn2([
		[-1, 4],
		[11, 0],
		[5, 6, 7, 8],
	])
);

// 3

function fn3(num1, num2) {
	let result = [];
	for (let i = num1; i <= num2; i++) {
		i += '';
		for (let k = 0; k < i.length; k++) {
			if (i[k] % 2 === 0 && i[k + 1] % 2 === 0) {
				result.push(Number(i));
			} else {
				break;
			}
		}
	}
	if (result.length === 0) {
		return 'Such numbers does not exist.';
	}
	return result;
}
console.log(fn3(19, 42));
