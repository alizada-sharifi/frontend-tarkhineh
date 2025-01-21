import {useFormContext} from 'react-hook-form';

function FullNameInput() {
  const {
    register,
    formState: {errors},
  } = useFormContext();

  return (
    <div>
      <input
        {...register('fullName')}
        type="text"
        placeholder="نام و نام خانوادگی"
        className="block w-full text-sm text-neutral-700 placeholder:text-neutral-700 border border-neutral-400 p-2 rounded-md outline-none"
      />
      {errors.fullName && (
        <p className="text-error text-right text-xs pt-1">
          {errors.fullName.message}
        </p>
      )}
    </div>
  );
}

export default FullNameInput;
