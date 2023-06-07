import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">SGF</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
					<div className="navbar-nav">
						<NavLink to="/" className="nav-link">Home</NavLink>
						<NavLink to="/cadastro" className="nav-link">Inscreva-se</NavLink>
						<NavLink to="/login" className="nav-link">Entrar</NavLink>
					</div>
					
				</div>
			</div>
		</nav>
	)
}

export default Navbar