import '../styles/SearchBar.css'

export default function SearchBar () {
  return (
    <div className='header-search'>
      <form className='header-form'>
        <select className='input-select-categ'>
          <option className='option-categ' value='0'>All Categories</option>
          <option className='option-categ' value='1'>Category 01</option>
          <option className='option-categ' value='1'>Category 02</option>
        </select>
        <input className='input-search' placeholder='Search here' />
        <select className='input-select-local'>
          <option className='option-local' value='0'>Location</option>
          <option className='option-local' value='1'>Location 01</option>
          <option className='option-local' value='1'>Location 02</option>
        </select>
        <button className='search-btn'>Search</button>
      </form>
    </div>
  )
}
