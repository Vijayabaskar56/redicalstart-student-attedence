const getStudent = (Students) => {
  return async (req, res) => {
    try {
      const students = await Students.findAll({
        order: [["id", "ASC"]],
      });
      res.status(200).send(students);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  };
};

module.exports = getStudent;
