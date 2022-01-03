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
      backgroundColor="#f3f3f3"
      foregroundColor="#d6d6d6"
      {...props}
    >
      <rect x="0" y="0" rx="2" ry="2" width="2400" height="450" />
    </ContentLoader>
  );
};

export default MyLoader;
