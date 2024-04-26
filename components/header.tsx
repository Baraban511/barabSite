type Props = {
  active: string;
};

export default function Header({ active }: Props) {
  const menus = [
    { name: "Home", href: "/" },
    { name: "About me", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div class="bg-white w-full py-6 px-8 flex flex-col md:flex-row gap-4">
      <div class="flex items-center flex-1">
        <a href="/">
          <img src="./barab_logo_simple.png" className="h-6" />
        </a>
      </div>
      <ul class="flex items-center gap-6">
        {menus.map((menu) => (
          <li>
            <a
              href={menu.href}
              class={"text-gray-500 hover:text-gray-700 py-1 border-gray-500" +
                (menu.href === active ? " font-bold border-b-2" : "")} //t'enlève l'espace c'est mort...
            >
              {menu.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
