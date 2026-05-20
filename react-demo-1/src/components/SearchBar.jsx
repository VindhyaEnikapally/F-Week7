import { useEffect, useRef } from "react";

function SearchBar({ onSearch }) {
  const inputRef=useRef(null);
  const timeoutRef=useRef(null);

  //autofocus on page load
  useEffect(() =>{inputRef.current.focus();},[]);

  const handleChange=(e) =>{const value=e.target.value;
    // clear prev timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // set new timeout (debounce 500ms)
    timeoutRef.current=setTimeout(() =>{onSearch(value);},500);
  };

  return (
    <div style={{marginBottom:"20px"}}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Search country..."
        onChange={handleChange}
        style={{padding:"10px",width:"300px"}}
      />
    </div>
  );
}

export default SearchBar;