import Image from "next/image";

const MenuItem = () => {
  return (
    <div className="bg-secondary rounded-lg hover:bg-white hover:shadow-md hover:shadow-black/25 hover:opacity-90 transistion-all">
      <Image
        src={"/banana.jpg"}
        width={260}
        height={0}
        ayout="fill"
        objectFit="contain"
        alt={"Banana"}
        className="h-52 rounded-t-lg"
      />
      <div className="flex flex-col items-start p-4 gap-1">
        <h4 className="font-bold">Banana</h4>
        <p className="text-sm text-gray-500">
          Fresh Banana, Beautiful skin, 2kg
        </p>
        <p className="text-price font-semibold">£20.00</p>
        <p>5 star</p>
        <button className="bg-primary text-white font-semibold mt-4 px-14 py-2 rounded m-auto flex items-center uppercase">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default MenuItem;
