import React from 'react';
import Item from './Item';
import dolemh from '../../../assets/images/dolmeh-kalam.jpeg';
import {LeftArrow, RightArrow} from '../../icons';
import {cn} from '../../../helpers/common';

function FoodContainer({className, title}) {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const items = Array(10)
    .fill()
    .map(() => ({
      img: dolemh,
      title: 'دلمه برگ کلم',
      realPrice: '۲۲۰٬۰۰۰',
      discountPrice: '۲۰۹٬۰۰۰',
      discountPercentage: '۸',
      starNo: '۵۲',
      starRate: '۵',
    }));

  const duplicatedItems = [...items, ...items, ...items];

  // =============== for screens
  function getVisibleItems() {
    if (window.innerWidth >= 1280) {
      return 4;
    } else if (window.innerWidth >= 768) {
      return 3;
    } else if (window.innerWidth >= 640) {
      return 2;
    } else {
      return 1;
    }
  }

  // ========= nextButton function
  function handleNext() {
    setCurrentIndex((prevIndex) => {
      if (prevIndex >= items.length * 2 - getVisibleItems()) {
        return prevIndex + 1;
      }
      setTimeout(() => {
        setCurrentIndex(prevIndex + 1);
      }, 300);
      return prevIndex + 1;
    });
  }

  // ================= prevButton function
  function handlePrev() {
    setCurrentIndex((prevIndex) => {
      if (prevIndex <= 0) {
        setTimeout(() => {
          setCurrentIndex(items.length * 2 - getVisibleItems());
        }, 300);
        return prevIndex - 1;
      }
      return prevIndex - 1;
    });
  }

  // calculate translateX value
  const translateXValue = currentIndex * (100 / getVisibleItems());

  return (
    <div className={cn('relative text-neutral-800 py-3 my-5', className)}>
      <div className="container mx-auto overflow-hidden">
        <h2 className="font-bold text-base md:text-2xl pb-5">{title}</h2>

        <div
          className="flex transition-transform duration-300 ease-in-out gap-x-3"
          style={{
            transform: `translateX(${translateXValue}%)`,
          }}
        >
          {duplicatedItems.map((item, index) => (
            <div
              key={index}
              className="flex-none"
              style={{
                width: `calc(100% / ${getVisibleItems()})`,
              }}
            >
              <Item
                img={item.img}
                title={item.title}
                realPrice={item.realPrice}
                discountPrice={item.discountPrice}
                discountPercentage={item.discountPercentage}
                starNo={item.starNo}
                starRate={item.starRate}
              />
            </div>
          ))}
        </div>
      </div>

      {/* button ================== */}

      <button
        className="w-10 h-10 bg-neutral-200 absolute right-3 top-1/2 rounded-lg border border-neutral-400 flex items-center justify-center"
        onClick={handlePrev}
        aria-label="Previous Item"
      >
        <RightArrow />
      </button>
      <button
        className="w-10 h-10 bg-neutral-200 rounded-lg absolute left-3 top-1/2 border border-neutral-400 flex items-center justify-center"
        onClick={handleNext}
        aria-label="Next Item"
      >
        <LeftArrow />
      </button>
    </div>
  );
}

export default FoodContainer;
