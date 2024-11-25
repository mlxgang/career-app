import data from '@/mock/cardListData.json';
import { VacancyCard } from '@components/Vacancy/VacancyCard/VacancyCard';
import cl from './VacancyBlock.module.css'

export const VacancyBlock = () => {
  return (
    <ul className={cl.list}>
      {data.map(card =>
        <VacancyCard card={card} key={card.company}/>
      )}
    </ul>
  )
}