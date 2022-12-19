import NavBar from '../Navbar/NavBar/NavBar';

export interface HeaderProps {
  withSearchBar: boolean;
  withRefreshBtn: boolean;
  pageTitle: string;
}
const Header = ({
  withRefreshBtn,
  withSearchBar,
  pageTitle,
}: HeaderProps): JSX.Element => {
  return (
    <header>
      <NavBar
        withSearchBar={withSearchBar}
        withRefreshBtn={withRefreshBtn}
        pageTitle={pageTitle}
      />
    </header>
  );
};
export default Header;
