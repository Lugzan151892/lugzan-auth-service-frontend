import { Button } from '@headlessui/react';
import { ReactNode, useMemo } from 'react';

interface ICustomButtonProps {
  text?: string;
  className?: string;
  children?: ReactNode;
  type?: 'success' | 'error';
  level?: 1 | 2 | 3;
  onClick?: () => void;
  disabled?: boolean;
}

const CustomButton: React.FC<ICustomButtonProps> = ({
  text,
  className,
  children,
  type = 'success',
  level = 1,
  onClick,
  disabled,
}) => {
  const levelOneClasses =
    type === 'success' ? 'bg-blue border-blue' : 'bg-error border-error';
  const levelTwoClasses =
    type === 'success'
      ? 'border-blue text-blue bg-white'
      : 'border-error text-error bg-white';
  const levelThreeClasses =
    'border-0 bg-transparent ' +
    (type === 'success' ? 'text-blue' : 'text-error');
  const disabledClass = disabled ? 'pointer-events-none opacity-40' : '';
  const classes = useMemo(() => {
    if (level === 1) {
      return levelOneClasses;
    }

    if (level === 2) {
      return levelTwoClasses;
    }

    if (level === 3) {
      return levelThreeClasses;
    }
  }, [level, levelOneClasses, levelTwoClasses, levelThreeClasses]);
  return (
    <Button
      className={`border-1 px-24 py-5 rounded-md ${classes} ${className || ''} ${disabledClass}`}
      onClick={onClick}
    >
      {children || text}
    </Button>
  );
};

export default CustomButton;
