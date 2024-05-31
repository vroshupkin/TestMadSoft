import { useState } from 'react';
import { Progressbar } from '../components/Progressbar'
import {Timer } from '../components/Timer'
import s from './Testing.page.module.sass'
import { TestingBody } from '../components/TestingBody';
import { TestData } from '../data/Test';

export const TestingPage = () => 
{  
	const [selectTest, setSelectTest] = useState(0);

	const testingTest = TestData[selectTest].text;

	return (
		<div className={s.container}>
			<div>
				<div className={s.timer_and_test_name}>
					<Timer seconds={20} minutes={10} hours={0}></Timer>
					<div className={s.test_name}>Тестирование</div>
				</div>
			
				<Progressbar count={8} selectTest={selectTest}/>

				<TestingBody text={testingTest}/>
			</div>
		</div>
		
	)
}


