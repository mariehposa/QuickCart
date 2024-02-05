import Link from "next/link";

const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <Link className="text-primary font-bold text-5xl" href={""}>
        GrocHub
      </Link>
      <nav className="flex gap-8 text-link font-medium items-center">
        <Link href={""}>Home</Link>
        <Link href={""}>Menu</Link>
        <Link href={""}>About</Link>
        <Link href={""}>Contact</Link>
      <Link
        className="bg-primary text-white px-6 py-2 rounded-full ml-6"
        href={""}
      >
        Login
      </Link>
      </nav>
    </header>
  );
};

export default Header;
