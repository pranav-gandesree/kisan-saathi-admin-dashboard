
import { User, Package, MapPin, Calendar } from 'lucide-react';

function OrderDetails() {
  const orderDetails = {
    orderId: '#47453',
    date: 'Feb 15,2022 - Feb 25,2022',
    status: 'Pending',
    customer: {
      name: 'Tom Riddle',
      email: 'tomriddle@gmail.com',
      phone: '+91 984 231 1214'
    },
    orderInfo: {
      shipment: 'Express',
      paymentMethod: 'COD',
      status: 'Payment Pending'
    },
    deliveryAddress: {
      address: 'Address: Narsingipally, Hyderabad'
    },
    paymentInfo: {
      method: 'Cash On Delivery',
      phone: '+91 984 231 1214'
    },
    products: [
      { id: '#15421', name: 'Product One', quantity: 2, total: 890.40 },
      { id: '#15421', name: 'Product Two', quantity: 2, total: 890.40 },
      { id: '#15421', name: 'Product Three', quantity: 2, total: 890.40 },
      { id: '#15421', name: 'Product Four', quantity: 2, total: 890.40 }
    ],
    summary: {
      subtotal: 3561.60,
      tax: 280.32,
      discount: 0,
      shipping: 0,
      total: 3841.92
    }
  };

  return (
    <div className="h-screen bg-gray-50 overflow-auto">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-2xl font-semibold text-gray-800">Orders Details</h1>
              <p className="text-sm text-gray-500">Home  Order List  Order Details</p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 text-gray-400 hover:text-gray-600">
                <Calendar className="h-5 w-5" />
              </button>
              <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                <option>Change Status</option>
                <option>Processing</option>
                <option>Shipped</option>
                <option>Delivered</option>
              </select>
              <button className="px-4 py-2 text-white bg-green-600 rounded-md hover:bg-green-700">
                Save
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className="bg-gray-200 p-2 rounded-lg mr-3">
                    <User className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Customer</h3>
                    <p className="text-sm text-gray-600">{orderDetails.customer.name}</p>
                    <p className="text-sm text-gray-600">{orderDetails.customer.email}</p>
                    <p className="text-sm text-gray-600">{orderDetails.customer.phone}</p>
                  </div>
                </div>
                <button className="text-green-600 text-sm hover:text-green-700">
                  View profile
                </button>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className="bg-gray-200 p-2 rounded-lg mr-3">
                    <Package className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Order Info</h3>
                    <p className="text-sm text-gray-600">Shipment: {orderDetails.orderInfo.shipment}</p>
                    <p className="text-sm text-gray-600">Payment Method: {orderDetails.orderInfo.paymentMethod}</p>
                    <p className="text-sm text-gray-600">Status: {orderDetails.orderInfo.status}</p>
                  </div>
                </div>
                <button className="text-green-600 text-sm hover:text-green-700">
                  Download Info
                </button>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex items-start justify-between">
                <div className="flex items-center">
                  <div className="bg-gray-200 p-2 rounded-lg mr-3">
                    <MapPin className="h-5 w-5 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">Deliver to</h3>
                    <p className="text-sm text-gray-600">{orderDetails.deliveryAddress.address}</p>
                  </div>
                </div>
                <button className="text-green-600 text-sm hover:text-green-700">
                  View profile
                </button>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Payment Info</h3>
              <p className="text-sm text-gray-600">{orderDetails.paymentInfo.method}</p>
              <p className="text-sm text-gray-600">Phone: {orderDetails.paymentInfo.phone}</p>
            </div>
          </div>

          <div className="mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Note</h3>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                rows={3}
                placeholder="Type some notes"
              />
            </div>
          </div>

          <div className="bg-white rounded-lg">
            <h3 className="font-medium mb-4">Products</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Product Name
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Order ID
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {orderDetails.products.map((product, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-10 w-10 bg-gray-200 rounded-md mr-3"></div>
                          <div className="text-sm text-gray-900">{product.name}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {product.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {product.quantity}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        ₹{product.total.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="border-t border-gray-200 mt-4 pt-4">
              <div className="flex justify-end">
                <div className="w-64 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">₹{orderDetails.summary.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tax (20%)</span>
                    <span className="font-medium">₹{orderDetails.summary.tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Discount</span>
                    <span className="font-medium">₹{orderDetails.summary.discount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Shipping Fee</span>
                    <span className="font-medium">₹{orderDetails.summary.shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-medium pt-2 border-t">
                    <span>Total</span>
                    <span>₹{orderDetails.summary.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;