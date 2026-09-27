export default function Logo({ className = '' }) {
  return (
    <a href="#top" className={`logo ${className}`} aria-label="Imperiumdev — home">
      Imperiumdev<span className="logo__reg">®</span>
    </a>
  )
}
