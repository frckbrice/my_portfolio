import { Header } from "./components/header";
import { Nav } from "./components/nav-bar";
import { ModeToggle } from "./components/toggle-theme";
import { MobileNav } from "../mobile";
import { links } from "@/components/global/share-data/data";



function HeaderInterface() {
  return <Header ModeToggle={ModeToggle} Nav={Nav} MobileNav={MobileNav} links={links} />
}

export {
  HeaderInterface,
  Nav,
  ModeToggle
}