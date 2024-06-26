const getFileLogStr = () => 
{
	const err = new Error();

	return err.stack ? err.stack.split('\n')[3] : '';

}
	
type TDefaultTypes = number | string | boolean | null;
const logger_constructor = (id: number, options?: {stack?: true}) => (str: TDefaultTypes | string[] | number[]) => 
{
	const stack = options && options.stack ? '\n' + getFileLogStr() : '';
	console.log(` %cLOGGER ${id} ${str} ${stack}`, 'background: #222; color: #bada55');
}



export const logger_1 = logger_constructor(1, {stack: true});

