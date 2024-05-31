import { FC, useState } from 'react'
import styles from './Progressbar.module.sass'

const CompleteBars: FC<{count: number}> = ({count}) => 
	<>
		{Array(count).fill(
			<div className={styles.complete_bar}/>
		)}
	</>

const UncompleteBars: FC<{count: number}> = ({count}) => 
	<>
		{Array(count).fill(
			<div className={styles.uncomplete_bar}/>
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

