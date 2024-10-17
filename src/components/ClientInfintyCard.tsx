import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

type Product = {
  title: string;
  description: string;
  image: string;
};

type CardItem = {
  quote: string;
  name: string;
  title: string;
};

const MovingCardPage = async () => {
  const data = await getAllTodos();

  const items: CardItem[] = data.map((product: Product) => ({
    quote: `Quote for ${product.title}`,
    name: product.title,
    title: product.title,
  }));

  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] flex flex-col items-center justify-center overflow-hidden">
      <h1 className="text-3xl font-bold text-center mb-8 z-10">Moving Cards Page</h1>
      <div className="flex justify-center w-full overflow-hidden sm:px-2 lg:px-4">
        <div>
          <InfiniteMovingCards
            className="w-full max-w-7xl"
            items={items}  
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

async function getAllTodos(): Promise<Product[]> {
  const response = await fetch("https://fakestoreapi.com/products");
  return await response.json();
}

export default MovingCardPage;
