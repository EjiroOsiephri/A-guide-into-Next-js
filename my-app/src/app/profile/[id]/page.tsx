import React from "react";

const page = ({ params }: any) => {
  return (
    <div>
      <h1>
        Profile <span>{params.id}</span>
      </h1>
    </div>
  );
};

export default page;
