import {Phone, Location, Clock, LeftArrow, RightArrow} from '../icons/index';
import {useState} from 'react';
import slider1 from '../../assets/images/slider1.jpeg';
import slider2 from '../../assets/images/slider2.png';

function Slider() {
  const slides = [
    {
      image: slider1,
      title: 'شعبه اکباتان',
      mobileNo1: '۱۲۵۴ ۵۴۸۹ -۰۲۱',
      mobileNo2: '۱۲۵۵ ۵۴۸۹ -۰۲۱',
      address: 'شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم',
    },
    {
      image: slider2,
      title: 'شعبه چالوس',
      mobileNo1: '۱۲۵۴ ۵۴۸۹ -۰۲۱',
      mobileNo2: '۱۲۵۵ ۵۴۸۹ -۰۲۱',
      address:
        'چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی',
    },
    {
      image: slider1,
      title: 'شعبه اقدسیه',
      mobileNo1: '۱۲۵۴ ۵۴۸۹ -۰۲۱',
      mobileNo2: '۱۲۵۵ ۵۴۸۹ -۰۲۱',
      address: 'خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸',
    },
    {
      image: slider2,
      title: 'شعبه ونک',
      mobileNo1: '۱۲۵۴ ۵۴۸۹ -۰۲۱',
      mobileNo2: '۱۲۵۵ ۵۴۸۹ -۰۲۱',
      address: 'میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  function prevSlide() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  }

  function nextSlide() {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }

  return (
    <div className="relative w-full mb-28 text-neutral-800">
      <h2 className="text-center my-6 font-bold text-base md:text-2xl">
        {slides[currentIndex].title}
      </h2>

      <div
        className="w-full h-72 overflow-hidden bg-cover bg-center"
        style={{backgroundImage: `url(${slides[currentIndex].image})`}}
      >
        <div className="branchInfo w-full rounded-lg border-4 border-primary bg-white flex items-start md:items-center md:justify-around flex-col md:flex-row gap-4 md:max-w-[809px] absolute -bottom-16 left-1/2 -translate-x-1/2 p-4">
          <div className="phone flex md:flex-col items-center gap-1 md:w-1/4">
            <Phone />
            <div className="flex gap-1 md:block">
              <p>{slides[currentIndex].mobileNo1}</p>
              <p>{slides[currentIndex].mobileNo2}</p>
            </div>
          </div>

          <div className="location flex md:flex-col items-center justify-center gap-1 md:w-2/4">
            <Location />
            <p className="md:text-center">{slides[currentIndex].address}</p>
          </div>

          <div className="clock flex md:flex-col items-center gap-1 md:w-1/4">
            <Clock />
            <p>همه‌روزه از ساعت ۱۲ الی ۲۳</p>
          </div>
        </div>
      </div>

      <button
        className="absolute top-1/2 md:top-2/3 left-2 transform -translate-y-1/2 z-50"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        <LeftArrow />
      </button>
      <button
        className="absolute top-1/2 md:top-2/3 right-2 transform -translate-y-1/2 z-50"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        <RightArrow />
      </button>
    </div>
  );
}

export default Slider;
