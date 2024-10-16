import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/index.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [contactToDelete, setContactToDelete] = useState(null);

	useEffect(() => {
		actions.getAllContacts();
	}, []);

	const handleDeleteContact = () => {
		if (contactToDelete) {
			actions.deleteContact(contactToDelete);
			setContactToDelete(null);
		}
	};

	return (
		<div className="container mt-5">
			<h1 className="text-center">Contact List</h1>
			<div className="d-flex justify-content-end mb-4" style={{ maxWidth: "900px", margin: "0 auto" }}>
				<Link to="/addcontact">
					<button className="btn btn-success">Add new contact</button>
				</Link>
			</div>

			<ul className="list-group mx-auto" style={{ maxWidth: "900px" }}>
				{store.contacts.map(contact => (
					<li key={contact.id} className="list-group-item d-flex justify-content-between align-items-center" style={{ padding: "20px", borderRadius: "10px", minHeight: "100px" }}>
						<div className="d-flex align-items-center">
							<img
								src={contact.avatar || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQamrPQqmVu4jdo3eDk1rQKJXMS9pkT8n7M6g&s"}
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
							<Link to={`/updatecontact/${contact.id}`}>
								<i className="fa-solid fa-pencil" style={{ cursor: "pointer", marginRight: "45px", color: "black" }}></i>
							</Link>
							<i
								className="fa-solid fa-trash-can"
								style={{ cursor: "pointer", marginRight: "30px", color: "red" }}
								onClick={() => setContactToDelete(contact.id)}
								data-bs-toggle="modal"
								data-bs-target="#deleteModal"
							></i>
						</div>
					</li>
				))}
			</ul>
			<div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="deleteModalLabel">Confirm Deletion</h5>
							<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
						</div>
						<div className="modal-body">
							Are you sure you want to delete this contact?
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
							<button type="button" className="btn btn-danger" onClick={handleDeleteContact} data-bs-dismiss="modal">Delete</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};