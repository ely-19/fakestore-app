const Footer = () => {
  return (
    <footer
      className="mt-5 p-4 text-center"
      style={{
        background: "var(--pink-soft)",
        borderTop: "3px solid var(--pink-main)",
      }}
    >
      <h5 className="fw-bold" style={{ color: "var(--pink-dark)" }}>
        FakeStore Pink Edition 💖
      </h5>

      <p style={{ color: "#000000ff" }}>
        Proyecto creado con amor, React y muchos tonos rosa ✨🎀
      </p>

      <small style={{ color: "#000000ff" }}>
        © {new Date().getFullYear()} FakeStore Pink. Todos los derechos reservados.
      </small>
    </footer>
  );
};

export default Footer;
