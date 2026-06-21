function SideElements() {
  return (
    <>
      <aside className="side-element side-element-left" aria-label="Social links">
        <a href="https://www.facebook.com/thememoti/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/timothyjeromeferaro/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6.94 8.98H3.74V20h3.2V8.98ZM5.34 4a1.86 1.86 0 1 0 0 3.72A1.86 1.86 0 0 0 5.34 4Zm6.8 4.98H9.07V20h3.2v-5.78c0-1.52.29-3 2.18-3 1.86 0 1.88 1.74 1.88 3.1V20h3.2v-6.4c0-3.14-.67-5.56-4.35-5.56-1.76 0-2.94.97-3.43 1.88h-.04l-.01-.94h-3.06V20h3.2V14.54c0-1.44.27-2.83 2.05-2.83 1.76 0 1.79 1.64 1.79 2.92V20h3.2v-6.08c0-2.98-.64-5.27-4.12-5.27-1.67 0-2.79.92-3.24 1.79h-.04V8.98h-3.04Z" />
          </svg>
        </a>
        <a href="https://github.com/TinyTheme" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.04 1.53 1.04.89 1.52 2.34 1.08 2.9.83.1-.65.35-1.08.64-1.33-2.22-.25-4.55-1.1-4.55-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.4 9.4 0 0 1 12 7.03c.85 0 1.7.11 2.5.34 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.86V21c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
          </svg>
        </a>
      </aside>

      <aside className="side-element side-element-right" aria-label="Email">
        <a href="mailto:timothyferaro@email.com">timothyferaro@email.com</a>
      </aside>
    </>
  );
}

export default SideElements;
