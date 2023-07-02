import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from '../components/Footer';

const Layout = () => {

  return (
    <>
			<Header />
			<div className="container-fuid mb-5 px-5">
				<Outlet />
			</div>
			<Footer />
		</>
  )
}

export default Layout