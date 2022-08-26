"use strict";

import { conf, alias } from "./project.config";
import babel from "rollup-plugin-babel";

export default {
  input: conf.main,
  output: {
    file: conf.dest,
    name: "WaveBell",
    format: "umd",
    sourcemap: true,
  },
  plugins: [alias(), babel()],
};
