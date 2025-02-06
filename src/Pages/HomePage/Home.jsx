

import React from 'react'
import InfoSection from "../../compoents/InfoSection/InfoSection"
import Pricing from '../../compoents/Pricing/Pricing';
import { homeObjOne1, homeObjOne2, homeObjOne3, homeObjOne4 } from "../Data";

window.dataLayer={
  event: 'pageView',
  pageView: viewName,
  userId: '12345',
  userType: 'guest',
  pageCategory: 'home',
  pageTitle: document.title,
  timestamp: new Date().toString(),
  pageUrl: window.location.href,
}
const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne1} />
      <InfoSection {...homeObjOne2} />
      <InfoSection {...homeObjOne3} />
      <Pricing/>
      <InfoSection {...homeObjOne4} />
    </>
  );
}

export default Home