import React from 'react'
import SiderbarRow from './SiderbarRow'
import HomeIcon from '@material-ui/icons/Home'
import HistoryIcon from '@material-ui/icons/History'
import FavoriteIcon from '@material-ui/icons/Favorite'
import BookmarksIcon from '@material-ui/icons/Bookmarks'
import BuildIcon from '@material-ui/icons/Build'
import AssessmentIcon from '@material-ui/icons/Assessment'
import CheckBoxIcon from '@material-ui/icons/CheckBox'
import useStyles from './styles'

const Sidebar = () => {
  const classes = useStyles()

  return (
    <div className={classes.siderbar}>
      <h2 className={classes.title}>MENU</h2>
      <SiderbarRow Icon={HomeIcon} title='Home' />
      <SiderbarRow Icon={HistoryIcon} title='History' />
      <SiderbarRow Icon={FavoriteIcon} title='Liked videos' />
      <SiderbarRow Icon={BookmarksIcon} title='Saved videos' />
      <h2 className={classes.title}>TOOLS</h2>
      <SiderbarRow Icon={BuildIcon} title='Api tester' />
      <SiderbarRow Icon={AssessmentIcon} title='Analytics' />
      <SiderbarRow Icon={CheckBoxIcon} title='Unit test' />
    </div>
  )
}

export default Sidebar
