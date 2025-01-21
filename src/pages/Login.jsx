import {Link} from 'react-router-dom';
import {useForm, FormProvider} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import EmailInput from '../helpers/Inputs/EmailInput';
import PasswordInput from '../helpers/Inputs/PasswordInput';
import {Logo} from '../components/icons/index';

const schema = z.object({
  email: z.string().email('ایمیل معتبر نیست'),
  password: z.string().min(8, 'رمز عبور باید حداقل ۸ کاراکتر باشد'),
});

function Login() {
  const methods = useForm({
    resolver: zodResolver(schema),
  });
  const {handleSubmit} = methods;
  function onSubmit(data) {
    console.log('data', data);
  }

  return (
    <div className="container w-full h-screen flex bg-black bg-opacity-60 items-center justify-center px-3">
      <div className="bg-white border border-neutral-400 rounded-lg py-6 px-4 w-96 text-center">
        <div className="heading">
          <div className="flex justify-center">
            <Logo />
          </div>
          <h4 className="font-normal text-lg py-2 text-neutral-600">
            ورود به حساب کاربری
          </h4>
        </div>
        <FormProvider {...methods}>
          <form
            noValidate
            className="flex flex-col gap-y-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <EmailInput />
            <PasswordInput />
            <button
              type="submit"
              className="bg-primary w-full rounded-md text-white font-medium text-base py-2 hover:bg-primary-700 disabled:bg-neutral-300 disabled:text-neutral-400 disabled:cursor-not-allowed"
            >
              ورود به حساب
            </button>

            <div className="text-neutral-800 font-normal text-xs">
              ورود و عضویت در ترخینه به منزله قبول
              <Link to="/privacy" className="text-primary hover:underline">
                <span> قوانین و مقررات </span>
              </Link>
              است.
            </div>
            <div className="text-neutral-800 font-normal text-sm">
              حساب کاربری ندارید؟
              <Link to="/sign-up" className="text-primary hover:underline">
                ثبت نام کنید
              </Link>
            </div>
          </form>
        </FormProvider>
      </div>
    </div>
  );
}

export default Login;
