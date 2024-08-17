import { FC } from "react";

interface LockedIconProps {
  color?: string;
  size?: number;
}

const LockedIcon: FC<LockedIconProps> = ({ color = "#000", size = 36 }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 17C11.4477 17 11 16.5523 11 16V14C11 13.4477 11.4477 13 12 13C12.5523 13 13 13.4477 13 14V16C13 16.5523 12.5523 17 12 17Z'
      fill={color}
    />
    <path
      d='M18 8H17V7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7V8H6C4.89543 8 4 8.89543 4 10V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V10C20 8.89543 19.1046 8 18 8ZM9 8V7C9 5.34315 10.3431 4 12 4C13.6569 4 15 5.34315 15 7V8H9ZM18 20H6V10H18V20Z'
      fill={color}
    />
  </svg>
);

export default LockedIcon;
