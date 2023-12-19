const URL = import.meta.env.VITE_API_URL;
console.log(URL);

export const getStudents = async () => {
  const response = await fetch(`${URL}/getstudents`);
  const data = await response.json();
  return data;
};

export const addStudent = async (student) => {
  const response = await fetch(`${URL}/addstudent`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });
  const data = await response.json();
  return data;
};

export const deleteStudent = async (id) => {
  const response = await fetch(`${URL}/deletestudent/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};

export const updateStudent = async (id, student) => {
  const response = await fetch(`${URL}/updatestudent/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(student),
  });
  const data = await response.json();
  return data;
};

export const DatesToString = (date) => {
  let dateArr;
  if (date.length > 10) {
    const dateTrimmed = date.slice(0, 11);
    dateArr = dateTrimmed.split("-");
  } else {
    dateArr = date.split("-");
  }
  const day = dateArr[2].slice(0, 2);
  const monthInNumber = Number(dateArr[1]);

  return `${day}/${monthInNumber}/${dateArr[0]}`;
};
