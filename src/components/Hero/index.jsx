import { TypeAnimation } from 'react-type-animation'
import GraphemeSplitter from 'grapheme-splitter'
import * as S from './styles'
import LinkedinIcon from '@/assets/images/linkedin-ico.png'
import GithubIcon from '@/assets/images/github-ico.png'
import GmailIcon from '@/assets/images/gmail-ico.png'
import WhatsappIcon from '@/assets/images/whatsapp-ico.png'

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
          I&apos;m an <strong>Education Technology Specialist</strong> leading
          <br />
          <strong>curriculum architecture</strong>, <strong>teacher training</strong> and{' '}
          <strong>EdTech implementation</strong>
          <br />
          across 10+ schools impacting over 5000 students.
        </S.HeroDescription>
        <S.HeroCTA>
          <a href="#impact" aria-label="See my impact">
            See my impact
          </a>
        </S.HeroCTA>
      </S.HeroContent>

      <S.HeroSocials>
        <S.Social>
          <a
            href="https://www.linkedin.com/in/willson-alflen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedinIcon} alt="Visit my Linkedin profile" />
          </a>
        </S.Social>
        <S.Social>
          <a
            href="https://github.com/willson-alflen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GithubIcon} alt="Visit my Github profile" />
          </a>
        </S.Social>
        <S.Social>
          <a
            href="mailto:willson.alflen@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GmailIcon} alt="Send me an email" />
          </a>
        </S.Social>
        <S.Social>
          <a
            href="https://api.whatsapp.com/send?phone=5547999999999"
            target="_blank"
            rel="noopener noreferrer"
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
