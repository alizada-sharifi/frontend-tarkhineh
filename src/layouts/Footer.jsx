import FooterBg from '../assets/Images/footer_bg.jpeg';
import {Link} from 'react-router-dom';
import {
  telegramIcon,
  instagramIcon,
  twitterIcon,
  telegramDesktopIcon,
  instagramDesktopIcon,
  twitterDesktopIcon,
} from '../assets/icons/footerIcons';
import {useState} from 'react';
//==================== reusable styles
const h5Style = 'text-sm font-normal mb-2 md:text-xl md:font-bold md:mb-4';
const ulStyle = 'flex flex-col gap-y-2 md:gap-y-4 pr-3 md:pr-6';
const liStyle =
  'text-xs font-normal md:text-sm md:font-medium text-neutral-300';
const iconBoxStyle = 'items-center gap-x-2 mt-2 md:gap-x-4';
const inputStyle =
  'h-10 px-4 bg-transparent text-neutral-100 placeholder:text-neutral-100 w-72 outline-none border border-neutral-700 rounded';

function Footer() {
  const [countLetters, setCountLetters] = useState(0);
  return (
    <>
      <footer
        className="bg-cover bg-center text-white"
        style={{backgroundImage: `url(${FooterBg})`}}
      >
        <div className="mask bg-black bg-opacity-75 z-10">
          <div className="container py-8 px-5 max-w-[1400px] mx-auto flex justify-between">
            <div>
              <h5 className={h5Style}>دسترسی آسان</h5>
              <ul className={ulStyle}>
                <Link to="/faq">
                  <a className={liStyle}>پرسش های متداول</a>
                </Link>
                <Link to="/rules">
                  <a className={liStyle}>قوانین ترخینه</a>
                </Link>
                <Link to="/privacy">
                  <a className={liStyle}>حریم خصوصی</a>
                </Link>
              </ul>
              <div className={`${iconBoxStyle} flex md:hidden`}>
                <button>{twitterIcon}</button>
                <button>{instagramIcon}</button>
                <button>{telegramIcon}</button>
              </div>
              <div className={`${iconBoxStyle} md:flex hidden`}>
                <button>{twitterDesktopIcon}</button>
                <button>{instagramDesktopIcon}</button>
                <button>{telegramDesktopIcon}</button>
              </div>
            </div>
            <div>
              <h4 className={h5Style}>شعبه های ترخینه</h4>
              <ul className={ulStyle}>
                <Link>
                  <a className={liStyle}>شعبه اکباتان</a>
                </Link>
                <Link>
                  <a className={liStyle}>شعبه چالوس</a>
                </Link>
                <Link>
                  <a className={liStyle}>شعبه اقدسیه</a>
                </Link>
                <Link>
                  <a className={liStyle}>شعبه ونک</a>
                </Link>
              </ul>
            </div>
            <div className="hidden lg:block">
              <h4 className={h5Style}>پیام به ترخینه</h4>
              <form action="#" dir="rtl">
                <div className="flex items-start gap-x-[1.7rem] pr-[1rem]">
                  <div className="flex flex-col gap-y-5">
                    <input
                      type="text"
                      placeholder="نام و نام خانوادگی"
                      className={inputStyle}
                      required
                    />
                    <input
                      type="tel"
                      dir="rtl"
                      placeholder="شماره تماس"
                      className={inputStyle}
                      required
                    />
                    <input
                      type="email"
                      placeholder="آدرس ایمیل "
                      className={inputStyle}
                      required
                    />
                  </div>
                  <div className="flex flex-col items-end">
                    <textarea
                      className={`${inputStyle} py-4 h-40 overflow-hidden`}
                      placeholder="پیام شما"
                      required
                      maxLength={200}
                      onChange={(e) => setCountLetters(e.target.value.length)}
                    ></textarea>
                    <span className="mb-2 text-xs font-normal text-neutral-400">
                      {countLetters}/200
                    </span>
                    <button
                      type="submit"
                      className="text-neutral-100 text-sm font-medium w-44 h-10 border border-neutral-700 rounded"
                    >
                      ارسال پیام
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
