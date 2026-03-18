"use client";

import { Upload, X, FileText } from "lucide-react";

interface UploadedFile {
  id: string;
  name: string;
  type: string;
  size: string;
}

interface FileUploadZoneProps {
  label?: string;
  files: UploadedFile[];
  onAdd: (file: UploadedFile) => void;
  onRemove: (id: string) => void;
  accept?: string;
  maxSize?: string;
  className?: string;
}

export default function FileUploadZone({
  label,
  files,
  onAdd,
  onRemove,
  accept = "PDF, DICOM, JPG, PNG",
  maxSize = "200MB",
  className,
}: FileUploadZoneProps) {
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    // Mock: create a fake file entry
    const mockFile: UploadedFile = {
      id: `file-${Date.now()}`,
      name: "uploaded-document.pdf",
      type: "application/pdf",
      size: "2.4MB",
    };
    onAdd(mockFile);
  };

  const handleFileInput = () => {
    // Mock: simulate file selection
    const mockFile: UploadedFile = {
      id: `file-${Date.now()}`,
      name: "medical-record.pdf",
      type: "application/pdf",
      size: "1.8MB",
    };
    onAdd(mockFile);
  };

  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-text-primary mb-1.5">{label}</label>
      )}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={handleFileInput}
        className="border-2 border-dashed border-[#E8E8E8] rounded-xl p-6 text-center cursor-pointer hover:border-primary/40 hover:bg-primary-light/30 transition-colors"
      >
        <Upload size={24} className="mx-auto text-text-muted mb-2" />
        <p className="text-sm text-text-secondary">
          파일을 드래그하거나 <span className="text-primary font-medium">클릭하여 업로드</span>
        </p>
        <p className="text-xs text-text-muted mt-1">
          {accept} (최대 {maxSize})
        </p>
      </div>

      {files.length > 0 && (
        <div className="mt-3 flex flex-col gap-2">
          {files.map((file) => (
            <div
              key={file.id}
              className="flex items-center gap-2 px-3 py-2 bg-bg-surface rounded-lg border border-[#E8E8E8]"
            >
              <FileText size={16} className="text-primary shrink-0" />
              <span className="text-sm text-text-primary flex-1 truncate">{file.name}</span>
              <span className="text-xs text-text-muted">{file.size}</span>
              <button
                onClick={(e) => { e.stopPropagation(); onRemove(file.id); }}
                className="text-text-muted hover:text-danger transition-colors"
              >
                <X size={14} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
