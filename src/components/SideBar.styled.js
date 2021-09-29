import styled from "styled-components";
import FeedbackCard from "./FeedBackCard.styled";
import ProfileCard from "./ProfileCard.styled";
import SwitchCard from "./SwitchCard.styled";
import FeedBackForm from "./FeedBackForm";
import Switch from "react-switch";
import "./../utils/react-switch-styles.css";
import { BsCardHeading } from "react-icons/bs";
import { AiOutlineUnorderedList } from "react-icons/ai";

function SideBar({
  checked,
  handleChange,
  showFeedback,
  setShowFeedback,
  withFeedback,
}) {
  const handleFeedbackView = () => {
    showFeedback ? setShowFeedback(false) : setShowFeedback(true);
  };

  return (
    <>
      <SideBarContainer>
        <div className="sidebar">
          <ProfileCard />
          {showFeedback ? (
            <FeedbackCard showFeedback={showFeedback}>
              <h2>Have a Feedback?</h2>
              <button onClick={() => handleFeedbackView()}>
                <h3>We'r Listening</h3>
              </button>
            </FeedbackCard>
          ) : (
            <>
              <SwitchCard>
                <h2>View Toggle</h2>
                <Switch
                  onChange={handleChange}
                  checked={checked}
                  className="react-switch"
                  uncheckedHandleIcon={<BsCardHeading />}
                  uncheckedIcon={<AiOutlineUnorderedList />}
                  checkedIcon={<BsCardHeading />}
                  checkedHandleIcon={<AiOutlineUnorderedList />}
                  borderRadius={5}
                  width={150}
                  height={75}
                  offColor="#E2EAEF"
                  onColor="#E2EAEF"
                  onHandleColor="#93E6C3"
                  offHandleColor="#93E6C3"
                />
              </SwitchCard>
              <FeedbackCard>
                <h2>Have a Feedback?</h2>
                <button onClick={() => handleFeedbackView()}>
                  <h3>We'r Listening</h3>
                </button>
              </FeedbackCard>
            </>
          )}
        </div>
        {withFeedback && <FeedBackForm />}
      </SideBarContainer>
    </>
  );
}

export default SideBar;

const SideBarContainer = styled.div`
  padding: 50px 50px 0 50px;
  top: 0;
  position: absolute;
  box-shadow: 0px 3px 20px 3px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  background-color: #ebf2f7;
  transition: width 200ms ease-in-out;
  & > .sidebar {
    height: 100vh;
  }
`;
