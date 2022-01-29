import Link from 'next/link'
export const NavBar = () => {
  return (
    <nav
      className={`text-md flex h-16 items-center justify-between px-4 font-poppins  shadow-md md:px-16 md:text-lg lg:px-32 xl:px-64 xl:text-xl`}
    >
      <Link href="/">NHAWSOUHA</Link>
      <div className='hidden sm:flex'>
        <Link href="/Activities">Activities</Link>
        <Link href="/Hotels">
          <span className="xl:md-20 mx-6 cursor-pointer  md:mx-10 lg:mx-16">
            Hotels
          </span>
        </Link>
        <Link href="/Restaurants">Restaurants</Link>
      </div>
      <div className="flex h-12 items-center rounded-2xl bg-c-blue px-6 py-4 text-c-white">
        Register
      </div>
    </nav>
  )
}
