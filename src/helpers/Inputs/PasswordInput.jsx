import {useFormContext} from 'react-hook-form';

function PasswordInput() {
  const {
    register,
    formState: {errors},
  } = useFormContext();

  return (
    <div>
      <input
        {...register('password')}
        type="password"
        placeholder="رمز خود را وارد کنید"
        className="block w-full text-sm text-neutral-700 placeholder:text-neutral-700 border border-neutral-400 p-2 rounded-md outline-none"
      />
      {errors.password && (
        <p className="text-error text-right text-xs pt-1">
          {errors.password.message}
        </p>
      )}
    </div>
  );
}

export default PasswordInput;
