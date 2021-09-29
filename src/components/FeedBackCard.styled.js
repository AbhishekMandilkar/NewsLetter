import styled from "styled-components";

const FeedbackCard = styled.div`
  background-color: #fff;
  /* height: 100px; */
  box-shadow: 0px 3px 20px 3px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;

  & > button {
    background-color: ${(props) =>
      !props.showFeedback ? `#93e6c3` : `#ECA4A7`};

    border: none;
    padding: 10px;
    margin-top: 5px;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: inset 0px 3px 15px 3px rgba(0, 0, 0, 0.1);
  }
`;
export default FeedbackCard;
