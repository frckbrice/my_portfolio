import { Header } from "./components/header";
import { Nav } from "./components/nav-bar";
import { ModeToggle } from "./components/toggle-theme";


function HeaderInterface() {
  return <Header ModeToggle={ModeToggle} Nav={Nav} />
}

export {
  HeaderInterface,
  Nav,
  ModeToggle
}