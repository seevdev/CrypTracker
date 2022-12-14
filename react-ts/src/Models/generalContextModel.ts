import { Coin } from './coinModel';

export interface generalContextModel {
  coins: Coin[] | [];
  topCoins: Coin[] | [];
  filteredCoins: Coin[] | [];
  favCoins: Coin[] | [];
  currentCoin: Coin | undefined;
  isSearching: boolean;
  isLoading: boolean;
  statsBtnClicked: boolean;
  statsMenuOpen: boolean;
  timeDifferenceGreater: boolean;
  setFavCoins: (val: Coin[]) => void;
  setTopCoins: (val: Coin[]) => void;
  setFilteredCoins: (val: Coin[]) => void;
  setCoins: (val: Coin[]) => void;
  setCurrentCoin: (val: Coin) => void;
  setStatsBtnClicked: (val: boolean) => void;
  setIsLoading: (val: boolean) => void;
  setStatsMenuOpen: (val: boolean) => void;
  setIsSearching: (val: boolean) => void;
  setTimeDifferenceGreater: (val: boolean) => void;
  updateCoins: () => void;

  value?: any;
}
