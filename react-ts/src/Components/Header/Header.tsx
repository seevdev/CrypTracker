
import NavBar from '../Navbar/NavBar/NavBar';


export interface HeaderProps {
  withSearchBar: boolean;
  withRefreshBtn: boolean;
}
const Header = (props: HeaderProps): JSX.Element => {
  return (
    <header>
      
      <NavBar
        withSearchBar={props.withSearchBar}
        withRefreshBtn={props.withRefreshBtn}
      />
    </header>
  );
};
export default Header;
