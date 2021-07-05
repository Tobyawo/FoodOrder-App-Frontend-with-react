import { Fragment } from 'react';

import HeaderCartButton from './HeaderCartButton';
import quickmealimage2 from '../../assets/quickmealimage2.jpeg'; // we import the image as mealsImage. note that the extension matter here since its not Javascrpt
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>QuickMeals Restaurant</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={quickmealimage2} alt='A table full of delicious food!' />
      </div>
    </Fragment>
  );
};

export default Header;
