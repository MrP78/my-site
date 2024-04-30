"use client";

import { Article } from "@/app/lib/definitions";
import { useSearchParams } from "next/navigation";
const Page = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  return (
    <>
      <h1 className="heading-1 text-center">{title}</h1>
      {/* <p>{params.text}</p> */}
    </>
  );
};

export default Page;
