function Navbar() {
  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Articles", link: "#articles" },
    { name: "Contribute", link: "#contribute" },
    { name: "Contact", link: "#footer" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

        <h1 className="text-3xl font-bold text-[#0B6E4F]">
          CGSA
        </h1>

        <ul className="flex gap-10 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.link}
                className="hover:text-[#D97706] transition"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;
