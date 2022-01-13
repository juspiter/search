import Welcome from './pages/Welcome';
import Result from './pages/Result';
import Header from './components/Header';
import Display from './pages/Display';
import { Routes, Route} from 'react-router-dom';

import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />}/>
      <Route path="/busca/:term" element={<Result />}/>
      <Route path="/exibir/:number" element={<Display />}/>
      <Route path="*" element={<Header />}/>
    </Routes>
   );
}

export default App;

// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
// import Home from './pages/Home'
// import Empresa from './pages/Empresa'
// import Contato from './pages/Contato'
// import Pagina from './pages/Pagina'

// function MainRoutes() {
//   return (
//     <Routes>
//       <Route path="/" element={<Home />}/>
//       <Route path="/empresa" element={<Empresa />}/>
//       <Route path="/contato" element={<Contato />}/>
//       <Route path="/pagina/:id" element={<Pagina />}/>
//     </Routes>
//   )
// }

// const App = () =>
// {
//   const [isWelcome, setIsWelcome] = useState(true);
//   const [isSearching, setIsSearching] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [requestResponse, setRequestResponse] = useState({"response": []});
//   const [sortOption, setSortOption] = useState("relevante");

//   async function fetchLawsuitsHandler() {
//     setIsSearching(true);

//     const res = await fetch("https://juslite.42sp.org.br/api/lawsuit/" + searchTerm + "?sort=" + sortOption);

//     if (res.ok) {
//       const data = await res.json();
//       setRequestResponse(data)
//     }

//     setIsSearching(false);
//     // console.log(data.response);
//   }

//   const handleSearchChange = event => {
//     setSearchTerm(event.target.value);
//   }

//   const handleSearchSubmit = event => {
//     event.preventDefault();

//     if (searchTerm.length > 2) {
//       setIsWelcome(false);
//       fetchLawsuitsHandler();
//     }
//   }

//   const sortOptionHandler = selectedSort => {
//     setSortOption(selectedSort);
//   }

//   return (
//     <main className="container">
//       <header id="header_">
//         <img src="/image/juspiter.png" className="img-thumbnail" alt="Imagem vetorial do planeta jupiter com uma lupa na parte inferior"/>
//         <h1>Juslite</h1>
//         <form className="input-group mb-3" onSubmit={handleSearchSubmit}>
//           <input
//             className="input-text input-group-text w-25"
//             type="text"
//             placeholder='Digite sua busca...'
//             value={searchTerm}
//             onChange={handleSearchChange}
//             />
//           <button className="input-group-text input-button" type='submit'>Buscar</button>
//         </form>
//         <SortOptions selected={sortOption} onChangeSort={sortOptionHandler} />
//         <hr/>
//       </header>
//       {isWelcome && <Welcome />}
//       {isSearching && <SearchingProgressBar />}
//       {requestResponse.response.length === 0 && !isWelcome && !isSearching && <LawsuitNotFound proc={requestResponse} term={searchTerm}/>}
//       {requestResponse.response.length === 1 && !isSearching && <LawsuitDisplay proc={requestResponse.response[0]}/>}
//       {requestResponse.response.length > 1 && !isSearching && <LawsuitList list={requestResponse.response} />}
//     </main>
//   );
// }

//export default App;
