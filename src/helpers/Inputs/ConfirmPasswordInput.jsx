import {useFormContext} from 'react-hook-form';

function ConfirmPasswordInput() {
  const {
    register,
    formState: {errors},
  } = useFormContext();

  return (
    <div>
      <input
        {...register('confirmPassword')}
        type="password"
        placeholder="رمز خود را دوباره وارد کنید"
        className="block w-full text-sm text-neutral-700 placeholder:text-neutral-700 border border-neutral-400 p-2 rounded-md outline-none"
      />
      {errors.confirmPassword && (
        <p className="text-error text-right text-xs pt-1">
          {errors.confirmPassword.message}
        </p>
      )}
    </div>
  );
}

export default ConfirmPasswordInput;
