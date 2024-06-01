import { useState } from 'react';
import { Progressbar } from '../components/Progressbar'
import {Timer } from '../components/Timer'
import s from './Testing.page.module.sass'
import { TestUnit } from '../components/TestingBody';
import { FrontEndTest, FrontEndTestLocalStorage } from '../data/Test.data';

export const TestingPage = () => 
{  
	const [testIndex, setTestIndex] = useState(0);

	const submit = () => 
	{
		if(testIndex < FrontEndTest.length - 1)
		{
			setTestIndex(selectTest => selectTest + 1)
		}
	};
    
	
  
	return (
		<div className={s.container}>
			<div className={s.body}>
				<div className={s.timer_and_test_name}>
					<Timer seconds={20} minutes={10} hours={0}></Timer>
					<div className={s.test_name}>Тестирование</div>
				</div>
			
				<Progressbar 
					count={FrontEndTest.length - 1} 
					selectTest={testIndex}
				/>

				<TestUnit 
					index={testIndex}
					data={FrontEndTest[testIndex]}
					testLocalStorage={FrontEndTestLocalStorage}
					onSubmit={submit} 
				/>
			</div>
		</div>
		
	)
}


