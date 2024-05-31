export type TManyOf = 
{
  text: string,
  checkBoxesNames: string[],
  type: 'manyOf'
}

export type TOneOf = 
{
  text: string,
  checkBoxesNames: string[],
  type: 'oneOf'
}

export type TTestData = 
  TManyOf | TOneOf

export const TestData: TTestData[] =
[
	{
		type: 'oneOf',
		text: 'Что должен знать фронтенд-разработчик? Назовите три ключевых навыка.',
		checkBoxesNames: [
			'HTML, CSS, Javascript',
			'Python',
			'C#'
		],
	},

	{
		type: 'manyOf',
		text: 'Какие CSS препроцессоры вы знаете',
		checkBoxesNames: [
			'Sass',
			'Scss',
			'Dart',
			'PostCSS'
		]
	},
	{
		type: 'manyOf',
		text: 'Какие CSS препроцессоры вы знаете',
		checkBoxesNames: [
			'Sass',
			'Scss',
			'Dart',
			'PostCSS'
		]
	},
	{
		type: 'manyOf',
		text: 'Какие CSS препроцессоры вы знаете',
		checkBoxesNames: [
			'Sass',
			'Scss',
			'Dart',
			'PostCSS'
		]
	},

]

