function Button(props) {
  return (
    <button
      type="submit"
      {...props}
      className="bg-primary w-full rounded-md text-white font-medium text-base py-2 hover:bg-primary-700 disabled:bg-neutral-300 disabled:text-neutral-400 disabled:cursor-not-allowed"
    >
      {props.children}
    </button>
  );
}

export default Button;
