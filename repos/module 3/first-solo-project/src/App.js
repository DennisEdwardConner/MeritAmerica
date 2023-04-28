
import './App.css';

function App() {
  return (
    <div className="App">
        <img src={require("./Rectangle_90.png")} className="photo" alt="Dennis Conner" />
        <main className='main'></main>
          <h1>Dennis Conner</h1>
          <h3>FullStack Developer</h3>
          <p className='website'>IDontHaveAWebsite.com</p>
          <button className='email-button'>
            <img src={require("./Mail.png")} className="email-icon" alt="" />
            <h4 className='email-text'>Email</h4>
          </button>
          <button className='linkedin-button'>
            <img src={require("./linkedin.png")} className="mail-icon" alt="" />
            <h4 className='linkedin-text'>LinkedIn</h4>
          </button>
        <section className='info' ></section>
        <h2 className='about'>About</h2>
        <p className='about-text'>Manager with over 7 years of experience looking for a new role as a Full Stack Java Developer/ IT Manager</p>
        <h2 className='interests'>Interests</h2>
        <p className='interests-text'>Legos - music - anime - rubics cubes - video games. Anything that Enagages the mind.</p>        
        
      
        <footer className='footer'> </footer>
<img src={require("./TwitterIcon.png")} className="twitter" alt="" />
<img src={require("./FacebookIcon.png")} className="facebook" alt="" />
<img src={require("./InstagramIcon.png")} className="instagram" alt="" />
<img src={require("./GitHubIcon.png")} className="github" alt="" />
       
    </div>
  );
}

export default App;
