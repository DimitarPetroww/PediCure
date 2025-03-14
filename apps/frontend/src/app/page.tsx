import React from "react";

import Block from "@/components/Block/Block";
import { getPage, PageResponse } from "@/lib/pages";

export default async function HomePage() {
  const { data }: PageResponse = await getPage('home');

  return (
    <div>
      {data[0].blocks?.map((block, i) =>
        <>
          <Block {...block} key={block?.id} />
          {i !== 0 && i !== data[0].blocks.length - 1 && <div className="break-line"></div>}
        </>
      )}
    </div>
  );
}
