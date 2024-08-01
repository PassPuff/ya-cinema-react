import Cinemas from "./components/cinemas/components.jsx";
import {cinemas} from "./data/mock.js"
import {LayoutPage} from "./layout/components.jsx";


function App() {

  return (
    <LayoutPage>
      <Cinemas cinemas={cinemas} />
    </LayoutPage>
  )
}

export default App
