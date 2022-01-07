import React, { useState } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
export default function DropDown(props) {
  const { title, listItem, id, triggerFunction } = props;
  const [toggleValue, setToggleValue] = useState(false);
  const [caretTitle, setCaretTitle] = useState(null);

  // console.log(id);

  const handleToggleItems = () => {
    setToggleValue((prevState) => !prevState);
  };
  const handleClickItem = (e) => {
    // console.log(typeof e.target.closest(".dropdown").dataset.id);
    setCaretTitle(e.target.innerText);
    switch (+e.target.closest(".dropdown").dataset.id) {
      case 0:
        if (e.target.innerText === "Tất cả") {
          triggerFunction("year", "Tất cả");
        } else {
          triggerFunction("year", +e.target.innerText);
        }
        break;
      case 1:
        if (e.target.innerText === "Tất cả") {
          triggerFunction("season", "Tất cả");
          break;
        }
        //covert string to number
        let seasonNumber;
        switch (e.target.innerText) {
          case "Mùa Xuân":
            seasonNumber = 1;
            break;
          case "Mùa Hạ":
            seasonNumber = 2;
            break;
          case "Mùa Thu":
            seasonNumber = 3;
            break;
          case "Mùa Đông":
            seasonNumber = 0;
            break;
        }
        triggerFunction("season", seasonNumber);
        break;
      case 2:
        triggerFunction("genres", e.target.innerText);
        break;
      case 3:
        triggerFunction("status", e.target.innerText);
        break;
      case 4:
        triggerFunction("formats", e.target.innerText);
        break;
      default:
        console.log("error dispatch");
    }
  };

  return (
    <Dropdown data-id={id} toggle={handleToggleItems} isOpen={toggleValue}>
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
