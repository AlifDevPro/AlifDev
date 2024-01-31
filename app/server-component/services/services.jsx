import './services.css'
import Service from './service/service'
import SectionHeading from '../section-heading/section-heading'
import {servicesData} from './servicesData'
import bg from '../../../public/asset/bg-services.svg'
import Image from 'next/image'

function Services() {
  return (
    <div className='services' id='services'>
        <Image className="serviceBg" src={bg} alt='servicebg' width='100' height='100'/>
        <div className='container'>
        <div className="header flex flex-col gap-4 items-center justify-center py-16">
            <h2 className="text-5xl font-semibold text-slate-800">Here are our various services</h2>
            <p className="text-gray-600 font0-medium text-base">Here is list of my top skils and expertise</p>
        </div>
            <div className='serviceWrapper'>
            {servicesData.map((service, index) => {
              return (<Service 
              key={index}
              id={index}
              logo={service.logo}
              title={service.title}
              desc={service.desc}
              />
              )
            })}
            </div>
        </div>
    </div>
  )
}

export default Services