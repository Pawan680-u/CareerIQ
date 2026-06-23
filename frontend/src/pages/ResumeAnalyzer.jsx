import { useState } from "react";
import * as pdfjsLib from "pdfjs-dist";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.js?url";

import LoadingButton from "../components/LoadingButton";
import PageHeader from "../components/PageHeader";
import ResumeResultCard from "../components/ResumeResultCard";
import { api } from "../services/api";

pdfjsLib.GlobalWorkerOptions.workerSrc = pdfWorker;

export default function ResumeAnalyzer() {
  const [resumeText, setResumeText] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  async function readFile(file) {
    if (!file) return;

    try {
      // PDF file
      if (file.type === "application/pdf") {
        const arrayBuffer = await file.arrayBuffer();

        const pdf = await pdfjsLib.getDocument({
          data: arrayBuffer,
        }).promise;

        let extractedText = "";

        for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);

          const textContent = await page.getTextContent();

          const pageText = textContent.items
            .map((item) => item.str)
            .join(" ");

          extractedText += pageText + "\n";
        }

        setResumeText(extractedText);
      }

      // TXT file
      else if (file.type === "text/plain") {
        const reader = new FileReader();

        reader.onload = (e) => {
          setResumeText(e.target.result);
        };

        reader.readAsText(file);
      }

      else {
        alert("Please upload a PDF or TXT file.");
      }
    } catch (error) {
      console.error("PDF Error:", error);
      alert("Failed to read PDF file.");
    }
  }

  async function analyze() {
    if (!resumeText.trim()) {
      alert("Please upload or paste a resume.");
      return;
    }

    setLoading(true);

    try {
      const response = await api.analyzeResume({
        resume_text: resumeText,
      });

      setResult(response);
    } catch (error) {
      console.error(error);
      alert("Resume analysis failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <PageHeader
        title="Resume Analyzer"
        subtitle="Upload a PDF/TXT resume or paste resume text to extract skills and career suggestions."
      />

      <div className="space-y-5">
        <section className="card p-5">
          <input
            className="input"
            type="file"
            accept=".pdf,.txt"
            onChange={(e) => readFile(e.target.files[0])}
          />

          <textarea
            className="input mt-4 min-h-56"
            placeholder="Paste resume text here..."
            value={resumeText}
            onChange={(e) => setResumeText(e.target.value)}
          />

          <LoadingButton
            loading={loading}
            className="mt-4"
            onClick={analyze}
            disabled={!resumeText.trim()}
          >
            Analyze Resume
          </LoadingButton>
        </section>

        <ResumeResultCard result={result} />
      </div>
    </>
  );
}