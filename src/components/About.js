import { download } from "../svgImage";

const About = () => {
  return (
    <div className="aali_tm_section" id="about">
      <div className="aali_tm_about">
        <div className="about_inner">
          <div className="left">
            <div className="image">
              <img src="img/thumbs/45-49.jpg" alt="aali image" />
              {/* <div className="main" data-img-url="img/about/1.jpg" /> */}
              <span
                className="square moving_effect"
                data-direction="y"
                data-reverse="yes"
              />
              <span className="border">
                <span
                  className="in moving_effect"
                  data-direction="x"
                  data-reverse="yes"
                />
              </span>
            </div>
          </div>
          <div className="center">
            <div className="title wow fadeInUp" data-wow-duration="1s">
              <span className="small">About Me</span>
              {/* <h3>
                {`I'm`} <span>Linda</span> 
                
              </h3> */}
              <h4>
                <span>I'm an </span>
                <span> Entrepreneur </span>&
                <span> Software Developer Based in Toronto, CA</span>
              </h4>

            </div>
            <div
              className="text wow fadeInUp"
              data-wow-duration="1s"
              data-wow-delay="0.2s"
            >
              <p>
                Hi! My name is Linda. I am a passionate entrepreneur who is currently studying
                Computer Engineering at University of Toronto. I have expereince with both front-end 
                and back-end developement using Python, Java, C, C++, React, Vue and Matlab. 
              </p>
              <p>
                I have taken relavant courses such as Fundamanetal to Programming, Complex Algorithm
                 and Data Structure and Intro to programming. I have developed android and IOS application that can be 
                downloaded from store and I have helped with our university accesortor program. 
                I enjoy creating projects and especially love the feeling of collaborating with different 
                people to create something big as a team.
              </p>
            </div>
            <div
              className="aali_tm_button wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="0.2s"
            >
              <a href="img/cv/my_Resume.pdf" download>
                <span>Download Resume {download}</span>
              </a>
            </div>
          </div>
          <div className="right">
            <div className="image">
              <img src="img/thumbs/41-61.jpg" alt="aali image" />
              <div className="main" data-img-url="img/about/2.jpg" />
              <div
                className="square moving_effect"
                data-direction="x"
                data-reverse="no"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
