import React from "react";
import { Link } from "react-router-dom";
import "../../styles/index.css";

export const Home = () => {

	const contacts = [
		{
			id: 1,
			name: "John Doe",
			address: "1234 Elm Street",
			phone: "(555) 123-4567",
			email: "john@example.com",
			avatar: "https://via.placeholder.com/150"
		},
		{
			id: 2,
			name: "Jane Smith",
			address: "5678 Oak Avenue",
			phone: "(555) 987-6543",
			email: "jane@example.com",
			avatar: "https://via.placeholder.com/150"
		},
		{
			id: 3,
			name: "Bob Johnson",
			address: "910 Maple Road",
			phone: "(555) 246-8102",
			email: "bob@example.com",
			avatar: "https://via.placeholder.com/150"
		}
	];

	return (
		<div className="container mt-5">
			<h1 className="text-center">Contact List</h1>
			<div className="d-flex justify-content-end mb-4" style={{ maxWidth: "900px", margin: "0 auto" }}>
				<Link to="/addcontact">
					<button className="btn btn-success">Add new contact</button>
				</Link>
			</div>

			<ul className="list-group mx-auto" style={{ maxWidth: "900px" }}>
				{contacts.map(contact => (
					<li key={contact.id} className="list-group-item d-flex justify-content-between align-items-center" style={{ padding: "20px", borderRadius: "10px", minHeight: "100px" }}>
						<div className="d-flex align-items-center">
							<img
								src={contact.avatar}
								alt="Avatar"
								className="rounded-circle me-3"
								style={{ width: "100px", height: "100px", marginLeft: "20px" }}
							/>
							<div className="ms-5">
								<h5 className="mb-3">{contact.name}</h5>
								<p className="mb-0" style={{ fontSize: "0.875rem", fontWeight: "bold", color: "gray" }}>
									<i className="bi bi-geo-alt-fill"></i>
									<span className="ms-3">{contact.address}</span>
								</p>
								<p className="mb-0" style={{ fontSize: "0.875rem", fontWeight: "bold", color: "gray" }}>
									<i className="bi bi-telephone-fill"></i>
									<span className="ms-3">{contact.phone}</span>
								</p>
								<p className="mb-0" style={{ fontSize: "0.70rem", fontWeight: "bold", color: "gray" }}>
									<i className="bi bi-envelope-fill"></i>
									<span className="ms-3">{contact.email}</span>
								</p>
							</div>
						</div>
						<div>
							<i className="fa-solid fa-pencil" style={{ cursor: "pointer", marginRight: "45px" }}></i>
							<i className="fa-solid fa-trash-can" style={{ cursor: "pointer", marginRight: "30px" }}></i>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};