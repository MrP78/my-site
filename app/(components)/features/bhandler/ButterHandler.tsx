"use client";

import CustButton from "../../ui/button/CustButton";

const ButterHandler = () => {
  return (
    <>
      <CustButton
        type="danger"
        onClick={(e) => console.log(e)}
      >
        Press
      </CustButton>
      <CustButton
        type="warn"
        onClick={(e) => console.log(e)}
      >
        Press
      </CustButton>
    </>
  );
};

export default ButterHandler;
