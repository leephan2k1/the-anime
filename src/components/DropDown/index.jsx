import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";
import { seasons } from "constants/season";

export default function DropDown(props) {
  const { title, listItem, id, triggerFunction, filterFromRedux } = props;
  const [toggleValue, setToggleValue] = useState(false);
  const [caretTitle, setCaretTitle] = useState(title);

  // console.log(seasons[filterFromRedux]);

  const covertSeasonStringToNumber = (season) => {
    return seasons.indexOf(season);
  };

  const handleToggleItems = () => {
    setToggleValue((prevState) => !prevState);
  };
  const handleClickItem = (e) => {
    // console.log(typeof e.target.closest(".dropdown").dataset.id);
    setCaretTitle(() => e.target.innerText);
    switch (+e.target.closest(".dropdown").dataset.id) {
      case 0:
        if (e.target.innerText === "Tất cả") {
          triggerFunction("year", 2021);
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
      case 5:
        triggerFunction("sort", e.target.innerText);
        break;
      default:
        console.log("error dispatch");
    }
  };

  //sync filter from homepage
  useEffect(() => {
    if (filterFromRedux) {
      switch (id) {
        case 1:
          if (seasons[filterFromRedux]) setCaretTitle(seasons[filterFromRedux]);
          break;
        case 2:
          if (isNaN(filterFromRedux)) {
            setCaretTitle(filterFromRedux);
          }
          break;
        default:
          setCaretTitle(title);
      }
    }
  }, []);

  return (
    <Dropdown data-id={id} toggle={handleToggleItems} isOpen={toggleValue}>
      {/* {console.log(id, " - ", caretTitle)} */}
      <DropdownToggle caret>{caretTitle}</DropdownToggle>
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
