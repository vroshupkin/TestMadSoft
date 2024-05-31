
type TCheckBoxTest = string



export type TTestData = 
{
  text: string,
  checkBoxes?: TCheckBoxTest[],
  manyTypes?: string[]
}

export const TestData: TTestData[] =
[
	{
		text: 'Что должен знать фронтенд-разработчик? Назовите три ключевых навыка.',
		checkBoxes: [
			'HTML, CSS, Javascript',
			'Python',
			'C#'
		]
	},

	{
		text: 'Какие CSS препроцессоры вы знаете',
		manyTypes: [
			'Sass',
			'Scss',
			'Dart',
			'PostCSS'
		]
	},

]

