import React from 'react'

const Footer = () => {
  return (
<div className="pt-6 ">
            <div className="w-full bg-gray-900 text-gray-300 font-semibold py-6">
                <div className="container mx-auto xl:flex text-center xl:text-left lg:text-left">
                    <div className="xl:w-3/6 sm:w-full lg:w-full text-center xl:text-left mb-6 xl:mb-0">
                        <p className=" sm:text-center lg:text-center xl:text-left hover:text-white"><i class="far fa-copyright"/> David J Forer. All Rights Reserved</p>
                    </div>
                    <div className="xl:w-3/6 sm:w-full ">
                        <ul className="xl:flex lg:flex md:flex sm:flex justify-around">
                            <li className="hover:text-white mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
                                <a href="javascript:void(0)">Terms of Service</a>
                            </li>
                            <li className="hover:text-white mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
                                <a href="javascript:void(0)">Privacy Policy</a>
                            </li>
                            <li className="hover:text-white mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
                                <a href="javascript:void(0)">Security</a>
                            </li>
                            <li className="hover:text-white mb-3 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
                                <a href="javascript:void(0)">Sitemap</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>


  
  )
}

export default Footer
