import {Link} from 'react-router-dom';
import {Logo} from '../../components/icons/index';
import Input from '../../components/form/Input';
import AuthLayout from '../../layouts/AuthLayout';
import Button from '../../components/Button';
import useForm, {FormProvider} from '../../hooks/UseForm';
import {loginSchema} from '../../schemas';

function Login() {
  const {handleSubmit, ...methods} = useForm(loginSchema);

  function onSubmit(data) {
    console.log('data', data);
  }

  return (
    <AuthLayout>
      <div className="bg-white border border-neutral-400 rounded-lg py-6 px-4 w-96 ">
        <div className="heading mb-6 gap-2 flex items-center flex-col">
          <Logo />
          <h1 className=" text-sm  text-neutral-600">
            {'ورود به حساب کاربری'}
          </h1>
        </div>
        <FormProvider {...methods}>
          <form
            noValidate
            className="flex flex-col gap-y-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="space-y-4 mb-6">
              <Input name="email" placeholder="ایمیل" />
              <Input name="password" placeholder="پسورد" type="password" />
            </div>

            <Button type="submit">{'ورود به حساب'}</Button>

            <div className="text-xs mt-3 space-y-1 text-center">
              <p className="text-neutral-800 ">
                ورود و عضویت در ترخینه به منزله قبول
                <Link
                  to="/privacy"
                  className="text-primary hover:underline px-0.5"
                >
                  {' قوانین و مقررات '}
                </Link>
                است.
              </p>
              <p className="text-neutral-800  ">
                حساب کاربری ندارید؟
                <Link
                  to="/signup"
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
