import React from 'react';
import { MapPin, Building2, GraduationCap, Flower2, Building, Train } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Location Overview Section */}
      <div className="container mx-auto px-4 py-12">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-10" style={{ color: '#c95e4e' }}>LOCATION OVERVIEW</h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Description and Amenities */}
          <div className="flex-1 flex flex-col space-y-6">
            {/* Location Description */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-800 text-lg">
                Located in beautiful Mazgaon- rich in legacy and minutes away from the best part of what
                Mumbai has to offer. Experience the serenity of being far away from the hustle & bustle of
                Maximum City while remaining minutes away from the most coveted part of the city, with
                the best of schools, hospitals, business centers & heritage sites around the corner.
              </p>
            </div>
            
            {/* Amenities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Hospitals */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="flex items-center bg-white p-4"> {/* Changed to white */}
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center mr-3">
                    <Building2 className="w-6 h-6 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-800">Hospitals</h3>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-800">Prince Aly Khan Hospital</span>
                    <span className="text-gray-600">850 m (5 min)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-800">J J Hospital</span>
                    <span className="text-gray-600">2.4 km (11 min)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-800">Masina Hospital Trust</span>
                    <span className="text-gray-600">1.2 km (6 min)</span>
                  </div>
                </div>
              </div>
              
              {/* Schools */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="flex items-center bg-white p-4"> {/* Changed to white */}
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center mr-3">
                    <GraduationCap className="w-6 h-6 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-800">Schools</h3>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-800">St. Isabel High School</span>
                    <span className="text-gray-600">350 m (2 min)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-800">St. Mary's School (ICSE)</span>
                    <span className="text-gray-600">900 m (4 min)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-800">St. Peter's School</span>
                    <span className="text-gray-600">500 m (3 min)</span>
                  </div>
                </div>
              </div>
              
              {/* Gardens */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="flex items-center  p-4">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center mr-3">
                    <Flower2 className="w-6 h-6 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-800">Gardens</h3>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-800">Mazgaon Garden</span>
                    <span className="text-gray-600">750 m (4 min)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-800">Veer Mata Jijabai Bhosale Udyan and Zoo</span>
                    <span className="text-gray-600">1.2 km (5 min)</span>
                  </div>
                </div>
              </div>
              
              {/* Offices */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="flex items-center  p-4">
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center mr-3">
                    <Building className="w-6 h-6 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-800">Offices</h3>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-800">Mazgaon Old Post Office</span>
                    <span className="text-gray-600">290 m (2 min)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-800">GST Bhavan</span>
                    <span className="text-gray-600">650 m (3 min)</span>
                  </div>
                </div>
              </div>
              
              {/* Railway Stations */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md md:col-span-2">
                <div className="flex items-center bg-white p-4"> {/* Changed to white */}
                  <div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center mr-3">
                    <Train className="w-6 h-6 text-amber-700" />
                  </div>
                  <h3 className="text-xl font-bold text-amber-800">Railway Stations</h3>
                </div>
                <div className="p-4 space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-800">Byculla Railway Station</span>
                    <span className="text-gray-600">1.6 km (8 min)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-800">Dockyard Railway Station</span>
                    <span className="text-gray-600">1.1 km (5 min)</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Location Details */}
            <div className="bg-white p-6 rounded-lg shadow-md flex items-center space-x-3">
              <MapPin className="w-6 h-6 text-amber-700 flex-shrink-0" />
              <div>
                <div className="font-bold text-gray-800">18°58'17.0"N 72°50'21.0"E</div>
                <div className="text-gray-600 text-sm">XRCQ+HM3 Mumbai, Maharashtra</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Google Map */}
          <div className="lg:w-2/5 h-auto">
            <div className="sticky top-8 bg-white p-3 rounded-lg shadow-md">
              <div className="aspect-square w-full overflow-hidden rounded-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.6693193106396!2d72.8356!3d18.9828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDU4JzE3LjAiTiA3MsKwNTAnMjEuMCJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Google Map Location"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="mt-3 flex items-center justify-center  py-2 px-4 rounded-md">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center mr-2">
                    <MapPin className="w-5 h-5 text-amber-700" />
                  </div>
                  <span className="font-medium text-amber-800">GOOGLE MAP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
