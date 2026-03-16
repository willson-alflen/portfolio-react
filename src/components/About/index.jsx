import * as S from './styles'

export default function About() {
  return (
    <S.About id="about" tabIndex={0}>
      <S.AboutContainer>
        <S.AboutHeading>
          <h2>About Me</h2>
          <p>
            I work at the intersection of education, technology, and scalability. With over 10 years in education and 2 years leading educational technology initiatives, I focus on designing structured, scalable programming programs for public schools. 
          </p>
          <p>
            My work spans curriculum architecture, teacher formation, implementation oversight, and digital system development. I have contributed to the deployment of technology education programs across 10+ public schools, impacting more than 5,000 students and mentoring 12 instructors to ensure methodological consistency and sustainable growth. 
          </p>
        </S.AboutHeading>

        <S.AboutContent>
          <S.AboutText>
            <h3>Educational Systems Perspective</h3>
            <p>My professional journey began in Mathematics education, where I developed a strong foundation in structured thinking and curriculum alignment. Over time, I expanded my work into educational technology, focusing not only on instruction but on scalable program architecture.</p>
            <p>Today, my primary focus is coordination, standardization, and expansion of technology education programs — ensuring consistency, measurable impact, and sustainable growth across institutions.</p>
          </S.AboutText>

          <S.AboutSkills>
            <h3>Educational Leadership</h3>
            <ul>
              <li>Curriculum Architecture</li>
              <li>Program Scaling</li>
              <li>Teacher Formation</li>
              <li>Pedagogical Standardization</li>
              <li>Educational Systems Design</li>
              <li>Stakeholder Alignment</li>
              <li>Assessment Systems</li>
              <li>Innovation Strategy</li>
            </ul>

            <h3>Technical Foundation</h3>
            <ul>
              <li>React</li>
              <li>JavaScript</li>
              <li>Tailwind</li>
              <li>REST APIs</li>
              <li>Firebase</li>
              <li>Testing</li>
              <li>Git</li>
              <li>Accessibility</li>
            </ul>
          </S.AboutSkills>
        </S.AboutContent>
      </S.AboutContainer>
    </S.About>
  )
}
