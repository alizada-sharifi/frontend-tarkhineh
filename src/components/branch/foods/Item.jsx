import {Heart, Star} from '../../icons/index';
import {cn} from '../../../helpers/common';
import Button from '../../Button';

function Item({
  img = '',
  title = '',
  realPrice = '',
  discountPrice = '',
  discountPercentage = '',
  starNo = '',
  starRate = '',
  className = '',
}) {
  return (
    <div
      className={cn(
        'card max-w-72 w-full border border-neutral-400 text-center rounded-lg overflow-hidden bg-white',
        className
      )}
    >
      <img src={img} className="w-full max-h-64 object-cover" alt={title} />
      <div className="desc p-2">
        <h6 className="mb-4 text-sm md:font-semibold md:text-xl  text-neutral-800  ">
          {title}
        </h6>
        <div className="flex justify-between items-center text-xs text-neutral-500 mb-4">
          <div className="space-y-1">
            <div className="flex gap-0.5 items-center">
              <Heart />
              <span className="hidden md:block">افزودن به علاقمندی‌ها</span>
            </div>
            <div className="flex gap-0.5 items-center">
              <Star />
              <span className="font-medium text-neutral-800 text-sm">
                {starRate}
              </span>
              <span className="hidden md:block">({starNo} امتیاز)</span>
            </div>
          </div>
          <div className="space-y-1">
            <div className="flex gap-0.5 items-center justify-end">
              <span className="line-through ">{realPrice}</span>
              <span className="bg-error-extralight px-2 rounded-lg text-error">
                %{discountPercentage}
              </span>
            </div>
            <span className="text-base text-neutral-800 ">
              {discountPrice} تومان
            </span>
          </div>
        </div>
        <Button type="button">{'افزودن به سبد خرید'}</Button>
      </div>
    </div>
  );
}

export default Item;
