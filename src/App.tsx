
import { Route, Routes } from 'react-router-dom';
import styles from './App.module.sass';
import { LefetPanel } from './components/LeftPanel';
import { useAuthorization } from './entities/useAuthorization';
import { HomePage } from './page/Home.page';
import { LoginPage } from './page/Login.page';
import { TestingPage } from './page/Testing.page';



function App() 
{

	const [roles, logOut, updateUserRole] = useAuthorization();

	return (
		<div className={styles.app_container}>
			<LefetPanel logOut={logOut} roles={roles}/>
				
			<Routes>
				<Route path='/' element={<HomePage/>}/>
				<Route path='/home' element={<HomePage/>}/>
				<Route path='/login' element={<LoginPage updateUserRole={updateUserRole}/>} />
				<Route path='/test' element={<TestingPage/>} />
			</Routes>
		</div>
	)
}

export default App
