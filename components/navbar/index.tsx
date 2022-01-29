import Link from 'next/link'
import logo from 'assets/logo.png'
import { useState } from 'react'
import { CustumInput, CustumLabel, Modal } from 'components'

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLogged, setIsLogged] = useState(false)
  const handleModal = (state: boolean) => {
    setIsOpen(state)
  }
  const handleCloseModal = () => {
    handleModal(false)
    setIsLogged(true)
  }
  return (
    <nav
      className={`text-md flex h-16 items-center justify-between px-4 font-poppins  shadow-md md:px-16 md:text-lg lg:px-32 xl:px-64 xl:text-xl`}
    >
      <Link href="/">
        <img src={logo.src} />
      </Link>
      <div className="hidden sm:flex">
        <Link href="/Activities">Activities</Link>
        <Link href="/Hotels">
          <span className="xl:md-20 mx-6 cursor-pointer  md:mx-10 lg:mx-16">
            Hotels
          </span>
        </Link>
        <Link href="/Restaurants">Restaurants</Link>
      </div>
      <div
        onClick={() => handleModal(true)}
        className="flex h-12 cursor-pointer items-center rounded-2xl bg-c-blue px-6 py-4 text-c-white"
      >
        {isLogged ? 'Disconnect' : 'Register'}
      </div>
      <Modal isOpen={isOpen} handleClose={handleModal}>
        <div className="mb-4 text-2xl font-semibold text-c-dark">
          Create an account
        </div>
        <CustumLabel text="Email adress" />
        <CustumInput
          className="w-full"
          name="email"
          type="email"
          placeholder="test@gmail.com"
        />
        <div className="my-4" />
        <CustumLabel text="Password" />
        <CustumInput
          className="w-full"
          name="password"
          type="password"
          placeholder="Mail adress"
        />
        <div className="mt-8 flex items-center justify-center ">
          <div
            onClick={handleCloseModal}
            className="flex h-12 cursor-pointer items-center rounded-2xl bg-c-blue px-6 py-4 text-c-white"
          >
            Register
          </div>
        </div>
      </Modal>
    </nav>
  )
}
