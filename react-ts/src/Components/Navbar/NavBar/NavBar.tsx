import { useContext } from 'react';
import { IconTheme, RefreshIcon } from '../../../Utilities/Icons/Icons';
import NavBarGreeting from '../NavBarGreeting/NavBarGreeing';
import NavSearch from '../NavSearch/NavSearch';
import Button from '../../UI/Button/Button';
import generalCtx from '../../../store/general-context';
import classes from './NavBar.module.scss';

interface NavBarProps {
  withSearchBar: boolean;
  withRefreshBtn: boolean;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { updateCoins } = useContext(generalCtx);

  return (
    <nav className={classes['nav-bar']}>
      <NavBarGreeting />
      <div className={classes['search-container']}>
        {props.withSearchBar && <NavSearch />}
        <div className={classes.icon}>
          <div>
            <button className={classes['nav-btn']}>
              <div>{IconTheme}</div>
            </button>
          </div>
          {props.withRefreshBtn && (
            <div>
              <Button
                onClick={() => {
                  updateCoins();
                }}
              >
                <div>{RefreshIcon}</div>
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
