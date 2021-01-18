import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import useStyles from './styles'

const VideoItem = ({ video, onVideoSelect }) => {
  const classes = useStyles()

  return (
    <div className={classes.videoSection}>
      <Paper className={classes.videoItem} onClick={() => onVideoSelect(video)}>
        <img className={classes.image} alt='thumbnail' src={video.snippet.thumbnails.medium.url} />
        <Typography variant='subtitle2'>
          <b>{video.snippet.title}</b>
        </Typography>
      </Paper>
    </div>
  )
}

export default VideoItem
