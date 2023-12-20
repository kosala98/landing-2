import background from "../assets/background.PNG";
import main from "../assets/main.PNG";

const Hero = () => {
  return (
    <div className="container-fluid p-0  hero-container">
      <div className="position-relative">
        <img src={background} alt="" className="img-fluid" />

        <img
          src={main}
          alt=""
          className="position-absolute img-fluid top-50 start-50 translate-middle  main-image"
        />
        <div className="position-absolute bottom-0 start-50 translate-middle-x">
          <h1>GREENADE!</h1>
        </div>
        <div className="position-absolute top-50 start-0 translate-middle-y px-5 healthy-border">
          <h3 className="">
            A healthy explosion to smoke free explosion. A safe evironment to
            stay healty and enjoy everyday in a happy and safe manner.
            <span className=" px-3">
              <a href="#" className="text-black text-decoration-none">
                READ MORE
              </a>
            </span>
          </h3>
        </div>
        <div className="position-absolute bottom-50 end-50 translate-middle-y healthy-border-2">
          <h2>A HEALTHY EXPLOSION</h2>
        </div>
      </div>
    </div>
  );
};

export default Hero;
