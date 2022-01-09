import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setFilter } from "app/filtersSlice";
import { browsePagePath } from "constants/path";

function Box(props) {
  const { title, imgUrl, classNames, children } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClickSeason = () => {
    // console.log(title);
    switch (title) {
      case "SPRING":
        dispatch(setFilter(1));
        break;
      case "SUMMER":
        dispatch(setFilter(2));
        break;
      case "FALL":
        dispatch(setFilter(3));
        break;
      case "WINTER":
        dispatch(setFilter(0));
        break;
      default:
        dispatch(setFilter(title));
    }
    navigate(`${browsePagePath}/category`);
  };

  return (
    <div className={classNames.wrapperClassName} onClick={handleClickSeason}>
      {imgUrl && (
        <img className={classNames.imgClassName} src={imgUrl} alt={title} />
      )}
      {title ? <div className={classNames.titleClassName}>{title}</div> : null}
      {children}
    </div>
  );
}

Box.propTypes = {
  title: PropTypes.string,
  imgUrl: PropTypes.string,
  classNames: PropTypes.object,
};

export default Box;
