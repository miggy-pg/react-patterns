import { Link } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    flexDirection: "column",
    textAlign: "center",
  },
  link: {
    margin: "10px",
    fontSize: "1.2rem",
    textDecoration: "none",
    color: "blue",
  },
};

export default function HomePage() {
  return (
    <div style={styles.container}>
      <h1
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "20px" }}
      >
        Welcome to React Patterns and Compound Components Lesson
      </h1>
      <Link to="/react-patterns" style={styles.link}>
        Go to React Patterns
      </Link>
      <h1
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        Explore Compound Components
      </h1>
      <Link to="/compound-component" style={styles.link}>
        Go to Compound Components
      </Link>
    </div>
  );
}
