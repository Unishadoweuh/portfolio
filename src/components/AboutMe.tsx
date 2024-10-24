import { Component } from "solid-js";
import { A } from "@solidjs/router";

export const AboutMe: Component = () => {
  return (
    <>
      <div class="flex flex-row gap-4">
        <div class="w-5/6 text-justify">
          <p>
            Hey! I'm Grégoire Launay--Bécue. I'm a passionate developer who
            loves creating new things and learning new technologies. I'm always
            involved in a ton of projects and looking for new challenges.
          </p>

          <p>
            Currently, I'm studying at the{" "}
            <A
              class="link text-blue hover:text-blue-active"
              href="https://www.univ-lille.fr/"
            >
              University of Lille
            </A>{" "}
            in France to obtain a Bachelor's degree in Computer Science. My goal
            is to achieve a Master's degree in Computer Science and perhaps even
            a PhD.
          </p>
          <br />
          <p>
            I started coding in <span class="date">2018</span> at the age of 14
            with C++ on Arduino. A few months later, I started to learn 3D
            modeling with{" "}
            <A
              class="link text-blue hover:text-blue-active"
              href="https://www.sketchup.com/"
            >
              Google Sketchup
            </A>
            , and then{" "}
            <A
              class="link text-blue hover:text-blue-active"
              href="https://www.autodesk.com/products/fusion-360/overview"
            >
              Fusion 360
            </A>{" "}
            for 3D printing components for my DIY electronic projects. These
            were open source and posted on my{" "}
            <A
              class="link text-blue hover:text-blue-active"
              href="https://cults3d.com/en/users/Linventif"
            >
              Cults3D
            </A>{" "}
            page. In <span class="date">2020</span>, I started to learn Source
            Engine Mapping for Garry's Mod. I created my first Gmod server in{" "}
            <span class="date">2021</span>, and I started to learn Lua to create
            open-source addons for my server in <span class="date">2022</span>.
            All my public content is available on my{" "}
            <A
              class="link text-blue hover:text-blue-active"
              href="https://aide-serveur.fr/members/linventif.157100/#resources"
            >
              Aide Serveur
            </A>
            ,{" "}
            <A
              class="link text-blue hover:text-blue-active"
              href="https://steamcommunity.com/id/linventif/myworkshopfiles/"
            >
              Steam Workshop
            </A>
            , and my{" "}
            <A
              class="link text-blue hover:text-blue-active"
              href="https://github.com/linventif?tab=repositories"
            >
              GitHub
            </A>
            . From <span class="date">2023</span> to now, I've been focusing on
            learning DiscordJS and Web Development to create my own SaaS,{" "}
            <A
              class="link text-blue hover:text-blue-active"
              href="https://gmod-integration.com"
            >
              Gmod Integration
            </A>
            , to address a problem I encountered on my Garry's Mod server: how
            to create an interconnection between my server and my Discord
            community.
          </p>
          <br />

          <p>
            When I'm not coding, I'm at the climbing gym. I'm a High-Level
            Climber, and I compete in numerous competitions. I began climbing at
            the age of 7 and started competing in <span class="date">2015</span>
            . For me, climbing is a way to relax and push my limits.
          </p>
        </div>

        <div class="flex justify-center items-center w-2/4">
          <img
            alt="picture_of_me"
            src="/plecunff.png"
            class="w-3/6 rounded-[25%] shadow-lg"
          />
        </div>
      </div>
    </>
  );
};
