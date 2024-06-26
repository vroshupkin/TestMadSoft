import { FC } from "react"
import s from './LeftPanel.module.sass'
// import { Logout } from "../entities/Users.utilts"
import { useNavigate } from "react-router-dom"
import { TUsersRole } from "../entities/Users.utilts"
import { cookies } from "../shared/Cookies"
import { logger_1 } from "../shared/Logger"



type TPropsLeftPanel = 
{
	roles: TUsersRole[] | null,
	logOut: () => void,
}
export const LefetPanel: FC<TPropsLeftPanel> = ({roles, logOut}) => 
{
	const navigate = useNavigate();

	const Logout = () => 
	{
		cookies.clearMany('token', 'login');
		logOut();
		navigate('/login');
	}
	return (
		roles && <>
			<div className={s.container}>			
				<div className={s.bar}>Мои тесты</div>
				<div className={s.bar}>Профиль</div>
				<div className={s.bar} onClick={Logout}>Выйти</div>
			</div>
		</>
	)
}