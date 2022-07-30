import { BrowserRouter, Routes, Route } from "react-router-dom"
import GetImages from "./GetImages"

export default function App() {
  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GetImages />}></Route>
 */}
        </Routes>
      </BrowserRouter>
    </>
  )
}
