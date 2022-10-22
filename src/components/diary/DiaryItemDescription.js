import React, { useState } from "react";

const DiaryItemDescription = (props) => {
  const handleSortState = (e) => {
    props.setSortState(e.target.value);
  };
  return (
    <div className="rows row--description">
      <div className="column col--num">(번)</div>
      <div className="column col--date">
        날짜
        <select onChange={handleSortState}>
          <option value="ascending">오름차순</option>
          <option value="descending">내림차순</option>
        </select>
      </div>
      <div className="column col--price">금액</div>
      <div className="column col--content">내역</div>
      <div className="column col--type">분류</div>
      <div className="column col--note">비고</div>
    </div>
  );
};

export default DiaryItemDescription;
