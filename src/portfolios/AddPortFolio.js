import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddPortFolio = () => {

  let navigate = useNavigate()

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
    selectedImage: null
  })

  const { name, email, phoneno, qualification,
    university, percentage, grade, skills, certification,
    location, status, gender, selectedImage } = portfolio

  const onInputChange = (e) => {

    setPortfolio({ ...portfolio, [e.target.name]: e.target.value });

  }

  const onImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setPortfolio({ ...portfolio, selectedImage: selectedFile });
  };

  const removeImage = () => {
    
    setPortfolio({ ...portfolio, selectedImage: null });
    const inputElement = document.querySelector('input[type="file"]');
    if (inputElement) {
      inputElement.value = '';
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('phoneno', phoneno);
    formData.append('qualification', qualification);
    formData.append('university', university);
    formData.append('percentage', percentage);
    formData.append('grade', grade);
    formData.append('skills', skills);
    formData.append('certification', certification);
    formData.append('location', location);
    formData.append('status', status);
    formData.append('gender', gender);
    if (selectedImage) {
      formData.append('image', selectedImage);
    }

    const result = await axios.post('http://localhost:8080/portfolio', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      validateStatus: () => true,
    });

    console.log(result.status)
    if (result.status === 201) {
      toast.success("Details Added Successfully!", { position: "top-center", transition: Slide });
    } else if (result.status === 409) {
      toast.error("Email or PhoneNo already exsists!", { position: "top-center", transition: Slide });
    }
    else {
      toast.error("Details Cant be Added!", { position: "top-center", transition: Slide });
    }
    // setPortfolio("")
    // navigate("/");
  }


  return (
   
    <div className="container pt-5 mt-5">
      <div className="row">
        
        <div className="col-xxl border rounded p-4 shadow" style={{ textAlign: 'left' }}>
          <h2 className="text center">Add PortFolio</h2>
          <form className="was-validated" onSubmit={(e) => onSubmit(e)} novalidate>

            <div className="row">

              <div className="col mb-3">
                <label htmlFor="Name" className="form-label">
                  Name
                </label>
                <input type={"text"} className="form-control" placeholder="Enter your name" name="name" required value={name} onChange={(e) => onInputChange(e)} />
                <div className="invalid-feedback">
                  Please provide a valid name.
                </div>
              </div>

              <div className="col mb-3">
                <label htmlFor="Email" className="form-label">
                  Email
                </label>
                <input type={"email"} className="form-control" placeholder="Enter your email" name="email" required value={email} onChange={(e) => onInputChange(e)} />
                <div className="invalid-feedback">
                  Please provide a valid email.
                </div>
              </div>

              <div className="col mb-3">
                <label htmlFor="PhoneNo" className="form-label">
                  Phone No.
                </label>
                <input type={"tel"} className="form-control" placeholder="Enter your phone no." name="phoneno" required value={phoneno} onChange={(e) => onInputChange(e)} />
                <div className="invalid-feedback">
                  Please provide a valid phoneno.
                </div>
              </div>

            </div>

            <div className="row">

              <div className="col mb-3">
                <label htmlFor="University" className="form-label">
                  University
                </label>
                <input type={"text"} className="form-control" placeholder="Enter your university" name="university" required value={university} onChange={(e) => onInputChange(e)} />
                <div className="invalid-feedback">
                  Please provide a valid university name.
                </div>
              </div>

              <div className="col mb-3">
                <label htmlFor="Qualification" className="form-label">
                  Qualification
                </label>
                <input type={"text"} className="form-control" placeholder="Enter your qualification" name="qualification" required value={qualification} onChange={(e) => onInputChange(e)} />
                <small id="certificationHelpBlock" className="form-text text-muted">
                  Use comma seperation for multiple qualifications.
                </small>
                <div className="invalid-feedback">
                  Please provide a valid qualification.
                </div>
              </div>

              <div className="col mb-3">
                <label htmlFor="Percentage" className="form-label">
                  Percentage
                </label>
                <input type={"number"} className="form-control" placeholder="Enter your percentage" name="percentage" required value={percentage} onChange={(e) => onInputChange(e)} />
                <div className="invalid-feedback">
                  Please provide a valid percentage.
                </div>
              </div>

            </div>

            <div className="row">

              <div className="col mb-3">
                <label htmlFor="Grade" className="form-label">
                  Grade
                </label>
                <input type={"text"} className="form-control" placeholder="Enter your grade" name="grade" required value={grade} onChange={(e) => onInputChange(e)} />
                <div className="invalid-feedback">
                  Please provide a valid grade.
                </div>
              </div>

              <div className="col mb-3">
                <label htmlFor="Skills" className="form-label">
                  Skills
                </label>
                <input type={"text"} className="form-control" placeholder="Enter your skills" name="skills" required value={skills} onChange={(e) => onInputChange(e)} />
                <small id="certificationHelpBlock" className="form-text text-muted">
                  Use comma seperation for multiple skills.
                </small>
                <div className="invalid-feedback">
                  Please provide a valid skills.
                </div>
              </div>

              <div className="col mb-3">
                <label htmlFor="Certification" className="form-label">
                  Certification
                </label>
                <input type={"text"} className="form-control" placeholder="Enter your certification" name="certification" required value={certification} onChange={(e) => onInputChange(e)} />
                <small id="certificationHelpBlock" className="form-text text-muted">
                  Use comma seperation for multiple certification.
                </small>
                <div className="invalid-feedback">
                  Please provide a valid certification.
                </div>
              </div>

            </div>

            <div className="row">

              <div className="col mb-3">
                <label htmlFor="Location" className="form-label">
                  Location
                </label>
                <input type={"text"} className="form-control" placeholder="Enter your location" name="location" required value={location} onChange={(e) => onInputChange(e)} />
                <div className="invalid-feedback">
                  Please provide a valid location.
                </div>
              </div>

              <div className="col mb-3">
                <label htmlFor="Status" className="form-label">
                  Status
                </label>
                <input type={"text"} className="form-control" placeholder="Enter your status" name="status" required value={status} onChange={(e) => onInputChange(e)} />
                
                <div className="invalid-feedback">
                  Please provide a valid status.
                </div>
              </div>

              <div className="col mb-3">
                <label htmlFor="Gender" className="form-label">
                  Gender
                </label>
                <input type={"text"} className="form-control" placeholder="Enter your gender" name="gender" required value={gender} onChange={(e) => onInputChange(e)} />
                <div className="invalid-feedback">
                  Please provide a valid gender.
                </div>
              </div>

            </div>

            <div className="row">
              <div className="col mb-3">
                <label htmlFor="Image" className="form-label">
                  Image
                </label>
                <input type="file" className="form-control" accept="image/*" name="image" required onChange={onImageChange} />
                <small id="imageSelectionHelpBlock" className="form-text text-muted">
                  Upload image in jpeg or jpg format.
                </small>
                <div className="invalid-feedback">Please provide an image.</div>
              </div>
              {selectedImage && (
                <div className="col mb-3">
                  <label style={{ marginBottom: '10px', display: 'block' }} className="form-label">Image Preview:</label>
                  <img src={URL.createObjectURL(selectedImage)} alt="Preview" style={{ maxWidth: '25%', height: 'auto' }} />
                  <button type="button" className="btn btn-link" onClick={removeImage}>
                    Remove Image
                  </button>
                </div>
              )}
            </div>

            <button type="submit" className="btn btn-outline-primary" >Submit</button>
            <Link className="btn btn-outline-danger mx-2" to="/">Cancel</Link>
          </form>

        </div>
      </div>
      <ToastContainer />
    </div>


  )
}

export default AddPortFolio