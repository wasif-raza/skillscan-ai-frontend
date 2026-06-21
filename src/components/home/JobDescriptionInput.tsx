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
        onChange={(e) =>
          onChange(e.target.value)
        }
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
          border-purple-400/20
          bg-white/5
          p-6
          outline-none
        "
      />

      <p className="mt-3 text-slate-400">
        Match Score • Missing Keywords •
        Skill Gap Detection
      </p>
    </div>
  );
}