import Header from "./components/header"

import NotificationButton from "./components/NotificationButton"
import SalesCard from "./components/SalesCard"
function App(): JSX.Element {

  return (
    <>
      <Header></Header>
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div >
        </section >
      </main >

    </>
  )
}

export default App
