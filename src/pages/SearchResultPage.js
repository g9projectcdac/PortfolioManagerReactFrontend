// import { useParams } from 'react-router-dom'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'
// import illustration2 from "../images/illustration2.png"
// import { Slide, ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import DeleteModal from '../layout/DeleteModal';

// const SearchResultPage = () => {

//     const [portfolios, setPortfolios] = useState([])
//     const [currentPage, setCurrentPage] = useState(1);
//     const [itemsPerPage, setItemsPerPage] = useState(6);
//     const [totalPages, setTotalPages] = useState(1);
//     const [sortOrder, setSortOrder] = useState('asc');

//     const { query } = useParams();

//     const { id } = useParams()

//     const [showModal, setShowModal] = useState(false);
//     const [portfolioToDeleteId, setPortfolioToDeleteId] = useState(null);

//     const handleDeleteClick = (portfolioId) => {
//         setPortfolioToDeleteId(portfolioId);
//         setShowModal(true);
//     };

//     const handleConfirmDelete = async () => {
//         if (portfolioToDeleteId) {
//             await deletePortfolio(portfolioToDeleteId);
//             setPortfolioToDeleteId(null);
//         }
//         setShowModal(false);
//     };

//     const handleCloseModal = () => {
//         setShowModal(false);
//     };

//     useEffect(() => {
//         loadPortfolios()
//     }, [query, currentPage, itemsPerPage, sortOrder])


//     const loadPortfolios = async () => {
//         const result = await axios.get(`http://localhost:8080/search?query=${query}`, {
//             params: {
//                 page: currentPage - 1,
//                 size: itemsPerPage,
//                 sortOrder: sortOrder,
//             },
//         })
//         setPortfolios(result.data)
//         setTotalPages(result.data.totalPages);
//     }

//     const deletePortfolio = async (id) => {
//         const result = await axios.delete(`http://localhost:8080/portfolio/${id}`)
//         console.log(result.status)
//         if (result.status === 200) {
//             toast.success("Record Deleted Successfully!", { position: "top-center", transition: Slide });
//         } else {
//             toast.error("Record Cant be Deleted!", { position: "top-center", transition: Slide });
//         }
//         loadPortfolios()
//     }

//     const handlePageChange = (page) => {
//         setCurrentPage(page);
//     };

//     const handleSortChange = () => {
//         setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
//     };

//     const handleFirstPage = () => {
//         setCurrentPage(1);
//     };

//     const handleLastPage = () => {
//         setCurrentPage(totalPages);
//     };

//     return (
//         <div className='container py-5 mt-5'>
//             <div className="row mt-3">
//                 <table className="table border shadow align-middle">
//                     <thead>
//                         <tr>
//                             <th scope="col">#</th>
//                             <th scope="col">Photo</th>
//                             <th scope="col">Name</th>
//                             <th scope="col">Qualification</th>
//                             <th scope="col">Percentage</th>
//                             <th scope="col">
//                                 <button className="btn btn-outline-primary" onClick={handleSortChange}>
//                                     Sort Name {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
//                                 </button>
//                             </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {portfolios.map((portfolio, index) => (
//                             <tr key={index}>
//                                 <th scope="row">{(currentPage - 1) * itemsPerPage + index + 1}</th>
//                                 <td>

//                                         <img
//                                             src={`data:image/jpeg;base64,${portfolio.imageData}`}
//                                             alt=""
//                                             style={{ width: '45px', height: '45px' }}
//                                             className="rounded-circle"
//                                         />

//                                 </td>
//                                 <td>{portfolio.name}</td>
//                                 <td>{portfolio.qualification}</td>
//                                 <td>{portfolio.percentage}</td>
//                                 <td>
//                                     <Link className="btn btn-primary mx-2" to={`/viewportfolio/${portfolio.id}`}>View</Link>
//                                     <Link className="btn btn-outline-primary mx-2" to={`/editportfolio/${portfolio.id}`}>Edit</Link>
//                                     <button className="btn btn-danger mx-2" onClick={() => handleDeleteClick(portfolio.id)}>Delete</button>
//                                 </td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//                 <nav className="mt-3">
//                     <ul className="pagination">

//                         <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
//                             <button className="page-link" onClick={handleFirstPage}>
//                                 First
//                             </button>
//                         </li>

//                         {Array.from({ length: totalPages }, (_, index) => (
//                             <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
//                                 <button className="page-link" onClick={() => handlePageChange(index + 1)}>
//                                     {index + 1}
//                                 </button>
//                             </li>
//                         ))}

