"use client";

import { useState, useCallback, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Photo } from "@/lib/types";

export function ImageViewer({
  photos,
  initialIndex = 0,
  onClose,
}: {
  photos: Photo[];
  initialIndex?: number;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? photos.length - 1 : prev - 1));
  }, [photos.length]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === photos.length - 1 ? 0 : prev + 1));
  }, [photos.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, onClose, handleNext, handlePrev]);

  useEffect(() => {
    // Prevent scrolling behind modal
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!photos || photos.length === 0) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 flex flex-col items-center justify-center p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      data-testid="image-viewer-overlay"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/70 p-2 rounded-full transition-all"
        aria-label="닫기"
      >
        <X size={24} />
      </button>

      {/* Main Image View */}
      <div className="relative w-full max-w-5xl aspect-video flex items-center justify-center">
        {photos.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 sm:left-4 z-10 text-white/70 hover:text-white bg-black/50 hover:bg-black/70 p-3 rounded-full transition-all"
            aria-label="이전 이미지"
          >
            <ChevronLeft size={32} />
          </button>
        )}

        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photos[currentIndex].url}
          alt={photos[currentIndex].label}
          className="max-w-full max-h-[85vh] object-contain rounded-lg select-none"
        />

        {photos.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 sm:right-4 z-10 text-white/70 hover:text-white bg-black/50 hover:bg-black/70 p-3 rounded-full transition-all"
            aria-label="다음 이미지"
          >
            <ChevronRight size={32} />
          </button>
        )}
      </div>

      {/* Caption/Label */}
      <div className="mt-4 text-center pb-2">
        <p className="text-white font-medium text-lg">
          {photos[currentIndex].label}
        </p>
        <p className="text-white/60 text-sm mt-1">
          {currentIndex + 1} / {photos.length}
        </p>
      </div>
    </div>
  );
}
