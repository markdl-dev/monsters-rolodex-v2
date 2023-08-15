import './search-box.styles.css';

// Never use the ANY keyword

interface ISearchBoxProps {
  className: string;
  placeholder?: string; // optional ? (string or null)
}

// What is the difference?
// Types allows union
// Union - combination of types
// Golden rule - function programming use types, OOP use interface

// type SearchBoxProps = {
//   className: string;
//   placeholder?: string;
//   onChangeHandler: (a: string) => void
// }
//
// type CanadianAddress = {
//   street: string;
//   province: string;
// }
//
// type USAddress = {
//   street: string;
//   state: string;
// }
//
// type Address = CanadianAddress | USAddress;
//
// const Address: Address = {
//   street: 'test',
//   state: 'test',
//   province: 'test'
// }

const SearchBox = ({ className, placeholder, onChangeHandler }: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
