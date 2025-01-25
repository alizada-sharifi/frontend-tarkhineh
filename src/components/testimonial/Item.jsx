import {Star} from '../icons';

function Item({name, date, desc, star, image}) {
  return (
    <div className="card rounded-lg relative border border-neutral-400 py-6 px-8 flex items-center">
      <div className=" w-4/12 text-xs md:text-sm text-neutral-700 text-center flex flex-col items-start">
        <img src={image} alt="" className="rounded-full w-2/3" />
        <div className="mt-3 space-y-1">
          <p>{name}</p>
          <p>{date}</p>
        </div>
      </div>

      <p className="text-justify w-10/12">{desc}</p>
      <span className=" items-center font-medium absolute bottom-1 left-2 flex text-neutral-800 text-base justify-end mt-36">
        <Star />
        {star}
      </span>
    </div>
  );
}
export default Item;
