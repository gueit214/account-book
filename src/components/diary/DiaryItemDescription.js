import React from "react";

const DiaryItemDescription = () => {
  return (
    <div className="rows row--description">
      <div className="column col--num">(번)</div>
      <div className="column col--date">날짜</div>
      <div className="column col--price">금액</div>
      <div className="column col--content">내역</div>
      <div className="column col--type">분류</div>
      <div className="column col--note">비고</div>
    </div>
  );
};

export default DiaryItemDescription;
