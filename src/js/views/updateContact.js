import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';

export const UpdateContact = () => {
    const { actions, store } = useContext(Context);
    const { id } = useParams();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: ''
    });

    useEffect(() => {
        const contact = store.contacts.find(contact => contact.id === parseInt(id));
        if (contact) {
            setFormData(contact);
        }
    }, [id, store.contacts]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await actions.updateContact(id, formData);
        navigate('/home');
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center">Update Contact</h1>
            <div className="d-flex justify-content-center">
                <form className="w-50" onSubmit={handleSubmit}>
                    <div className="row mb-3">
                        <div className="col-12">
                            <label htmlFor="name" className="form-label bold-label">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                name="name"
                                placeholder="Enter full name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12">
                            <label htmlFor="email" className="form-label bold-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                name="email"
                                placeholder="Enter email address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12">
                            <label htmlFor="phone" className="form-label bold-label">Phone</label>
                            <input
                                type="tel"
                                className="form-control"
                                id="phone"
                                name="phone"
                                placeholder="Enter phone number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12">
                            <label htmlFor="address" className="form-label bold-label">Address</label>
                            <input
                                type="text"
                                className="form-control"
                                id="address"
                                name="address"
                                placeholder="Enter home address"
                                value={formData.address}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Save</button>
                    <div className="text-start mt-3">
                        <Link to="/home" className="contact-link">or get back to contacts</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};
