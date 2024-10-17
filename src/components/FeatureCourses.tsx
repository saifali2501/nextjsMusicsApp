// FeatureCourses.tsx (Server Component)
import { ClientBackgroundWrapper } from "./ClientBackgroundWrapper";  // Correct the import

async function getAllTodos() {
  const response = await fetch("https://fakestoreapi.com/products");
  console.log("🚀 ~ getAllTodos ~ response:====>", response);
  return await response.json();
}

const FeatureCourses = async () => {
  const todos = await getAllTodos();

  return (
    <div className="py-12 bg-white">
      <div>
        <div className="text-center">
          <h1 className="text-4xl text-white text-center">BEST PRODUCT</h1>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-5 gap-4">
        {todos.slice(0, 8).map((todo: any) => (
          <ClientBackgroundWrapper key={todo.id}>
            <div className="flex flex-col items-center  hover:text-black  transition duration-200">
              {/* <h4 className="text-center mb-4">{todo.title}</h4> */}
              <img className="h-[20rem] w-full border rounded-[1rem]" src={todo.image} alt={todo.title} />
            </div>
          </ClientBackgroundWrapper>
        ))}
      </div>
    </div>
  );
};

export default FeatureCourses;
