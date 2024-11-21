import { HeaderItem } from '@components/HeaderItem/HeaderItem';
import { Logo } from '@components/Logo/Logo';
import cl from './Header.module.css'

export const Header = () => {
  return (
    <header className={cl.header}>
      <div className={cl.wrapper}>
        <Logo/>
        <nav>
          <ul className={cl.navigation}>
            <HeaderItem title="Поиск вакансий" isActive={true}/>
            <HeaderItem title="Избранные вакансии" isActive={false}/>
          </ul>
        </nav>
      </div>
    </header>
  )
}