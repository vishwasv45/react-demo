import React from "react";
import  InfoSection  from "../../compoents/InfoSection/InfoSection";
import { homeObjOne1, homeObjOne2, homeObjOne3, homeObjOne4 } from "../Data";
window.datalayer={
  event: 'pageView',
  pageView: viewName,
  userId: '12345',
  userType: 'guest',
  pageCategory: 'home',
  pageTitle: document.title,
  timestamp: new Date().toString(),
  pageUrl: window.location.href,
}
function Products() {
  return (
    <>
      <InfoSection {...homeObjOne1} />
      <InfoSection {...homeObjOne2} />
    </>
  );
}

export default Products;
