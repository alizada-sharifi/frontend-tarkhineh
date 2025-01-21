import {useState} from 'react';
import {Close, Logo, Menu} from '../../icons';
import {cn} from '../../../helpers/common';
import bg from './../../../assets/images/mobile_navbar_layer.png';
import {NavLink} from 'react-router';
import ROUTES from '../../../router/routePaths';

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(false);
  }

  return (
    <>
      <button className="block md:hidden" onClick={() => setIsOpen(true)}>
        <Menu className="fill-primary" />
      </button>
      <div
        className={cn(
          'fixed inset-0 hidden bg-gray-900/20 transition-opacity duration-300 ease-linear opacity-0',
          {
            '!block opacity-1': isOpen,
          }
        )}
      >
        <div
          className={cn(
            'relative h-full bg-white flex flex-col w-full max-w-xs flex-1 transform transition duration-300 ease-in-out translate-x-full',
            {
              'translate-x-0': isOpen,
            }
          )}
        >
          <div className="relative">
            <img
              src={bg}
              alt=""
              className="object-contain object-top w-full "
            />
            <div className="absolute top-0 flex items-center justify-between w-full h-full p-4">
              <Logo className=" fill-white" />
              <Close
                className="self-start fill-white"
                onClick={() => setIsOpen(false)}
              />
            </div>
          </div>
          <nav className="flex flex-col [&>*]:py-2 p-4 divide-y ">
            <NavLink
              to={ROUTES.HOME}
              className={({isActive}) =>
                cn('text-sm !pt-0', {
                  'text-primary': isActive,
                })
              }
              onClick={handleClick}
            >
              {'صفحه اصلی'}
            </NavLink>
            <NavLink
              to={ROUTES.BRANCH}
              className={({isActive}) =>
                cn('text-sm', {
                  'text-primary': isActive,
                })
              }
              onClick={handleClick}
            >
              {'شعبات'}
            </NavLink>
            <NavLink
              to={ROUTES.MENU}
              className={({isActive}) =>
                cn('text-sm', {
                  'text-primary': isActive,
                })
              }
              onClick={handleClick}
            >
              {'منو'}
            </NavLink>
            <NavLink
              to={ROUTES.ABOUT}
              className={({isActive}) =>
                cn('text-sm', {
                  'text-primary': isActive,
                })
              }
              onClick={handleClick}
            >
              {'درباره ما'}
            </NavLink>
            <NavLink
              to={ROUTES.CONTACT}
              className={({isActive}) =>
                cn('text-sm', {
                  'text-primary': isActive,
                })
              }
              onClick={handleClick}
            >
              {' تماس با ما'}
            </NavLink>
          </nav>
        </div>
      </div>
    </>
  );
}

export default MobileNavbar;
