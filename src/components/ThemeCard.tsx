import { FC } from 'react'
import './ThemeCard.sass'

type PropsThemeCard = {
    imgUrl: string,
    name: string,
    bgColor: string
}

export const ThemeCard: FC<PropsThemeCard> = ({imgUrl, name, bgColor}) => {
  return (
    <div className='theme-card'>
        <div className='theme-card-img-container' style={{backgroundColor: bgColor}}>
            <div>
                <img src={imgUrl} alt="" />
            </div>            
        </div>

        <div className='theme-card-name'>
            <div>
                <span>{name}</span>
            </div>            
        </div> 
    </div>
  )
}
