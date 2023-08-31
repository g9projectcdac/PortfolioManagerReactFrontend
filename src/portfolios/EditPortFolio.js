import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

import { Slide, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EditPortFolio = () => {

  let navigate = useNavigate()

  const { id } = useParams()

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
    image: null
  })

  const { name, email, phoneno, qualification,
    university, percentage, grade, skills, certification,
    location, status, gender, image } = portfolio

  const [imagePreview, setImagePreview] = useState(null);
  const [existingImagePreview, setExistingImagePreview] = useState(null);

  useEffect(() => {
    loadPortfolio()
  }, [])

  const onInputChange = (e) => {

    setPortfolio({ ...portfolio, [e.target.name]: e.target.value });

  }

  const onImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setPortfolio({ ...portfolio, image: selectedImage });

    const reader = new FileReader();
    reader.onload = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(selectedImage);
  };

  

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', portfolio.name);
    formData.append('email', portfolio.email);
    formData.append('phoneno', portfolio.phoneno);
    formData.append('qualification', portfolio.qualification);
    formData.append('university', portfolio.university);
    formData.append('percentage', portfolio.percentage);
    formData.append('grade', portfolio.grade);
    formData.append('skills', portfolio.skills);
    formData.append('certification', portfolio.certification);
    formData.append('location', portfolio.location);
    formData.append('status', portfolio.status);
    formData.append('gender', portfolio.gender);

    if (portfolio.image) {
      formData.append('image', portfolio.image);
    }
   

    const result = await axios.put(`http://localhost:8080/portfolio/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      validateStatus: () => true,
    });

    console.log(result.status)
    if (result.status === 200) {
      toast.success("Details Updated Successfully!", { position: "top-center", transition: Slide });
    } else if (result.status === 409) {
      toast.error("Email or PhoneNo already exsists!", { position: "top-center", transition: Slide });
    }
    else {
      toast.error("Details Cant be Added!", { position: "top-center", transition: Slide });
    }

    // navigate("/");
  }

  const loadPortfolio = async () => {
    const result = await axios.get(`http://localhost:8080/portfolio/${id}`, portfolio)
    console.log(result.data)
    setPortfolio(result.data);
    if (result.data.imageData) {
      setExistingImagePreview(`data:image/jpeg;base64,${result.data.imageData}`);
    }
    setImagePreview(`data:image/jpeg;base64,${result.data.imageData}`);
  }


  return (
    
    <div className="container py-5 mt-5">
      <div className="row mt-3">
        <div className="col-xxl  border rounded p-4 shadow" style={{ textAlign: 'left' }}>
          <h2 className="text center">Edit PortFolio</h2>
          <form onSubmit={(e) => onSubmit(e)}>

            <div className="row">

              <div className="col mb-3">
                <label htmlFor="Name" className="form-label">
                  Name
                </label>
                <input type={"text"} className="form-control" placeholder="Enter your name" name="name" value={name} onChange={(e) => onInputChange(e)} />
              </div>

              <div className="col mb-3">
                <label htmlFor="Email" className="form-label">
                  Email
                </label>
                <input type={"email"} className="form-control" placeholder="Enter your email" name="email" value={email} onChange={(e) => onInputChange(e)} />
              </div>

              <div className="col mb-3">
                <label htmlFor="PhoneNo" className="form-label">
                  Phone No.
                </label>
                <input type={"tel"} className="form-control" placeholder="Enter your phone no." name="phoneno" value={phoneno} onChange={(e) => onInputChange(e)} />
              </div>

            </div>

            <div className="row">

              <div className="col mb-3">
                <label htmlFor="University" className="form-label">
                  University
                </label>
                <input type={"text"} className="form-control" placeholder="Enter your university" name="university" value={university} onChange={(e) => onInputChange(e)} />
              </div>

              <div className="col mb-3">
                <label htmlFor="Qualification" className="form-label">
                  Qualification
                </label>
                <input type={"text"} className="form-control" placeholder="Enter your qualification" name="qualification" value={qualification} onChange={(e) => onInputChange(e)} />
              </div>

              <div className="col mb-3">
                <label htmlFor="Percentage" className="form-label">
                  Percentage
                </label>
                <input type={"number"} className="form-control" placeholder="Enter your percentage" name="percentage" value={percentage} onChange={(e) => onInputChange(e)} />
              </div>

            </div>

            <div className="row">

              <div className="col mb-3">
                <label htmlFor="Grade" className="form-label">
                  Grade
                </label>
                <input type={"text"} className="form-control" placeholder="Enter your grade" name="grade" value={grade} onChange={(e) => onInputChange(e)} />
              </div>

              <div className="col mb-3">
                <label htmlFor="Skills" className="form-label">
                  Skills
                </label>
                <input type={"text"} className="form-control" placeholder="Enter your skills" name="skills" value={skills} onChange={(e) => onInputChange(e)} />
              </div>

              <div className="col mb-3">
                <label htmlFor="Certification" className="form-label">
                  Certification
                </label>
                <input type={"text"} className="form-control" placeholder="Enter your certification" name="certification" value={certification} onChange={(e) => onInputChange(e)} />
              </div>

            </div>

            <div className="row">

              <div className="col mb-3">
                <label htmlFor="Location" className="form-label">
                  Location
                </label>
                <input type={"text"} className="form-control" placeholder="Enter your location" name="location" value={location} onChange={(e) => onInputChange(e)} />
              </div>

              <div className="col mb-3">
                <label htmlFor="Status" className="form-label">
                  Status
                </label>
                <input type={"text"} className="form-control" placeholder="Enter your status" name="status" value={status} onChange={(e) => onInputChange(e)} />
              </div>

              <div className="col mb-3">
                <label htmlFor="Gender" className="form-label">
                  Gender
                </label>
                <input type={"text"} className="form-control" placeholder="Enter your gender" name="gender" value={gender} onChange={(e) => onInputChange(e)} />
              </div>

            </div>


            <div className="row">
              <div className="col mb-3">
                <label htmlFor="Image" className="form-label">
                  Image
                </label>
                <input type="file" className="form-control" name="image" onChange={onImageChange} />
                <small id="imageSelectionHelpBlock" className="form-text text-muted">
                Upload image in jpeg or jpg format.
                </small>
              </div>
              
              {imagePreview && (
                <div className="col mb-3">
                  <label htmlFor="ExsistingImage" style={{ marginBottom: '10px', display: 'block' }} className="form-label">Exsisting Image</label>
                  <img src={existingImagePreview} name="ExsistingImage" alt="Existing" style={{ maxWidth: '100px' }} />
                </div>
              )}
              {portfolio.image && (
                <div className="col mb-3">
                <label htmlFor="SelectedImage" style={{ marginBottom: '10px', display: 'block' }} className="form-label">Selected Image</label>
                <img src={imagePreview} name="SelectedImage" alt="Selected" style={{ maxWidth: '100px' }} />
              </div>
              )}
            </div>


            <button type="submit" className="btn btn-outline-primary">Submit</button>
            <Link className="btn btn-outline-danger mx-2" to="/home">Cancel</Link>
          </form>

        </div>
      </div>
      <ToastContainer />
    </div>


  )
}

export default EditPortFolio