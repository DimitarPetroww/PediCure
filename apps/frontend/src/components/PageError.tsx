"use client";

import React from "react";

interface Props {
  message: string;
  className?: string;
  title?: string;
  retryCallback?: (() => void) | string;
}

export default function PageError(props: Props) {
  const { message, className = "", title = "Error", retryCallback } = props;

  return (
    <div>
      {title}
    </div>
  );
}