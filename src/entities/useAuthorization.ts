import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as userApi from '../api/User.api'
import { cookies } from '../shared/Cookies'
import { TUsersRole } from './Users.utilts'
import { logger_1 } from '../shared/Logger'

const getUserRoles = async (input: {login: string, token: string}) => 
{
	const res = await userApi.getUserRoles(input);
	return res.json();
}

export const useGetUserRoles = () => 
{
	const [roles, setRoles] = useState<TUsersRole[] | null>(null);
	
	useEffect(() => 
	{
		const token = cookies.get('token');
		const login = cookies.get('login');
			
		if(!token)
		{
			return;
		}
			
		getUserRoles({login, token}).then(arr => 
		{	
			if(Array.isArray(arr))
			{
				setRoles(arr);
			}
		})
	}, [])
	
	return roles;
}

export const useAuthorization = () => 
{
	const navigate = useNavigate();
	const [roles, setRoles] = useState<TUsersRole[] | null>(null);

	const updateUserRole = async () => 
	{
		const token = cookies.get('token');
		const login = cookies.get('login');
		
		const arr = await getUserRoles({login, token});
		logger_1(arr);
		Array.isArray(arr) ? setRoles(arr) : navigate('/login');
	}
		
	const logOut = () => 
	{
		cookies.clearMany('token', 'login');
		setRoles(null);
	}

	useEffect(() => 
	{
		updateUserRole();
	}, [])
	

	return [roles, logOut, updateUserRole] as const;
}
