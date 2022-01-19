import { Fragment } from "react";
import classes from './Header.module.css';
import mealsImg from '../../assets/meals.jpg';
import CartButton from "./CartButton";

const Header = (props) => {
    return (
      <Fragment>
        <header className={classes.header}>
          <h1>Foodie</h1>
          <CartButton onClick={props.onShown}/>
        </header>
        <div className={classes['main-image']}>
          <img src={mealsImg} alt="Say yes to food!" />
        </div>
      </Fragment>
    );
};

export default Header;