import "./App.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { searchFunction } from "./API/TMDB";

function App() {
  const [navSearch, setNavSearch] = useState({ type: "movies", query: "" });

  function handleChangeNavSearch(e) {
    setNavSearch((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  }

  function handleSearchSubmit(e) {
    e.preventDefault();
    console.log(e.target);
    //searchFunction(e.target.name);
  }

  return (
    <div className="bg-green-900">
      <header className="flex border border-blue-100 fixed w-screen top-0 bg-green-500">
        <div className="headerLogo">Test</div>
        <nav className="flex gap-1">
          <Link to={""}>Home</Link>
          <Link to={""}>Filme</Link>
          <Link to={""}>Serien</Link>
          <Link to={""}>Random</Link>
          <Link to={""}>Advanced Search</Link>
        </nav>

        <form action="" name="navSearch" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            value={navSearch.query}
            name="query"
            onChange={handleChangeNavSearch}
          />
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded">
            bdfbdflbm
          </button>
        </form>
      </header>

      <main className="h-96">
        {/** sprach selector mit map erstellen */}
        <form
          name=""
          action=""
          className="flex flex-col gap-2 mt-10"
          onSubmit={handleSearchSubmit}
        >
          <label>
            Search*:{" "}
            <input type="text" name="querry" className="w-full" required />
          </label>
          <label>
            Language:{" "}
            <select name="language">
              <option value="">fbfdbfdb</option>
            </select>
          </label>
          <label>
            Seite
            <input type="number" name="page" />
          </label>

          <label className="hover:cursor-pointer">
            Include Adult <input type="checkbox" name="include_adult" />
          </label>
          <label>
            Region:{" "}
            <select name="region">
              <option value="">fbfdbfdb</option>
            </select>
          </label>
          <button>bfdb</button>
          {/*Select year by mapping over array to generate select options*/}
        </form>
      </main>
    </div>
  );
}

export default App;

/**

          language, querry, page, include_adult, region, year,
          primary_release_year

*/
