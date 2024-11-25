import { FilterList } from '@components/Filter/Filterlist/FilterList';
import { VacancyList } from '@components/Vacancy/VacancyList/VacancyList';
import cl from './Main.module.css'

export const Main = () => {
  return (
    <main className={cl.main}>
      <FilterList/>
      <VacancyList/>
    </main>
  )
}