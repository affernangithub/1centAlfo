import { useState } from 'react'
import Layout from './components/Layout/Layout'
import { LineChart, Line, ResponsiveContainer } from 'recharts'

function App() {
  const [balance, setBalance] = useState(10000.00)
  
  // Mock data for the chart
  const data = Array.from({ length: 20 }, (_, i) => ({
    value: 10000 + Math.random() * 2000 - 1000
  }))

  return (
    <Layout>
      <div className="text-white max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Welcome back, Trader</h1>
          <p className="text-gray-400">Your portfolio is performing well today</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-8 space-y-6">
            {/* Portfolio Chart Card */}
            <div className="bg-gray-900 rounded-xl p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold">Portfolio Value</h2>
                  <div className="text-4xl font-bold text-green-500 mt-2">${balance.toLocaleString()}</div>
                  <div className="text-green-500">+$420.69 (4.20%)</div>
                </div>
                <div className="space-x-2">
                  <button className="px-4 py-2 bg-gray-800 rounded-full text-sm">1D</button>
                  <button className="px-4 py-2 bg-gray-800 rounded-full text-sm">1W</button>
                  <button className="px-4 py-2 bg-green-500 rounded-full text-sm">1M</button>
                  <button className="px-4 py-2 bg-gray-800 rounded-full text-sm">1Y</button>
                </div>
              </div>
              <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <Line 
                      type="monotone" 
                      dataKey="value" 
                      stroke="#22c55e" 
                      strokeWidth={2} 
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Popular Stocks */}
            <div className="bg-gray-900 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Popular Stocks</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['AAPL', 'TSLA', 'GOOGL', 'MSFT'].map(stock => (
                  <div key={stock} className="flex items-center p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors cursor-pointer">
                    <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center mr-4">
                      {stock.charAt(0)}
                    </div>
                    <div className="flex-grow">
                      <div className="font-bold">{stock}</div>
                      <div className="text-gray-400">Technology</div>
                    </div>
                    <div>
                      <div className="text-right font-bold">$150.25</div>
                      <div className="text-green-500 text-sm">+2.4%</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Right Side */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Actions */}
            <div className="bg-gray-900 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-full transition-colors">
                  Buy Stock
                </button>
                <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-full transition-colors">
                  Sell Stock
                </button>
                <button className="w-full bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-full transition-colors">
                  Deposit Funds
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-gray-900 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {[
                  { action: 'Bought AAPL', amount: '+10 shares', time: '2h ago', type: 'buy' },
                  { action: 'Sold TSLA', amount: '-5 shares', time: '5h ago', type: 'sell' },
                  { action: 'Deposit', amount: '+$1,000.00', time: '1d ago', type: 'deposit' }
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
                    <div className="flex items-center">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-3 ${
                        activity.type === 'buy' ? 'bg-green-500/20 text-green-500' :
                        activity.type === 'sell' ? 'bg-red-500/20 text-red-500' :
                        'bg-blue-500/20 text-blue-500'
                      }`}>
                        {activity.type === 'buy' ? '↑' : activity.type === 'sell' ? '↓' : '$'}
                      </div>
                      <div>
                        <div className="font-medium">{activity.action}</div>
                        <div className="text-sm text-gray-400">{activity.amount}</div>
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">{activity.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default App