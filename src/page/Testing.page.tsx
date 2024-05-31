import { useState } from 'react';
import { Progressbar } from '../components/Progressbar'
import {Timer } from '../components/Timer'
import s from './Testing.page.module.sass'
import { TestingBody } from '../components/TestingBody';
import { TestData } from '../data/Test';

export const TestingPage = () => 
{  
	const [selectTest, setSelectTest] = useState(0);

	// const testingTest = TestData[selectTest].text;

	const submit = () => 
	{
		if(selectTest < TestData.length - 1)
		{
			setSelectTest(selectTest => selectTest + 1)
		}
	};
    
	
	return (
		<div className={s.container}>
			<div>
				<div className={s.timer_and_test_name}>
					<Timer seconds={20} minutes={10} hours={0}></Timer>
					<div className={s.test_name}>Тестирование</div>
				</div>
			
				<Progressbar count={TestData.length - 1} selectTest={selectTest}/>

				<TestingBody data={TestData[selectTest]} onSubmit={submit}/>
			</div>
		</div>
		
	)
}


