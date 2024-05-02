import styled from 'styled-components'

export const Resume = styled.div`
  min-height: 100vh;
  max-width: 1020px;
  margin: 0 auto;
  padding: 8rem 2rem;
`

export const ResumeWrapper = styled.div`
  padding: 4rem 2rem;
  border-radius: 5px;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.15);
  position: relative;
`

export const ResumeDownload = styled.div`
  position: absolute;
  top: 1rem;
  right: 2rem;

  a {
    color: ${(props) => props.theme.mainColor};
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
    border: 1px solid ${(props) => props.theme.mainColor};
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: ${(props) => props.theme.mainColor};
      color: ${(props) => props.theme.backgroundColorAlt};
    }
  }
`

export const ResumeHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: end;
  text-align: center;
  margin-bottom: 3rem;
`

export const ResumeHeaderInfo = styled.div`
  padding: 1rem 0;
  width: 50%;
  border-right: 1px solid ${(props) => props.theme.mainColor};
`

export const ResumeHeaderInfoTitle = styled.h1``

export const ResumeHeaderInfoLinks = styled.div`
  span {
    display: inline-block;

    a {
      color: ${(props) => props.theme.mainColor};

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export const ResumeHeaderContact = styled.div`
  padding: 1rem 0;
  width: 50%;
  span {
    display: block;

    a {
      color: ${(props) => props.theme.mainColor};

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export const ResumeContent = styled.div``

export const ResumeContentTitle = styled.h2`
  font-size: 1.75rem;
  text-align: center;
  padding: 0.5rem 0;
  margin-bottom: 2rem;
`

export const ResumeContentSection = styled.section`
  margin-bottom: 2rem;
`

export const ResumeContentSectionTitle = styled.h2`
  font-size: 1.5rem;
  background-color: ${(props) => props.theme.backgroundColorAlt2};
  padding: 0.125rem 0.5rem;
  margin-bottom: 0.25rem;
`

export const ResumeContentSectionBody = styled.div`
  padding: 0.25rem 1rem;
  p {
    text-indent: 2rem;
    text-align: justify;
  }
`

export const ResumeContentSectionBodyItem = styled.article`
  margin-bottom: 0.5rem;

  &.project {
    margin-bottom: 1.5rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export const ResumeContentSectionBodyItemTitle = styled.h3`
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid ${(props) => props.theme.backgroundColorAlt2};
  margin-bottom: 0.5rem;

  span {
    display: inline-block;
  }
`

export const ResumeContentSectionBodyItemDescription = styled.ul`
  li {
    list-style-type: disc;
    margin-left: 2.5rem;
  }
`
