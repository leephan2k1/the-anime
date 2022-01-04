import React from "react";
import PropTypes from "prop-types";

function Box(props) {
  const { title, imgUrl, classNames, children } = props;

  return (
    <div className={classNames.wrapperClassName}>
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
