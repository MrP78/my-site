import Card from "../ui/card";
import "./cards.scss";

interface ICard {
  title: string;
  text: string;
}

const Cards = () => {
  const simCards: ICard[] = [
    { title: "Jim", text: "Jim Lorem" },
    { title: "Bob", text: "Bob Lorem" },
  ];

  return (
    <section className="cards">
      <div>cards</div>
      {simCards.map((card) => {
        return (
          <Card
            key={card.title}
            title={card.title}
            text={card.text}
          />
        );
      })}
    </section>
  );
};

export default Cards;
