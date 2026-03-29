import '../../styles/icons.css'
import type { LogoProps } from '../../types/icons';


const UploaderBrowserLogo = ({ width, height, size }: LogoProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width ?? size ?? 30}
    height={height ?? size ?? 30}
    viewBox="0 0 80 80"
    fill="none"
    className="uploader-browser-logo"
  >
    <rect width="80" height="80" rx="20" fill="#1e2740"/>
    <rect x="14" y="14" width="52" height="36" rx="6" fill="#2a3a5c"/>
    <rect x="20" y="20" width="40" height="24" rx="3" fill="#0d1117"/>
    <circle cx="26" cy="32" r="4" fill="#4a9eff"/>
    <circle cx="40" cy="32" r="4" fill="#7c6dff"/>
    <circle cx="54" cy="32" r="4" fill="#3dba6f"/>
    <rect x="32" y="54" width="16" height="3" rx="1.5" fill="#2a3a5c"/>
    <rect x="24" y="60" width="32" height="3" rx="1.5" fill="#2a3a5c"/>
    <path d="M40 44 L40 50" stroke="#4a9eff" strokeWidth="2" strokeLinecap="round"/>
    <path d="M35 47 L40 44 L45 47" fill="#4a9eff"/>
  </svg>
)

export { UploaderBrowserLogo };

