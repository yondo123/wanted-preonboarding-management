import { requestLogin } from '@utils/httpClient';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import useModal from '@hooks/useModal';
import { useRouter } from 'next/router';
import { User } from '../../types';

function Login() {
  const router = useRouter();
  const { showModal } = useModal();
  const { mutate } = useMutation((user: User) => requestLogin(user), {
    onSuccess({ data }) {
      sessionStorage.setItem('token', data.accessToken);
      router.replace('/');
    },
    onError() {
      showModal('에러가 발생하였습니다.');
    },
  });

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleChageEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleChagePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleClick = () => {
    if (!email) {
      return showModal('이메일을 입력해주세요.');
    }

    if (!password) {
      return showModal('비밀번호를 입력해주세요.');
    }
    mutate({ email, password });
  };

  return (
    <div className="h-screen bg-white flex flex-col space-y-10 justify-center items-center">
      <div className="bg-white w-96 shadow-xl rounded p-5">
        <h1 className="text-3xl font-medium">로그인</h1>
        <p className="text-sm bold">Welcome To PREFACE</p>

        <form className="space-y-5 mt-5">
          <input
            onChange={handleChageEmail}
            type="text"
            className="w-full h-12 border border-gray-800 rounded px-3 outline-none"
            placeholder="아이디를 입력하세요."
          />
          <div className="w-full flex items-center border border-gray-800 rounded px-3">
            <input
              type="password"
              className="w-4/5 h-12 outline-none"
              placeholder="비밀번호를 입력하세요."
              onChange={handleChagePassword}
            />
          </div>
          <button
            onClick={handleClick}
            type="button"
            className="text-center w-full bg-primary hover:bg-slate-500 rounded-md text-white py-3 font-medium">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
