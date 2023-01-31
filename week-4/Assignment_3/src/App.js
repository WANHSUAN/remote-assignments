import React, { useState } from "react";
import ReactDOM from "react-dom";


const Header = () => {

  const [isVisible, setIsVisible] = useState(false);

  return (
    <header>
      <nav>
        <p className='big-title'>Website Title / Logo</p>
        <a href='#' onClick={() => setIsVisible(!isVisible)}>
          <i className='fa-solid fa-bars'></i>
        </a>
        <Menu />
        {isVisible && (
          <div className="sideMenu">
            <ul className="column-menu">
              <li><a href="#">Item 1</a></li>
              <li><a href="#">Item 2</a></li>
              <li><a href="#">Item 3</a></li>
              <li><a href="#">Item 4</a></li>
            </ul>
            <button className="menuButton" onClick={() => setIsVisible(!isVisible)}>
              <i className="fa-solid fa-x"></i>
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};
  
const Menu = () => {
  return (
    <ul className="menu">
      <li><a href="#">Item 1</a></li>
      <li><a href="#">Item 2</a></li>
      <li><a href="#">Item 3</a></li>
      <li><a href="#">Item 4</a></li>
    </ul>
  );
};
  
class Welcome extends React.Component {

  state = {
    title: "Welcome Message"
  };

  changeTitle = this.changeTitle.bind(this);

  changeTitle() {
    this.setState({title: "Have a Good Time!"})
  }

  render() {
    return (
      <section className="welcome">
        <h1 onClick={this.changeTitle}>{this.state.title}</h1>
      </section>
    );
  }
};
  
const Title = () =>  {

  const [isVisible, setIsVisible] = useState(false);

  return (
    <section className='section-title'>
      <h2>Section Title</h2>
      <Col />
      <div className='btn' onClick={() => setIsVisible(!isVisible)}>Call to Action</div>
      {isVisible && <Col2 />}
    </section>
  );
};
  
const Col = () => {
  return (
    <div className="row">
      <div className="col"><p>Content Box 1</p></div>
      <div className="col"><p>Content Box 2</p></div>
      <div className="col"><p>Content Box 3</p></div>
      <div className="col"><p>Content Box 4</p></div>
    </div>
  );
};

const Col2 = () => {
  return (
    <div className="row">
      <div className="col"><p>Content Box 5</p></div>
      <div className="col"><p>Content Box 6</p></div>
      <div className="col"><p>Content Box 7</p></div>
      <div className="col"><p>Content Box 8</p></div>
    </div>
  );
};
 
const Main = () => {
  return (
    <main>
      <Welcome />
      <Title />
    </main>
  );
};
    
class App extends React.Component {

  render() {
    return (
      <div className="container">
        <Header />
        <Main />
      </div>
    );
  }
};

ReactDOM.render(
  <App />,
  document.getElementById("root")
);