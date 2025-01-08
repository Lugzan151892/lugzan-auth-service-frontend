import { Input, Label, Field, Description } from '@headlessui/react';

interface ICustomInputProps {
  label: string;
  description?: string;
  className?: string;
}

const CustomInput: React.FC<ICustomInputProps> = ({
  label,
  description,
  className,
}) => {
  return (
    <Field className={className || ''}>
      {label ? (
        <div className="mb-2">
          <Label>{label}</Label>
        </div>
      ) : null}
      {description ? <Description>{description}</Description> : null}
      <Input
        className="rounded-lg bg-white py-3 px-5 text-black focus:outline-none border-2 border-gray focus:border-blue w-full"
        name="password"
        type="text"
      />
    </Field>
  );
};

export default CustomInput;
