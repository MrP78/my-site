import { Suspense } from "react";
import Article from "../../features/article/Article";
const Page = () => {
  return (
    <>
      <Suspense>
        <Article />
      </Suspense>
    </>
  );
};

export default Page;
