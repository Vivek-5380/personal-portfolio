import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/project-img7.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


const Projects = () => {

    const projects = [
        {
            title: "Web Development",
            description: "Project based on React: React-Meals",
            imgUrl: projImg1,
        },
        {
            title: "Web Development",
            description: "Project based on MERN: CHS(Central HealthCare System)",
            imgUrl: projImg2,
        },
        {
            title: "Web Development",
            description: "Project based on Django: Vk's Blog",
            imgUrl: projImg3,
        },
    ];

    const projectTab2 = [
        {
            title: "Machine Learning",
            description: "Project based on ML: Dog Breed Classification",
            imgUrl: projImg4,
        },
        {
            title: "Machine Learning",
            description: "Project based on ML: Heart Disease Classification",
            imgUrl: projImg5,
        },
        {
            title: "Machine Learning",
            description: "Project based on ML: BullDozer Price Prediction",
            imgUrl: projImg6,
        },
    ];

    const projectTab3 = [
        {
            title: "App Development",
            description: "Project based on Flutter: BMI Calculator",
            imgUrl: projImg7,
        },
    ];

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>Some Of My Projects Showing Expertise In Web Development , Machine Learning And App Development</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" >
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        projectTab2.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                {
                                                    projectTab3.map((project, index) => {
                                                        return (
                                                            <ProjectCard
                                                                key={index}
                                                                {...project}
                                                            />
                                                        )
                                                    })
                                                }
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="background"></img>
        </section>
    );
};

export default Projects;