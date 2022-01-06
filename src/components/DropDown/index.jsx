import {
  setFormats,
  setGenres,
  setSeason,
  setStatus,
  setYear,
} from "app/filtersSlice";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
export default function DropDown(props) {
  const { title, listItem, id } = props;
  const [toggleValue, setToggleValue] = useState(false);
  const [caretTitle, setCaretTitle] = useState(null);
  const dispatch = useDispatch();
  // console.log(id);

  const handleToggleItems = () => {
    setToggleValue((prevState) => !prevState);
  };
  const handleClickItem = (e) => {
    // console.log(typeof e.target.closest(".dropdown").dataset.id);
    setCaretTitle(e.target.innerText);
    switch (+e.target.closest(".dropdown").dataset.id) {
      case 0:
        dispatch(setYear(+e.target.innerText));
        break;
      case 1:
        dispatch(setSeason(e.target.innerText));
        break;
      case 2:
        dispatch(setGenres(e.target.innerText));
        break;
      case 3:
        dispatch(setStatus(e.target.innerText));
        break;
      case 4:
        dispatch(setFormats(e.target.innerText));
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
