import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Sidebar } from './components/dashboard/sidebar';
import { ProductsPage } from './pages/products';
import { OrdersPage } from './pages/orders';
import { BellIcon } from 'lucide-react';
import { Button } from './components/ui/button';
import { DashboardPage } from './pages/dashboard';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-background">
        <div className="w-64 flex-none">
          <Sidebar />
        </div>
        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="h-14 border-b flex items-center justify-between px-6">
            <h1 className="font-bold text-[#007537] text-xl">Kisan Saathi</h1>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <BellIcon className="h-5 w-5" />
              </Button>
              <div className="h-8 w-8 rounded-full bg-primary" />
            </div>
          </header>
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/orders" element={<OrdersPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;