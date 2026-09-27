import { PROFILE, SKILLS, STATS } from '../data.js'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="about">
        <figure className="about__photo" data-reveal>
          <img src={PROFILE.aboutPhoto} alt={`${PROFILE.name} portrait`} loading="lazy" />
          <figcaption className="about__caption">
            <span className="green-dot" /> Based in {PROFILE.location}
          </figcaption>
        </figure>

        <div className="about__body" data-reveal>
          <span className="eyebrow">About me</span>
          <h2 className="section-title">
            Designer who codes. <span className="serif-italic">Developer</span> who designs.
          </h2>
          <div className="about__copy">
            <p>
              I’m {PROFILE.name} — a multi-disciplinary creator sitting at the intersection of great design and clean
              engineering. I build things that look beautiful and work flawlessly.
            </p>
            <p>
              From crafting intuitive mobile experiences for apps like Faith Companion and Aku, to building full-stack
              web platforms, to defining brand identities — I bring a holistic creative perspective to every project I
              touch.
            </p>
            <p>Open to remote collaborations and exciting product challenges worldwide.</p>
          </div>

          <dl className="stats">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <dt className="stat__label">{s.label}</dt>
                <dd className="stat__value">{s.value}</dd>
              </div>
            ))}
          </dl>

          <div className="skills">
            {SKILLS.map((g) => (
              <div className="skills__group" key={g.group}>
                <h3 className="skills__title">{g.group}</h3>
                <div className="pill-row">
                  {g.items.map((i) => (
                    <span className="pill" key={i}>
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
