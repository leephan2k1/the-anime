import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { useSelector } from "react-redux";
import { filter } from "app/selectors";

export default function DropDown(props) {
  const { title, listItem, id, triggerFunction } = props;
  const [toggleValue, setToggleValue] = useState(false);
  const [caretTitle, setCaretTitle] = useState(null);
  const filterFromRedux = useSelector(filter);

  // console.log(id);

  const covertSeasonStringToNumber = (season) => {
    switch (season) {
      case "Mùa Xuân":
        return 1;
      case "Mùa Hạ":
        return 2;
      case "Mùa Thu":
        return 3;
      case "Mùa Đông":
        return 0;
    }
  };

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
        triggerFunction(
          "season",
          covertSeasonStringToNumber(e.target.innerText)
        );
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

  //active content filter from redux
  useEffect(() => {
    const toggleBtnsDOM = document.querySelectorAll(".dropdown-toggle");
    if (filterFromRedux) {
      switch (filterFromRedux) {
        case 0:
          toggleBtnsDOM[1].innerText = "Mùa Đông";
          break;
        case 1:
          toggleBtnsDOM[1].innerText = "Mùa Xuân";
          break;
        case 2:
          toggleBtnsDOM[1].innerText = "Mùa Hạ";
          break;
        case 3:
          toggleBtnsDOM[1].innerText = "Mùa Thu";
          break;
        default:
          toggleBtnsDOM[2].innerText = filterFromRedux;
      }
    }
  }, []);

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
