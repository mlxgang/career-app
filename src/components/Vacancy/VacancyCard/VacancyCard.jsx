import icons12 from '@assets/icons-12.svg?url'
import icons16 from '@assets/icons-16.svg?url'
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
            <svg className={cl['hide-icon']}>
              <use href={`${icons16}#hide`}></use>
            </svg>
          </button>
          
          <section className={cl.footer}>
            <address className={cl.company}>
              <a className={cl['company-name']} href="#">{card.company}</a>
              <a className={cl.city} href="#">{card.location}</a>
            </address>
            <div className={cl.experience}>
              <svg className={cl.icon}>
                <use href={`${icons12}#experience`}></use>
              </svg>
              <span>{card.experience}</span>
            </div>
          </section>
        </article>
      </a>
    </li>
  )
}