//                         <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
//                             <button className="page-link" onClick={handleLastPage}>
//                                 Last
//                             </button>
//                         </li>

//                     </ul>
//                 </nav>
//             </div>
//             <DeleteModal
//                 isOpen={showModal}
//                 onClose={handleCloseModal}
//                 onConfirm={handleConfirmDelete}
//             />
//             <ToastContainer />
//         </div>
//     )
// }

// export default SearchResultPage



// import { useParams } from 'react-router-dom'
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import { Link } from 'react-router-dom'
// import illustration2 from "../images/illustration2.png"
// import { Slide, ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// import DeleteModal from '../layout/DeleteModal';

// const SearchResultPage = () => {

//     const [portfolios, setPortfolios] = useState([])

//     const { query } = useParams();

//     const { id } = useParams()

//     const [showModal, setShowModal] = useState(false);

//     const [portfolioToDeleteId, setPortfolioToDeleteId] = useState(null);

//     const handleDeleteClick = (portfolioId) => {
//         setPortfolioToDeleteId(portfolioId);
//         setShowModal(true);
//     };

//     const handleConfirmDelete = async () => {
//         if (portfolioToDeleteId) {
//             await deletePortfolio(portfolioToDeleteId);
//             setPortfolioToDeleteId(null);
//         }
//         setShowModal(false);
//     };

//     const handleCloseModal = () => {
//         setShowModal(false);
//     };

//     useEffect(() => {
//         loadPortfolios()
//     }, [query])


//     const loadPortfolios = async () => {
//         const result = await axios.get(`http://localhost:8080/search?query=${query}`)
//         setPortfolios(result.data)
//     }

//     const deletePortfolio = async (id) => {
//         const result = await axios.delete(`http://localhost:8080/portfolio/${id}`)
//         console.log(result.status)
//         if (result.status === 200) {
//             toast.success("Record Deleted Successfully!", { position: "top-center", transition: Slide });
//         } else {
//             toast.error("Record Cant be Deleted!", { position: "top-center", transition: Slide });
//         }
//         loadPortfolios()
//     }


//     return (
//         <div className='container py-5 mt-5'>
//             {portfolios.length > 0 ? (<div className="row mt-3">
//                 <table className="table border shadow align-middle">
//                     <thead>
//                         <tr>
//                             <th scope="col">#</th>
//                             <th scope="col">Photo</th>
//                             <th scope="col">Name</th>
//                             <th scope="col">Qualification</th>
//                             <th scope="col">Percentage</th>
//                             <th scope="col">Action</th>
//                         </tr>
//                     </thead>
//                     <tbody>

//                         {
//                             portfolios.map((portfolio, index) => (
//                                 <tr>
//                                     <th scope="row" key={index}>{index + 1}</th>
//                                     <td>

//                                         <img
//                                             src={`data:image/jpeg;base64,${portfolio.imageData}`}
//                                             alt=""
//                                             style={{ width: '45px', height: '45px' }}
//                                             className="rounded-circle"
//                                         />

//                                     </td>
//                                     <td>{portfolio.name}</td>
//                                     <td>{portfolio.qualification}</td>
//                                     <td>{portfolio.percentage}</td>

//                                     <td>
//                                         <Link className="btn btn-primary mx-2" to={`/viewportfolio/${portfolio.id}`}>View</Link>
//                                         <Link className="btn btn-outline-primary mx-2" to={`/editportfolio/${portfolio.id}`}>Edit</Link>
//                                         <button className="btn btn-danger mx-2" onClick={() => handleDeleteClick(portfolio.id)}>Delete</button>
//                                     </td>
//                                 </tr>
//                             ))
//                         }

//                     </tbody>
//                 </table>

//             </div>) : (

//                 <div className="px-4 pt-1 my-4 text-center">
//                     <h1 className="display-4">No results found!</h1>
//                     <div className="col-lg-6 mx-auto">
//                         <p className="lead mb-4">Try with another search query.</p>

//                     </div>
//                     <div>
//                         <div className="container px-5">
//                             <img src={illustration2} alt="no data" width="300" loading="lazy" />
//                         </div>
//                     </div>
//                 </div>

//             )}
//             <DeleteModal
//                 isOpen={showModal}
//                 onClose={handleCloseModal}
//                 onConfirm={handleConfirmDelete}
//             />
//             <ToastContainer />

