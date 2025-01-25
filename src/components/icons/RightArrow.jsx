import {cn} from '../../helpers/common';

function RightArrow({className, ...props}) {
  return (
    <svg
      width="13"
      height="24"
      viewBox="0 0 13 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('fill-neutral-400', className)}
      {...props}
    >
      <path
        d="M1.88046 23.56C1.62712 23.56 1.37379 23.4667 1.17379 23.2667C0.787122 22.88 0.787122 22.24 1.17379 21.8534L9.86712 13.16C10.5071 12.52 10.5071 11.48 9.86712 10.84L1.17379 2.14669C0.787122 1.76003 0.787122 1.12003 1.17379 0.733359C1.56046 0.346693 2.20045 0.346693 2.58712 0.733359L11.2805 9.42669C11.9605 10.1067 12.3471 11.0267 12.3471 12C12.3471 12.9734 11.9738 13.8934 11.2805 14.5734L2.58712 23.2667C2.38712 23.4534 2.13379 23.56 1.88046 23.56Z"
        fill="white"
      />
    </svg>
  );
}
export default RightArrow;
