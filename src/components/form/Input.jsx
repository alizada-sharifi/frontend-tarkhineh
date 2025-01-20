import {useFormContext} from 'react-hook-form';
import {cn} from '../../helpers/common';

function Input({name = '', placeholder = '', type = 'text', className = ''}) {
  const {
    register,
    formState: {errors},
  } = useFormContext();

  return (
    <div className="space-y-1">
      <input
        {...register(name)}
        type={type}
        placeholder={placeholder}
        className={cn(
          'block w-full text-sm text-neutral-700 placeholder:text-xs placeholder:text-neutral-700 outline-none border border-neutral-400 p-2 rounded-md focus:border-primary-600',
          className,
          {
            'border-error focus:border-error': errors[name],
          }
        )}
      />
      {errors[name] && (
        <p className="text-error  text-xs">{errors[name].message}</p>
      )}
    </div>
  );
}

export default Input;
