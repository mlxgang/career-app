import { Icon } from '@components/Icon/Icon';
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
    <>
      {type === 'input' &&
        <label className={cls('block', cl.wrapper)}>
          <Icon size={16} iconName={iconName} className={cl.icon}/>
          <input className={cl.item} placeholder={text}/>
        </label>
        
      }
      {type === 'dropdown' &&
        <div className={cls('block', cl.wrapper)}>
          <Icon size={16} iconName={iconName} className={cl.icon}/>
          <span className={cl.item}>{text}</span>
          <Icon size={12} iconName="chevron" className={cl['dropdown-icon']}/>
        </div>
      }
    </>
  )
}