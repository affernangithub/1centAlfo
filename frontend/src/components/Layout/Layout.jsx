const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#121212]">
      <nav className="fixed top-0 w-full bg-[#121212] border-b border-gray-800 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-white">TradeFy</h1>
            <div className="flex space-x-8 text-gray-300">
              <a href="#" className="hover:text-green-500 font-medium">Dashboard</a>
              <a href="#" className="hover:text-green-500 font-medium">Portfolio</a>
              <a href="#" className="hover:text-green-500 font-medium">Trade</a>
              <a href="#" className="hover:text-green-500 font-medium">Markets</a>
            </div>
          </div>
        </div>
      </nav>
      <main className="pt-20 px-6">{children}</main>
    </div>
  )
}

export default Layout