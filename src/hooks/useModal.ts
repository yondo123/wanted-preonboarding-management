import { useRecoilState } from 'recoil';
import { modalState } from '@recoil/index';

const useModal = () => {
  const [displayModal, setDisplayModal] = useRecoilState(modalState);

  const showModal = (message: string) => {
    setDisplayModal({
      show: true,
      message,
    });
  };

  const hideModal = () => {
    setDisplayModal({
      show: false,
      message: '',
    });
  };

  return { showModal, hideModal, displayModal };
};

export default useModal;
