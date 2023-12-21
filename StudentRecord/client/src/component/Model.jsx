import deleteIcon from "../assets/delete-2.svg";
import "../App.css";
import { useStudent } from "../context/studentcontext";
import PropsTypes from "prop-types";

const Model = ({ studentId, deleteStudent, cancel }) => {
  const { setStudents } = useStudent();
  const saveChanges = async () => {
    const res = await deleteStudent(studentId);
    console.log(res);
    setStudents((prev) => prev.filter((student) => student.id !== studentId));
    cancel();
  };
  return (
    <>
      <section className="model-background"></section>
      <section className="model">
        <div className="model-container">
          <div className="model-header">
            <img src={deleteIcon} alt="delete" className="delete-icon" />
            <p>Are you sure you want to delete this student?</p>
          </div>
          <div className="model-footer">
            <button
              className="model-btn"
              id="model-btn-right"
              onClick={() => cancel(false)}
            >
              Cancel
            </button>
            <button
              className="model-btn"
              id="model-btn-left"
              onClick={() => saveChanges()}
            >
              Delete
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Model;

Model.propTypes = {
  studentId: PropsTypes.number.isRequired,
  deleteStudent: PropsTypes.func.isRequired,
  cancel: PropsTypes.func.isRequired,
};
