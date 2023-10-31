import path from "path";

const config = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
      "@components": path.resolve(__dirname, "src/components/"),
      "@assets": path.resolve(__dirname, "src/assets/"),
      "@context": path.resolve(__dirname, "src/context/"),
      "@data": path.resolve(__dirname, "src/data/"),
      "@hook": path.resolve(__dirname, "src/hook/"),
      "@routes": path.resolve(__dirname, "src/routes/"),
      "@store": path.resolve(__dirname, "src/store/"),
      "@styles": path.resolve(__dirname, "src/styles/"),
      "@theme": path.resolve(__dirname, "src/theme/"),
      "@typings": path.resolve(__dirname, "src/types/"),
      "@utils": path.resolve(__dirname, "src/utils/"),
    },
  },
};

export default config;
