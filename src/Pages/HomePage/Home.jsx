function onViewChange() {

  var viewName = window.location.hash; // or use window.location.pathName if router works on path and not hash

  viewName = viewName || 'home'; // view name cannot be empty

  // Sanitize viewName to get rid of any trailing symbols derived from URL

  if (viewName.startsWith('#') || viewName.startsWith('/')) {
    viewName = viewName.substr(1);
  }

  alloy("sendEvent", {
    "renderDecisions": true,
    "xdm": {
      "web": {
        "webPageDetails": {
          "viewName":"home"
        }
      }
    }
  });
}



import React from 'react'
import InfoSection from "../../compoents/InfoSection/InfoSection"
import Pricing from '../../compoents/Pricing/Pricing';
import { homeObjOne1, homeObjOne2, homeObjOne3, homeObjOne4 } from "../Data";

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