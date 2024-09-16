import React from "react";

import Image from "next/image";

import dancingMouse from "../../../../assets/dancing-mice-dancing.gif";

function LoadingComponent() {
  return (
    <div>
      <Image src={dancingMouse} alt="dancing mouse" height={35} width={35} />
    </div>
  );
}

export default LoadingComponent;
