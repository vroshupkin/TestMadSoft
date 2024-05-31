import { FC } from "react"
import s from './TestingBody.module.sass'

type PropsTestingBody = 
{
  text: string
}

const ApplyButton: FC = () => 
{
	return(
		<button className={s.apply_button}>Ответить</button>
	)
}

const CheckBoxRow: FC<{text: string}> = ({text}) => 
{
	return(
		<>
			<input type="checkbox"/>
			<span>{text}</span>
		</>
	)
}

const Testes: FC = () => 
{
	return(
		<div>
			<div>
				<CheckBoxRow text={'HTML, CSS, JAVASCRIPT'}/>
			</div>
			<div>
				<CheckBoxRow text={'HTML, CSS, JAVASCRIPT'}/>
			</div>
			
		</div>
	)
}

export const TestingBody: FC<PropsTestingBody> = ({text}) => 
{
	return(
		<div>
			<div className={s.testing_text}>{text}</div>
			<Testes/>
			<ApplyButton/>
		</div>
	)
}