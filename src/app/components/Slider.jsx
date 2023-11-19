'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import Foto1 from '../../../public/assets/sell2.jpg'
import Foto2 from '../../../public/assets/sell.jpg'
import Foto3 from '../../../public/assets/blackfriday.jpg'
// import Arrowl from '../../../public/assets/arrow-left.png'
// import Arrowr from '../../../public/assets/arrow-right.png'
import '../styles/Slider.css'

export default function Slider () {
  let slideIndex = 1

  useEffect(() => {
    showSlides(slideIndex)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function plusSlides (n) {
    showSlides(slideIndex += n)
  }

  function currentSlide (n) {
    showSlides(slideIndex = n)
  }

  function showSlides (n) {
    let i
    const slides = document.getElementsByClassName('mySlides')
    const dots = document.getElementsByClassName('dot')
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = 'none'
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '')
    }
    slides[slideIndex - 1].style.display = 'block'
    dots[slideIndex - 1].className += ' active'
  }

  return (
    <div className='slider-main-container'>
      {/* Slideshow container */}
      <div className='slider-container'>

        {/* Full-width images with number and caption text */}
        <div className='mySlides fade'>
          {/* <div className='numbertext'>1 / 3</div> */}
          <Image className='slider-img' alt='s' src={Foto1} />
          <div className='text'>Caption Text</div>
        </div>

        <div className='mySlides fade'>
          {/* <div className='numbertext'>2 / 3</div> */}
          <Image className='slider-img' alt='s' src={Foto2} />
          <div className='text'>Caption Two</div>
        </div>

        <div className='mySlides fade'>
          {/* <div className='numbertext'>3 / 3</div> */}
          <Image className='slider-img' alt='s' src={Foto3} />
          <div className='text'>Caption Three</div>
        </div>

        {/* Next and previous buttons */}
        <a className='prev' onClick={() => plusSlides(-1)}>&#10094;</a>
        <a className='next' onClick={() => plusSlides(1)}>&#10095;</a>
      </div>
      <br />

      {/* The dots/circles */}
      <div style={{ textAlign: 'center' }}>
        <span className='dot' onClick={() => currentSlide(1)} />
        <span className='dot' onClick={() => currentSlide(2)} />
        <span className='dot' onClick={() => currentSlide(3)} />
      </div>
    </div>
  )
}

// export default function Slider () {
//   const [currentImage, setCurrentImage] = useState(0)
//   const images = [Foto1, Foto2, Foto3]
//   const handleNext = () => {
//     setCurrentImage((prevImage) => (prevImage === images.length - 1 ? 0 : prevImage + 1))
//   }
//   const handlePrev = () => {
//     setCurrentImage((prevImage) => (prevImage === 0 ? images.length - 1 : prevImage - 1))
//   }
//   return (
//     <div className='carousel-main-container'>
//       <button className='carousel-btn' onClick={handlePrev}>
//         <Image className='carousel-icon-l' src={Arrowl} alt='arrow' />
//       </button>
//       <div className='carousel-image-container'>
//         <Image className='carousel-image' src={Image[currentImage]} alt={`Imagen ${currentImage + 1}`} />
//       </div>
//       <button className='carousel-btn' onClick={handleNext}>
//         <Image className='carousel-icon-r' src={Arrowr} alt='arrow' />
//       </button>
//     </div>
//   )
// }
// export default function Slider () {
//   const [slideIndex, setSlideIndex] = useState(0)
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setSlideIndex((prevIndex) => (prevIndex + 1) % 3)
//     }, 5000)
//     return () => clearTimeout(timer)
//   }, [slideIndex])
//   return (
//     <div>
//       {/* <h2>Automatic Slideshow</h2>
//       <p>Change image every 2 seconds:</p> */}
//       <div className={styles.slideshowContainer}>
//         <div className={`${styles.mySlides} ${styles.fade}`} style={{ display: slideIndex === 0 ? 'block' : 'none' }}>
//           <div className={styles.numbertext}>1 / 3</div>
//           <Image alt='foto1' src={Foto1} />
//           <div className={styles.text}>Caption Text</div>
//         </div>
//         <div className={`${styles.mySlides} ${styles.fade}`} style={{ display: slideIndex === 1 ? 'block' : 'none' }}>
//           <div className={styles.numbertext}>2 / 3</div>
//           <Image alt='foto2' src={Foto2} />
//           <div className={styles.text}>Caption Two</div>
//         </div>
//         <div className={`${styles.mySlides} ${styles.fade}`} style={{ display: slideIndex === 2 ? 'block' : 'none' }}>
//           <div className={styles.numbertext}>3 / 3</div>
//           <Image alt='foto3' src={Foto3} />
//           <div className={styles.text}>Caption Three</div>
//         </div>
//       </div>
//       <br />
//       <div>
//         <span className='dot' />
//         <span className='dot' />
//         <span className='dot' />
//       </div>
//     </div>
//   )
// }
