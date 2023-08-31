import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

const ViewPortFolio = () => {

    const [portfolio, setPortfolio] = useState({

        name: "",
        email: "",
        phoneno: "",
        qualification: "",
        university: "",
        percentage: "",
        grade: "",
        skills: "",
        certification: "",
        location: "",
        status: "",
        gender: "",
        imageData: ""

    })

    const { id } = useParams()

    useEffect(() => {
        loadPortfolio()
    }, [])

    const loadPortfolio = async () => {
        const result = await axios.get(`http://localhost:8080/portfolio/${id}`)
        setPortfolio(result.data)
    }



    const download = async () => {
        const input = await document.getElementById("PortFolioData")
        html2canvas(input, { logging: true, letterRendering: 1, scale: 4 }).then(canvas => {
            const imgWidth = 280
            const imgHeight = canvas.height * imgWidth / canvas.width;
            const imgData = canvas.toDataURL('img/png')
            const pdf = new jsPDF('l', 'mm', 'a4')
            pdf.text(10, 10, "This is the pdf generated of " + portfolio.name + " using PortFolioManager.")
            pdf.addImage(imgData, 'PNG', 10, 30, imgWidth, imgHeight)
            pdf.save(portfolio.name + ".pdf")
        })
    }


    return (
      
        <div className="container py-5 mt-5">
            <div className="row mt-3">
                <div className="col-xxl border rounded shadow p-4" style={{ textAlign: 'left' }}>
                    <h2 className="text center mb-4">PortFolio Details of {portfolio.name}</h2>
                    <form id="PortFolioData">


                        <div className="row">
                            {portfolio.imageData && (
                                <div className="mb-3">
                                    <img
                                        src={`data:image/jpeg;base64,${portfolio.imageData}`}
                                        alt="Portfolio"
                                        style={{ maxWidth: '10%' }}
                                    />
                                </div>
                            )}
                        </div>

                        <div className="row">

                            <div className="col mb-3">
                                <label htmlFor="Name" className="form-label">
                                    Name
                                </label>
                                <input type={"text"} className="form-control" name="name" value={portfolio.name} />
                            </div>

                            <div className="col mb-3">
                                <label htmlFor="Email" className="form-label">
                                    Email
                                </label>
                                <input type={"email"} className="form-control" name="email" value={portfolio.email} />
                            </div>

                            <div className="col mb-3">
                                <label htmlFor="PhoneNo" className="form-label">
                                    Phone No.
                                </label>
                                <input type={"tel"} className="form-control" name="phoneno" value={portfolio.phoneno} />
                            </div>

                        </div>

                        <div className="row">

                            <div className="col mb-3">
                                <label htmlFor="University" className="form-label">
                                    University
                                </label>
                                <input type={"text"} className="form-control" name="university" value={portfolio.university} />
                            </div>

                            <div className="col mb-3">
                                <label htmlFor="Qualification" className="form-label">
                                    Qualification
                                </label>
                                <input type={"text"} className="form-control" name="qualification" value={portfolio.qualification} />
                            </div>

                            <div className="col mb-3">
                                <label htmlFor="Percentage" className="form-label">
                                    Percentage
                                </label>
                                <input type={"number"} className="form-control" name="percentage" value={portfolio.percentage} />
                            </div>

                        </div>

                        <div className="row">

                            <div className="col mb-3">
                                <label htmlFor="Grade" className="form-label">
                                    Grade
                                </label>
                                <input type={"text"} className="form-control" name="grade" value={portfolio.grade} />
                            </div>

                            <div className="col mb-3">
                                <label htmlFor="Skills" className="form-label">
                                    Skills
                                </label>
                                <input type={"text"} className="form-control" name="skills" value={portfolio.skills} />
                            </div>

                            <div className="col mb-3">
                                <label htmlFor="Certification" className="form-label">
                                    Certification
                                </label>
                                <input type={"text"} className="form-control" name="certification" value={portfolio.certification} />
                            </div>

                        </div>

                        <div className="row">

                            <div className="col mb-3">
                                <label htmlFor="Location" className="form-label">
                                    Location
                                </label>
                                <input type={"text"} className="form-control" name="location" value={portfolio.location} />
                            </div>

                            <div className="col mb-3">
                                <label htmlFor="Status" className="form-label">
                                    Status
                                </label>
                                <input type={"text"} className="form-control" name="status" value={portfolio.status} />
                            </div>

                            <div className="col mb-3">
                                <label htmlFor="Gender" className="form-label">
                                    Gender
                                </label>
                                <input type={"text"} className="form-control" name="gender" value={portfolio.gender} />
                            </div>

                        </div>

                    </form>
                    <button onClick={() => download()} className="btn btn-outline-primary">Download</button>
                    <Link className="btn btn-outline-danger mx-2" to="/home">Cancel</Link>
                </div>
            </div>
        </div>

    )
}

export default ViewPortFolio