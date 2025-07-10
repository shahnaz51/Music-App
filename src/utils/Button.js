import styled from 'styled-components'

export const Button = styled.button`
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary}, ${({ theme }) => theme.colors.accent});
  color: ${({ theme }) => theme.colors.textHigh};
  padding: ${({ p, theme }) => theme.spacing[p] || theme.spacing[3]} ${({ px, theme }) => theme.spacing[px] || theme.spacing[6]};
  border: none;
  border-radius: ${({ rounded, theme }) => theme.borderRadius[rounded] || theme.borderRadius.lg};
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`