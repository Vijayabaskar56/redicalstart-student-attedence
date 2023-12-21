const deleteStudent = (students) => {
  return (req, res) => {
    students.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ message: "Student deleted successfully" });
  };
};

module.exports = deleteStudent;
