import React from "react";
import styled from "styled-components";
import modalImage from "./../image/modal.png";

function Modal({ setShowModal }) {
  return (
    <ModalWrapper onClick={() => setShowModal(false)}>
      <img src={modalImage} alt="modal" />
    </ModalWrapper>
  );
}
export default Modal;

const ModalWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(10px);
  cursor: pointer;
  & > img {
    height: 77%;
    border-radius: 10px;
  }
`;
