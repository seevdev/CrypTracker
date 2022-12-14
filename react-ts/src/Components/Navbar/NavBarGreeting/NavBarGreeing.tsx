import classes from './NavBarGreeting.module.scss';

const NavBarGreeting = (): JSX.Element => {
  const date = new Date();
  const hours = date.getHours();
  let greeting = 'Hi';
  if (hours > 4 && hours < 12) {
    greeting = 'Morning';
  } else if (hours > 17 && hours <= 23) {
    greeting = 'Evening';
  } else if (hours > 0 && hours < 4) {
    greeting = 'Night';
  }

  return (
    <div className={classes.greeting}>
      <img src={'https://randomuser.me/api/portraits/men/79.jpg'} />
      <h2>{`${greeting} Sam`}</h2>
    </div>
  );
};
export default NavBarGreeting;
