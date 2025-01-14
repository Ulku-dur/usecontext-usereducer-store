import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <div className="text-3xl text-center font-semibold mt-2 py-4">
      <Link to ="/">Home</Link>
      <Link to ="/basket">Basket</Link>
    </div>
    <h1 className="text-3xl text-center font-semibold mt-2 py-4">useContext + useReducer Store</h1>
    </>
  )
}

export default Navbar
