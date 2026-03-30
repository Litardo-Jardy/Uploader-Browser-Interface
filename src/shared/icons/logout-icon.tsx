import '../../styles/icons.css'
import type { LogoProps } from '../../types/icons'

const LogOutIcon = ({ width, height, size }: LogoProps) => (

<svg 
  xmlns="http://www.w3.org/2000/svg" 
  width={width ?? size ?? 24} 
  height={height ?? size ?? 24} 
  viewBox="0 0 24 24" 
  fill="none" 
  stroke="currentColor" 
  strokeWidth={1.5} 
  strokeLinecap="round" 
  strokeLinejoin="round">

  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.678 48.678 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3-3 3" />
</svg>)

export { LogOutIcon }

