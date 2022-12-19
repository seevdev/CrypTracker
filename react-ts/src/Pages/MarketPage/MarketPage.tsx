import Header from '../../Components/Header/Header';
import Sidemenu from '../../Components/Sidemenu/Sidemenu';
import MarketArea from '../../Components/Market/MarketArea/MarketArea';
import classes from './MarketPage.module.scss';

const MarketPage = (): JSX.Element => {
  return (
    <div className={classes['market-area']}>
      <Sidemenu />
      <Header withSearchBar={true} withRefreshBtn={true} pageTitle={'Market'} />
      <MarketArea />
    </div>
  );
};

export default MarketPage;
