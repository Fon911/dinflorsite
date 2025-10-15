import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

// можешь указать иконку из public
export default function Icon() {
  return new ImageResponse(
    (
      // можно использовать локальную картинку
      <img src="/favicon.ico" width={32} height={32} alt="favicon" />
    ),
    {
      ...size,
    }
  );
}
