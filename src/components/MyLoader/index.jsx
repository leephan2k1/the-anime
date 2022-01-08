import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => {
  const { stloader } = props;
  return (
    <ContentLoader
      speed={stloader?.speed}
      width={stloader?.width}
      height={stloader?.height}
      viewBox={stloader?.viewBox}
      backgroundColor="#1f2123"
      foregroundColor="#5d6468"
      {...props}
    >
      <rect x="0" y="0" rx="2" ry="2" width="2400" height="450" />
    </ContentLoader>
  );
};

export default MyLoader;
