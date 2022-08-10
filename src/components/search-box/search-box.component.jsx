import './search-box.styles.css'

const SearchBox = ({onSearchChangeHandler, className, placeHolder}) =>
    <input 
        className={`${className}`} 
        type='search' 
        placeholder={`${placeHolder}`}
        onChange={onSearchChangeHandler}
    />

export default SearchBox;