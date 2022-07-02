/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import { tw } from "@twind";

interface FooterProps {
  version: number;
}

export default function Version(props: FooterProps) {
  const [version, setVersion] = useState(props.version);
  const btn = tw`px-2 py-1 border(gray-100 1) hover:bg-gray-200`;
  return (
    <div class={tw`flex gap-2 w-full`}>
      <p class={tw`flex-grow-1 font-bold text-xl`}>{version}</p>
      <button
        class={btn}
        onClick={() => setVersion(version - 1)}
        disabled={!IS_BROWSER}
      >
        -1
      </button>
      <button
        class={btn}
        onClick={() => setVersion(version + 1)}
        disabled={!IS_BROWSER}
      >
        +1
      </button>
    </div>
  );
}
