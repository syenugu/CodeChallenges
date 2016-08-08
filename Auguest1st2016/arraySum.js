function summarise(array){
	var length = array.length;
	var leftIndex = 0, rightIndex = length - 1, leftSum =0, rightSum = 0;

	for (var index = 2; index < length; index++)
	{
		if (leftIndex >= rightIndex)
		{
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
		return "Success: Index " + (leftIndex + 1) + " satisfies the given conditions.";
	}
	else
	{
		return "!Failure: no such index exists";
	}
}

exports.summarise = summarise;