import { FC } from 'react';

import logo from '../assets/logo-icon-on-black.png';
import { cn } from '../utils';

type TopBarLogoProps = {
  className?: string;
};

export const TopBarLogo: FC<TopBarLogoProps> = ({ className }) => (
  <span className="ml-0.5">
    <img src={logo} alt="OYSTER" className={cn('h-6 w-6', className)} />
  </span>
);
