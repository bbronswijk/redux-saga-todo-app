import React, { HTMLAttributes } from 'react';
import { useSelector } from 'react-redux';
import { cn } from '@/utils/cn';
import { selectLoading } from '@/store/selectors';

const LoaderIcon = ({ className, ...props }: HTMLAttributes<SVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    strokeWidth='2'
    strokeLinecap='round'
    strokeLinejoin='round'
    className={cn(className, 'lucide lucide-loader-circle')}
    {...props}
  >
    <path d='M21 12a9 9 0 1 1-6.219-8.56' />
  </svg>
);

export const Loading = () => {
  const loading: boolean = useSelector(selectLoading);

  return loading ? (
    <LoaderIcon className='mx-auto mt-5 animate-spin text-card-foreground' />
  ) : null;
};
