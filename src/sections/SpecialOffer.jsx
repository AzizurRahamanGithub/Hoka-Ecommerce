
import {offer} from '../assets/images';
import {Button} from '../components';
import {arrowRight} from '../assets/icons';
const SpecialOffer = () => {
  return (
 
      <section id="" className='max-container mt-16'>
        <div className=" flex items-center lg:flex-row flex-col-reverse gap-14">
                  <img src={offer} className='object-center  max-w-[770px] xl:max-w-[600px] lg:max-w-[500px] w-full' alt="Offer and Promotion" />

           <div className="flex flex-col justify-center items-start">
            <h2 className='text-4xl font-semibold font'> <span className='text-[#0083BF]'>Special </span> Offer</h2>
            <p className='mt-5 text-slate-gray font-montserrat'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
            <p className='mt-6 text-slate-gray font-montserrat'>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>

           <div className="flex gap-5 mt-10">
            <Button className='' label="Shop Now" iconURL={arrowRight}/>
            <Button className=' border border-spacing-3 border-slate-gray'
             backgroundColor='bg-white'
             label="Learn More"
             borderColor="border-slate-gray"
             />
           </div>


           </div>
 
        </div>


      </section>
  )
}

export default SpecialOffer
