import * as config from "@/public/config.json";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className="px-20 flex items-center justify-between">
      <div>
        <Image
          width={80}
          height={150}
          src={config.data.header.logo}
          alt={config.data.header.logoAltText}
        />
      </div>
      <div>
        <ul className="flex items-center gap-x-10">
          {config.data.header.navItems.map((item, i) => (
            <Link key={i} href={item.action}>
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Header;
