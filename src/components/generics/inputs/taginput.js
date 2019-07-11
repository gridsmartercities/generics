import React, { useState, useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Label from "../label";

const InputStyle = styled.div`
  display: block;
  width: 100%;
  box-sizing: border-box;
  border: ${({ theme }) => theme.input.border || "1px solid #ccc"};
  padding: ${({ theme }) => theme.input.padding || "0.5rem"};
  margin: ${({ theme }) => theme.input.margin || "5px 0"};
  background: ${({ theme }) => theme.input.background || "#fff"};
  border-radius: ${({ theme }) => theme.input.borderRadius || "5px"};
`;

const Tag = styled.div`
  background: red;
`;

const Input = props => {
  const [tags, updateTags] = useState([]);
  const input = useRef();
  const update = e => {
    if (e.keyCode === 13) {
      updateTags(e.target.innerText.split(","));
    }
  };
  const remove = e => {
    const text = e.target.dataset.entry;
    console.log(text);
    const newTags = tags.filter(item => item !== text);
    input.current.innerText = newTags.join(",");
    updateTags(newTags);
  };
  return (
    <>
      <input type="hidden" value={JSON.stringify(tags)} />
      {tags.map(item => (
        <Tag>
          {item}
          <span data-entry={item} onClick={remove}>
            X
          </span>
        </Tag>
      ))}
      <InputStyle ref={input} contentEditable={true} onKeyDown={update} />
    </>
  );
};

export default Input;
