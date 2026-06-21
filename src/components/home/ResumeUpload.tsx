import type {
  DragEvent,
  ChangeEvent,
  RefObject,
} from "react";

interface ResumeUploadProps {
  fileInputRef: RefObject<HTMLInputElement | null>;
  dragActive: boolean;
  selectedFile: File | null;
  onDrop: (
    e: DragEvent<HTMLDivElement>
  ) => void;
  onDragOver: (
    e: DragEvent<HTMLDivElement>
  ) => void;
  onDragLeave: () => void;
  onInputChange: (
    e: ChangeEvent<HTMLInputElement>
  ) => void;
}

export default function ResumeUpload({
  fileInputRef,
  dragActive,
  selectedFile,
  onDrop,
  onDragOver,
  onDragLeave,
  onInputChange,
}: ResumeUploadProps) {
  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        hidden
        accept=".pdf"
        onChange={onInputChange}
      />

      <div
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onClick={() =>
          fileInputRef.current?.click()
        }
        className={`
          w-full
          max-w-3xl
          cursor-pointer
          rounded-3xl
          border-2
          border-dashed
          p-12
          text-center
          backdrop-blur-xl

          ${
            dragActive
              ? `
                border-cyan-400
                bg-cyan-500/10
                scale-105
              `
              : `
                border-white/20
                bg-white/5
              `
          }
        `}
      >
        <h3 className="text-3xl font-bold">
          Upload Resume PDF
        </h3>

        <p className="mt-4 text-slate-400">
          Drag & Drop Resume
        </p>

        <p className="mt-2 text-sm text-slate-500">
          Click to choose file
        </p>

        {selectedFile && (
          <div
            className="
              mt-6
              rounded-2xl
              bg-green-500/10
              px-6
              py-4
              text-green-400
            "
          >
            Selected: {selectedFile.name}
          </div>
        )}
      </div>
    </>
  );
}