import { FC } from 'react'
import styles from './Progressbar.module.sass'

const CompleteBars: FC<{count: number}> = ({count}) => 
	<>
		{count > 0 && Array(count).fill(null).map((_, index) => 
			<div className={styles.complete_bar} key={index}/>
		)}
	</>

const UncompleteBars: FC<{count: number}> = ({count}) => 
	<>
		{count > 0 && Array(count).fill(null).map((_, index) => 
			<div className={styles.uncomplete_bar} key={index}/>
		)}
	</>

const SelectBar = () => <div className={styles.select_bar}></div>

type PropsProgressBar = {
  count: number,
  selectTest: number
}

export const Progressbar: FC<PropsProgressBar> = ({count, selectTest}) => 
{
	return (
		<div className={styles.progress_bar}>
			<CompleteBars count={selectTest}/>
			<SelectBar/>
			<UncompleteBars count={count - selectTest}/>
		</div>   
	)
}

