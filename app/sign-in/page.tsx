'use client';

import { SubmitHandler, useForm } from 'react-hook-form';

import Button from '~/components/button';
import Input from '~/components/input';

type Inputs = {
  email: string;
  password: string;
};

const onSubmit: SubmitHandler<Inputs> = async (data) => {
  console.log(data);
};

const defaultValues: Inputs = {
  email: 'sam@example.com',
  password: "sam's secret",
};

function SignIn() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues,
  });
  return (
    <main className="grid min-h-screen place-items-center">
      <form
        className="w-full max-w-[360px] flex flex-col gap-4"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          placeholder="Email Address"
          type="email"
          {...register('email')}
        />
        <Input
          placeholder="Password"
          type="password"
          {...register('password')}
        />
        <Button className="mt-4">Sign In</Button>
      </form>
    </main>
  );
}

export default SignIn;
