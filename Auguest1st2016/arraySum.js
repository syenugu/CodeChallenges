function summarise(array){
	var length = array.length, message = "!Failure: no such element exists";
	var leftIndex = 0, rightIndex = length - 1, leftSum =0, rightSum = 0;

	for (var index = 2; index < length; index++)
	{
		if (leftIndex >= rightIndex || array[rightIndex] < 1 ||  array[leftIndex] < 1)
		{
			if(array[rightIndex] < 1 ||  array[leftIndex] < 1){
				message = "!Failure: cannot have element with less than 1 in the array";
			}
			break;
		}

		if (leftSum > rightSum)
		{
			rightSum += array[rightIndex];
			rightIndex -= 1;
		}
		else if (leftSum < rightSum)
		{
			leftSum += array[leftIndex];
			leftIndex += 1;
		}
		else
		{
			rightSum += array[rightIndex];
			leftSum += array[leftIndex];
			rightIndex -= 1;
			leftIndex += 1;
		}

		console.log(array[leftIndex]);
		console.log(array[rightIndex]);
	}

	console.log(leftSum + " - "+ rightSum);
	console.log(leftIndex + " - " + rightIndex);

	if (length > 2 && leftSum == rightSum && leftIndex == rightIndex)
	{
		message =  "Success: element " + (leftIndex + 1) + " satisfies the given conditions.";
	}
	
	return message;
}

exports.summarise = summarise;