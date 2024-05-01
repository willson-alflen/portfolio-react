import * as S from './styles'
import { MdFileDownload } from 'react-icons/md'

export default function Resume() {
  return (
    <S.Resume>
      <S.ResumeWrapper>
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

        <S.ResumeHeader>
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
          <S.ResumeContentTitle>Front-end Developer</S.ResumeContentTitle>

          <S.ResumeContentSection>
            <S.ResumeContentSectionTitle>Summary</S.ResumeContentSectionTitle>
            <S.ResumeContentSectionBody>
              <p>
                I&apos;m a junior front-end developer with a passion for
                transitioning into tech. Proficient in HTML, CSS, and
                JavaScript, I bring a unique blend of skills honed from my
                previous career as a mathematics teacher. My teaching background
                has equipped me with invaluable collaboration and
                problem-solving abilities, which I&apos;m eager to leverage in
                the dynamic world of technology.
              </p>
              <p>
                I thrive on challenges and am committed to continuous growth in
                my career. I&apos;m on the lookout for opportunities that not
                only allow me to contribute effectively to web projects but also
                enable me to bring fresh perspectives to the team. My enthusiasm
                for learning drives me to quickly adapt and excel in this
                fast-paced field.
              </p>
              <p>
                I&apos;m excited about the prospect of contributing to
                innovative projects and making meaningful contributions while
                embarking on this exhilarating journey of self-improvement and
                professional development.
              </p>
            </S.ResumeContentSectionBody>
          </S.ResumeContentSection>

          <S.ResumeContentSection>
            <S.ResumeContentSectionTitle>Skills</S.ResumeContentSectionTitle>
            <S.ResumeContentSectionBody>
              <p>
                HTML, CSS, JavaScript, JQuery, Webpack, Gulp, Grunt, Bootstrap,
                Sass, Less, React, Styled Components, Responsive Design, REST
                Api&apos;s, Firebase, Jest, Cypress, Figma, Web Performance, Web
                Accessibility, SEO, Local Storage, Cookies, Authentication, Git,
                Github.
              </p>
            </S.ResumeContentSectionBody>
          </S.ResumeContentSection>

          <S.ResumeContentSection>
            <S.ResumeContentSectionTitle>
              Course Projects
            </S.ResumeContentSectionTitle>
            <S.ResumeContentSectionBody>
              <S.ResumeContentSectionBodyItem className="project">
                <S.ResumeContentSectionBodyItemTitle>
                  <div>
                    <span>
                      E-commerce Website (iFood inspired) - React & Redux
                    </span>
                    <span>2023</span>
                  </div>
                </S.ResumeContentSectionBodyItemTitle>
                <S.ResumeContentSectionBodyItemDescription>
                  <p>
                    - <b>Planning and design:</b> Defining the requirements of
                    the application, including functionalities, features and
                    user interface design;
                  </p>
                  <p>
                    - <b>Development environment setup:</b> Initial project
                    setup using Vite and other tools like Prettier and Eslint;
                  </p>
                  <p>
                    - <b>User Interface (UI) development:</b> Creation of React
                    components, rendering pages for each restaurant and their
                    respective menus, and adding products to the shopping cart;
                  </p>
                  <p>
                    - <b>Styling:</b> Styling of components using the Styled
                    Components library;
                  </p>
                  <p>
                    - <b>Routing configuration:</b> Use of the React Router
                    library for navigation between pages;
                  </p>
                  <p>
                    - <b>Redux setup:</b> Installation of the Redux and React
                    Redux libraries, creation and implemention of reducers and
                    the Redux store;
                  </p>
                  <p>
                    - <b>API communication:</b> Use of fetch requests both to
                    populate the site&apos;s content and to complete the
                    purchase of items in the cart;
                  </p>
                  <p>
                    - <b>Deployment:</b> Project deployment at Vercel.
                  </p>
                </S.ResumeContentSectionBodyItemDescription>
              </S.ResumeContentSectionBodyItem>

              <S.ResumeContentSectionBodyItem className="project">
                <S.ResumeContentSectionBodyItemTitle>
                  <div>
                    <span>Contact List - React & Redux</span>
                    <span>2023</span>
                  </div>
                </S.ResumeContentSectionBodyItemTitle>
                <S.ResumeContentSectionBodyItemDescription>
                  <p>
                    - <b>Planning and design:</b> Definition of application
                    requirements, including functionalities, features and user
                    interface design;
                  </p>
                  <p>
                    - <b>Development environment setup:</b> Initial project
                    setup using Vite and other tools like Prettier and Eslint;
                  </p>
                  <p>
                    - <b>User Interface (UI) development:</b> Creation of React
                    components, rendering of the contact list, and addition of
                    functionalities (adding, editing, and deleting contacts);
                  </p>
                  <p>
                    - <b>Styling:</b> Styling of components using the Styled
                    Components library;
                  </p>
                  <p>
                    - <b>Redux setup:</b> Installation of the Redux and React
                    Redux libraries, creation and implementation of reducers and
                    the Redux store;
                  </p>
                  <p>
                    - <b>Deployment:</b> Project deployment at Vercel.
                  </p>
                </S.ResumeContentSectionBodyItemDescription>
              </S.ResumeContentSectionBodyItem>

              <S.ResumeContentSectionBodyItem className="project">
                <S.ResumeContentSectionBodyItemTitle>
                  <div>
                    <span>Mission Impossible Landing - Gulp & Sass</span>
                    <span>2023</span>
                  </div>
                </S.ResumeContentSectionBodyItemTitle>
                <S.ResumeContentSectionBodyItemDescription>
                  <p>
                    - <b>Planning and design:</b> Definition of application
                    requirements, including functionalities, features, and user
                    interface design;
                  </p>
                  <p>
                    - <b>Development environment setup:</b> Initial project
                    setup and installation of npm packages and tools such as
                    Sass and Gulp;
                  </p>
                  <p>
                    - <b>HTML development:</b> Creation of the website&apos;s
                    HTML structure, including header, body and footer and links
                    to css and javascript files;
                  </p>
                  <p>
                    - <b>CSS development with Sass:</b> CSS styling using the
                    Sass language for better organization, use of variables,
                    mixins and nesting to improve code readability, compilation
                    of Sass code into CSS using Gulp;
                  </p>
                  <p>- Compiling Sass code into CSS using Gulp;</p>
                  <p>
                    - <b>JavaScript development:</b> Implementation of the
                    website&apos;s interactivity logic using JavaScript,
                    creating functions and events to respond to user actions.
                  </p>
                  <p>
                    - <b>Performance optimization:</b> Minification and
                    compression of CSS and JavaScript files; Optimizing images
                    and other features for fast loading.
                  </p>
                  <p>
                    - <b>Responsive Design:</b> Ensuring the site is responsive
                    and works well on mobile devices using CSS media queries to
                    adjust the layout on different screen sizes.
                  </p>
                  <p>
                    - <b>Deployment:</b> Project deployment at Vercel.
                  </p>
                </S.ResumeContentSectionBodyItemDescription>
              </S.ResumeContentSectionBodyItem>
            </S.ResumeContentSectionBody>
          </S.ResumeContentSection>

          <S.ResumeContentSection>
            <S.ResumeContentSectionTitle>Education</S.ResumeContentSectionTitle>
            <S.ResumeContentSectionBody>
              <S.ResumeContentSectionBodyItem>
                <b>Front-end Engineering Bootcamp</b> - EBAC - Jan 2023 / Dec
                2023
              </S.ResumeContentSectionBodyItem>

              <S.ResumeContentSectionBodyItem>
                <b>Full Stack Web Development Bootcamp</b> - Digital House - Aug
                2021 / Mar 2022
              </S.ResumeContentSectionBodyItem>

              <S.ResumeContentSectionBodyItem>
                <b>PostGraduate Studies in Mathematics</b> - UniBF University -
                Mar 2019 / Sep 2019
              </S.ResumeContentSectionBodyItem>
            </S.ResumeContentSectionBody>
          </S.ResumeContentSection>

          <S.ResumeContentSection>
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

          <S.ResumeContentSection>
            <S.ResumeContentSectionTitle>
              Experience
            </S.ResumeContentSectionTitle>
            <S.ResumeContentSectionBody>
              <S.ResumeContentSectionBodyItem>
                <S.ResumeContentSectionBodyItemTitle>
                  <div>
                    <span>Mathematics Teacher</span>
                    <span>2016 - 2023</span>
                  </div>
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
                    - Participated in professional development opportunities to
                    enhance teaching skills.
                  </p>
                </S.ResumeContentSectionBodyItemDescription>
              </S.ResumeContentSectionBodyItem>
            </S.ResumeContentSectionBody>
          </S.ResumeContentSection>
        </S.ResumeContent>
      </S.ResumeWrapper>
    </S.Resume>
  )
}
