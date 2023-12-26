import search from "../assets/search.svg";
import "../App.css";
import Button from "../component/Button";
import Tables from "../component/Table";
import { useLoaderData, useNavigate } from "react-router";
import { StudentProvider } from "../context/studentcontext";
import { Suspense, useState } from "react";
import { SearchBar } from "../component/SearchBar";
import { SearchResultsList } from "../component/SearchBarResultList";
import Loader from "../component/Loader";
const Dashboard = () => {
  const navigator = useNavigate();
  const studensdata = useLoaderData();
  const [students, setStudents] = useState(studensdata);
  const [results, setResults] = useState([]);

  return (
    <>
      <main className="main-cointainer">
        <h3 className="title">Student management System</h3>
        <section className="search-section">
          <div className="search">
            <SearchBar setResults={setResults} />
            {results && results.length > 0 && (
              <SearchResultsList results={results} />
            )}
            <img src={search} alt="search" className="search-icon" />
          </div>
          <div>
            <Button
              variant="primary"
              className="add-btn"
              onClick={() => navigator("addStudent")}
            >
              ADD
            </Button>
          </div>
        </section>
        <section>
          <Suspense fallback={<Loader />}>
            <StudentProvider value={{ students, setStudents }}>
              <Tables />
            </StudentProvider>
          </Suspense>
        </section>
      </main>
      {/* <footer className="footer">
        <p>Created by: Vijayabaskar</p>
        <p>
          <a href="mailto:vj2k02@gmail.com">
            <span>get in touch</span>
          </a>
        </p>
      </footer> */}
    </>
  );
};

export default Dashboard;
