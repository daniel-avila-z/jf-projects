import '../styles/Header.css'
import SearchBar from './SearchBar'

export default function Header () {
  return (
    <header>
      <div className='header-main-container'>
        <div className='header-title-container'>
          <h1 className='header-title'>JF Projects</h1>
        </div>
        <SearchBar />
      </div>

    </header>
  )
}
