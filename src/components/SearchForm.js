import React from 'react'


const SearchForm = (props) => {
  return(
    <div>
      <form  onSubmit={props.handleSubmit}>
        <input className="searchInput" type="text" name="search"/>
        <input className="searchSubmit" type="submit"/>
      </form>
    </div>
  )
}

export default SearchForm;
