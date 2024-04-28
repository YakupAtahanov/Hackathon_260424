import React from 'react'
import './Search.css'

const Search = () => {
  return (
    <div className='searchContainer'>
        <form action="" className="search">
            <div className='search-inner-container'>
                <div className="searchborder">
                    <input type="text" className="searchInput" />
                </div>
                <input type="submit" value="Research" className='research-btn' />
            </div>
        </form>
    </div>
  )
}

export default Search