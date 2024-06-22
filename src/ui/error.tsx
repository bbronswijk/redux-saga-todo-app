import React, { HTMLAttributes } from 'react';
import { useSelector } from 'react-redux';
import { selectError } from '@/store/selectors';
import { cn } from '@/utils/cn';

const WarningIcon = ({ className }: HTMLAttributes<SVGElement>) => (
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
    className={cn(className, 'lucide lucide-triangle-alert')}
  >
    <path d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3' />
    <path d='M12 9v4' />
    <path d='M12 17h.01' />
  </svg>
);

export const Error = () => {
  const message: string | undefined = useSelector(selectError);

  return message ? (
    <div className='flex-start flex gap-4 rounded bg-red-800 p-4 text-card-foreground'>
      <WarningIcon />
      {message}
    </div>
  ) : null;
};
