import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="containers">
        
        {/* Left Side - Image */}
        <div className='image-container' >
            <div className='image-wrapper' ><Image src={'/profile-pic.png'} alt='Profile picture' width={400} height={400} /></div>
        </div>

        {/* Right Side - Content */}
        <div className="content">
          <h2 className="section-title">About Me</h2>
          <p className="role">FrontEnd Developer</p>
          <p className="description">
          I am a passionate web developer with a strong foundation in frontend development. I completed my training in frontend development through the BanoQabil 2.0 program, where I gained expertise in HTML, CSS, and JavaScript. Currently, I am advancing my skills by pursuing a course  in Certified Cloud Applied Generative AI Engineering from the Governor House.
          </p>
          
          {/* Download CV Button */}
          
        </div>
      </div>
     
    </section>
  );
};

export default AboutSection;
