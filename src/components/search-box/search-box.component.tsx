import { ChangeEvent } from "react";
import './search-box.styles.css';

// Never use the ANY keyword

// If you want your change handler to register some kind of event
// - bring in the change event, -> this is the event definition
// - ChangeEventHandler -> this is the function definition
// - this means you can define your own function definition
// - if you want to define your own function

// previous code just using the function definition
// type SearchBoxProps = {
//   className: string;
//   placeholder: string;
//   onChangeHandler: ChangeEventHandler<HTMLInputElement>;
// }

type SearchBoxProps = {
  className: string;
  placeholder: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  // onChangeHandler: (event: ChangeEvent<HTMLInputElement>, can also add additional parameters) => boolean; // you can change this
}

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
