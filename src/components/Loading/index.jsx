import styled, { keyframes } from 'styled-components'

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.body};
`

const Spinner = styled.div`
  border: 4px solid ${({ theme }) => theme.text}20;
  border-top: 4px solid ${({ theme }) => theme.primary};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
`

export default function Loading() {
  return (
    <LoadingContainer>
      <Spinner />
    </LoadingContainer>
  )
}
