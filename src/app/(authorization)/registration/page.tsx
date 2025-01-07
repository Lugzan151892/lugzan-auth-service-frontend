import CustomInput from '@/components/ui/input/CustomInput';
import AuthLayout from '../_components/auth-layout/AuthLayout';

const Registration = () => {
  return (
    <div>
      <AuthLayout title={'Зарегистрироваться'}>
        <div>
          tut registration
          <CustomInput label="E-mail" />
          <CustomInput label="Password" />
          <CustomInput label="Repeat password" />
        </div>
      </AuthLayout>
    </div>
  );
};

export default Registration;
