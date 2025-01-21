import {Link} from 'react-router-dom';
import {Logo} from '../../components/icons/index';
import registerSchema from '../../schemas/registerSchema';
import AuthLayout from '../../layouts/AuthLayout';
import UseForm, {FormProvider} from '../../hooks/UseForm';
import {Input} from '../../components/form';
import {Button} from '../../components';
import ROUTES from '../../router/routePaths';

function Register() {
  const {handleSubmit, ...methods} = UseForm(registerSchema);

  function onSubmit(data) {
    console.log('data', data);
  }

  return (
    <AuthLayout>
      <div className="px-4 py-6 bg-white border rounded-lg border-neutral-400 w-96 ">
        <div className="flex flex-col items-center gap-2 mb-6 heading">
          <Logo />
          <h1 className="text-sm text-neutral-600">{'ساختن حساب کاربری'}</h1>
        </div>
        <FormProvider {...methods}>
          <form
            noValidate
            className="flex flex-col gap-y-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="mb-6 space-y-4">
              <Input name="name" placeholder="نام" />
              <Input name="email" placeholder="ایمیل" />
              <Input name="password" type="password" placeholder="پسورد" />
              <Input
                name="passwordConfirmation"
                type="password"
                placeholder="تکرار پسورد"
              />
            </div>

            <Button type="submit">{'ثبت نام'}</Button>

            <div className="mt-3 space-y-1 text-xs text-center">
              <p className="text-neutral-800 ">
                {' ورود و عضویت در ترخینه به منزله قبول'}
                <Link
                  to={ROUTES.PRIVACY}
                  className="text-primary hover:underline"
                >
                  {' قوانین و مقررات '}
                </Link>
                {' است.'}
              </p>
              <p className="text-neutral-800 ">
                {' قبلاً ثبت‌نام کرده‌اید؟'}
                <Link
                  to={ROUTES.LOGIN}
                  className="text-primary hover:underline"
                >
                  {' ورود به حساب '}
                </Link>
              </p>
            </div>
          </form>
        </FormProvider>
      </div>
    </AuthLayout>
  );
}

export default Register;
