'use client';

import CustomInput from '@/components/ui/input/CustomInput';
import AuthLayout from '../_components/auth-layout/AuthLayout';
import CustomButton from '@/components/ui/button/CustomButton';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const Registration = () => {
  const t = useTranslations();

  return (
    <div>
      <AuthLayout
        title={t('registration')}
        description="Complete the form below to register a new account.">
        <div className="grid grid-cols-1 content center">
          <CustomInput label="E-mail" />
          <CustomInput className="mt-9" label="Password" />
          <CustomInput className="mt-9 mb-14" label="Repeat password" />
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
