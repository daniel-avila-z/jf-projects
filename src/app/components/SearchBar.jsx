import '../styles/SearchBar.css'

export default function SearchBar () {
  return (
    <div className='header-search'>
      <form className='header-form'>
        <select className='input-select-categ'>
          <option className='option-categ' value='All'>All Categories</option>
          <option value='electronics' className='option-categ'>Electronics</option>
          <option value='clothing' className='option-categ'>Clothing</option>
          <option value='books' className='option-categ'>Books</option>
          <option value='home-and-kitchen' className='option-categ'>Home and Kitchen</option>
          <option value='sports-and-outdoors' className='option-categ'>Sports and Outdoors</option>
          <option value='beauty-and-personal-care' className='option-categ'>Beauty and Personal Care</option>
          <option value='toys-and-games' className='option-categ'>Toys and Games</option>
          <option value='automotive' className='option-categ'>Automotive</option>
          <option value='health-and-household' className='option-categ'>Health and Household</option>
          <option value='tools-and-home-improvement' className='option-categ'>Tools and Home Improvement</option>
        </select>
        <input className='input-search' placeholder='Search here' />
        <select className='input-select-local'>
          <option className='option-local' value='Location'>Location</option>
          <option className='option-local' value='Alabama'>Alabama</option>
          <option className='option-local' value='Alaska'>Alaska</option>
          <option className='option-local' value='Arizona'>Arizona</option>
          <option className='option-local' value='Arkansas'>Arkansas</option>
          <option className='option-local' value='California'>California</option>
          <option className='option-local' value='Colorado'>Colorado</option>
          <option className='option-local' value='Connecticut'>Connecticut</option>
          <option className='option-local' value='Delaware'>Delaware</option>
          <option className='option-local' value='Florida'>Florida</option>
          <option className='option-local' value='Georgia'>Georgia</option>
          <option className='option-local' value='Hawái'>Hawái</option>
          <option className='option-local' value='Idaho'>Idaho</option>
          <option className='option-local' value='Illinois'>Illinois</option>
          <option className='option-local' value='Indiana'>Indiana</option>
          <option className='option-local' value='Iowa'>Iowa</option>
          <option className='option-local' value='Kansas'>Kansas</option>
          <option className='option-local' value='Kentucky'>Kentucky</option>
          <option className='option-local' value='Luisiana'>Luisiana</option>
          <option className='option-local' value='Maine'>Maine</option>
          <option className='option-local' value='Maryland'>Maryland</option>
          <option className='option-local' value='Massachusetts'>Massachusetts</option>
          <option className='option-local' value='Míchigan'>Míchigan</option>
          <option className='option-local' value='Minnesota'>Minnesota</option>
          <option className='option-local' value='Misisipi'>Misisipi</option>
          <option className='option-local' value='Misuri'>Misuri</option>
          <option className='option-local' value='Montana'>Montana</option>
          <option className='option-local' value='Nebraska'>Nebraska</option>
          <option className='option-local' value='Nevada'>Nevada</option>
          <option className='option-local' value='Nuevo Hampshire'>Nuevo Hampshire</option>
          <option className='option-local' value='Nueva Jersey'>Nueva Jersey</option>
          <option className='option-local' value='Nuevo México'>Nuevo México</option>
          <option className='option-local' value='Nueva York'>Nueva York</option>
          <option className='option-local' value='Carolina del Norte'>Carolina del Norte</option>
          <option className='option-local' value='Dakota del Norte'>Dakota del Norte</option>
          <option className='option-local' value='Ohio'>Ohio</option>
          <option className='option-local' value='Oklahoma'>Oklahoma</option>
          <option className='option-local' value='Oregón'>Oregón</option>
          <option className='option-local' value='Pensilvania'>Pensilvania</option>
          <option className='option-local' value='Rhode Island'>Rhode Island</option>
          <option className='option-local' value='Carolina del Sur'>Carolina del Sur</option>
          <option className='option-local' value='Dakota del Sur'>Dakota del Sur</option>
          <option className='option-local' value='Tennessee'>Tennessee</option>
          <option className='option-local' value='Texas'>Texas</option>
          <option className='option-local' value='Utah'>Utah</option>
          <option className='option-local' value='Vermont'>Vermont</option>
          <option className='option-local' value='Virginia'>Virginia</option>
          <option className='option-local' value='Washington'>Washington</option>
          <option className='option-local' value='Virginia Occidental'>Virginia Occidental</option>
          <option className='option-local' value='Wisconsin'>Wisconsin</option>
          <option className='option-local' value='Wyoming'>Wyoming</option>
        </select>
        <button className='search-btn'>Search</button>
      </form>
    </div>
  )
}
