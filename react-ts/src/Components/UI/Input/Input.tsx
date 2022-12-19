
import { InputProps } from 'react-html-props';
import classes from './Input.module.scss';

interface InputCustomProps {
  searchHandler?: () => {};
  label?: string;
}

const Input = (props: InputCustomProps & InputProps): JSX.Element => {
  return (
    <div className={classes['input-container']}>
      <label>{props.label}</label>
      <input onChange={props.searchHandler} {...props} value={props.value} />
    </div>
  );
};

export default Input;
