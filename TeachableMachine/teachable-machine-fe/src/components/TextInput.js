import React, { useState, useEffect, useRef } from "react";
 

 
function TextInput({ init }) {
  const ref = useRef(null);
  const [text, setText] = useState(init);
  const [editable, setEditable] = useState(false);
  const editOn = () => {
    setEditable(true);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setEditable(!editable);
    }
  };
  const handleClickOutside = (e) => {
    if (editable == true && !ref.current.contains(e.target)) setEditable(false);
  };
  useEffect(() => {
    window.addEventListener("click", handleClickOutside, true);
  });
  return (
    <>
      <div ref={ref}>
        {editable ? (
          <input type="text" value={text} onChange={(e) => handleChange(e)} onKeyDown={handleKeyDown} />
        ) : (
          <div onClick={() => editOn()}>{text}</div>
        )}
      </div>
    </>
  );
}
 
export default TextInput;