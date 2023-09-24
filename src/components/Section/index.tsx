import { SectionContainer } from "./styles";

interface SectionProps {
  title: string
  children: React.ReactNode
}

export function Section ({children, title }:SectionProps) {
  return (
    <SectionContainer>
      <h2>{title}</h2>
      { children}
    </SectionContainer>
  )
}