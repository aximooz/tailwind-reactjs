import React from 'react';
import { Link  } from 'react-router-dom';   
const signUp = () => {
  return (
    <div>
      <section class="relative py-6 bg-gray-100 sm:py-8 lg:py-12 ">
        <div class="relative max-w-md px-4 mx-auto my-12">
          <div class="overflow-hidden bg-white rounded-md shadow-lg"> {/* Added shadow-lg for a more prominent box shadow */}
            <div class="px-4 py-5 sm:px-6 sm:py-6">
              <div class="text-center">
                <h2 class="text-2xl font-bold text-gray-900">Create an account</h2>
                <p class="mt-1 text-sm text-gray-600">Already joined? <a href="#" title="" class="text-blue-600 hover:underline">Sign in now</a></p>
              </div>

              <div   class="mt-6">
                <div class="space-y-4">
                  <div>
                    <label for="" class="text-sm font-medium text-gray-900">First & Last name</label>
                    <div class="mt-1.5">
                      <input type="text" name="" id="" placeholder="Enter your full name" class="block w-full p-3 text-black bg-white border border-gray-200 rounded-md focus:border-blue-600" />
                    </div>
                  </div>

                  <div>
                    <label for="" class="text-sm font-medium text-gray-900">Email address</label>
                    <div class="mt-1.5">
                      <input type="email" name="" id="" placeholder="Enter email to get started" class="block w-full p-3 text-black bg-white border border-gray-200 rounded-md focus:border-blue-600" />
                    </div>
                  </div>

                  <div>
                    <label for="" class="text-sm font-medium text-gray-900">Password</label>
                    <div class="mt-1.5">
                      <input type="password" name="" id="" placeholder="Enter your password" class="block w-full p-3 text-black bg-white border border-gray-200 rounded-md focus:border-blue-600" />
                    </div>
                  </div>

                  <Link to={'/Login'}>
                    <button type="submit" class="w-full px-4 py-3 text-sm font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700">Sign up</button>
                  </Link>

                  <Link to={'/Login'}>
                    <button type="button" class="relative w-full px-4 py-3 text-sm font-semibold text-gray-700 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100">
                      <div class="absolute inset-y-0 left-0 p-3">
                        <svg class="w-5 h-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                        </svg>
                      </div>
                      Sign up with Google
                    </button>
                  </Link>
                </div>
              </div>

              <p class="max-w-xs mx-auto mt-4 text-xs text-center text-gray-600">
                This site is protected by reCAPTCHA and the Google <a href="#" title="" class="text-blue-600 hover:underline">Privacy Policy</a> & <a href="#" title="" class="text-blue-600 hover:underline">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default signUp;
