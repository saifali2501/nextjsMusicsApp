import React from "react";

type CardItem = {
  quote: string;
  name: string;
  title: string;
};

interface InfiniteMovingCardsProps {
  items: CardItem[];
  className?: string;
  direction: string;
  speed: string;
}

const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({ items, className, direction, speed }) => {
  return (
    <div className={`${className} infinite-moving-cards ${direction} ${speed}`}>
      {items.map((item, index) => (
        <div key={index} className="card-item">
          <h3>{item.name}</h3>
          <p>{item.quote}</p>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default InfiniteMovingCards;
