'use client';

import { useState } from 'react';
import CustomButton from '@/components/ui/button/CustomButton';
import CustomInput from '@/components/ui/input/CustomInput';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import AuthLayout from '@/app/(authorization)/_components/auth-layout/AuthLayout';

const Login = () => {
  const t = useTranslations();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(email, password);
  };
  return (
    <div>
      <AuthLayout
        title={t('login')}
        description="Complete the form below to log in."
      >
        <div className="grid grid-cols-1 content center">
          <CustomInput label="E-mail" value={email} setValue={setEmail} />
          <CustomInput
            className="mt-9 mb-14"
            label="Password"
            type="password"
            value={password}
            setValue={setPassword}
          />
          <CustomButton text="Sign Up" onClick={handleLogin} />
          <div className="mt-2">
            <span>Dont have account?</span>
            <Link href="/registration">
              <span className="cursor-pointer text-blue ml-2">
                {t('registration')}
              </span>
            </Link>
          </div>
        </div>
      </AuthLayout>
    </div>
  );
};

export default Login;
