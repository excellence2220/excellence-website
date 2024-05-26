
"use client";

import { Footer } from "flowbite-react";

export function FooterComponent() {
  return (
    <Footer container>
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
          <Footer.Brand
            href="excellence Learning Center"
            src="/logo.svg"
            alt="Flowbite Logo"
            name="Excellence Learning Centre"
          />
          <Footer.LinkGroup>
            <Footer.Link href="/about-us">About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link href="/contact-us">Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright by="Excellence Learning Centre" year={2024} />
      </div>
    </Footer>
  );
}
