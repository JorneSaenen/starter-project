export default {
  plugins: ["@snowpack/plugin-dotenv"],
  optimize: {
    bundle: true,
    minify: true,
    target: "es2018",
  },
  devOptions: {
    port: 3000,
  },
  buildOptions: {
    out: "dist",
    sourcemap: true,
  },
};
