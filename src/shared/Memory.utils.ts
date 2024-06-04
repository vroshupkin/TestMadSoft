

type TBinaryMemory = 'bytes' | 'KB' | 'MB' | 'GB';

export class Memory
{
	// IEC https://en.wikipedia.org/wiki/Binary_prefix
	unitType: TBinaryMemory = 'bytes'
	private _memory: string;

	constructor(private _bytes: number){
		this._memory = this.toString();
	}
	
	get memory() { return this._memory; }
	get bytes()  { return this._bytes; } 

	setUnitType(memoryType: TBinaryMemory)
	{
		this.unitType = memoryType;
		this._memory = this.toString();

		return this;
	}

	toString()
	{
		switch(this.unitType)
		{
		case 'bytes': return (this.bytes) + ' bytes';
		case 'KB': return (this.bytes / 2 ** 10).toFixed(1) + ' KB';
		case 'MB': return (this.bytes / 2 ** 20).toFixed(1) + ' MB';
		case 'GB': return (this.bytes / 2 ** 30).toFixed(1) + ' GB';
		}	
	}

}

export const MemoryOperation = (a: Memory, op: '+' | '-' | '*' | '/', b: Memory) =>
{
	switch(op)
	{
	case('+'): return new Memory(a.bytes + b.bytes);
	case('-'): return new Memory(a.bytes - b.bytes);
	case('*'): return new Memory(a.bytes * b.bytes);
	case('/'): return new Memory(a.bytes / b.bytes);
	}
}


