type SpinnerProps = {
  className?: string;
};

export const Spinner = (props: SpinnerProps) => (
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
      d='M9.18722 1.68726C4.97611 2.10536 1.68721 5.65832 1.68721 9.97944C1.68721 14.5818 5.41817 18.3128 10.0205 18.3128C14.6229 18.3128 18.3539 14.5818 18.3539 9.97944L16.6872 9.97944C16.6872 13.6613 13.7024 16.6461 10.0205 16.6461C6.33865 16.6461 3.35388 13.6613 3.35388 9.97944C3.35388 6.57976 5.89862 3.77443 9.18722 3.36435L9.18722 1.68726Z'
      fill='currentColor'
    />
  </svg>
);
