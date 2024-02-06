import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link className="text-primary font-bold text-5xl" href={""}>
        GrocHub
      </Link>
      <nav className="flex gap-8 text-gray-500 font-medium items-center">
        <Link href={""}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
      </nav>
      <nav>
        <Link href={"/login"} className="text-gray-500 font-medium">
          Login
        </Link>
        <Link
          href={"/register"}
          className="bg-primary text-white px-6 py-2 rounded-full ml-6"
        >
          Register
        </Link>
      </nav>
    </header>
  );
};

export default Header;
