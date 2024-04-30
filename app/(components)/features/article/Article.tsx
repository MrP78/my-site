"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

const Article = () => {
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  return (
    <>
      <Suspense>
        <h1 className="heading-1 text-center">{title}</h1>
      </Suspense>
      {/* <p>{params.text}</p> */}
    </>
  );
};

export default Article;
