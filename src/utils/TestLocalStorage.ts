export class TestLocalStorage
{
	constructor(private testName: string){}

	clearTests()
	{
		for(let i = 0; i < localStorage.length; i++)
		{
			const key = localStorage.key(i);
			if(!key) continue;
      
			new RegExp(`test_${this.testName}[0-9]+`)
				.test(key) ? localStorage.removeItem(key): '';
		}
	}

	setOneOf(ind: number, value: number)
	{
		localStorage.setItem(`${this.testName}_${ind}`, value + '');
	}
	setManyOf(ind: number, value: boolean[])
	{
		localStorage.setItem(`${this.testName}_${ind}`, value.map(v => v ? '1' : '0').join(''));
	}
	
	compareTests() 
	{

	}

  
}