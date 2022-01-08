import React, { useState, useEffect } from "react";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

export default function DropDown(props) {
  const { title, listItem, id, triggerFunction, filterFromRedux } = props;
  const [toggleValue, setToggleValue] = useState(false);
  const [caretTitle, setCaretTitle] = useState(title);
  const seasons = ["Mùa Đông", "Mùa Xuân", "Mùa Hạ", "Mùa Thu"];
  // console.log(id);
  // console.log(`${title} ${id}`);
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
      default:
        console.log("error dispatch");
    }
  };

  useEffect(() => {
    //season filed
    if (id === 1 && !isNaN(filterFromRedux)) {
      // console.log(seasons[filterFromRedux]);
      setCaretTitle(seasons[filterFromRedux]);
    } else {
      setCaretTitle(title);
    }

    //genres field
    if (id === 2 && isNaN(filterFromRedux)) {
      setCaretTitle(filterFromRedux);
    } else {
      setCaretTitle(title);
    }

    return () => {};
  }, []);

  return (
    <Dropdown data-id={id} toggle={handleToggleItems} isOpen={toggleValue}>
      {/* {console.log(caretTitle)} */}
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
