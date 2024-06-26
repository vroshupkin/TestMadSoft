import { FC, useEffect, useState } from "react"
import { TTestData } from "../data/Test.data"
import { TestLocalStorage } from "../entities/TestLocalStorage"
import s from './TestingBody.module.sass'


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
	}, [answare, onChange])

	
	return(
		<div>
			<div>Выберите один вариант</div>
			{
				variantsNames.map((text, ind) => 
					<div className={s.checkbox_container} key={ind}>
						<label>
							<input 
								type="checkbox" 
								className={s.checkbox}
								checked={ind === answare}
								onChange={() => setAnsware(ind)}							
							/>
							{text}
						</label>
					</div>
				)
			}
		</div>
	)
}

type PropsInput = 
{
	value: string,
	onChange: (string: string) => void	
}

const Input: FC<PropsInput> = ({value, onChange}) => 
{
	return(
		<div>
			<div>Введите ответ</div>
			<input 
				type="text"
				value={value}
				onChange={e => onChange(e.target.value)}
			/>
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
	const [answareArr, setAnswareArr] = useState<boolean[]>(Array<boolean>(variantsNames.length).fill(false));

	useEffect(() => 
	{	
		setAnswareArr(Array<boolean>(variantsNames.length).fill(false));
	}, [variantsNames])
	
	useEffect(() => 
	{
		onChange ? onChange(answareArr) : '';
	}, [answareArr, onChange])


	const change = (ind: number) => (e: React.ChangeEvent<HTMLInputElement>)  => 
	{
		const arr = [...answareArr];
		arr[ind] = e.target.checked;
		setAnswareArr(arr);
	}

	return(
		<div>
			<div>Выберите один или несколько вариантов</div>
			{
				variantsNames.map((text, ind) => 
				{
					return(
						<div className={s.checkbox_container} key={ind}>
							<label>
								<input 
									className={s.checkbox}
									checked={answareArr[ind]}
									onChange={change(ind)}
									type="checkbox" 
								/>
								{text}
							</label>
						</div>
					)
				})
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
	const [answare, setAnsware] = useState<string | number | boolean[] | undefined>(undefined);
	
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
			else if(typeof answare === 'string')
			{
				testLocalStorage.setInput(index, answare);
			}

			setAnsware(undefined);
			onSubmit()
		}
	}
	
	const {type} = data;
	const variantsNames = 'variantsNames' in data ? data.variantsNames : [];
	
	return(
		<div>
			<div className={s.testing_text}>{data.text}</div>
			{
				type === 'manyOf' ? <ManyOf variantsNames={variantsNames} onChange={setAnsware}/> :
					type === 'oneOf' ? <OneOf variantsNames={variantsNames} onChange={setAnsware}/> :
						type === 'input' ? <Input value={typeof answare === 'string'? answare : ''} onChange={setAnsware}/> : 
							''
			}
			<ApplyButton onClick={submit}/>
		</div>
	)
}