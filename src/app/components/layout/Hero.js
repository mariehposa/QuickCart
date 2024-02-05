import Image from "next/image";
import RightIcon from "../icons/right";

const Hero = () => {
  return (
    <section className="flex justify-between my-8">
      <div className="w-1/3 ">
        <h1 className="text-4xl font-semibold mb-7">
          Freshness Delivered, Fast and Easy.
        </h1>
        <p className="text-lg">
          Tired of the hassle of grocery shopping? Say goodbye to long lines and
          crowded aisles – GrocHub is here to revolutionize your shopping
          experience. With just a few clicks, you can order all your groceries
          from the comfort of your home and have them delivered right to your
          doorstep.
        </p>
        <div className="flex gap-8 mt-8">
          <button className="bg-primary text-white px-6 py-2 rounded-full flex gap-2 items-center">
            Order now <RightIcon className="w-4 h-4" />
          </button>
          <button className="flex gap-2 items-center">
            Learn more <RightIcon />
          </button>
        </div>
      </div>
      <div className="w-2/4">
        <Image
          src="/grocery.png"
          alt="groceries"
          layout="fill"
          objectFit="contain"
          className="!relative rounded !h-80"
        />
      </div>
    </section>
  );
};

export default Hero;
