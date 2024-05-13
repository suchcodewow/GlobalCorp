import { DataInteractive as HeadlessDataInteractive } from "@headlessui/react";
import React from "react";
import NextLink from "next/link";

export const Link = React.forwardRef(function Link(props, ref) {
  return (
    <HeadlessDataInteractive>
      {/* <a {...props} ref={ref} /> */}
      <NextLink {...props} ref={ref} />
    </HeadlessDataInteractive>
  );
});
