import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import useStyles from './styles'

const VideoDetail = ({ video }) => {
  const classes = useStyles()

  if (!video) return <div>Loading...</div>
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

  return (
    <>
      <Paper elevation={6} className={classes.videoDetail}>
        <iframe
          frameBorder='0'
          height='100%'
          width='100%'
          title='Video Player'
          src={videoSrc}
        />
      </Paper>
      <Paper elevation={6} className={classes.info}>
        <Typography elevation={6}>
          <b>{video.snippet.title} - {video.snippet.channelTitle}</b>
        </Typography>
        <div className={classes.channelTitle}>{video.snippet.channelTitle}</div>
        <div className={classes.description}>{video.snippet.description}</div>
      </Paper>
    </>
  )
}

export default VideoDetail
