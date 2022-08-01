import React, { useState } from "react";

const AddDiaryItem = () => {
  const todayDate = new Date();
  const fullTodayDate = `${todayDate.getFullYear()}-${(
    "00" + String(todayDate.getMonth() + 1)
  ).slice(-2)}-${("00" + todayDate.getDate()).slice(-2)}`;

  const [inputState, setInputState] = useState({
    date: fullTodayDate,
    price: "",
    content: "",
    type: "",
    note: "",
  });
  const handleInputState = (e) => {
    setInputState((state) => {
      console.log(state, e.target.name, e.target.value);
      const newState = { state, [e.target.name]: e.target.value };
      return newState;
    });
  };
  const handleAddButton = () => {
    console.log(inputState);
  };

  return (
    <tbody className="table-light">
      <tr>
        <th scope="row">추가</th>
        <th>
          <input
            type="date"
            name="date"
            value={inputState.date}
            onChange={handleInputState}
          />
        </th>
        <td>
          <input
            type="number"
            min="0"
            step="1000"
            name="price"
            value={inputState.price}
            onChange={handleInputState}
          />
        </td>
        <td>
          <input type="text" />
        </td>
        <td>
          <select>
            <option>데이트</option>
            <option>친구</option>
            <option>자기계발</option>
          </select>
        </td>
        <td>
          <input type="text" />
        </td>
      </tr>
    </tbody>
  );
};

export default AddDiaryItem;
