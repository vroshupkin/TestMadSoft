import Cookies from "universal-cookie";

class CookieClass
{
	private cookies = new Cookies(null, {path: '/'});
	
	get(key: string)
	{
		return this.cookies.get(key);
	}

	getMany(...keys: string[])
	{
		
		return keys.map(k => this.cookies.get(k))
	}

	set(key: string, value: string)
	{
		this.cookies.set(key, value);
	}

	setMany(obj: Record<string, string>)
	{
		for (const key in obj) {
			this.cookies.set(key, obj[key])
		}
	}

	clearMany(...keys: string[])
	{
		keys.forEach(k => this.cookies.remove(k));
	}

  
}

export const cookies = new CookieClass();

