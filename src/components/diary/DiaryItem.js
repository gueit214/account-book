import React from "react";
const DiaryItem = (props) => {
  const diary = props.diary;
  return (
    <tbody className="table-light">
      <tr>
        <th scope="row">추가</th>
        <td>{diary.date}</td>
        <td>{diary.price}</td>
        <td>{diary.content}</td>
        <td>{diary.type}</td>
        <td>{diary.note}</td>
      </tr>
    </tbody>
  );
};

export default DiaryItem;
