import { FilterList } from '@components/Filter/Filterlist/FilterList';
import { VacancyBlock } from '@components/Vacancy/VacancyBlock/VacancyBlock';
import cl from './Main.module.css'

export const Main = () => {
  return (
    <main className={cl.main}>
      <FilterList/>
      <VacancyBlock/>
    </main>
  )
}