import rose from '../assets/decor/stefany-rose-line-art.png'

export default function RoseLineArt({ className = '' }) {
  return <img src={rose} alt="" aria-hidden="true" className={`pointer-events-none absolute select-none object-contain mix-blend-multiply ${className}`} />
}
