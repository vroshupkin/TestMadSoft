import { FC, useEffect, useRef, useState } from "react"
import s from './TestingBody.module.sass'
import { TOneOf, TTestData, FrontEndTest } from "../data/Test.data"
import { TestLocalStorage } from "../utils/TestLocalStorage"


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

type PropsCheckBoxRow = 
{
  text: string,
  onChange?: (answare: boolean) => void,
  value?: boolean
}
const CheckBoxRow: FC<PropsCheckBoxRow> = ({text, onChange, value}) => 
{
	const inputRef = useRef<HTMLInputElement>(null);
  
	useEffect(() => 
	{		
		if(inputRef.current)
		{
			inputRef.current.checked = false;
			console.log(`inputRef.current.checked = ${inputRef.current.checked}`)
			
		}
	}, [])

	const change: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		if(!onChange) return;

		onChange(e.target.checked);
	}
  
	if(inputRef.current && value != undefined)
	{
		inputRef.current.checked =  value;
	}

	return(
		<>
			<input ref={inputRef} className={s.checkbox} type="checkbox" onChange={change}/>
			<span className={s.checkbox_text}>{text}</span>
		</>
	)
}

type PropsOneOf = 
{
  variantsNames: string[],
  onChange?: (ind: number) => void,
}
const OneOf: FC<PropsOneOf> = ({variantsNames, onChange}) => 
{
	const [answare, setAnsware] = useState(-1);

	useEffect(() => 
	{
		onChange ? onChange(answare) : '';
	}, [answare])

	const change = (index: number, answare: boolean) => 
	{
		if(answare === true)
			setAnsware(index)
	}

  
	return(
		<div>
			<div>Выберите один вариант</div>
			{
				variantsNames.map((text, ind) => 
        	<div className={s.checkbox_container} key={ind}>
        		<CheckBoxRow 
							value={ind === answare}
							text={text} onChange={(answare) => change(ind, answare)} 
						/>
        	</div>
        	)
			}
		</div>
	)
}


type PropsManyOf = 
{
  variantsNames: string[],
  onChange?: (arr: boolean[]) => void,
}
const ManyOf: FC<PropsManyOf> = ({variantsNames, onChange}) => 
{
	const [answareArr, setAnswareArr] = useState(Array<boolean>(variantsNames.length).fill(false));
	useEffect(() => 
	{
		onChange ? onChange(answareArr) : '';
	}, [answareArr])

	const change = (ind: number) => (answare: boolean) => 
	{
		// console.log(ind, answare);
		
		answareArr[ind] = answare;
		setAnswareArr(answareArr);
	}

	return(
		<div>
			<div>Выберите один или несколько вариантов</div>
			{
				variantsNames.map((text, ind) => 
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
  index: number,
  onSubmit?: () => void,
  testLocalStorage: TestLocalStorage,
  
}
export const TestUnit: FC<PropsTestingBody> = ({data, onSubmit, testLocalStorage, index}) => 
{
	const [answare, setAnsware] = useState<number| boolean[] | undefined>(undefined);
	useEffect(() => 
	{	
		console.log(index)
		
	}, [index])

	const submit = () => 
	{

		if(onSubmit && answare != undefined)
		{
			if(typeof answare === 'number')
			{
				testLocalStorage.setOneOf(index, answare);
			}
			else if(Array.isArray(answare))
			{
				testLocalStorage.setManyOf(index, answare);
			}

			console.log(answare)
			
			onSubmit()

		}

		// console.log(data);
	}
	
  
	const {type, variantsNames} = data;
  
	return(
		<div>
			<div className={s.testing_text}>{data.text}</div>
			{
				type === 'manyOf' ? <ManyOf variantsNames={variantsNames} onChange={setAnsware}/> :
					type === 'oneOf' ? <OneOf variantsNames={variantsNames} onChange={setAnsware}/> :
						''
			}
			
			<ApplyButton onClick={submit}/>
		</div>
	)
}