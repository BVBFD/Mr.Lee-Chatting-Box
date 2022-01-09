import React from "react";

const TweetCard = (props) => {
  return (
    <li className="tweetCardLi">
      <div className="nameImgDate">
        <img
          src="https://i.pinimg.com/474x/e2/2c/b9/e22cb965ccd406838b496358fd5d989a.jpg"
          alt="logoImg"
        />
        <span>Audrey</span>
        <span>@audrey</span>
        <span>on 5월 10일</span>
      </div>
      <div className="textBox">
        <p>리액트 화면 구성 마스터 할때 까지 안 잔다.</p>
      </div>
    </li>
  );
};

export default TweetCard;
