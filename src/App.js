import { useEffect, useState } from "react";
import "./App.css";
import data from "./tutorials.json";
function App() {
  return (
    <div>
      <Header></Header>
      <Main></Main>
      <hr />
      <Footer></Footer>
    </div>
  );
}
function Header() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <a href="http://thatjsdude.com/">That Js Dude</a>
        </div>
        <div className="sign-in">
          <button className="style" type="submit">
            Sign In
          </button>
        </div>
      </div>
      <div className="hero-section">
        <div className="hero">
          <h1>
            Exclusive React Workshop for <br />
            beginners!
          </h1>
          <p>
            Once in a year opportunity to learn and build your{" "}
            <a href="https://ema-john.firebaseapp.com/">first React app</a>
          </p>
          <button className="style" type="submit">
            Learn More !!{" "}
          </button>
        </div>
      </div>
    </header>
  );
}

function Main() {
  return (
    <section className="main-section">
      <Left></Left>
      <Right></Right>
    </section>
  );
}

function Left() {
  const [tutorials, setTutorials] = useState([]);
  useEffect(() => {
    setTutorials(data);
  }, []);
  console.log(tutorials);
  return (
    <div className="left">
      <JsConfig></JsConfig>
      <div className="tutorial-container">
        {tutorials.map((tutorial) => (
          <Tutorial title={tutorial.title} desc={tutorial.desc}></Tutorial>
        ))}
      </div>
    </div>
  );
}

function Tutorial(props) {
  const { title, desc } = props;
  return (
    <div className="tutorial">
      <a href="http://thatjsdude.com/">{title}</a>
      <p>{desc}</p>
      <button className="style">View Details</button>
    </div>
  );
}

function JsConfig() {
  return (
    <div className="jsConfig">
      <h4>JS Confusing Parts</h4>
      <p>
        Understand <code>this</code>, <code>scope</code>, <code>hoisting</code>,{" "}
        <code>closure</code>, <code>inheritance</code>, <code>bind</code>,{" "}
        <code>call</code>, <code>apply</code>, <code>prototype</code>,{" "}
        <code>event delegation</code>, <code>dom</code>, <code>timers</code> and
        many more caveats.
      </p>
    </div>
  );
}
function Right() {
  return (
    <div className="right">
      <Training></Training>
      <RecentVideo></RecentVideo>
      <RecentTalks></RecentTalks>
      <Invitetalk></Invitetalk>
    </div>
  );
}

function Training() {
  return (
    <div className="personal-trainig">
      <h2>Personal Training for $30</h2>
      <p>
        If you need career guide, personal interview tips, mock interview, Life
        Coaching, or anything else, you can book me for 30 min. Just pay $30 via
        paypal to Codinism (my company) and then book a time slot You can Book
        me
      </p>
    </div>
  );
}

function RecentVideo() {
  return (
    <div>
      <h2>Recent Videos</h2>
      <ul>
        <li>
          <a href="http://thatjsdude.com/">15+ tricks for dev tool</a>
        </li>
        <li>
          <a href="http://thatjsdude.com/">Understanding this</a>
        </li>
        <li>
          <a href="http://thatjsdude.com/">be expert in JS Array</a>
        </li>
        <li>
          <a href="http://thatjsdude.com/">How Browsers works in 4 min</a>
        </li>
      </ul>
      <button className="style">More on youtube</button>
    </div>
  );
}

function RecentTalks() {
  return (
    <div>
      <h2>Recent Talks</h2>
      <ul>
        <li>
          <a href="http://thatjsdude.com/">
            Functional Programming: What, Why and How
          </a>
        </li>
        <li>
          <a href="http://thatjsdude.com/">JavaScript Code Quality</a>
        </li>
        <li>
          <a href="http://thatjsdude.com/">Angular JS for Absolute Beginners</a>
        </li>
        <li>
          <a href="http://thatjsdude.com/">Getting started with React JS</a>
        </li>
        <li>
          <a href="http://thatjsdude.com/">High Perf JS</a>
        </li>
        <li>
          <a href="http://thatjsdude.com/">
            Are you sure, you know JavaScripts
          </a>
        </li>
        <li>
          <a href="http://thatjsdude.com/">High Performance JS and CSS</a>
        </li>
        <li>
          <a href="http://thatjsdude.com/">What's New in ES6</a>
        </li>
        <li>
          <a href="http://thatjsdude.com/">Make Web Faster</a>
        </li>
      </ul>
      <button className="style">More on youtube</button>
    </div>
  );
}

function Invitetalk() {
  return (
    <div>
      <h2>Invite to a talk</h2>
      <p>
        if you want to invite that js dude in any of your meetup, conference or
        hangout, send email to{" "}
        <a href="http://thatjsdude.com/">khan4019@gmail.com</a>
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <p>© thatJSDude 2021, a codinism initiative.</p>
      <p>
        Hosted by <a href="https://www.xeonbd.com/">XeonBD</a>
      </p>
    </div>
  );
}
export default App;
