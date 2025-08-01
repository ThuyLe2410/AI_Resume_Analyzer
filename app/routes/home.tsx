import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import { resumes } from "../../constants";

import ResumeCard from "~/components/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume Analyzer" },
    { name: "description", content: "Smart feedback for your dream job" },
  ];
}

export default function Home() {
  console.log("resumes", resumes);
  return (
    <main className="bg-[url('/images/bg-main.svg')]">
      <Navbar />
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track your application & Resume Rating</h1>
          <h2>Review your submissions and check AI-powered feedback</h2>
        </div>

        {resumes.length > 0 && (
          <div className="resumes-section">
            {resumes.map((resume) => (
              <ResumeCard key={resume.id} resume={resume} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}
