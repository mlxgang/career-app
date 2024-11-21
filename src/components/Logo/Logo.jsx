import logo from '@assets/logo.svg'
import cl from '@components/Logo/Logo.module.css';

export const Logo = () => {
  return (
    <div className={cl.logo}>
      <a href="#">
        <img src={logo} alt="Логотип проекта Career App"/>
      </a>
    </div>
  )
}