import {Link, NavLink} from 'react-router';
import {Logo, Search, ShoppingCart, User} from '../../icons';
import {cn} from '../../../helpers/common';
import MobileNavbar from './MobileNavbar';
import ROUTES from '../../../router/routePaths';

function Header() {
  return (
    <header className="py-8 shadow">
      <div className="container">
        <div className="flex items-center justify-between gap-4 text-neutral-700">
          <MobileNavbar />
          <Link>
            <Logo />
          </Link>
          <nav className="items-center hidden gap-4 md:flex">
            <NavLink
              to={ROUTES.HOME}
              className={({isActive}) =>
                cn('text-base', {
                  'text-primary font-semibold': isActive,
                })
              }
            >
              {'صفحه اصلی'}
            </NavLink>
            <NavLink
              to={ROUTES.BRANCH}
              className={({isActive}) =>
                cn('text-base', {
                  'text-primary font-semibold': isActive,
                })
              }
            >
              {'شعبات'}
            </NavLink>
            <NavLink
              to={ROUTES.MENU}
              className={({isActive}) =>
                cn('text-base', {
                  'text-primary font-semibold': isActive,
                })
              }
            >
              {'منو'}
            </NavLink>
            <NavLink
              to={ROUTES.ABOUT}
              className={({isActive}) =>
                cn('text-base', {
                  'text-primary font-semibold': isActive,
                })
              }
            >
              {'درباره ما'}
            </NavLink>
            <NavLink
              to={ROUTES.CONTACT}
              className={({isActive}) =>
                cn('text-base', {
                  'text-primary font-semibold': isActive,
                })
              }
            >
              {' تماس با ما'}
            </NavLink>
          </nav>
          <div className="flex items-center gap-2 [&>*]:p-2 [&>*]:bg-primary-100 [&>*]:rounded [&_svg]:fill-primary">
            <button className="hidden sm:block">
              <Search />
            </button>
            <NavLink
              to="/cart"
              className={({isActive}) => (isActive ? 'bg-primary' : '')}
            >
              <ShoppingCart />
            </NavLink>
            <NavLink
              to="/login"
              className={({isActive}) => (isActive ? 'bg-primary' : '')}
            >
              <User />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
