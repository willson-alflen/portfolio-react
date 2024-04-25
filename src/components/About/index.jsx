import * as S from './styles'

export default function About() {
  return (
    <S.About id="about">
      <S.AboutContainer>
        <S.AboutHeading>
          <h2>About Me</h2>
          <p>
            I&apos;m a frontend developer based in Brazil. I love building apps
            that solve real-world problems and that are delightful to use. My
            specialities include JavaScript, React JS and Styled Components.
          </p>
        </S.AboutHeading>

        <S.AboutContent>
          <S.AboutText>
            <h3>Get to know me!</h3>
            <p>
              My background is in teaching. I have a degree in Mathmatics with
              7+ years of experince in this field but I felt it was about time
              to move on. I started coding in 2021 and ever since, I have
              remained deeply engaged. I&apos;m currently looking for new
              opportunities. If you have any questions, please don&apos;t
              hesitate to reach out!
            </p>
          </S.AboutText>

          <S.AboutSkills>
            <h3>Skills</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Bootstrap</li>
              <li>React</li>
              <li>TypeScript</li>
              <li>Styled Components</li>
              <li>Node.js</li>
              <li>Sass</li>
              <li>Gulp</li>
              <li>Git</li>
              <li>GitHub</li>
              <li>Figma</li>
            </ul>
          </S.AboutSkills>
        </S.AboutContent>
      </S.AboutContainer>
    </S.About>
  )
}
