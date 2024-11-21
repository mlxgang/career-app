import icons12 from '@assets/icons-12.svg?url';
import icons16 from '@assets/icons-16.svg?url';
import { cls } from '@utils/classJoin';
import cl from './FilterItem.module.css'

/**
 *
 * @param {'input'|'dropdown'}  type      - type of element
 * @param {string}              iconName  - name of icon
 * @param {string}              text      - text which placed in element
 *
 * */

export const FilterItem = ({ iconName, type, text }) => {
  return (
    <label className={cls('block', cl.wrapper)}>
      <svg className={cl.icon}>
        <use href={icons16 + '#' + iconName}></use>
      </svg>
      {type === 'input' &&
        <input className={cl.item} placeholder={text}/>
      }
      {type === 'dropdown' &&
        <>
          <span className={cl.item}>{text}</span>
          <svg className={cl['dropdown-icon']}>
            <use href={icons12 + '#chevron'}></use>
          </svg>
        </>
      }
    </label>
  )
}