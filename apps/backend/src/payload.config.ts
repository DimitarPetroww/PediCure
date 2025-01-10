import path from "path";

import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { webpackBundler } from "@payloadcms/bundler-webpack";
import { slateEditor } from "@payloadcms/richtext-slate";
import { buildConfig } from "payload/config";

// Collections

import Pages from "./collections/Pages";
import Media from "./collections/Media";

export default buildConfig({
  admin: {
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Pages, Media],
  typescript: {
    outputFile: path.resolve(__dirname, "../../../packages/types/payload-types.ts"),
    declare: false,
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "../../../packages/graphql/generated-schema.graphql"),
  },
  upload: {
    limits: {
      fileSize: 10000000, // 10MB
    },
  },
  plugins: [],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
});
