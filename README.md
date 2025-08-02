# AI Resume Analyzer

An intelligent resume analysis platform that provides ATS scoring and personalized feedback to help job seekers optimize their resumes for specific job applications.

## Features

- 📄 **PDF Resume Upload** - Upload and analyze PDF resumes
- 🎯 **ATS Score Analysis** - Get Applicant Tracking System compatibility scores
- 🤖 **AI-Powered Feedback** - Receive intelligent suggestions for resume improvement
- 📊 **Job-Specific Analysis** - Tailor analysis based on company name, job title, and description
- 🔍 **Visual Resume Preview** - Convert PDF to image for visual analysis
- 💾 **Resume Storage** - Save and manage analyzed resumes
- 📱 **Responsive Design** - Works seamlessly across all devices

## Tech Stack

- **Frontend**: React 19 with React Router 7
- **Styling**: TailwindCSS with custom animations
- **PDF Processing**: PDF.js for document handling
- **State Management**: Zustand
- **File Handling**: React Dropzone
- **TypeScript**: Full type safety
- **Build Tool**: Vite

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd AI-Resume-Analyzer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.

## Usage

1. **Upload Resume**: Navigate to the upload page and select a PDF resume
2. **Job Details**: Enter the company name, job title, and job description
3. **Analysis**: The AI will analyze your resume against the job requirements
4. **Results**: View your ATS score and detailed feedback for improvement
5. **Optimize**: Make changes to your resume based on the suggestions

## Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── ATS.tsx         # ATS score display
│   ├── FileUploader.tsx # File upload component
│   ├── ScoreGauge.tsx  # Score visualization
│   └── ...
├── routes/             # Application pages
│   ├── upload.tsx      # Resume upload page
│   ├── resume.tsx      # Analysis results page
│   └── ...
├── lib/                # Utility functions
│   ├── pdf2img.ts      # PDF to image conversion
│   ├── puter.ts        # File storage integration
│   └── utils.ts        # Helper functions
└── types/              # TypeScript definitions
```

## Building for Production

Create a production build:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Type Checking

Run TypeScript type checking:

```bash
npm run typecheck
```

## Docker Deployment

Build and run using Docker:

```bash
docker build -t ai-resume-analyzer .
docker run -p 3000:3000 ai-resume-analyzer
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run type checking and tests
5. Submit a pull request

## License

This project is licensed under the MIT License.

---

Built with ❤️ using React Router and AI technology.
