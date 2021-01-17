import React from 'react'
import useStyles from './styles'

const SiderbarRow = ({ Icon, title }) => {
  const classes = useStyles()

  return (
    <div className={classes.siderbarRow}>
      <Icon className={classes.rowIcon} />
      <h2 className={classes.rowTitle}>{title}</h2>
    </div>
  )
}

export default SiderbarRow
