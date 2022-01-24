// MyComponent.js
import propTypes from "prop-types";

const MyComponent = ({ num, children }) => {
  return (
    <div>
      안녕하세요, 오늘 배울 내용은 {num}장입니다. <br />
      부모 태그 안의 내용은 {children} 입니다.
    </div>
  );
};

MyComponent.defaultProps = {
  num: propTypes.number.isRequired,
};

export default MyComponent;
