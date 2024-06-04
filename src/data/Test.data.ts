import { TestLocalStorage } from "../entities/TestLocalStorage"

export type TManyOf = 
{
  text: string,
  variantsNames: string[],
  type: 'manyOf',
	answare: string
}


export type TOneOf = 
{
  text: string,
  variantsNames: string[],
  type: 'oneOf',
	answare: number
}

export type TInput = 
{
  text: string,
  type: 'input',
	answare: string
}
export type TTestData = 
  TManyOf | TOneOf | TInput

	
export const FrontEndTestLocalStorage = new TestLocalStorage('FrontEndTest');
export const FrontEndTest: TTestData[] =
[
	{
		type: 'oneOf',
		text: 'Что должен знать фронтенд-разработчик? Назовите три ключевых навыка.',
		variantsNames: [
			'HTML, CSS, Javascript',
			'Python',
			'C#'
		],
		answare: 0
	},

	{
		type: 'manyOf',
		text: 'Какие CSS препроцессоры вы знаете',
		variantsNames: [
			'Sass',
			'Scss',
			'Dart',
			'PostCSS'
		],
		answare: '1101'
	},
	{
		type: 'manyOf',
		text: 'Что из перечисленного является библиотеками тестирования?',
		variantsNames: [
			'Mocha',
			'Jest',
			'Angular',
			'Cypress',
			'React'
		],
		answare: '11010'
	},
	{
		type: 'input',
		text: 'Сколько будет 2 ** 3?',
		answare: '8'
	},
	

]

