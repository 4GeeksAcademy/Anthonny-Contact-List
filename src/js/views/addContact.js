import React from 'react';
import { Link } from 'react-router-dom';

export const AddContact = () => {
    return (
        <div className="container mt-5">
            <h1 className="text-center">Add New Contact</h1>
            <div className="d-flex justify-content-center">
                <form className="w-50">
                    <div className="row mb-3">
                        <div className="col-12">
                            <label htmlFor="name" className="form-label bold-label">Full Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Enter full name" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12">
                            <label htmlFor="email" className="form-label bold-label">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Enter email address" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12">
                            <label htmlFor="phone" className="form-label bold-label">Phone</label>
                            <input type="tel" className="form-control" id="phone" placeholder="Enter phone number" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-12">
                            <label htmlFor="address" className="form-label bold-label">Address</label>
                            <input type="text" className="form-control" id="address" placeholder="Enter home address" required />
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