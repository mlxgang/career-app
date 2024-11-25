import { VacancyBlock } from '@components/Vacancy/VacancyBlock/VacancyBlock';
import cl from './VacancyList.module.css'

// data.push(...data)

export const VacancyList = () => {
  return (
    <section className={cl.block}>
      <time dateTime="2024-02-05">
        <h2>
          Сегодня, 5 февраля
        </h2>
      </time>
      <VacancyBlock/>
    </section>
  
  )
}