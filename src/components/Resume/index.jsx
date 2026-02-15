import * as S from './styles'
import { MdFileDownload } from 'react-icons/md'

export default function Resume() {
  return (
    <S.ResumeSection>
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
                    LinkedIn
                  </a>
                </span>
                <span>&nbsp;|&nbsp;</span>
                <span>
                  <a
                    href="https://github.com/willson-alflen"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub Profile"
                    title="Visit my GitHub Profile"
                  >
                    GitHub
                  </a>
                </span>
                <span>&nbsp;|&nbsp;</span>
                <span>
                <a
                  href="https://api.whatsapp.com/send?phone=5549988896193"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Send a message on Whatsapp"
                  title="Send me a message on Whatsapp"
                >
                  WhatsApp
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
            </S.ResumeHeaderContact>
          </S.ResumeHeader>

          <S.ResumeContent>
            <S.ResumeContentTitle>
              Education Technology Specialist
            </S.ResumeContentTitle>

            <S.ResumeContentSection>
              <S.ResumeContentSectionTitle>Summary</S.ResumeContentSectionTitle>
              <S.ResumeContentSectionBody>
                <p>
                  Education Specialist with 10+ years in education and 
                  2 years leading pedagogical consulting and technology implementation 
                  projects across 10+ public schools, impacting over 5,000 students.
                </p>
                <p>
                  Experienced in designing scalable programming curricula aligned with national standards (BNCC), training and mentoring 12 instructors, standardizing teaching methodologies, and participating in pedagogical and business-level decision-making.
                </p>
                <p>
                  Combines systems thinking, leadership in educational innovation, and hands-on frontend expertise (React) to design, implement, and scale technology-driven learning ecosystems.
                </p>
                <p>
                  Positioning for leadership roles in Educational Technology Strategy, Coordination, and EdTech Innovation.
                </p>
              </S.ResumeContentSectionBody>
            </S.ResumeContentSection>

            <S.ResumeContentSection>
              <S.ResumeContentSectionTitle>
                Leadership & Strategic Impact
              </S.ResumeContentSectionTitle>
              <S.ResumeContentSectionBody>
                <S.ResumeContentSectionBodyItemDescription>
                  <li>
                    Led curriculum restructuring for programming education across 10+ public schools.
                  </li>
                  <li>
                    Contributed to strategic expansion decisions through active participation in pedagogical and business meetings.
                  </li>
                  <li>
                    Standardized teaching methodology to ensure quality, scalability, and consistency.
                  </li>
                  <li>
                    Trained and mentored 12 instructors, building internal teaching capacity.
                  </li>
                  <li>
                    Impacted 5,000+ students through structured technology programs.
                  </li>
                  <li>
                    Conducted school technical visits for implementation oversight and quality assurance.
                  </li>
                  <li>
                    Contributed to the reformulation and modernization of a Computer Science program.
                  </li>
                  <li>
                    Designed and implemented an internal digital assessment platform to improve learning tracking and performance analysis.
                  </li>
                </S.ResumeContentSectionBodyItemDescription>
              </S.ResumeContentSectionBody>
            </S.ResumeContentSection>

            <S.ResumeContentSection>
              <S.ResumeContentSectionTitle>
                Education Technology Expertise
              </S.ResumeContentSectionTitle>
              <S.ResumeContentSectionBody>
                <S.ResumeContentSectionBodyItemDescription>
                  <li>
                    Curriculum Architecture (BNCC-aligned)
                  </li>
                  <li>
                    Educational Systems Design
                  </li>
                  <li>
                    EdTech Implementation Strategy
                  </li>
                  <li>
                    Teacher Training & Instructional Leadership
                  </li>
                  <li>
                    Learning Assessment Systems
                  </li>
                  <li>
                    Stakeholder Alignment (Public & Private Education)
                  </li>
                  <li>
                    Pedagogical Standardization
                  </li>
                  <li>
                    Educational Innovation & Program Scaling
                  </li>
                </S.ResumeContentSectionBodyItemDescription>
              </S.ResumeContentSectionBody>
            </S.ResumeContentSection>

            <S.ResumeContentSection>
              <S.ResumeContentSectionTitle>Technical Background</S.ResumeContentSectionTitle>
              <S.ResumeContentSectionBody>
                <p>
                  React, Styled Components, Tailwind, JavaScript (ES6+), Responsive
                  Design, REST Api&apos;s, Firebase, Testing (Jest, Cypress), Figma, Web Performance, Web Accessibility, SEO, Git & Github, Deployment.
                </p>
              </S.ResumeContentSectionBody>
            </S.ResumeContentSection>

            <S.ResumeContentSection>
              <S.ResumeContentSectionTitle>
                Spoken Languages
              </S.ResumeContentSectionTitle>
              <S.ResumeContentSectionBody>
                <S.ResumeContentSectionBodyItemDescription>
                  <li><b>Portuguese</b> - Native</li>
                </S.ResumeContentSectionBodyItemDescription>
                <S.ResumeContentSectionBodyItemDescription>
                  <li><b>English</b> - Upper Intermediate</li>
                </S.ResumeContentSectionBodyItemDescription>
              </S.ResumeContentSectionBody>
            </S.ResumeContentSection>

            <S.ResumeContentSection>
              <S.ResumeContentSectionTitle>
                Professional Experience
              </S.ResumeContentSectionTitle>
              <S.ResumeContentSectionBody>
                <S.ResumeContentSectionBodyItem>
                  <S.ResumeContentSectionBodyItemTitle>
                    Education Technology Consultant
                    <span>2024 - Present</span>
                  </S.ResumeContentSectionBodyItemTitle>
                  <S.ResumeContentSectionBodyItemDescription>
                    <li>
                      Led pedagogical restructuring of a programming curriculum deployed in 10+ public schools.
                    </li>
                    <li>
                      Designed scalable BNCC-aligned curriculum frameworks.
                    </li>
                    <li>
                      Established standardized instructional methodologies.
                    </li>
                    <li>
                      Mentored and trained 12 programming instructors.
                    </li>
                    <li>
                      Participated in strategic meetings influencing pedagogical and business decisions.
                    </li>
                    <li>
                      Conducted school implementation audits and quality supervision.
                    </li>
                    <li>
                      Developed an internal React + Tailwind assessment platform to support data-driven pedagogical decisions.
                    </li>
                  </S.ResumeContentSectionBodyItemDescription>
                </S.ResumeContentSectionBodyItem>

                <S.ResumeContentSectionBodyItem>
                  <S.ResumeContentSectionBodyItemTitle>
                    Mathematics Teacher
                    <span>2016 - 2023</span>
                  </S.ResumeContentSectionBodyItemTitle>
                  <S.ResumeContentSectionBodyItemDescription>
                    <li>
                      Developed and implemented lesson plans that met the requirements of the curriculum.
                    </li>
                    <li>
                      Created a positive and engaging learning environment for students.
                    </li>
                    <li>
                      Provided individualized instruction to students to meet their specific needs.
                    </li>
                    <li>
                      Collaborated with colleagues to develop and implement school-wide initiatives.
                    </li>
                    <li>
                      Participated in professional development opportunities to enhance teaching skills.
                    </li>
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
