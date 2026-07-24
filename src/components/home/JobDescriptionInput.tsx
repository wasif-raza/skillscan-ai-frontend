interface JobDescriptionInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function JobDescriptionInput({
  value,
  onChange,
}: JobDescriptionInputProps) {
  return (
    <div className="w-full max-w-3xl">
      <textarea
        rows={8}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={`Paste Job Description...

Java Developer
Spring Boot
Docker
AWS
CI/CD
Microservices`}
        className="
          w-full
          rounded-3xl
          border
          border-[var(--border)]
          bg-[var(--card)]
          p-6
          text-[var(--text)]
          placeholder:text-[var(--text-secondary)]
          outline-none
          transition-colors
          focus:border-cyan-500
          focus:ring-2
          focus:ring-cyan-500/20
        "
      />

      <p className="mt-3 text-[var(--text-secondary)]">
        Match Score • Missing Keywords • Skill Gap Detection
      </p>
    </div>
  );
}