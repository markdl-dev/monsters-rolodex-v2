import './search-box.styles.css';

// Never use the ANY keyword

// Type vs Interface
// Interface is extendable, similar to class components
// - you can extend class components to another and inherit all of the methods

interface ISearchBoxProps {
  className: string;
  placeholder?: string; // optional ? (string or null)
}

// extend the interface
// interface ISearchBoxProps extends IOnChangeHandler {
//   className: string;
//   placeholder?: string; // optional ? (string or null)
// }
// interface IOnChangeHandler {
//   onChangeHandler: (a: string) => void
// }

// overload the interface
// interface ISearchBoxProps {
//   onChangeHandler: (a: string) => void
// }

const SearchBox = ({ className, placeholder, onChangeHandler }: ISearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
