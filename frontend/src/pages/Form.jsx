import Form from "react-bootstrap/Form";
import backarrow from "../assets/arrow-left.svg";
import Button from "../component/Button";
import "./Form.css";
import { useLocation, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { addStudent, updateStudent } from "../utils";
import { useState } from "react";

const FormPage = () => {
  const locations = useLocation();
  const navigator = useNavigate();
  let student;
  let dates = [];
  if (locations.state == null) {
    student = false;
  } else {
    student = locations.state.student;

    const formatedate = (date) => {
      let dateArr;
      if (date.length > 10) {
        const dateTrimmed = date.slice(0, 11);
        dateArr = dateTrimmed.split("-");
      } else {
        dateArr = date.split("-");
      }
      const day = dateArr[2].slice(0, 2);
      console.log(dateArr);

      return [day, dateArr[1], dateArr[0]];
    };
    dates = formatedate(student.dob);

    console.log(student, dates);
  }

  const [firstName, setFirstName] = useState(student ? student.name : "");
  const [lastName, setLastName] = useState(student ? student.lastName : "");
  const [location, setLocation] = useState(student ? student.location : "");
  const [email, setEmail] = useState(student ? student.email : "");
  const [dob, setDob] = useState(student ? dates : [null, null, null]);
  const [education, setEducation] = useState(student ? student.education : "");
  const [about, setAbout] = useState(student ? student.about : "");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      name: firstName,
      lastName,
      location: location,
      email,
      dob,
      education,
      about,
    };
    console.log(formData);
    if (locations.state == null) {
      const res = await addStudent(formData);
      console.log(res);
    } else {
      const res = await updateStudent(student.id, formData);
      console.log(res);
    }
    navigator("/");
  };

  return (
    <>
      <section>
        <Link to={"/"}>
          <div className="back-arrow">
            <img src={backarrow} alt="backarror-icon" width="30" height="30" />
          </div>
        </Link>
        <Form className="form" onSubmit={handleSubmit}>
          <Form.Group
            className="mb-3"
            id="name-inputs"
            controlId="formBasicEmail"
          >
            <div className="input-cointainer">
              <Form.Label className="form-label">First Name</Form.Label>
              <Form.Control
                defaultValue={student !== null ? student.name : null}
                type="text"
                className="form-input"
                placeholder="First Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="input-cointainer">
              <Form.Label className="form-label">Last Name</Form.Label>
              <Form.Control
                height="50px"
                type="text"
                defaultValue={student ? student.lastName : null}
                className="form-input"
                placeholder="Last Name"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </Form.Group>
          <div className="form-2-cointainer">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <div className="input-cointainer">
                <Form.Label className="form-label">Location</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={student ? student.location : null}
                  className="form-input"
                  placeholder="location"
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <div className="input-cointainer">
                <Form.Label className="form-label">Email</Form.Label>
                <Form.Control
                  type="email"
                  defaultValue={student ? student.email : null}
                  className="form-input"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </Form.Group>
            <Form.Group>
              <div className="input-cointainer">
                <Form.Label className="form-label">DOB</Form.Label>
                <div className="form-input-dob">
                  <Form.Control
                    type="number"
                    defaultValue={student ? dates[0] : null}
                    className="form-input"
                    placeholder="DD"
                    onChange={(e) => setDob([e.target.value, dob[1], dob[2]])}
                  />
                  <Form.Control
                    type="number"
                    defaultValue={student ? dates[1] : null}
                    className="form-input"
                    placeholder="MM"
                    onChange={(e) => setDob([dob[0], e.target.value, dob[2]])}
                  />
                  <Form.Control
                    type="number"
                    defaultValue={student ? dates[2] : null}
                    className="form-input"
                    placeholder="YY"
                    onChange={(e) => setDob([dob[0], dob[1], e.target.value])}
                  />
                </div>
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <div className="input-cointainer">
                <Form.Label className="form-label">Education</Form.Label>
                <Form.Control
                  type="text"
                  className="form-input"
                  defaultValue={student ? student.education : null}
                  placeholder="Education"
                  onChange={(e) => setEducation(e.target.value)}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <div className="input-cointainer">
                <Form.Label className="form-label">About</Form.Label>
                <Form.Control
                  as="textarea"
                  defaultValue={student ? student.about : null}
                  aria-label="With textarea"
                  cols={20}
                  rows={40}
                  className="form-input"
                  placeholder=""
                  onChange={(e) => setAbout(e.target.value)}
                />
              </div>
            </Form.Group>
          </div>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </section>
    </>
  );
};

export default FormPage;