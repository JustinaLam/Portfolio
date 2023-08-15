// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// // class App extends React.Component {
// //   state = {
// //     message: ""
// //   }

// //   componentDidMount() {
// //     fetch("http://localhost:3001/api")
// //       .then(res => res.json())
// //       .then(data => this.setState({ message: data.message }))
// //   }

// //   render() {
// //     return (
// //       <h1>Message:{this.state.message}!</h1>
// //     )
// //   }
// // }

// function App() {
//   const [data, setData] = React.useState(null);

//   React.useEffect(() => {
//     fetch("/api")
//       .then((res) => res.json())
//       .then((data) => setData(data.message));
//   }, []);
  

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           {!data ? "Loading..." : data}
//         </p>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Work from './components/Work/Work'
// import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import TopButton from './components/topButton/TopButton'
// import Work from './components/Work/Work'

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Experience />
      <Work />
      <Contact />
      {/* <Footer /> */}
      <TopButton />
    </div>
  )
}

export default App