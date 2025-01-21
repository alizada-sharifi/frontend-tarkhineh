import {useFormContext} from 'react-hook-form';

function EmailInput() {
  const {
    register,
    formState: {errors},
  } = useFormContext();

  return (
    <div>
      <input
        {...register('email')}
        type="email"
        placeholder="ایمیل خود را وارد کنید"
        className="block w-full text-sm text-neutral-700 placeholder:text-neutral-700 border border-neutral-400 p-2 rounded-md outline-none"
      />
      {errors.email && (
        <p className="text-error text-right text-xs pt-1">
          {errors.email.message}
        </p>
      )}
    </div>
  );
}

export default EmailInput;
