import React, { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";

interface DropImageInputProps {
  onImageDrop?: (file: File) => void;
  value?: string;
}

const DropImageInput: React.FC<DropImageInputProps> = ({
  onImageDrop,
  value,
  ...props
}) => {
  const [preview, setPreview] = useState<string | null>(value || null);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        console.log(file);

        // Set preview URL for image
        const previewUrl = URL.createObjectURL(file);
        setPreview(previewUrl);

        // Pass file to parent component if needed
        if (onImageDrop) onImageDrop(file);
      }
    },
    [onImageDrop]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  // Clean up the object URL on component unmount
  useEffect(() => {
    return () => {
      if (preview) URL.revokeObjectURL(preview);
    };
  }, [preview]);

  return (
    <div className="w-full flex flex-col gap-2">
      <div
        {...getRootProps()}
        className={`text-gray-400 border-2 border-dashed border-gray-300 rounded-lg p-2 text-center ${
          isDragActive ? "bg-gray-100" : "bg-white"
        }`}
      >
        <input {...getInputProps()} {...props} />
        {isDragActive ? (
          <p>Drop the image here...</p>
        ) : (
          <p>Drag & drop an image, or click to select one</p>
        )}
        {/* Image Preview */}
      </div>{" "}
      {preview && (
        <div className="p-2 border border-gray-300 w-14 h-14 rounded">
          <img
            src={preview}
            alt="Preview"
            className="w-full h-full rounded-lg object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default DropImageInput;
