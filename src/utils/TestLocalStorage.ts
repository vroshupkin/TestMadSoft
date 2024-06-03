export class TestLocalStorage
{
	constructor(private testName: string){}

	isTestKey = (key: string) => new RegExp(`${this.testName}_[0-9]+`).test(key);

	clearTests()
	{
		for(let ind = 0; ind < localStorage.length; ind++)
		{
			const key = localStorage.key(ind);
			if(!key) continue;
      
			this.isTestKey(key) ? localStorage.removeItem(key): '';
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
	setInput(ind: number, value: string)
	{
		localStorage.setItem(`${this.testName}_${ind}`, value);
	}

	getMemory()
	{
		const keys = [...localStorageKeyIterator];
		const entires = [...localStorageEntires];
		console.log(keys);
		console.log(entires)
	}

	compareTests() 
	{

	}

  
}


export const localStorageKeyIterator = {	
	[Symbol.iterator]: function()
	{		
		let index = 0;
		
		return(
			{
				next: () =>
				{					
					const value = localStorage.key(index);
					const done = index === localStorage.length;
					
					if(done)
					{
						return {done}
					}
					
					index++;

					return {done: done, value};
				}
			}
		)
	}
}

export const localStorageEntires = {	
	[Symbol.iterator]: function()
	{		
		let index = 0;
		
		return(
			{
				next: () =>
				{					
					const key = localStorage.key(index);
					const value = [key, key != null ? localStorage.getItem(key) : ''];
					const done = index === localStorage.length;
					
					if(done)
					{
						return {done}
					}
					
					index++;

					return {done: done, value};
				}
			}
		)
	}
}