const AuthLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="container mx-auto grid grid-cols-1 h-full content-center max-w-3xl">
      {children}
    </div>
  );
};

export default AuthLayout;
