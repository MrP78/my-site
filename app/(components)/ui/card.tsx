"use client";

import { Article } from "@/app/lib/definitions";
import Link from "next/link";
import "./card.scss";

const Card = ({ id, title, text }: Article) => {
  const excerpt = (text: string) => {
    return text.substring(0, 50) + "...";
  };

  // const handleClick = (e: any) => {
  //   e.preventDefault();
  //   console.log(`${id} clicked`);
  //   const params = new URLSearchParams();
  //   params.set(id, JSON.stringify({ id, title, text }));
  //   router.push("/" + "?" + params);
  // };

  return (
    <Link
      className="card"
      href={{ pathname: "/article/", query: { id, text, title } }}
      // as={`/article/?title=${title}`}
      passHref
    >
      <h4 className="heading-4 text-center">{title}</h4>
      <p className="text-center">{excerpt(text)}</p>
    </Link>
  );
};

export default Card;
