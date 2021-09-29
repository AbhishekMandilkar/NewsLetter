import styled from "styled-components";
import { BsX } from "react-icons/bs";

function NewsCard({ setShowModal, showModal, checked, title, body, image }) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <Card
      checked={checked}
      onClick={() => {
        setShowModal(true);
      }}
    >
      <div
        className={checked ? "close-container-horizontal" : "close-container"}
      >
        <BsX />
      </div>
      <div className="post">
        {checked ? (
          <div className="post-avatar">
            <img src={image} alt="" />
          </div>
        ) : null}
        <div className="post-info">
          <h4 className="post-title">
            {truncate(`${title}`, checked ? 100 : 40)}
          </h4>
          <span className="post-description">
            {truncate(`${body}`, checked ? 120 : 50)}
          </span>
          <span className="post-date">Mon, 21 Dec 2020 14:57 GMT</span>
          <img className="post-image" src={image} alt="" />
        </div>
      </div>
    </Card>
  );
}

export { NewsCard };

const NewsCardContainer = styled.div`
  flex: 1;
  /* background-color: ${(props) => (props.checked ? "lightblue" : "white")}; */
  display: ${(props) => (props.checked ? "flex" : "grid")};
  place-items: center;
  justify-content: space-around;
  grid-template-columns: 1fr 1fr 1fr;
  /* padding-top: 40px; */
  margin-left: 300px;
  ${(props) => (props.checked ? `padding: 40px 55px 0 55px;` : null)}
  ${(props) => (props.checked ? `flex-direction: column` : null)};
`;
export default NewsCardContainer;
const Card = styled.div`
  cursor: pointer;
  border-radius: 5px;
  display: flex;
  justify-content: ${(props) =>
    props.checked ? ` flex-end` : `spaced-around`};
  flex-direction: ${(props) => (props.checked ? `row-reverse` : `column`)};
  align-items: ${(props) => props.checked && ` center`};
  width: ${(props) => (props.checked ? `100%` : `250px`)};
  max-height: ${(props) => (props.checked ? `100px` : `250px`)};
  min-height: ${(props) => (props.checked ? `100px` : `250px`)};
  margin: ${(props) => (props.checked ? `10px 0` : `20px 40px`)};
  ${(props) => (props.checked ? `align-items: center;` : null)}
  ${(props) => (props.checked ? `background-color:transparent;` : null)}
  ${(props) =>
    !props.checked ? `box-shadow: 0px 3px 15px 3px rgba(0, 0, 0, 0.1);` : null}

  & > .close-container {
    display: flex;
    justify-content: flex-end;
    background-color: white;
    border-radius: 5px;
  }
  & > .close-container-horizontal {
    border-radius: 5px;
    color: red;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 3px 15px 3px rgba(0, 0, 0, 0.1);
    background-color: white;
  }
  & > .close-container-horizontal > svg {
    width: 40px;
    height: 40px;
    color: red;
  }
  & > .close-container > svg {
    width: 30px;
    height: 30px;
    color: red;
  }

  & > .post {
    display: flex;
    flex-direction: ${(props) => (props.checked ? `row` : `column`)};
    justify-content: space-around;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    ${(props) =>
      props.checked
        ? `padding: 10px 20px 10px 20px;
          `
        : `padding: 0 20px 10px 20px;flex: 1;`}
    ${(props) =>
      props.checked &&
      `box-shadow: 0px 3px 15px 3px rgba(0, 0, 0, 0.1);border-radius:7px;`}
  }
  & > .post > .post-info {
    display: flex;
    flex-direction: column;
    justify-content: ${(props) => !props.checked && `flex-start`};
    ${(props) => props.checked && `width:800px;`};
  }
  & > .post > .post-info > .post-title {
    padding: 2px 0;
  }
  & > .post > .post-info > .post-description {
    padding: 2px 0;
  }
  & > .post > .post-info > .post-date {
    color: gray;
    font-size: 12px;
    padding: 2px 0;
  }
  & > .post > .post-info > .post-image {
    object-fit: contain;
    width: 100%;
    padding: 2px 0;
    border-radius: 5px;
    ${(props) => props.checked && `display:none;`}
  }
  & > .post > .post-avatar > img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-right: 20px;
  }
`;
