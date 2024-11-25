import icons12 from '@assets/icons-12.svg?url'
import icons16 from '@assets/icons-16.svg?url'

/**
 *
 * @param {12|16}   size      - icon size
 * @param {string}  iconName  - svg sprite name
 * @param {string}  className - className
 *
 * */

const icons = {
  12: icons12,
  16: icons16
}

export const Icon = ({ size, className, iconName }) => {
  return (
    <svg className={className}>
      <use href={icons[size] + '#' + iconName}></use>
    </svg>
  )
}