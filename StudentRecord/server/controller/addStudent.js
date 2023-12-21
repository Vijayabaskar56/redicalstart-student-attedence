const addStudent = (Students) => {
  return async (req, res) => {
    try {
      const { name, email, lastName, about, education, location } = req.body;
      const studentExist = await Students.findOne({ where: { email: email } });
      if (studentExist) {
        return res.status(400).json({ error: "Student already exists" });
      }

      const student = await Students.create({
        name,
        email,
        dob: new Date(dob),
        lastName,
        about,
        education,
        location,
        about,
      });
      res.status(201).json({ student });
    } catch (error) {
      res.status(400).json({ error: error });
    }
  };
};

module.exports = addStudent;
