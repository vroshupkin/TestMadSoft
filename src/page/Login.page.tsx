import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as usersApi from "../api/User.api";
import { cookies } from "../shared/Cookies";
import s from './styles/Login.page.module.sass';


export const LoginPage: FC<{updateUserRole: () => void}> = ({updateUserRole}) => 
{
	const navigate = useNavigate();

	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const changeLogin: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setError('');
		setLogin(e.target.value);
	}
	const changePassword: React.ChangeEventHandler<HTMLInputElement> = (e) => 
	{
		setError('')
		setPassword(e.target.value);
	}
	const enter: React.FormEventHandler<HTMLFormElement> = async (event) => 
	{
		event.preventDefault();
		const res = await usersApi.loginUser({login, password});
		const token = await res.text();
		
		if(token.length)
		{
			cookies.set('token', token);
			cookies.set('login', login);
			updateUserRole();
			navigate('/home');
		}
		else
		{
			setError('Что-то пошло не так!')
		}
	}

	return(
		<>
			<div className={s.container}>
				<form className={s.input_container} onSubmit={enter}>
					<label>Логин</label>
					<input type="text" onChange={changeLogin} required/>

					<label>Пароль</label>
					<input type="password" onChange={changePassword} required/>

					<span>{error}</span>

					<button type="submit">Войти</button>
				</form>
			</div>
				
    
		</>)
}

