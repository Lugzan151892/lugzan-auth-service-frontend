'use client';

import CustomInput from '@/components/ui/input/CustomInput';
import AuthLayout from '../_components/auth-layout/AuthLayout';
import CustomButton from '@/components/ui/button/CustomButton';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';

const Registration = () => {
  const t = useTranslations();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');

  return (
    <div>
      <AuthLayout
        title={t('registration')}
        description="Complete the form below to register a new account."
      >
        <div className="grid grid-cols-1 content center">
          <CustomInput label="E-mail" value={email} setValue={setEmail} />
          <CustomInput
            className="mt-9"
            label="Password"
            type="password"
            value={password}
            setValue={setPassword}
          />
          <CustomInput
            className="mt-9 mb-14"
            label="Repeat password"
            type="password"
            value={repeatedPassword}
            setValue={setRepeatedPassword}
          />
          <CustomButton text="Sign Up" />
          <div className="mt-2">
            <span>Already have an account?</span>
            <Link href="/login">
              <span className="cursor-pointer text-blue ml-2">
                {t('login')}
              </span>
            </Link>
          </div>
        </div>
      </AuthLayout>
    </div>
  );
};

export default Registration;
