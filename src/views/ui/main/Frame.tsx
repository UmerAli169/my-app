import React from "react";
import Wrapper from "@/app/wrapper";
import FrameSection from "../shared/FrameSetcion";

function Frame() {
  return (
    <Wrapper>
      <FrameSection productIndex={0} isImageFirst={true} />
      <FrameSection productIndex={1} isImageFirst={false} />
      <FrameSection productIndex={2} isImageFirst={true} />
      <FrameSection productIndex={3} isImageFirst={false} />

    </Wrapper>
  );
}

export default Frame;
