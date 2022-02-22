import React from 'react';

const Navbar = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <img src="735145cfe0a4.png" alt="instagram" />
                </div>
                <div className="col-md-4">
                    <form>
                        <input className="form-control w-75" type="text" placeholder="Search" />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
