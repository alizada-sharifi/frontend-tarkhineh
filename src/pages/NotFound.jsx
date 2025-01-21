import {Button} from '../components';
import {Microscope} from '../components/icons';
import ROUTES from '../router/routePaths';

function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center grow py-10">
      <Microscope className="fill-primary size-40" />
      <p className="mt-1 text-lg font-medium text-gray-500 text-pretty sm:text-xl/8">
        {'صحفه مورد نظر یافت نشد'}
      </p>
      <div className="flex items-center justify-center mt-10 gap-x-6">
        <Button
          href={ROUTES.HOME}
          className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          {'بازگشت به صفحه اصلی'}
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
