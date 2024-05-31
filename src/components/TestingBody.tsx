import { FC, useEffect, useState } from "react"
import s from './TestingBody.module.sass'
import { TOneOf, TTestData, TestData } from "../data/Test"


type TApplyButton = 
{
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}
const ApplyButton: FC<TApplyButton> = ({onClick}) => 
{
	return(
		<button 
			onClick={onClick}
			className={s.apply_button}>Ответить</button>
	)
}

const CheckBoxRow: FC<{text: string, onChange?: (answare: boolean) => void}> = ({text, onChange}) => 
{
	const change: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		if(!onChange) return;
		onChange(!!e.target.value);
	}

	return(
		<>
			<input className={s.checkbox} type="checkbox" onChange={change}/>
			<span className={s.checkbox_text}>{text}</span>
		</>
	)
}

type PropsOneOf = 
{
  checkBoxesNames: string[],
  onChange?: (arr: boolean[]) => void,
}
const ManyOf: FC<PropsOneOf> = ({checkBoxesNames, onChange}) => 
{
	const [answareArr, setAnswareArr] = useState(Array<boolean>(checkBoxesNames.length).fill(false));
	useEffect(() => 
	{
		onChange ? onChange(answareArr) : '';
	}, [answareArr])

	const change = (ind: number) => (answare: boolean) => 
	{
		answareArr[ind] = answare;
		setAnswareArr(answareArr);
	}

	return(
		<div>
			{
				checkBoxesNames.map((text, ind) => 
        	<div className={s.checkbox_container} key={ind}>
        		<CheckBoxRow text={text} onChange={change(ind)}/>
        	</div>
        	)
			}
		</div>
	)
}


type PropsTestingBody = 
{
  data: TTestData,
  onSubmit?: () => void
}
export const TestingBody: FC<PropsTestingBody> = ({data, onSubmit}) => 
{
	return(
		<div>
			<div className={s.testing_text}>{data.text}</div>
			{
				data.type === 'manyOf' ? <ManyOf checkBoxesNames={data.checkBoxesNames}/> :
					''
			}
			
			<ApplyButton onClick={() => onSubmit ? onSubmit() : '' }/>
		</div>
	)
}