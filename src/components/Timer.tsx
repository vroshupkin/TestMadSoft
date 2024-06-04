import { FC, useEffect, useState } from 'react';
import styles from './Timer.module.sass';
import { addTimeToDate, getDiffStringTime } from '../shared/Date.utils';

export const StopWatch = () => {
	const [isClock, setIsClock] = useState(false);
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);

	const startTimer = useState(new Date())[0];

	useEffect(() => 
	{
		const id = setInterval(
			() => {
				// @ts-ignore
				const date = new Date(new Date() - startTimer);
                
				setSeconds(date.getSeconds());
				setMinutes(date.getMinutes());
			},
			1000
		);

		return () => clearInterval(id);
	}, [])

	useEffect(() => {
		console.log(isClock);
	}, [isClock])
        
    
	return (
		<div className={styles.timer}>
			<div>{`${minutes}:${seconds}`}</div>
			<button onClick={() => setIsClock(!isClock)}>Start timer</button>
		</div>
	)
}



type PropsTimer = {
    hours: number,
    minutes: number,
    seconds: number,
    onTimerComplete?: () => void,
}
export const Timer: FC<PropsTimer> = ({hours, minutes, seconds, onTimerComplete}) => {
	const [nowTime, setNowTime] = useState(new Date())
	const [endTime, setEndTime] = useState(
		addTimeToDate(new Date(), 0, seconds, minutes, hours)
	);
    
	const [isClock, setIsClock] = useState(false);
    
	useEffect(() => 
	{
		const id = setInterval(
			() => { 
				if(nowTime >= endTime)
				{
					onTimerComplete ? onTimerComplete(): '';
					return;
				}
				setNowTime(new Date())
            
			},
			1000
		);

		return () => clearInterval(id);
	}, [])

	// useEffect(() => {
	//     console.log(isClock);
	// }, [isClock])
        
    
	return (
		<div className={styles.timer}>
			<div>{getDiffStringTime(endTime, nowTime)}</div>
			{/* <button onClick={() => setIsClock(!isClock)}>Start timer</button> */}
		</div>
	)
}
