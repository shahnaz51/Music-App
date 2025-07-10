// utils/Grid.js
import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  gap: ${({ gap, theme }) => gap && theme.spacing[gap]};
  padding: ${({ p, theme }) => p && theme.spacing[p]};

  /* Mobile default */
  grid-template-columns: ${({ cols }) => `repeat(${cols || 1}, minmax(0, 1fr))`};

  /* Tablet and above (≥ sm) */
  @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: ${({ sm }) => sm ? `repeat(${sm}, minmax(0, 1fr))` : null};
  }

  /* Laptop and above (≥ md) */
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: ${({ md }) => md ? `repeat(${md}, minmax(0, 1fr))` : null};
  }

  /* Desktop and above (≥ lg) */
  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: ${({ lg }) => lg ? `repeat(${lg}, minmax(0, 1fr))` : null};
  }
`
