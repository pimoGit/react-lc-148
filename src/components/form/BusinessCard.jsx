import { useState } from "react";

const BusinessCard = () => {

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [companyName, setCompanyName] = useState("");
    // const [role, setRole] = useState("");
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");
    // const [companyPic, setCompanyPic] = useState("");

    // stato unico di gestione del form

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        companyName: "",
        role: "",
        email: "",
        phone: "",
        companyPic: ""
    });

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-8">
                    {/* FORM */}
                    <form>
                        <div className="row g-3 row-cols-2">
                            <div className="col">
                                <input
                                    className="form-control"
                                    placeholder="Nome"
                                    type="text"
                                    value={formData.firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    name="firstName"
                                />
                            </div>
                            <div className="col">
                                <input
                                    className="form-control"
                                    placeholder="Cognome"
                                    type="text"
                                    value={formData.lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    name="lastName"
                                />
                            </div>
                            <div className="col">
                                <input
                                    className="form-control"
                                    placeholder="Azienda"
                                    type="text"
                                    value={formData.companyName}
                                    onChange={(e) => setCompanyName(e.target.value)}
                                    name="companyName"
                                />
                            </div>
                            <div className="col">
                                <input
                                    className="form-control"
                                    placeholder="Ruolo"
                                    type="text"
                                    value={formData.role}
                                    onChange={(e) => setRole(e.target.value)}
                                    name="role"
                                />
                            </div>
                            <div className="col">
                                <input
                                    className="form-control"
                                    placeholder="Email"
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    name="email"
                                />
                            </div>
                            <div className="col">
                                <input
                                    className="form-control"
                                    placeholder="Telefono"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    name="phone"
                                />
                            </div>
                        </div>
                        <input
                            className="form-control mt-3"
                            placeholder="Logo Azienda"
                            type="url"
                            value={formData.companyPic}
                            onChange={(e) => setCompanyPic(e.target.value)}
                            name="companyPic"
                        />
                    </form>
                </div>

                {/* COLONNA DESTRA */}
                <div className="col-md-4">

                    {/* BUSINESS CARD */}
                    <div className="card h-100">
                        <div className="card-header">{formData.companyName}</div>
                        <div className="card-body">
                            <div className="row row-cols-2">
                                <div className="col">
                                    <blockquote className="blockquote mb-0">
                                        <p>
                                            {formData.firstName} {formData.lastName}
                                        </p>
                                        <footer className="blockquote-footer">
                                            <cite title={formData.role}>{formData.role}</cite>
                                        </footer>
                                    </blockquote>
                                    <ul className="list-unstyled">
                                        <li><i className="bi bi-telephone-fill"></i> {formData.phone}</li>
                                        <li><i className="bi bi-envelope-at"></i> {formData.email}</li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <img
                                        className="img-fluid"
                                        src={formData.companyPic}
                                        alt={formData.companyName}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BusinessCard