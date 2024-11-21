import { FilterItem } from '@components/Filter/FilterItem/FilterItem';
import cl from './FilterList.module.css'

export const FilterList = () => {
  return (
    <section className={cl.list}>
      <FilterItem iconName="location" type="input" text="Город"/>
      <FilterItem iconName="briefcase" type="dropdown" text="Тип занятости"/>
      <FilterItem iconName="filter" type="dropdown" text="Дополнительные фильтры"/>
    </section>
  )
}