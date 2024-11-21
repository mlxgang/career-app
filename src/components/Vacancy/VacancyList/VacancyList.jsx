import { carListData as data } from '@/mock/carListData.js'
import { VacancyCard } from '../VacancyCard/VacancyCard';
import cl from './VacancyList.module.css'

// data.push(...data)

export const VacancyList = () => {
  return (
    <ul className={cl.list}>
      {data.map(card =>
        <VacancyCard card={card}/>
      )}
    </ul>
  )
}