/* eslint-disable react/prop-types */

const Container = (props) => {
	return (
		<div className="container-fluid min-vh-100 d-flex">
			{props.children}
		</div>
	)
}

export default Container