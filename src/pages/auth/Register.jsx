import {Link} from 'react-router-dom';
import {Logo} from '../../components/icons/index';
import registerSchema from '../../schemas/registerSchema';
import AuthLayout from '../../layouts/AuthLayout';
import UseForm, {FormProvider} from '../../hooks/UseForm';
import {Input} from '../../components/form';
import {Button} from '../../components';

function Register() {
  const {handleSubmit, ...methods} = UseForm(registerSchema);

  function onSubmit(data) {
    console.log('data', data);
  }

  return (
    <AuthLayout>
      <div className="bg-white border border-neutral-400 rounded-lg py-6 px-4 w-96 ">
        <div className="heading mb-6 gap-2 flex items-center flex-col">
          <Logo />
          <h1 className=" text-sm  text-neutral-600">{'ساختن حساب کاربری'}</h1>
        </div>
        <FormProvider {...methods}>
          <form
            noValidate
            className="flex flex-col gap-y-3"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="space-y-4 mb-6">
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

            <div className="text-xs mt-3 space-y-1 text-center">
              <p className="text-neutral-800 ">
                {' ورود و عضویت در ترخینه به منزله قبول'}
                <Link to="/privacy" className="text-primary hover:underline">
                  {' قوانین و مقررات '}
                </Link>
                {' است.'}
              </p>
              <p className="text-neutral-800  ">
                {' قبلاً ثبت‌نام کرده‌اید؟'}
                <Link to="/login" className="text-primary hover:underline">
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
