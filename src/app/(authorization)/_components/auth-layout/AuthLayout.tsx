import { ReactNode } from 'react';

interface IAuthLayoutProps {
  title: string;
  children: ReactNode;
  description?: string;
}

const AuthLayout: React.FC<IAuthLayoutProps> = ({
  title,
  children,
  description,
}) => {
  return (
    <div className="bg-bg-secondary rounded-3xl sm:px-16 sm:py-12 px-6 py-4">
      <div className="border-b-2 pb-5 mb-11">
        <div className="text-5xl text-center mb-5">{title}</div>
        {description ? (
          <div className="text-xl text-center">{description}</div>
        ) : null}
      </div>
      {children}
    </div>
  );
};

export default AuthLayout;
