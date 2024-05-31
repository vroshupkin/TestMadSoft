
import { useState } from 'react';

import styles from './App.module.sass'
import { ThemeSelector } from './components/ThemeSelector';
import { TestingPage } from './page/Testing.page';

function App() 
{
	const setFilterVal = useState('')[1];

	return (
		<>
			<div className={styles.app_container}>
				<ThemeSelector onChange={setFilterVal}/>
				{/* <ThemeCards filterVal={filterVal}/> */}

				<TestingPage/>
        
			</div>
		</>
	)
}

export default App
