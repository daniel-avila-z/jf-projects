import '../styles/Header.css'
import SearchBar from './SearchBar'

export default function Header () {
  return (
    <header>
      <div className='header-main-container'>
        <div className='header-title-container'>
          <h1 className='header-title'>JF PROJECTS</h1>
        </div>
        <SearchBar />
        <div className='user-main-container'>
          <span className='user-login'><a className='user-link' blank='true' href=''>Login</a></span>
          <span className='user-span'>|</span>
          <span className='user-signup'><a className='user-link' blank='true' href=''>Sign Up</a></span>
        </div>
      </div>

    </header>
  )
}
