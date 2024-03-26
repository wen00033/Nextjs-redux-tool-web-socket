function layout({ children }) {
  return (
    <>
      <header>
        <ul>
          <li>About</li>
          <li>Home</li>
          <li>contact</li>
        </ul>
      </header>
      <div>{children}</div>
    </>
  );
}

export default layout;
