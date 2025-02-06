const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black">
      <nav className="bg-black border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold text-white">TradeFy</h1>
            <div className="space-x-6 text-gray-300">
              <a href="#" className="hover:text-green-500">Dashboard</a>
              <a href="#" className="hover:text-green-500">Portfolio</a>
              <a href="#" className="hover:text-green-500">Trade</a>
              <a href="#" className="hover:text-green-500">Markets</a>
            </div>
          </div>
        </div>
      </nav>
      <main className="container mx-auto px-6 py-8">{children}</main>
    </div>
  )
}

export default Layout