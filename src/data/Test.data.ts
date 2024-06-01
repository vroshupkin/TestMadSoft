import { TestLocalStorage } from "../utils/TestLocalStorage"

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

export type TTestData = 
  TManyOf | TOneOf

	
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
		text: 'Какие библиотеки тестирования вы знаете?',
		variantsNames: [
			'Mocha',
			'Jest',
			'Angular',
			'Cypress',
			'React'
		],
		answare: '11010'
	},
	

]

