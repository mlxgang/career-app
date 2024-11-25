import { Icon } from '@components/Icon/Icon';
import cl from './VacancyCard.module.css'

/**
 *
 * @param {object} card            - object which will be used to render data in card
 * @param {string} card.title      - vacancy name
 * @param {string} card.salary     - salary on this vacancy
 * @param {string} card.company    - company who provided vacancy
 * @param {string} card.location   - company`s location
 * @param {string} card.experience - required employee`s experience
 *
 */

export const VacancyCard = ({ card }) => {
  return (
    <li>
      <a href="#">
        <article className={`${cl.card} block`}>
          <header className={cl.header}>
            <div className={cl['title-wrapper']}>
              <a className={cl.title}>{card.title}</a>
              <span>{card.salary}</span>
            </div>
          </header>
          
          <button className={cl.hide}>
            <Icon size={16} iconName="hide" className={cl['hide-icon']}/>
          </button>
          
          <section className={cl.footer}>
            <address className={cl.company}>
              <a className={cl['company-name']} href="#">{card.company}</a>
              <a className={cl.city} href="#">{card.location}</a>
            </address>
            <div className={cl.experience}>
              <Icon size={12} iconName="experience" className={cl.icon}/>
              <span>{card.experience}</span>
            </div>
          </section>
        </article>
      </a>
    </li>
  )
}