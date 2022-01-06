import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default function DropDown(props) {
  const { title, listItem } = props;
  const [toggleValue, setToggleValue] = useState(false);
  const [caretTitle, setCaretTitle] = useState(null);

  const handleToggleItems = () => {
    setToggleValue((prevState) => !prevState);
  };
  const handleClickItem = (e) => {
    console.log(e.target.innerText);
    setCaretTitle(e.target.innerText);
  };

  return (
    <Dropdown toggle={handleToggleItems} isOpen={toggleValue}>
      <DropdownToggle caret>{caretTitle || title}</DropdownToggle>
      <DropdownMenu>
        {listItem &&
          listItem.map((e, idx) => {
            return (
              <DropdownItem onClick={handleClickItem} key={idx}>
                {e}
              </DropdownItem>
            );
          })}
      </DropdownMenu>
    </Dropdown>
  );
}
