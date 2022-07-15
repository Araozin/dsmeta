import Header from "./components/header"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotificationButton from "./components/NotificationButton"
import SalesCard from "./components/SalesCard"
function App(): JSX.Element {

  return (
    <>
    <ToastContainer/>
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
