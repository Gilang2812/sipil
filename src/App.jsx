import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
function App() {
  const queryClient =new QueryClient()

  return (
    <QueryClientProvider client={queryClient} >
      <Router >
        <Routes >
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
