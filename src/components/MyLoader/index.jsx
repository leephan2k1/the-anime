import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={0.5}
    width={200}
    height={300}
    viewBox="0 0 200 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#d6d6d6"
    {...props}
  >
    <rect x="0" y="0" rx="2" ry="2" width="200" height="300" />
  </ContentLoader>
);

export default MyLoader;
