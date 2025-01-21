import {Link} from 'react-router';

function Button(props) {
  if (props.href) {
    const {href, ...rest} = props;
    return (
      <Link
        to={href}
        {...rest}
        className="inline-block w-full px-4 py-2 text-base font-medium text-white rounded-md bg-primary hover:bg-primary-700 disabled:bg-neutral-300 disabled:text-neutral-400 disabled:cursor-not-allowed"
      >
        {props.children}
      </Link>
    );
  }

  return (
    <button
      type="submit"
      {...props}
      className="inline-block w-full px-4 py-2 text-base font-medium text-white rounded-md bg-primary hover:bg-primary-700 disabled:bg-neutral-300 disabled:text-neutral-400 disabled:cursor-not-allowed"
    >
      {props.children}
    </button>
  );
}

export default Button;
