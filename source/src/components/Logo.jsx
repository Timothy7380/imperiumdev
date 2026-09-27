export default function Logo({ className = '' }) {
  return (
    <a href="#top" className={`logo ${className}`} aria-label="Imperium — home">
      Imperium<span className="logo__reg">®</span>
    </a>
  )
}
