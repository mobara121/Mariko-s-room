import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #ff9a9e 60%, #fad0c4 99%, #fad0c4 100%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    margin: '20px',
  },
  label: {
    textTransform: 'capitalize',
    fontFamily: 'IndieFlower',
    fontSize: '20px',
  },
});

function Menubar() {
  const classes =useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

    return (
      <div className="Menubar">
        <Button 
        classes={{
          root: classes.root,
          label: classes.label,
        }}
        aria-controls="simple-menu" 
        aria-haspopup="true" 
        onClick={handleClick}>
        Open Menu
      </Button>
      <Menu
        
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem className={classes.label} onClick={handleClose} component={Link} to="/">Home</MenuItem>
        <MenuItem className={classes.label} onClick={handleClose} component={Link} to="/aboutme">About Me</MenuItem>
        <MenuItem className={classes.label} onClick={handleClose} component={Link} to="/makeup">Fashion & Makeup</MenuItem>
        <MenuItem className={classes.label} onClick={handleClose} component={Link} to="/cooking">Cooking</MenuItem>
        <MenuItem className={classes.label} onClick={handleClose} component={Link} to="/romeo">Romeo</MenuItem>
        <MenuItem className={classes.label} onClick={handleClose} component={Link} to="/roomdecor">Room Decor</MenuItem>
        <MenuItem className={classes.label} onClick={handleClose} component={Link} to="/volleyball">Volleyball</MenuItem>
      </Menu>
      </div>
    );
  }
  
  export default Menubar;