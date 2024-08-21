import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../Assets/etienne-delorieux-e5sp18O40yA-unsplash.jpg';
import img2 from '../Assets/nature-untouched-12012161.jpg.webp';
import img3 from '../Assets/pexels-photo-975771.jpeg';
import img4 from '../Assets/Vale-do-javari.webp';
import img5 from '../Assets/rice-field-river-ninh-binh-vietnam-shutterstock_138213581.jpg_da5325c4fa.jpg';
import img6 from '../Assets/amazon_rainforest_mist_1350x.webp';

const ImageSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 500, // Adjust for screens smaller than 768px (like mobile devices)
        settings: {
          slidesToShow: 1, // Show 1 image at a time on mobile
          slidesToScroll: 1,
          autoplaySpeed: 1500,
          
        }
      }
    ]
  };

  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
  ];

  return (
    <div className="slider-container w-[100%] overflow-hidden bg-gray-900">
    <h2 className='text-white text-2xl mb-4 p-3'>Beatiful Moments</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className='h-[400px] bg-slate-800  p-2'>
            <img src={image} alt={`Slide ${index + 1}`} className='h-full w-full object-cover' />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
