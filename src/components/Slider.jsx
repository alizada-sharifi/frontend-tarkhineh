import slider1 from '../assets/images/slider1.jpeg';
import slider2 from '../assets/images/slider2.png';
import Button from './Button';
import {useState, useEffect, useCallback} from 'react';
import {LeftArrow, RightArrow} from './icons';

function Slider() {
  const slides = [
    {image: slider1, title: 'سرسبزی اکباتان دلیل حس خوب شماست!'},
    {image: slider2, title: 'سرسبزی اکباتان دلیل حس خوب شماست!'},
    {image: slider1, title: 'لذت غذای سالم و گیاهی را با ترخینه تجربه کنید!'},
    {image: slider2, title: 'طعم بی نظیر طبیعت'},
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  function prevSlide() {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  }

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-44 md:h-80">
      <div className="w-full h-full relative overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${slides[currentIndex].image})`,
          }}
        >
          <div className="mask bg-black bg-opacity-50 w-full h-full flex flex-col items-center justify-center gap-y-10">
            <h1 className="font-bold text-base text-primary-100 md:text-4xl mt-0">
              {slides[currentIndex].title}
            </h1>
            <Button className="max-w-40" href="/menu">
              {'سفارش آنلاین غذا'}
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-4 absolute bottom-4 left-1/2 transform -translate-x-1/2">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentIndex ? 'bg-primary' : 'bg-white'
            } cursor-pointer`}
          ></div>
        ))}
      </div>
      <button
        className="absolute top-1/2 left-2 transform -translate-y-1/2"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <LeftArrow />
      </button>
      <button
        className="absolute top-1/2 right-2 transform -translate-y-1/2"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <RightArrow />
      </button>
    </div>
  );
}

export default Slider;
