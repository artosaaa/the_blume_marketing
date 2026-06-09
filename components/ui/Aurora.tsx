// Ambient, always-looping background bloom. Pure CSS (no JS),
// transform/opacity only, and frozen under prefers-reduced-motion.
export default function Aurora() {
  return (
    <div className="aurora" aria-hidden>
      <div className="aurora__blob aurora__blob--a" />
      <div className="aurora__blob aurora__blob--b" />
      <div className="aurora__blob aurora__blob--c" />
    </div>
  );
}
