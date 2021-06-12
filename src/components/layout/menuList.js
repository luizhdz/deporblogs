import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { Link } from "react-router-dom";



const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
}));

export default function MenuList() {
  const classes = useStyles();
  
  

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListLink path={'/'} icon={ListAltIcon} label={'Home'} />
        <ListLink path={'/blog'} icon={ListAltIcon} label={'Blog'} />
        {/* <ListLink path={EXPENSE_PAGE} icon={ListAltIcon} label={t('expense')} selected={ pathname === EXPENSE_PAGE}/> */}
      </List>
    </div>
  );
}

function ListLink ({path, icon: Icon, label, selected}){
  return(
    <ListItem button component={Link} to={path} selected={selected}>
      <ListItemIcon>
        <Icon />
      </ListItemIcon>
      <ListItemText primary={label} />
    </ListItem >
  )
}