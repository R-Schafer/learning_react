const Header = () => {
  return (
    <nav className="navbar">
      <h1>Girl Code Blog</h1>
      <div classNsme="links">
        <a
          href="/create"
          // example of how to inline style looks
          style={{
            color: "white",
            backgroundColor: "rgba(209, 38, 149, 0.955)",
            borderRadius: "8px",
            padding: "5px",
          }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Header;
