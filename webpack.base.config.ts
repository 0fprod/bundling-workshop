import webpack from "webpack";
import path from "path";

const config: webpack.Configuration = {
  context: path.join(__dirname, "src")
}

export default config;