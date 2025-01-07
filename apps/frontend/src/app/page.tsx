import { getPage } from "@/lib/pages/pages";
import React from "react";

export default async function HomePage() {
  const data = await getPage('home');

  console.log(data[0].blocks[0].heading)

  return (
    <div>
      ti eba maikata
    </div>
  );
}
