import { VacancyList } from '../VacancyList/VacancyList';
import cl from './VacancyBlock.module.css'

export const VacancyBlock = () => {
  return (
    <section className={cl.block}>
      <time dateTime="2024-02-05">
        <h2>
          Сегодня, 5 февраля
        </h2>
      </time>
      <VacancyList/>
    </section>
  )
}