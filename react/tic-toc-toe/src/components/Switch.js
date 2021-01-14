import React from 'react'
import cx from 'classnames'

const Switch = ({ rounded = true, isAscending, onToggle }) => {
  const sliderCX = cx('slider', {
    rounded: rounded
  })

  return (
    <label className='switch'>
      <input type='checkbox' checked={!isAscending} onChange={onToggle} />
      <span className={sliderCX} />
    </label>
  )
}

export default Switch
