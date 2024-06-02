
import {services} from '../constants';
import { ServiceCard } from "../components";

const Services = () => {
  return (
    <section id="services" className='max-container'>
      <div className="flex flex-wrap mt-16 gap-10">
           {services.map((service)=>(
            <ServiceCard key={service.label} {...service} />
           ))}
      </div>
    </section>
  )
}

export default Services
