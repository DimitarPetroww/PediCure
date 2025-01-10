import React from "react";

import Block from "@/components/Block/Block";
import { getPage, PageResponse } from "@/lib/pages";

export default async function HomePage() {
  const { data }: PageResponse = await getPage('home');

  console.log(data[0].blocks[0]);

  return (
    <div>
      {data[0].blocks?.map(block => 
        <Block {...block} key={block?.id}/>
      )}
    </div>
  );
}
