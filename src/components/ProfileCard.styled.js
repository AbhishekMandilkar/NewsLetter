import React from "react";
import styled from "styled-components";

function ProfileCard() {
  return (
    <div>
      <Profile>
        <img
          src="https://randomuser.me/api/portraits/med/men/75.jpg"
          alt="Random"
        />
        <div>
          <h3>Hi Reader,</h3>
          <span>Here's your News!</span>
        </div>
      </Profile>
    </div>
  );
}

export default ProfileCard;

const Profile = styled.div`
  background-color: #fff;
  height: 60px;
  box-shadow: 0px 3px 20px 3px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 10px;

  & > img {
    border-radius: 50%;
    width: 60px;
    height: 60px;
  }
  & > div {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
  }
`;
