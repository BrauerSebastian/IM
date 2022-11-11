import { GlobalOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function Publico() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <div className="flex flex-wrap items-center">
        <section className="relative mx-auto">
          <nav className="flex justify-between bg-gradient-to-r from-red-700 to-red-500 w-screen">
            <div className="px-5 py-6 flex w-full items-center">
              <GlobalOutlined className="text-2xl text-white mr-2"></GlobalOutlined>
              <Link
                to="/publico"
                className="text-3xl text-white font-bold font-heading"
              >
                Instituto Misionero
              </Link>
              <ul className="text-white hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li className="cursor-pointer hover:text-gray-300">
                  <Link to="/misioneros">Formulario</Link>
                </li>
              </ul>
              <div>
                <Link to="/login">
                  <button
                    id="dropdownInformationButton"
                    data-dropdown-toggle="dropdownInformation"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center "
                    type="button"
                  >
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </nav>
        </section>
      </div>
      <div></div>
      <Footer />
    </div>
  );
}
