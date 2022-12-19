import { useContext } from 'react';
import { RefreshIcon } from '../../../Utilities/Icons/Icons';
import NavSearch from '../NavSearch/NavSearch';
import Button from '../../UI/Button/Button';
import generalCtx from '../../../store/general-context';
import classes from './NavBar.module.scss';

interface NavBarProps {
  withSearchBar: boolean;
  withRefreshBtn: boolean;
  pageTitle: string;
}

const NavBar = ({
  withRefreshBtn,
  withSearchBar,
  pageTitle,
}: NavBarProps): JSX.Element => {
  const { updateCoins } = useContext(generalCtx);

  return (
    <nav className={classes['nav-bar']}>
      <div className={classes['page-title']}>{pageTitle}</div>
      <div className={classes['search-container']}>
        {withSearchBar && <NavSearch />}
        <div className={classes.icon}>
          {withRefreshBtn && (
            <div>
              <Button
                onClick={() => {
                  updateCoins();
                }}
              >
                <div className={classes['nav-btn']}>{RefreshIcon}</div>
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
