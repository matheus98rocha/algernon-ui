"use client";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <div>
      <Link href="/" passHref>
        Home
      </Link>
    </div>
  );
}

export default NotFound;
