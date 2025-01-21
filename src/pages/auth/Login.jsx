import {Link} from 'react-router-dom';
import {Logo} from '../../components/icons/index';
import Input from '../../components/form/Input';
import AuthLayout from '../../layouts/AuthLayout';
import Button from '../../components/Button';
import useForm, {FormProvider} from '../../hooks/UseForm';
import {loginSchema} from '../../schemas';
import ROUTES from '../../router/routePaths';

function Login() {
  const {handleSubmit, ...methods} = useForm(loginSchema);

  function onSubmit(data) {
    console.log('data', data);
  }

  return (
    <AuthLayout>
      <div className="px-4 py-6 bg-white border rounded-lg border-neutral-400 w-96 ">
        <div className="flex flex-col items-center gap-2 mb-6 heading">
          <Logo />
          <h1 className="text-sm text-neutral-600">{'ورود به حساب کاربری'}</h1>
        </div>
        <FormProvider {...methods}>
          <form
            noValidate
            className="flex flex-col gap-y-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-6 space-y-4">
              <Input name="email" placeholder="ایمیل" />
              <Input name="password" placeholder="پسورد" type="password" />
            </div>

            <Button type="submit">{'ورود به حساب'}</Button>

            <div className="mt-3 space-y-1 text-xs text-center">
              <p className="text-neutral-800 ">
                ورود و عضویت در ترخینه به منزله قبول
                <Link
                  to={ROUTES.PRIVACY}
                  className="text-primary hover:underline px-0.5"
                >
                  {' قوانین و مقررات '}
                </Link>
                است.
              </p>
              <p className="text-neutral-800 ">
                حساب کاربری ندارید؟
                <Link
                  to={ROUTES.REGISTER}
                  className="text-primary hover:underline px-0.5"
                >
                  ثبت نام کنید
                </Link>
              </p>
            </div>
          </form>
        </FormProvider>
      </div>
    </AuthLayout>
  );
}

export default Login;
