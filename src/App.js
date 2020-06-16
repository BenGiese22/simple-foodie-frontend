import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
// import HomePage from './pages/home'
import Search from './pages/search/search'
import Recipe from './pages/recipe/recipe'


// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = (props) => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Search} />
      <Route path='/recipe/:id' component={({ match }) => 
        <Recipe id={match.params.id} />
      } />
    </Switch>
  </BrowserRouter>
)

//<Route path='/' exact component={HomePage} />

export default App;
