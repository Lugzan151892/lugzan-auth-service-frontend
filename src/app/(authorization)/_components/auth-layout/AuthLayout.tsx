import { ReactNode } from 'react';

interface IAuthLayoutProps {
  title: string;
  children: ReactNode;
}

const AuthLayout: React.FC<IAuthLayoutProps> = ({ title, children }) => {
  return (
    <div className="bg-bg-secondary rounded-lg px-3 py-4">
      <div>{title}</div>
      {children}
    </div>
  );
};

export default AuthLayout;
