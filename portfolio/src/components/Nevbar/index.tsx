import Link from "next/link";
import Image from 'next/image'

function Nevbar() {
  const pages = {
    Project: "/project",
    About: "/about",
  };

  const homePath = "/";

  return (
    <div className="w-full py-8 px-12 fixed">
      <div className="flex justify-between sm:px-10">
        <Link href={homePath}>
          {/* <h1 className="text-xl font-bold">TJ7</h1> */}
          <Image
            src="/feviconEdit.png"
            width={100}
            height={100}
            alt="main logo"
          />
        </Link>
        <div className="flex flex-row gap-5 sm:gap-10 justify-center items-center">
          {Object.entries(pages).map(([page, path]) => (
            <Link href={path}>
              <h2 className="text-lg">{page}</h2>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Nevbar;
