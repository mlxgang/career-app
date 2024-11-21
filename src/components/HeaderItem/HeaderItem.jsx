import cl from './HeaderItem.module.css'

/**
 *
 * @param {string}  title     - title of current tab
 * @param {boolean} isActive  - is active current tab
 *
 * */

export const HeaderItem = ({ title, isActive }) => {
  return (
    <li>
      <button className={`${cl.item} ${isActive ? cl.active : ''}`}>
        {title}
      </button>
    </li>
  )
}