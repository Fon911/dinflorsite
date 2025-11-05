/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export", // 👈 Включает статическую сборку
  images: {
    unoptimized: true, // 👈 Чтобы работали картинки без Next Image Optimization
  },
};

export default nextConfig;
