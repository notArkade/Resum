import type { Route } from "./+types/home";
import Navbar from "../components/Navbar";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "RESUM" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main className="main-section">
      <Navbar/ >
      <section>
        <div>
          <h1>Track your Application & Resume Ratings here</h1>
          <h2></h2>
        </div>
      </section>
    </main>
  );
}
