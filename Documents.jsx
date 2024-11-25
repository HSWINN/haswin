function Documents() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold mb-8">Documents & Survey</h1>
      
      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Team Survey</h2>
        <p className="mb-4">Please take a moment to complete our survey. Your feedback is valuable to us!</p>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfNxsfSDDnEHJ_zn1LgmzPwNmkuqSGGEYOBHYUs5m_9xHQJkA/viewform?embedded=true"
          className="w-full h-[600px]"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading survey...
        </iframe>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4">Survey Results</h2>
        <p className="mb-4">View our analyzed survey results in the PDF document below:</p>
        <a
          href="https://drive.google.com/file/d/1example-file-id/view"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Download Survey Results PDF
        </a>
      </section>
    </div>
  );
}