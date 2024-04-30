"use client";

import clsx from "clsx";
import { MouseEvent } from "react";

interface props {
  children?: string;
  type?: "normal" | "warn" | "danger" | "success" | "info";
  disabled?: boolean;
  onClick?: (event: MouseEvent) => void;
}

const CustButton = ({
  children,
  type = "normal",
  disabled = false,
  onClick = () => {},
}: props) => {
  const danger = true;

  return (
    <>
      {children && (
        <button
          className={clsx("button", {
            normal: type === "normal",
            danger: type === "danger",
            warning: type === "warn",
            success: type === "success",
            info: type === "info",
          })}
          disabled={disabled}
          onClick={(event) => onClick(event)}
        >
          {children}
        </button>
      )}
    </>
  );
};

export default CustButton;
