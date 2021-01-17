import { makeStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'

export default makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    backgroundColor: 'white'
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  searchBar: {
    display: 'flex',
    flexGrow: 1,
    margin: '0 2rem 0 4rem'
  },
  input: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    fontSize: 'inherit',
    padding: '.4em',
    border: '1px solid #777'
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '180px'
  },
  avatar: {
    color: theme.palette.getContrastText(grey[900]),
    backgroundColor: grey[900],
    textTransform: 'uppercase',
    width: '60px',
    height: '60px',
    minWidth: '54px',
    borderRadius: '50%'
  },
  siderbar: {
    flex: 0.2
  },
  title: {
    height: 1,
    border: 0,
    backgroundColor: 'ligthgray',
    marginTop: '11px',
    marginBottom: '10px'
  },
  siderbarRow: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    '&:hover': {
      backgroundColor: 'lightgray',
      cursor: 'pointer'
    }
  },
  rowIcon: {
    color: '#606060',
    fontSize: 'large !important',
    '&:hover': {
      color: 'red'
    }
  },
  rowTitle: {
    flex: 1,
    marginLeft: '20px',
    fontSize: '12px',
    fontWeight: 500,
    '&:hover': {
      fontWeight: 'bold'
    }
  },
  videoDetail: {
    height: '50%',
    width: '100%'
  },
  info: {
    display: 'flex',
    marginTop: '10px',
    paddingRight: '30px'
  },
  channelTitle: {
    fontSize: '14px',
    marginBottom: '5px'
  },
  description: {
    fontSize: '14px',
    color: 'gray'

  },
  videoSection: {

  },
  videoItem: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  },
  image: {
    marginRight: '20px',
    width: '50%',
    height: '50%'
  }

}))
