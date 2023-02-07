import React from "react";

export const Data = (props) => {
  const dataArray = props.data;
  return dataArray.map((content, index) => (
    <li key={index}>
      <a href='#'>Item {content}</a>
    </li>
  ));
};
