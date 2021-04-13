import React from "react";
import { useHistory } from "react-router-dom";
function HomeButton(props) {
  let history = useHistory();

  function handleClick() {
    history.push("/");
    window.location.reload();
  }

  return (
    <button className={props.className} type="button" onClick={handleClick}>
      {props.children}
    </button>
  );
}

export default HomeButton;
