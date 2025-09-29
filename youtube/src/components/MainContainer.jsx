import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="flex-1 bg-gray-50 min-h-screen">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
