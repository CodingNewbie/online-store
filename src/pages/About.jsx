import "./About.css";
import constants from "../common/config";

function About() {
    return (
        <div className="bio container">
            <img src={constants.IMAGE_PATH + "adam.jpg"} alt="" />
            <div>
                <h2>
                    I'm Adam, a <span>Software Developer</span> with a passion
                    for technology and innovation.
                </h2>
                <p>
                    With years of experience in the tech industry, I've
                    developed a keen eye for detail and a commitment to
                    delivering excellence in every project I undertake. I
                    specialize in enterprise asset management, helping
                    organizations streamline their operations and maximize
                    efficiency.
                </p>
                <p>
                    Outside of work, I'm an avid learner, always exploring new
                    technologies and methodologies to enhance my skills. I enjoy
                    collaborating with like-minded individuals and am an active
                    participant in various tech communities. My journey in the
                    tech world is driven by a desire to create impactful
                    solutions that improve people's lives and business
                    operations.
                </p>
            </div>
        </div>
    );
}

export default About;
