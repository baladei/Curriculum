import { About } from "./About"
import { Projects } from "./Projects"
import { Tecnologies } from "./Tecnologies"

import "../styles/components/maincontent.sass"

export const MainContent = () => {
  return (
    <main id="main-content">
      <About />
      <Tecnologies />
      <Projects />
    </main>
  )
}
