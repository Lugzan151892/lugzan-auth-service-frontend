import { Input, Label, Field, Description } from '@headlessui/react';
import { useMemo, useState } from 'react';

interface ICustomInputProps {
  label: string;
  description?: string;
  className?: string;
  value: string;
  setValue: (val: string) => void;
  type?: 'text' | 'password';
}

const CustomInput: React.FC<ICustomInputProps> = ({
  label,
  description,
  className,
  value,
  setValue,
  type = 'text',
}) => {
  const [computedType, setComputedType] = useState(type);

  const currentType = useMemo(() => {
    if (type === 'text') {
      return type;
    }

    if (type === 'password') {
      return computedType;
    }
  }, [type, computedType]);

  const currentIconPath = useMemo(() => {
    return currentType === 'text'
      ? '/icons/password_show.png'
      : '/icons/password_hide.png';
  }, [currentType]);

  const setType = () => {
    setComputedType(computedType === 'text' ? 'password' : 'text');
  };

  return (
    <Field className={className || ''}>
      {label ? (
        <div className="mb-2">
          <Label>{label}</Label>
        </div>
      ) : null}
      {description ? <Description>{description}</Description> : null}
      <div className="flex items-center">
        <Input
          className="rounded-lg bg-white py-3 px-5 text-black focus:outline-none border-2 border-gray focus:border-blue w-full"
          name="password"
          type={currentType}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {type === 'password' ? (
          <img
            className="w-8 h-8 ml-2 cursor-pointer"
            src={currentIconPath}
            onClick={setType}
          />
        ) : null}
      </div>
    </Field>
  );
};

export default CustomInput;
