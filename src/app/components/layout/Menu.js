import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

const Menu = () => {
  return (
    <section>
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] text-left -z-10">
          <Image
            src={"/left-salad.png"}
            width={109}
            height={189}
            alt={"salad"}
          />
        </div>
        <div className="absolute -top-[70px] right-0 -z-10">
          <Image
            src={"/right-salad.png"}
            width={107}
            height={195}
            alt={"salad"}
          />
        </div>
      </div>
      <div className="text-center mb-4 mt-16">
        <SectionHeaders
          subHeader={"~ special products ~"}
          mainHeader={"Our Best Sellers"}
        />
      </div>
      <div className="flex flex-wrap gap-16 justify-center">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
};

export default Menu;
