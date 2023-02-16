import "../../public/css/content.css";
export default function MainContent(props) {
  return (
    <div className="main-content">
      <div className="content-div">
        <div className="left-side">
          <h1 id="body-title">THE ONLY WAY TO LEARN MATH IS TO DO MATH</h1>
          <div className="buttons">
            <a href="/#">
              <button className="btn-body">Sign-In</button>
            </a>
            <a href="/#">
              <button className="btn-body btn-body-two">Sign-Up</button>
            </a>
          </div>
        </div>
      </div>
      <div className="content-div">
        <div className="content-img">
          <img className="m-content" src="/images/landing_pic.png" alt="pic" />
        </div>
      </div>
    </div>
  );
}
