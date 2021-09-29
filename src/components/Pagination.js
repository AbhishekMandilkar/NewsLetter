import NewsCardContainer from "./NewsCardContainer.styled";
import { useState } from "react";
import styled from "styled-components";
import Modal from "./Modal";

function Pagination({ NewsCard, data, pageLimit, dataLimit, checked }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <PaginationContainer>
      {showModal && <Modal setShowModal={setShowModal} showModal={showModal} />}

      <NewsCardContainer checked={checked}>
        {getPaginatedData().map((data) => (
          <NewsCard
            setShowModal={setShowModal}
            showModal={showModal}
            checked={checked}
            title={data.title}
            body={data.body}
            key={data.id}
            image="https://picsum.photos/250/150"
          />
        ))}
      </NewsCardContainer>
      <PaginationButon>
        {/* show page numbers */}
        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}
      </PaginationButon>
    </PaginationContainer>
  );
}
export default Pagination;
const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
`;
const PaginationButon = styled.div`
  padding-left: 300px;
  & > button {
    box-shadow: 0px 3px 15px 3px rgba(0, 0, 0, 0.1);
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    background-color: #bdbdbd;
    color: white;
    margin: 15px 7px;
  }
  & > .paginationItem.active {
    background-color: white;
    color: #6d6d6d;
  }
`;
