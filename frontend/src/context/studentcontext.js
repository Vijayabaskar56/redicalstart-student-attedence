import { createContext, useContext } from "react";

export const StudentContext = createContext({
  students: [],
  setStudents: () => {},
});

export const StudentProvider = StudentContext.Provider;

export const useStudent = () => {
  return useContext(StudentContext);
};
