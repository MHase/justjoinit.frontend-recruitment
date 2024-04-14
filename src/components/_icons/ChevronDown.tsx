type ChevronDownProps = {
  className?: string;
};

export const ChevronDown = (props: ChevronDownProps) => (
  <svg
    width='20'
    height='20'
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M3.33325 6.89294L4.30451 5.83325L9.99992 12.0472L15.6953 5.83325L16.6666 6.89294L9.99992 14.1666L3.33325 6.89294Z'
      fill='currentColor'
    />
  </svg>
);
