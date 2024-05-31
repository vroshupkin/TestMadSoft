import { FC, useState } from "react"
import './ThemeSelector.sass'

type PropsThemeRow = {
  children: string,
  selectValue: string,
  onChange: (str: string) => void
}
const ThemeRow: FC<PropsThemeRow> = ({children, selectValue, onChange}) => 
{
  return(   
     <div onClick={() => onChange(children)}
      className={'theme-row ' + (selectValue === children ? 'theme-row-select' : 'theme-row-non_select')}>
        <div>
          <span>{children}</span>
        </div>
      </div>
  )
}

type PropsThemeSelector = {
  onChange: (v: string) => void  
}
export const ThemeSelector: FC<PropsThemeSelector> = ({onChange}) => {
  const changeHanlder = (str: string) => {
    setSelectValue(str);
    onChange(
      str === 'Все темы' ? '' :
      str === 'Путешествия' ? 'Страны и столицы' : str)
  }

  const [selectValue, setSelectValue] = useState('Все темы');

  return (
    <>
      <div className='theme-selector-container'>
        {[
          'Все темы', 'Логика и мышление', 'Загадки', 'Головоломки', 'Путешествия'
        ].map((str, i) => 
          <ThemeRow key={i} selectValue={selectValue} onChange={changeHanlder}>{str}</ThemeRow>)
        }
      </div>

      
    </>
  )
}