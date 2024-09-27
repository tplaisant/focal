const brandNewArray = ['2', '4', '6', '3.14', '-100'];
let sum = 0;

for (const value of brandNewArray) {
	// convert the string to a number
	const converted = Number(value); // '3' => 3
	// ask if the number is an integer
	if (Number.isInteger(converted) === true && converted > 0) {
		sum += converted;
	}
}

console.log('sum', sum);