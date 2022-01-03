import React from "react";
import PropTypes from "prop-types";

function Box(props) {
  const { title, imgUrl, classNames } = props;

  return (
    <div className={classNames.wrapperClassName}>
      {imgUrl && (
        <img className={classNames.imgClassName} src={imgUrl} alt={title} />
      )}
      <div className={classNames.titleClassName}>{title}</div>
    </div>
  );
}

Box.propTypes = {
  title: PropTypes.string,
  imgUrl: PropTypes.string,
  classNames: PropTypes.object,
};

export default Box;
