
export const addTimeToDate = (date: Date, ms: number, sec = 0, min = 0, hours = 0) => 
{
	return new Date(Number(date) + ms + 1000 * (sec + 60 * (min + 60 * hours)));
}
    

export const getDiffStringTime = (endTime: Date, startTime: Date) => 
{
	const diff = new Date(Number(endTime) - Number(startTime));

	return [diff.getUTCHours(), diff.getUTCMinutes(), diff.getUTCSeconds()]
		.map(num => num < 10 ? '0' + num : '' + num)
		.join(':')
}