import React from "react";

export const Data = (data) => {
  const dataArray = Object.values(data)[0];
  return dataArray.map((content, index) => (
    <li key={index}>
      <a href='#'>Item {content}</a>
    </li>
  ));
};
