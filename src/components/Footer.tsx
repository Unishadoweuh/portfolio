import { Component } from "solid-js";
import { A } from "@solidjs/router";

export const Footer: Component = () => {
  return (
    <>
      <div class="flex flex-shrink-0 flex-col ">
        <hr class="border-[1px] border-primary" />
        <footer class="footer py-4 bg-background text-base-content">
          <div class="flex flex-col">
            <A
              class="font-bold link no-underline text-blue hover:text-blue-active"
              href="/"
            >
              {window.location.hostname}
            </A>
            <p>
              Created with ❤️ by{" "}
              <A href="https://github.com/linventif" class="link">
                Linventif
              </A>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};
