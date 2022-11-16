import useModal from '@hooks/useModal';
import styled from 'styled-components';

function Modal() {
  const { hideModal, displayModal } = useModal();

  const handleClick = () => {
    hideModal();
  };

  return (
    <>
      {displayModal.show ? (
        <ModalWrap>
          <div className="bg-opacity-60 flex justify-center items-center absolute top-0 right-0 bottom-0 left-0">
            <div className="bg-white px-16 py-14 rounded-md text-center">
              <h1 className="text-lg mb-4 font-bold text-font">{displayModal.message}</h1>
              <button
                onClick={handleClick}
                type="button"
                className="bg-primary hover:bg-hover px-7 py-2 ml-2 rounded-md text-md text-white font-semibold">
                Ok
              </button>
            </div>
          </div>
        </ModalWrap>
      ) : null}
    </>
  );
}

const ModalWrap = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
`;

export default Modal;
