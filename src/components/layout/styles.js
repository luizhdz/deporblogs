import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  paper: {
    width: '100%',
    height: '100%',
    display: 'flex',
    padding: theme.spacing(2)
  },
  menu: {  
    position: "relative",
    zIndex: 90,
    transition: "all 1s ease 0s",
    overflowX: "hidden"
  },
  padding2:{
    padding: theme.spacing(2)
  }
}));