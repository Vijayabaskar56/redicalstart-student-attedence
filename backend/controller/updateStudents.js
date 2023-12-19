const updateStudent = (Students) => {
  return async (req, res) => {
    const { id } = req.params;
    const { name, email, lastName, about, education, dob, location } = req.body;
    const isStudent = await Students.findOne({ where: { id: id } });
    if (!isStudent) {
      return res.status(400).json({ error: "Student does not exist" });
    }
    try {
      await Students.update(
        {
          name,
          email,
          lastName,
          about,
          education,
          dob: new Date(dob),
          location,
        },
        { where: { id: id } }
      );
      res.status(200).json({ message: "Student updated" });
    } catch (error) {
      res.status(400).json({ error });
    }
  };
};

module.exports = updateStudent;
