"use client";
import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/image";
import React, { useState } from "react";

const BlurImage = ({
  src,
  alt,
  width,
  height,
  className,
  ...rest
}: ImageProps) => {
  const [loading, setLoading] = useState(true);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading="lazy"
      blurDataURL={typeof src === "string" ? src : undefined}
      onLoad={() => setLoading(false)}
      decoding="async"
      className={cn(
        "transition duration-300",
        loading ? "blur-sm" : "blur-0",
        className
      )}
      {...rest}
    />
  );
};

export default BlurImage;
