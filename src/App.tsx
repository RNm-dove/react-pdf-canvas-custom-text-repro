import { PDFViewer } from '@react-pdf/renderer'

import { MyDocument } from './MyDocument'

function App() {
  return (
    <PDFViewer
      style={{ width: '100%', height: 800 }}
    >
      <MyDocument />
    </PDFViewer>
  )
}

export default App
