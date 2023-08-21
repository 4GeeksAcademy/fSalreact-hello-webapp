import React, { useContext }  from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const ContactCard = (props) => {
    const { store, actions } = useContext(Context);
    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src="https://th.bing.com/th/id/R.f760712e2e6370c6165c6a3c814269c7?rik=jjviPuvK9sgFhg&riu=http%3a%2f%2fkwikkuts.com%2fwp-content%2fuploads%2f2016%2f06%2fdfsg-e1465948450408.png&ehk=IlCSXaubVTvmyFL1vyKrx9%2b8FNMZ6A6Q5EuR5WdR%2feA%3d&risl=&pid=ImgRaw&r=0" className="img-fluid" alt="..."/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title"><b>{props.contact.name}</b></h5>
                        <p className="card-text"><i className="fas fa-map-marker-alt m-2"/>{props.contact.address}</p>
                        <p className="card-text"><i className="fas fa-phone m-2"/>{props.contact.phone}</p>
                        <p className="card-text"><i className="fas fa-envelope m-2"/>{props.contact.email}</p>
                    </div>
                    <div className="icon">
                        <button type="submit" className="btn me" onClick={() => props.delete()}><i className="fas fa-trash"></i></button>
                        <Link to={"/addContact/" + props.index}>
                            <button type="submit" className="btn me"><i className="fas fa-edit"></i></button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactCard;