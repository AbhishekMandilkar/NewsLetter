import React from "react";
import styled from "styled-components";

function FeedBackForm({ showFeedback, setShowFeedback }) {
  return (
    <FeedBackFromWrapper>
      <h2>Thank you so much for taking the time.</h2>
      <span>Please provide the below details.</span>
      <div className="form-container">
        <InputLabel>First Name:</InputLabel>
        <TextInput placeholder="John" />
        <InputLabel>Last Name:</InputLabel>
        <TextInput placeholder="Doe" />
        <InputLabel>Adress:</InputLabel>
        <TextArea placeholder="Enter your full Postal Adress" rows="5" />
        <InputLabel>Country:</InputLabel>
        <TextInput placeholder="Country" country />
        <InputLabel>Email:</InputLabel>
        <TextInput placeholder="Email" type="email" />
        <InputLabel>Phone Number:</InputLabel>
        <span className="phone-input">
          <TextInput placeholder="+91" countryCode />
          <TextInput placeholder="123456789" phnNumber />
        </span>
        <SubmitButton>Submit Feedback</SubmitButton>
      </div>
    </FeedBackFromWrapper>
  );
}

export default FeedBackForm;

const FeedBackFromWrapper = styled.div`
  width: 500px;
  background-color: #ebf2f7;
  /* border: 1px solid #000; */
  margin-left: 200px;
  transition: all 0.5s;

  & > span {
    /* color: grey; */
    margin-top: 15px;
  }
  & > .form-container {
    margin: 20px 10px 10px 10px;
    display: flex;
    flex-direction: column;
  }
  & > .form-container > .phone-input {
    display: flex;
    width: 50%;
    justify-content: space-between;
  }
`;

const TextInput = styled.input`
  box-shadow: 0px 3px 20px 3px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  color: grey;
  padding-left: 20;
  padding: 10px;
  border: none;
  border-radius: 5px;
  width: 60%;
  ${(props) => props.country && `width:65%;`}
  ${(props) => props.countryCode && `width:10%;`}
  ${(props) => props.phnNumber && `width:70%;`}
  margin: 10px 0;
`;
const TextArea = styled.textarea`
  box-shadow: 0px 3px 20px 3px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  color: grey;
  padding-left: 20;
  padding: 10px;
  border: none;
  border-radius: 5px;
  resize: none;
  /* width: 60%; */
  margin: 10px 0;
`;

const InputLabel = styled.span`
  /* color: grey; */
  margin-top: 10px;
  margin-left: 10px;
`;

const SubmitButton = styled.button`
  background-color: #93e6c3;
  border: none;
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  cursor: pointer;
  width: 50%;
  color: #fff;
  font-weight: bold;
  box-shadow: inset 0px 3px 15px 3px rgba(0, 0, 0, 0.1);
`;
