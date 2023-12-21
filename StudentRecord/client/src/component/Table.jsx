import Table from "react-bootstrap/Table";
import { DatesToString, deleteStudent } from "../utils";
import { useStudent } from "../context/studentcontext";

import deleteIcon from "../assets/delete.svg";
import editIcon from "../assets/user-profile.svg";
import { Link } from "react-router-dom";
import Model from "./Model";
import { createPortal } from "react-dom";
import { useState } from "react";

const Tablew = () => {
  const { students } = useStudent();
  // const students = useLoaderData();
  const [showModel, setShowModel] = useState(false);
  const [currentStudentId, setCurrentStudentId] = useState(null);
  const style = {
    width: "",
    height: "",
    flexShrink: 0,
  };

  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

  return (
    <>
      <Table striped style={style} className="table" bordered hover>
        <thead>
          <tr>
            <th>id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Location</th>
            <th>email</th>
            <th>DOB</th>
            <th>Education</th>
            <th>Action</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody className="table-body">
          {students.map((student) => {
            return (
              <>
                <tr className="table-row" key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.lastName}</td>
                  <td>{student.location}</td>
                  <td>{student.email}</td>
                  <td>{DatesToString(student.dob)}</td>
                  <td>{student.education}</td>
                  <td>
                    {
                      <>
                        <Link
                          to={`/editStudent`}
                          style={linkStyle}
                          state={{ student }}
                        >
                          <img src={editIcon} sizes="20" />
                          <span>Edit</span>
                        </Link>
                      </>
                    }
                  </td>
                  <td>
                    {
                      <>
                        <img
                          src={deleteIcon}
                          sizes="20"
                          onClick={() => {
                            setCurrentStudentId(student.id);
                            setShowModel(true);
                          }}
                        />
                        <span>Delete</span>
                      </>
                    }
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
      {showModel &&
        createPortal(
          <Model
            deleteStudent={deleteStudent}
            cancel={setShowModel}
            studentId={currentStudentId}
          ></Model>,
          document.body
        )}
    </>
  );
};

export default Tablew;
