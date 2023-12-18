import { SearchResult } from "./SearchBarResult";
import "../App.css";
import PropTypes from "prop-types";

export const SearchResultsList = ({ results }) => {
  return (
    <div className="results-list">
      {results.map((result, id) => {
        return <SearchResult result={result.name} key={id} />;
      })}
    </div>
  );
};

SearchResultsList.propTypes = {
  results: PropTypes.array.isRequired,
};