//         </div>
//     )
// }

// export default SearchResultPage


import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import illustration2 from "../images/illustration2.png";
import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DeleteModal from '../layout/DeleteModal';

const SearchResultPage = () => {
    const [portfolios, setPortfolios] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5); 
    const [totalPages, setTotalPages] = useState(1); 
    const [sortOrder, setSortOrder] = useState('asc'); 

    const { query } = useParams();

    const [showModal, setShowModal] = useState(false);
    const [portfolioToDeleteId, setPortfolioToDeleteId] = useState(null);

    const handleDeleteClick = (portfolioId) => {
        setPortfolioToDeleteId(portfolioId);
        setShowModal(true);
    };

    const handleConfirmDelete = async () => {
        if (portfolioToDeleteId) {
            await deletePortfolio(portfolioToDeleteId);
            setPortfolioToDeleteId(null);
        }
        setShowModal(false);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    useEffect(() => {
        loadPortfolios();
    }, [query, currentPage, sortOrder]);

    const loadPortfolios = async () => {
        const result = await axios.get(`http://localhost:8080/search`, {
            params: {
                query: query,
                page: currentPage - 1,
                size: itemsPerPage,
                sortOrder: sortOrder,
            },
        });
        setPortfolios(result.data.content);
        setTotalPages(result.data.totalPages);
    };

    const deletePortfolio = async (id) => {
        const result = await axios.delete(`http://localhost:8080/portfolio/${id}`)
        console.log(result.status)
        if (result.status === 200) {
            toast.success("Record Deleted Successfully!", { position: "top-center", transition: Slide });
        } else {
            toast.error("Record Cant be Deleted!", { position: "top-center", transition: Slide });
        }
        loadPortfolios()
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleSortChange = () => {
        setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    };

    const handleFirstPage = () => {
        setCurrentPage(1);
    };

    const handleLastPage = () => {
        setCurrentPage(totalPages);
    };

    return (
        <div className='container py-5 mt-5'>
            {portfolios.length > 0 ? (
                <div className="row mt-3">
                    <table className="table border shadow align-middle">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Photo</th>
                                <th scope="col">Name</th>
                                <th scope="col">Qualification</th>
                                <th scope="col">Percentage</th>
                                <th scope="col">
                                    <button className="btn btn-outline-primary" onClick={handleSortChange}>
                                        Sort Name {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
                                    </button>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {portfolios.map((portfolio, index) => (
                                <tr key={index}>
                                    <th scope="row">{(currentPage - 1) * itemsPerPage + index + 1}</th>
                                    <td>

                                        <img
                                            src={`data:image/jpeg;base64,${portfolio.imageData}`}
                                            alt=""
                                            style={{ width: '45px', height: '45px' }}
                                            className="rounded-circle"
                                        />

                                    </td>
                                    <td>{portfolio.name}</td>
                                    <td>{portfolio.qualification}</td>
                                    <td>{portfolio.percentage}</td>
                                    <td>
                                        <Link className="btn btn-primary mx-2" to={`/viewportfolio/${portfolio.id}`}>View</Link>
                                        <Link className="btn btn-outline-primary mx-2" to={`/editportfolio/${portfolio.id}`}>Edit</Link>
                                        <button className="btn btn-danger mx-2" onClick={() => handleDeleteClick(portfolio.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <nav className="mt-3">
                        <ul className="pagination">
                            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={handleFirstPage}>
                                    First
                                </button>
                            </li>

                            {Array.from({ length: totalPages }, (_, index) => (
                                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                                    <button className="page-link" onClick={() => handlePageChange(index + 1)}>
                                        {index + 1}
                                    </button>
                                </li>
                            ))}

                            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                <button className="page-link" onClick={handleLastPage}>
                                    Last
                                </button>
                            </li>
                        </ul>
                    </nav>
                </div>
            ) : (
                <div className="px-4 pt-1 my-4 text-center">
                    <h1 className="display-4">No results found!</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">Try with another search query.</p>

                    </div>
                    <div>
                        <div className="container px-5">
                            <img src={illustration2} alt="no data" width="300" loading="lazy" />
                        </div>
                    </div>
                </div>
            )}
            <DeleteModal
                isOpen={showModal}
                onClose={handleCloseModal}
                onConfirm={handleConfirmDelete}
            />
            <ToastContainer />
        </div>
    );
};

export default SearchResultPage;
