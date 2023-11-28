import Image from 'next/image'
// import mockup from '../../../public/assets/mockups/mockup-6.png'
import mockup from '../../../public/assets/sell4.jpg'
// import mockup from '../../../public/assets/sell3.jpg'
import '../styles/Copywriting.css'

export default function Copywriting () {
  return (
    <section className='copy-main-container'>
      <div className='copy-container-backg'>
        <Image placeholder='blur' loading='lazy' alt='imagen principal' src={mockup} className='image-copy-bg' />
      </div>
      <div className='copy-container-text'>
        <div className='copy-container'>
          <h1 className='copywriting'><span className='copyspan'>Sell</span> and <span className='copyspan'>Buy</span> with  <span className='copyspan'>us</span></h1>
        </div>
        <div className='copy-slogan-container'>
          <h3 className='copy-slogan'>Easy, fast and secure</h3>
        </div>
      </div>

      {/* <Image alt='imagen principal' src={mockup} className='image-copy' /> */}
    </section>

  )
}
