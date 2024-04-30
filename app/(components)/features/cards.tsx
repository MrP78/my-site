import Card from "@/app/(components)/ui/card";
import { Article } from "@/app/lib/definitions";
import "./cards.scss";

const Cards = ({ articles }: { articles: Article[] }) => {
  return (
    <section className="cards">
      <div>cards</div>
      {articles.map((card) => {
        return (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            text={card.text}
          />
        );
      })}
    </section>
  );
};

export default Cards;
