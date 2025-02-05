"use client";

import Image from "next/image";
import React from "react";
import { CircleX } from "lucide-react";

interface SingleImageEditorProps {
  imageUrl: string;
  onClose: () => void;
}

const SingleImageEditor: React.FC<SingleImageEditorProps> = ({
  imageUrl,
  onClose,
}) => {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
      onClick={onClose}
    >
      <div className="relative">
        <Image
          src={imageUrl}
          alt="Selected"
          width={800}
          height={600}
          className="rounded-lg w-full h-screen object-contain"
        />
        <button
          className="absolute top-2 right-2 text-primary text-3xl"
          onClick={onClose}
        >
          <CircleX />
        </button>
      </div>
    </div>
  );
};

export default SingleImageEditor;
