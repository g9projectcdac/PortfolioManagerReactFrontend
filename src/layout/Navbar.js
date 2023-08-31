import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {


    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        navigate(`/search-results/${searchQuery}`);
    };


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">

                    <Link className="navbar-brand mb-0 display-1" to="/">PortFolioManager</Link>

                    <div className="input-group w-25">

                        <input type="search" value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)} 
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleSearch();
                                }
                            }} className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        <button type="button" onClick={handleSearch} className="btn btn-outline-primary mx-2 rounded">search</button>

                    </div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div>
                        <Link className="btn btn-outline-light" to="/addportfolio">Add PortFolio</Link>
                        <Link className="btn btn-outline-light mx-3" to="/home">View All</Link>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navbar