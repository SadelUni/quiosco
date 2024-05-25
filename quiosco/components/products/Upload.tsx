"use client";
import { useState } from "react";
import { CldUploadWidget } from "next-cloudinary";
import { TbPhotoPlus } from "react-icons/tb";
import Image from "next/image";
import { getImagePath } from "@/src/utils";

export default function Upload({ image }: { image?: string}) {
  const [imageUrl, setImageUrl] = useState<string>("");

  return (
    <CldUploadWidget
      onSuccess={(response, { widget }) => {
        if (response.event === "success") {
          widget.close();
          // @ts-ignore
          setImageUrl(response.info.secure_url);
        }
      }}
      uploadPreset="cen698e9"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => (
        <>
          <div className="space-y-2">
            <label className="text-slate-800">Subir imagen</label>
            <div
              className="relative cursor-pointer hover:opacity-70 transition p-10 border-neutral-300 flex flex-col jusitfy-center items-center gap-4 text-neutral-600 bg-slate-100"
              onClick={() => open()}
            >
              <TbPhotoPlus size={50} />
              <p className="text-lg font-semibold text-blue-500 cursor-pointer hover:text-blue-600">
                Agregar Imagen
              </p>
              {imageUrl && (
                <div className="absolute inset-0 w-full h-full">
                  <Image
                    fill
                    src={imageUrl}
                    alt="Imagen"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              )}
            </div>
            
          </div>
          {image &&  !imageUrl && (
            <div
            className="space-y-2"

            >
              <label >
                Imagen actual:
              </label>
              <div
              className="relative w-64 h-64"
              >
                <Image
                fill
                  src={getImagePath(image)}
                  alt="Imagen"
                />
              </div>

            </div>
          )}



          <input type="hidden" name="imageUrl" defaultValue={imageUrl ? imageUrl : image} />
        </>
      )}
    </CldUploadWidget>
  );
}
