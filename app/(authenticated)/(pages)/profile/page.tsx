import Image from "next/image";
import React from "react";
import Image1 from "../../../assets/avatars/avataaars1.svg";

function Profile() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100%",
      }}
    >
      <h1>In Development - this is for testing...</h1>
      <Image src={Image1} alt="testing-image" loading="eager" />
    </div>
  );
}

export default Profile;
