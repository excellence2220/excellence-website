"use client";

import { Timeline } from "flowbite-react";
import { GiTeacher } from "react-icons/gi";
function Information() {
  return (
    <div className="flex h-[125vh] py-[50px] px-[100px]">
      <img src="/assets/4.jpg" className="h-[106vh] w-[50%]" alt="" />
      <div>
        <Timeline>
          <div className="my-5 mx-10">
            <h2 className="text-xl text-cyan-500 font-semibold">
              LEARN ANYTHING
            </h2>
            <h1 className="text-4xl font-bold">
              Benefits About Online Learning Expertise
            </h1>
          </div>
          <Timeline.Item className="bg-slate-100 px-10 py-2 hover:bg-slate-200">
            <Timeline.Content className="flex gap-2">
              <img src="/assets/teacher.svg" alt="" />
              <span>
                <Timeline.Title>
                  Application UI code in Tailwind CSS
                </Timeline.Title>
                <Timeline.Body>
                  Get access to over 20+ pages including a dashboard layout,
                  charts, kanban board, calendar, and pre-order E-commerce &
                  Marketing pages.
                </Timeline.Body>
              </span>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item className="bg-slate-100 px-10 py-2 hover:bg-slate-200">
            <Timeline.Content className="flex gap-2">
              <img src="/assets/certificate.svg" alt="" />
              <span>
                <Timeline.Title>Marketing UI design in Figma</Timeline.Title>
                <Timeline.Body>
                  All of the pages and components are first designed in Figma
                  and we keep a parity between the two versions even as we
                  update the project.
                </Timeline.Body>
              </span>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item className="bg-slate-100 px-10 py-2 hover:bg-slate-200">
            <Timeline.Content className="flex gap-2">
              <img src="/assets/teacher.svg" alt="" />
              <span>
                <Timeline.Title>
                  E-Commerce UI code in Tailwind CSS
                </Timeline.Title>
                <Timeline.Body>
                  Get started with dozens of web components and interactive
                  elements built on top of Tailwind CSS.
                </Timeline.Body>
              </span>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
}

export default Information;
