import Link from 'next/link'

function Nevbar() {

  const pages = {
    Project : "/project",
    About : "/about"
  }

  const homePath = '/'

  return (
    <div className="w-full py-8 px-12">
      <div className="flex justify-between sm:px-10">
        <Link href={homePath}>
          <h1 className="text-xl font-bold">
            TJ7
          </h1>
        </Link>
        <div className="flex flex-row gap-5 sm:gap-10">
          {Object.entries(pages).map(([page,path])=>(
            <Link href={path}>
                {page}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Nevbar
