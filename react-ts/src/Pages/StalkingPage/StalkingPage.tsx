import GeneralCtxProvider from '../../store/GeneralContextProvider';

import StalkingCoins from '../../Components/Stalking/StalkingCoins/StalkingCoins';
import Sidemenu from '../../Components/Sidemenu/Sidemenu';
import Header from '../../Components/Header/Header';
import classes from './StalkingPage.module.scss';

const StalkingPage = (): JSX.Element => {
  return (
    <GeneralCtxProvider>
      <div className={classes['stalking-page']}>
        <Sidemenu />
        <Header withSearchBar={false} withRefreshBtn={false} />
        <StalkingCoins />
      </div>
    </GeneralCtxProvider>
  );
};

export default StalkingPage;
