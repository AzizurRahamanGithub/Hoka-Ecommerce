
import hoka from '../assets/icons/footer-hoka.png';
import {twitter,copyrightSign,facebook,instagram} from '../assets/icons';

const Footer = () => {
  return (
     <section className='max-container '>

      <div className="flex gap-28 max-lg:flex-col">
        <div className="">
          <img src={hoka} alt="HOKA footer logo" className=' w-24' />
          <p className=' text-gray-300 w-full md:max-w-[400px] mt-4'>Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</p>
          <div className="flex mt-7 gap-6" >
            <img src={twitter} alt="" className=' w-10 rounded-full p-2 bg-white' />
            <img src={facebook} alt="" className=' w-10 rounded-full p-2 bg-white' />
            <img src={instagram} alt="" className=' w-10 rounded-full p-2 bg-white' />
          </div>
        </div>

         <div className=" flex justify-between w-full flex-1 flex-wrap lg:gap-10 gap-y-10 gap-x-20">

          <div className="">
            <h3 className='text-white text-3xl font-palanquin font-semibold'>Products</h3>
            <ul className='text-gray-300 mt-4 flex flex-col gap-2 '>
            
              <li><a href="" className='hover:text-white duration-100'>Air Force 1</a></li>
              <li><a className='hover:text-white duration-100' href="">Air Max 1</a></li>
              <li><a className='hover:text-white duration-100' href="">Air Jordan 1</a></li>
              <li><a className='hover:text-white duration-100' href="">Air Force 2</a></li>
              <li><a className='hover:text-white duration-100' href="">Nike Waffle Racer</a></li>
              <li><a className='hover:text-white duration-100' href="">Nike Cortez</a></li>
          </ul>
          </div>

          <div className=" ">
            <h3 className='text-white text-3xl font-palanquin font-semibold'>Help</h3>
            <ul className='text-gray-300 mt-4 flex flex-col gap-2 '>
            
              <li><a href="" className='hover:text-white duration-100'>About us</a></li>
              <li><a className='hover:text-white duration-100' href="">FAQs</a></li>
              <li><a className='hover:text-white duration-100' href="">How it works</a></li>
              <li><a className='hover:text-white duration-100' href="">Privacy policy</a></li>
              <li><a className='hover:text-white duration-100' href="">Payment policy </a></li>
          </ul>
          </div>

          <div className=" ">
            <h3 className='text-white text-3xl font-palanquin font-semibold'>Get in touch</h3>
            <ul className='text-gray-300 mt-4 flex flex-col gap-2 '>
            
              <li><a href="" className='hover:text-white duration-100'>customer@nike.com</a></li>
              <li><a className='hover:text-white duration-100' href="">+92554862354</a></li>
          </ul>
          </div>
         </div>

      </div>

      <div className="flex justify-between items-center mt-24">
        <div className="flex gap-5">
          <a href=""><img src={copyrightSign} alt="copyrightSign" /></a>
          <a className='text-gray-300 cursor-pointer'>Copyright. All rights reserved.</a>
        </div>
        <a className='text-gray-300 cursor-pointer'>Terms & Conditions</a>
      </div>

     </section>
  )
}

export default Footer
