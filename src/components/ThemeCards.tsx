import { FC, useEffect, useState } from "react"
import './ThemeCards.sass'
import { TApi, themeCardsApi } from "../api/ThemeCards.api"
import { ThemeCard } from "./ThemeCard"

type PropsThemeCards = 
{
    filterVal: string
} 

export const ThemeCards: FC<PropsThemeCards> = ({filterVal}) => 
{
    const [val, setVal] = useState<TApi[]>([]);

    useEffect(() => {
        themeCardsApi().then(setVal)
    }, [])

    
    return(
        <div className='theme-cards-container'>
            {val
                .filter(v => filterVal === ''? true : v.tags.includes(filterVal))
                .map((v, i) =>
                <ThemeCard key={i} bgColor={v.bgColor} imgUrl={v.image} name={v.name}/>
            )}           
        </div>
    )
}