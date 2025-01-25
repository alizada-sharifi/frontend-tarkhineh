import Slider from '../components/Slider';
import SearchInput from '../components/form/SearchInput';
import Button from '../components/Button';
import {Note} from '../components/icons';
import BranchSlider from '../components/branch/BranchSlider';
import FoodContainer from '../components/branch/foods/FoodContainer';
import Container from '../components/testimonial/Container';

function Branches() {
  return (
    <>
      {/* ========= slider section ============= */}
      <Slider />
      <div className="container">
        <SearchInput />
      </div>
      <FoodContainer title={'پیشنهاد ویژه'} />
      <FoodContainer title={'غذاهای محبوب'} className={'bg-primary'} />
      <FoodContainer title={'غذاهای غیر ایرانی'} />

      <div className="text-center mt-8">
        <Button
          href="/menu"
          className=" w-auto bg-transparent border border-primary gap-x-1 inline-flex  justify-center items-center text-primary hover:bg-transparent"
          type="button"
        >
          <Note />
          {'مشاهده منوی کامل'}
        </Button>
      </div>
      {/* ============ branch slider ========= */}
      <BranchSlider />
      {/* ========== testimonial section =========== */}
      <Container />
    </>
  );
}
export default Branches;
