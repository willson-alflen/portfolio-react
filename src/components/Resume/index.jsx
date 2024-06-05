import * as S from './styles'
import { MdFileDownload } from 'react-icons/md'

export default function Resume() {
  return (
    <S.ResumeSection>
      <S.Resume>
        <S.ResumeWrapper tabIndex={0} aria-label="Willson Alflen Resume">
          <S.ResumeDownload>
            <a
              href="/willson-alflen-resume.pdf"
              download
              aria-label="Download Resume"
              title="Download Resume"
            >
              <MdFileDownload />
            </a>
          </S.ResumeDownload>

          <S.ResumeHeader tabIndex="0" aria-label="Contact info">
            <S.ResumeHeaderInfo>
              <S.ResumeHeaderInfoTitle>Willson Alflen</S.ResumeHeaderInfoTitle>
              <S.ResumeHeaderInfoLinks>
                <span>
                  <a
                    href="https://www.linkedin.com/in/willson-alflen/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Linkedin Profile"
                    title="Visit my Linkedin Profile"
                  >
                    https://www.linkedin.com/in/willson-alflen/
                  </a>
                </span>
                <span>
                  <a
                    href="https://github.com/willson-alflen"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Profile"
                    title="Visit my GitHub Profile"
                  >
                    https://github.com/willson-alflen
                  </a>
                </span>
              </S.ResumeHeaderInfoLinks>
            </S.ResumeHeaderInfo>

            <S.ResumeHeaderContact>
              <span>Itá - Santa Catarina, Brazil</span>
              <span>Date of Birth: 15/09/1989</span>
              <span>
                <a
                  href="mailto:willson.alflen@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Send an email"
                  title="Send me an email"
                >
                  willson.alflen@gmail.com
                </a>
              </span>
              <span>
                <a
                  href="https://api.whatsapp.com/send?phone=5547999999999"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Send a message on Whatsapp"
                  title="Send me a message on Whatsapp"
                >
                  +55 49 98889-6193
                </a>
              </span>
            </S.ResumeHeaderContact>
          </S.ResumeHeader>

          <S.ResumeContent>
            <S.ResumeContentTitle tabIndex="0" aria-label={`Developer's role`}>
              Frontend Developer
            </S.ResumeContentTitle>

            <S.ResumeContentSection tabIndex={0} aria-label="Summary">
              <S.ResumeContentSectionTitle>Summary</S.ResumeContentSectionTitle>
              <S.ResumeContentSectionBody>
                <p>
                  I&apos;m a junior front-end developer proficient in React. I
                  bring a unique blend of skills honed from my previous career
                  as a mathematics teacher. My teaching background has equipped
                  me with invaluable collaboration and problem-solving
                  abilities, which I&apos;m eager to leverage in the dynamic
                  world of technology.
                </p>
                <p>
                  I thrive on challenges and am committed to continuous learning
                  and growth in my career. I&apos;m on the lookout for
                  opportunities that not only allow me to contribute effectively
                  to web projects but also enable me to bring fresh perspectives
                  to the team.
                </p>
                <p>
                  I&apos;m excited about the prospect of contributing to real
                  world projects and making meaningful contributions while
                  embarking on this exhilarating journey of self-improvement and
                  professional development.
                </p>
              </S.ResumeContentSectionBody>
            </S.ResumeContentSection>

            <S.ResumeContentSection tabIndex={0} aria-label="Spoken Languages">
              <S.ResumeContentSectionTitle>
                Spoken Languages
              </S.ResumeContentSectionTitle>
              <S.ResumeContentSectionBody>
                <S.ResumeContentSectionBodyItem>
                  <b>Portuguese</b> - Native
                </S.ResumeContentSectionBodyItem>
                <S.ResumeContentSectionBodyItem>
                  <b>English</b> - Upper Intermediate
                </S.ResumeContentSectionBodyItem>
              </S.ResumeContentSectionBody>
            </S.ResumeContentSection>

            <S.ResumeContentSection tabIndex={0} aria-label="Skills">
              <S.ResumeContentSectionTitle>Skills</S.ResumeContentSectionTitle>
              <S.ResumeContentSectionBody>
                <p>
                  HTML, CSS, JavaScript, JQuery, Webpack, Gulp, Grunt,
                  Bootstrap, Sass, Less, React, Styled Components, Responsive
                  Design, REST Api&apos;s, Firebase, Jest, Cypress, Figma, Web
                  Performance, Web Accessibility, SEO, Local Storage, Cookies,
                  Authentication, Git, Github.
                </p>
              </S.ResumeContentSectionBody>
            </S.ResumeContentSection>

            <S.ResumeContentSection tabIndex={0} aria-label="Personal Projects">
              <S.ResumeContentSectionTitle>
                Personal Projects
              </S.ResumeContentSectionTitle>
              <S.ResumeContentSectionBody>
                <S.ResumeContentSectionBodyItemTitle>
                  Projects
                </S.ResumeContentSectionBodyItemTitle>
                <S.ResumeContentSectionBodyItem
                  className="project"
                  tabIndex={0}
                  aria-label="Project"
                >
                  <b>Portfolio Website - React & Styled Components</b>
                </S.ResumeContentSectionBodyItem>

                <S.ResumeContentSectionBodyItem
                  className="project"
                  tabIndex={0}
                  aria-label="Project"
                >
                  <b>Chat App - React & Firebase</b>
                </S.ResumeContentSectionBodyItem>

                <S.ResumeContentSectionBodyItem
                  className="project"
                  tabIndex={0}
                  aria-label="Project"
                >
                  <b>VanLife (car rental app) - React & React Router Dom</b>
                </S.ResumeContentSectionBodyItem>

                <S.ResumeContentSectionBodyItem
                  className="project"
                  tabIndex={0}
                  aria-label="Project"
                >
                  <b>E-commerce Website (ifood inspired) - React & Redux</b>
                </S.ResumeContentSectionBodyItem>

                <S.ResumeContentSectionBodyItem
                  className="project"
                  tabIndex={0}
                  aria-label="Project"
                >
                  <b>Contact List - React & Redux</b>
                </S.ResumeContentSectionBodyItem>

                <S.ResumeContentSectionBodyItem
                  className="project"
                  tabIndex={0}
                  aria-label="Project"
                >
                  <b>Disney Plus (landing page clone) - React & Gulp & Sass</b>
                </S.ResumeContentSectionBodyItem>

                <S.ResumeContentSectionBodyItem
                  className="project"
                  tabIndex={0}
                  aria-label="Project"
                >
                  <b>Mission Impossible Landing - React & Gulp & Sass</b>
                </S.ResumeContentSectionBodyItem>

                <S.ResumeContentSectionBodyItemTitle className="process">
                  Overall Development Process
                </S.ResumeContentSectionBodyItemTitle>

                <S.ResumeContentSectionBodyItemDescription>
                  <li>
                    <b>Planning and design:</b> Definition of application
                    requirements, including functionalities, features and user
                    interface design;
                  </li>
                  <li>
                    <b>Development environment setup:</b> Initial project setup
                    using tools like Vite, Gulp, and npm packages; Installation
                    and configuration of development tools such as Prettier and
                    Eslint for code formatting and linting;
                  </li>
                  <li>
                    <b>User Interface (UI) development:</b> Creation of HTML
                    structures for web pages, including headers, bodies, and
                    footers; Development of React components for dynamic
                    rendering and interaction; Addition of functionalities
                    specific to each project, such as rendering restaurant
                    pages, contact lists, or interactive elements;
                  </li>
                  <li>
                    <b>Accessibility:</b> Implementation of accessibility
                    features such as ARIA roles, alt attributes, and semantic
                    HTML to ensure that the application is usable by all users;
                  </li>
                  <li>
                    <b>Styling:</b> Application of CSS styles using Sass for
                    better organization, incorporating variables, mixins, and
                    nesting for readability; Styling of React components using
                    the Styled Components library;
                  </li>
                  <li>
                    <b>JavaScript Development:</b> Implementation of
                    interactivity logic using JavaScript, creating functions,
                    and handling events to respond to user actions;
                  </li>
                  <li>
                    <b>State Management (Redux Setup):</b> Installation and
                    configuration of Redux and React Redux libraries; Creation
                    and implementation of reducers and Redux store for managing
                    application state;
                  </li>
                  <li>
                    <b>Testing:</b> Writing unit tests for React components
                    using Vitest/Jest and integration tests using Cypress to
                    ensure the quality and reliability of the application;
                  </li>
                  <li>
                    <b>Optimization:</b> Optimization of web performance using
                    techniques such as code splitting, lazy loading, and
                    minification to improve the user experience;
                  </li>
                  <li>
                    <b> Responsive Design:</b> Ensuring the website is
                    responsive and functions well on various devices; Use of CSS
                    media queries to adjust layouts for different screen sizes;
                  </li>

                  <li>
                    <b>Deployment:</b> Deployment of projects on platforms such
                    as Vercel.
                  </li>
                </S.ResumeContentSectionBodyItemDescription>
              </S.ResumeContentSectionBody>
            </S.ResumeContentSection>

            <S.ResumeContentSection tabIndex={0} aria-label="Education">
              <S.ResumeContentSectionTitle>
                Education
              </S.ResumeContentSectionTitle>
              <S.ResumeContentSectionBody>
                <S.ResumeContentSectionBodyItem>
                  <b>The Fronted Developer Career Path</b> - Scrimba - Jun 2023
                  / Jun 2024
                </S.ResumeContentSectionBodyItem>

                <S.ResumeContentSectionBodyItem>
                  <b>Frontend Engineering Bootcamp</b> - EBAC - Jan 2023 / Dec
                  2023
                </S.ResumeContentSectionBodyItem>

                <S.ResumeContentSectionBodyItem>
                  <b>Full Stack Web Development Bootcamp</b> - Digital House -
                  Aug 2021 / Mar 2022
                </S.ResumeContentSectionBodyItem>

                <S.ResumeContentSectionBodyItem>
                  <b>JavaScript Algorithms and Data Structures</b> -
                  FreeCodeCamp - Sep 2021 / Dec 2021
                </S.ResumeContentSectionBodyItem>

                <S.ResumeContentSectionBodyItem>
                  <b>Responsive Web Design</b> - FreeCodeCamp - Apr 2021 / Sep
                  2021
                </S.ResumeContentSectionBodyItem>

                <S.ResumeContentSectionBodyItem>
                  <b>PostGraduate Studies in Mathematics</b> - UniBF University
                  - Mar 2019 / Sep 2019
                </S.ResumeContentSectionBodyItem>
              </S.ResumeContentSectionBody>
            </S.ResumeContentSection>

            <S.ResumeContentSection tabIndex={0} aria-label="Experience">
              <S.ResumeContentSectionTitle>
                Experience
              </S.ResumeContentSectionTitle>
              <S.ResumeContentSectionBody>
                <S.ResumeContentSectionBodyItem>
                  <S.ResumeContentSectionBodyItemTitle>
                    Mathematics Teacher
                    <span>2016 - 2023</span>
                  </S.ResumeContentSectionBodyItemTitle>
                  <S.ResumeContentSectionBodyItemDescription>
                    <p>
                      - Developed and implemented lesson plans that met the
                      requirements of the curriculum.
                    </p>
                    <p>
                      - Created a positive and engaging learning environment for
                      students.
                    </p>
                    <p>
                      - Provided individualized instruction to students to meet
                      their specific needs.
                    </p>
                    <p>
                      - Collaborated with colleagues to develop and implement
                      school-wide initiatives.
                    </p>
                    <p>
                      - Participated in professional development opportunities
                      to enhance teaching skills.
                    </p>
                  </S.ResumeContentSectionBodyItemDescription>
                </S.ResumeContentSectionBodyItem>
              </S.ResumeContentSectionBody>
            </S.ResumeContentSection>
          </S.ResumeContent>
        </S.ResumeWrapper>
      </S.Resume>
    </S.ResumeSection>
  )
}
