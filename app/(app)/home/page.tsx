import { UserButton } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div>
      Home page
      <div>
        <UserButton />
      </div>
    </div>
  );
};

export default page;
