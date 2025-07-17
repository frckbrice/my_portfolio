import React from "react";
import { Header } from "./components/header";
import { Nav } from "./components/nav-bar";
import { ModeToggle } from "./components/toggle-theme";
import { MobileNav } from "../mobile";
import { links } from "@/components/global/share-data/data";

// define Nav bar interface component
const NavInterface = () => <Nav links={links} />;

const MobileNavInterface = () => <MobileNav links={links} />;

function HeaderInterface() {
  return <Header ModeToggle={ModeToggle}
    Nav={NavInterface}
    MobileNav={MobileNavInterface}
    links={links}
  />
}

export {
  HeaderInterface,
  Nav,
  ModeToggle
}