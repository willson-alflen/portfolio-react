import { TypeAnimation } from 'react-type-animation'
import GraphemeSplitter from 'grapheme-splitter'
import * as S from './styles'
import LinkedinIcon from '../../assets/images/linkedin-ico.png'
import GithubIcon from '../../assets/images/github-ico.png'
import GmailIcon from '../../assets/images/gmail-ico.png'
import WhatsappIcon from '../../assets/images/whatsapp-ico.png'

export default function Hero() {
  const splitter = new GraphemeSplitter()

  return (
    <S.Hero id="hero">
      <S.HeroContent>
        <S.HeroHeading>
          <TypeAnimation
            aria-label="Hello, my name is Willson Alflen"
            role="marquee"
            splitter={(str) => splitter.splitGraphemes(str)}
            sequence={[
              'Olá 🇧🇷',
              3000,
              'Hello 🇬🇧',
              3000,
              'Hola 🇪🇸',
              3000,
              'Bonjour 🇫🇷',
              3000,
              'Ciao 🇮🇹',
              3000,
              'Hallo 🇩🇪',
              3000,
              'こんにちは 🇯🇵',
              3000,
            ]}
            repeat={Infinity}
            speed={10}
          />
          <br /> my name is <br />
          <span>Willson Alflen</span>
        </S.HeroHeading>
        <S.HeroDescription>
          I&apos;m a <strong>Front-end Developer</strong> based in Brazil.
          <br />
          My specialties are <strong>React</strong> and{' '}
          <strong>Styled Components</strong>.
        </S.HeroDescription>
        <S.HeroCTA>
          <a href="#projects" aria-label="See my projects">
            See my projects
          </a>
        </S.HeroCTA>
      </S.HeroContent>

      <S.HeroSocials>
        <S.Social>
          <a href="https://www.linkedin.com/in/willson-alflen/" target="_blank">
            <img src={LinkedinIcon} alt="Visit my Linkedin profile" />
          </a>
        </S.Social>
        <S.Social>
          <a href="https://github.com/willson-alflen" target="_blank">
            <img src={GithubIcon} alt="Visit my Github profile" />
          </a>
        </S.Social>
        <S.Social>
          <a href="mailto:willson.alflen@gmail.com" target="_blank">
            <img src={GmailIcon} alt="Send me an email" />
          </a>
        </S.Social>
        <S.Social>
          <a
            href="https://api.whatsapp.com/send?phone=5547999999999"
            target="_blank"
          >
            <img src={WhatsappIcon} alt="Send me a message on Whatsapp" />
          </a>
        </S.Social>
      </S.HeroSocials>

      <S.MouseAnimation>
        <S.Mouse />
      </S.MouseAnimation>
    </S.Hero>
  )
}
