"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const Article = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  return (
    <>
      <h1 className="heading-1 text-center">{title}</h1>

      {/* <p>{params.text}</p> */}
    </>
  );
};

export default Article;
