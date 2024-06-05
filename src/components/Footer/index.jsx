import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'
import * as S from './styles'
import LinkedinIcon from '../../assets/images/linkedin-ico.png'
import GithubIcon from '../../assets/images/github-ico.png'
import GmailIcon from '../../assets/images/gmail-ico.png'
import WhatsappIcon from '../../assets/images/whatsapp-ico.png'

export default function Footer() {
  const { theme } = useContext(ThemeContext)

  return (
    <S.Footer tabIndex={0}>
      <S.FooterContainer>
        <S.FooterText>
          <S.Heading className="developer">Willson Alflen</S.Heading>
          <S.Quotation>
            &quot;Trust in the LORD with all your heart and lean not on your own
            understanding; in all your ways submit to him, and he will make your
            paths straight.&quot;
            <cite>Proverbs 3:5-6</cite>
          </S.Quotation>
        </S.FooterText>

        <S.FooterSocial>
          <S.Heading>Social</S.Heading>
          <S.SocialLink
            href="mailto:willson.alflen@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send me an email"
            $theme={theme}
          >
            <img src={GmailIcon} alt="Gmail" />
          </S.SocialLink>
          <S.SocialLink
            href="https://wa.me/5549988896193?text=I'd%20like%20to%20chat%20with%20you%20..."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send me a message on Whatsapp"
            $theme={theme}
          >
            <img src={WhatsappIcon} alt="Whatsapp" />
          </S.SocialLink>
          <S.SocialLink
            href="https://www.linkedin.com/in/willson-alflen/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my Linkedin profile"
            $theme={theme}
          >
            <img src={LinkedinIcon} alt="Linkedin" />
          </S.SocialLink>
          <S.SocialLink
            href="https://github.com/willson-alflen"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit my Github profile"
            $theme={theme}
          >
            <img src={GithubIcon} alt="Github" />
          </S.SocialLink>
        </S.FooterSocial>
      </S.FooterContainer>
    </S.Footer>
  )
}
