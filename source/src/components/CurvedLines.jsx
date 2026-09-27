const LINE_COUNT = 20

export default function CurvedLines({ side }) {
  return (
    <div className={`curves curves--${side}`} aria-hidden="true">
      {Array.from({ length: LINE_COUNT }, (_, i) => {
        const size = 60 + i * 10
        const style =
          side === 'top'
            ? { height: `${size}px`, animationDelay: `${i * 0.25}s` }
            : { width: `${size}px`, animationDelay: `${i * 0.25}s` }
        return <span key={i} className="curve" style={style} />
      })}
    </div>
  )
}
