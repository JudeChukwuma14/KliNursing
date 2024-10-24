import React from 'react'
import homecare from "../../assets/image/homecare.jpeg"

const ServiceList = ({title, items, text}) => (
  <div className="mb-8 w-full px-4">
    <h3 className='text-xl font-semibold text-gray-800'>{title}</h3>
    <p className='my-4 font-sans text-gray-700'>{text}</p>
    <ul className='text-gray-600 space-y-2 list-inside list-disc ml-4'>{items.map((item, index)=> (
      <li key={index} className='font-sans'>{item}</li>
    ))}</ul>
  </div>
)
const OurServices = () => {
  const skilledNursing = [
    'Medication Management',
    'Wound Care Management',
    'Tube Feeding',
    'Hypertension Management',
    'Infusion Services',
    'Nutrition Education/Counseling',
    'Injection Administration',
    'Tracheotomy Care',
    'Incontinence / Colostomy Care',
    'Ventilator Management',
  ];

  const supportServices = [
    "Client's Laundry",
    'Clean Kitchen/Dishes',
    'Take out trash',
    'Clean Bathroom',
    'Oxygen turn on/off only',
    'Vacuum/Dust',
    'Maintain Living Area',
    'Make Bed',
  ];
  const companionship = [
    "Shopping Errands",
    "Escort to Appointments",
    "Organizing",
    "Taking Walks",
    "Companionship and Support",
    "Light Housekeeping",
    "Laundry"
  ];
  const mobilityAssistance = [
    "Range of Motion Exercises",
    "Assistance with Transferring",
    "Assistance with Walking",
    "Turning Positioning in bed",
    "Lifting",
  ]
  const personalCare = [
    "Personal Hygiene",
    "Bathing",
    "Meal Preparation",
    "Dressing",
    "Toileting",
    "Transfer",
    "Medication Reminders",
    "Encouraging Independence",
    "Engaging in Activities",
    "Compression stocking on/off",
  ]
  return (

    <section className="bg-white  ">
      <div className="mx-8 bg-white border-2  border-t-0  ">
        <div className='px-20 leading-7 py-14 border-teal-400 border-t-4'>
        <div className="flex items-center">
        <h2 className="text-4xl font-semibold w-full text-gray-700">
          Making the right choice for your loved one
        </h2>
        <div className='border-b-2 w-full'></div>
        </div>
        <div className="mt-10">
          <div className="px-3 -mt-4 float-right">
            <img
              src={homecare}
              alt="homecare"
              className="w-full rounded-sm "
            />
          </div>

            <p className="text-gray-600 mb-7 text-justify font-sans font-[400] ">
              We believe our clients and families turn to <strong>Kli Nursing</strong> because of our heartfelt commitment to providing customized care with compassion, excellence, and reliability. We do not employ a one size fits all approach. For each client, a customized care plan is developed after a complete needs assessment.
            </p>
            <p className="text-gray-600 mb-7 text-justify font-sans font-[400]">
              Our goal is to offer clients the best home health care and related support services available without leaving the comfort of their home. We pride ourselves with caring for the needs of our clients with individualized care plans designed to enhance their quality of life. Providing quality care is more than our commitment to you and your loved ones... it’s our calling. In addition, our Registered Nurses conduct periodic visits to each client to ensure that the established care plan is being successfully followed including checking for environmental safety.
            </p>
            <p className="text-gray-600 text-justify font-sans font-[400]">
              Our clients always tell us how much they truly appreciate these extra services we provide. Our care, and the extra steps we take, ensures your loved-one lives the most fulfilled life possible. In addition, our Registered Nurses also conduct periodic visits to each client to ensure that the established care plan is being successfully followed. The Registered Nurse will also make sure your loved-one is healthy, happy, and their environment is safe and conducive to the best care possible.
            </p>

            </div>
        </div>
      </div>

      <div className="mx-8 mt-10 px-20 py-10 bg-white border-2 ">
        <div className="flex ">
          <div className="w-full">
          <ServiceList items={skilledNursing} title="Skilled Nursing" text=""/>
          <ServiceList items={companionship} title="Skilled Nursing" text=""/>
          <ServiceList items={mobilityAssistance} title="Skilled Nursing" text=""/>
          </div>
          <div className='w-full'>
            <ServiceList items={supportServices} title="Support Services" text=""/>
            <ServiceList items={personalCare} title="Support Services" text="A full-spectrum of home care services provided by our personal care attendants:"/>
          </div>
        </div>
      </div>

      <div className="mx-8 mt-10 px-20 py-10">
        <div className=" space-y-6 text-center">
          <div className="flex items-center">
            <div className='border border-x-0 h-2 w-full'></div>
            <h2 className="text-4xl font-semibold w-full text-gray-600">Call Today</h2>
            <div className='border border-x-0 w-full h-2'></div>
          </div>
          <h2 className="text-4xl font-semibold w-full text-blue-700 ">240.324.9190</h2>
          <button className='px-10 py-4 border border-blue-300 bg-blue-200 text-blue-600 text-xl rounded-lg shadow-lg hover:shadow-sm transition-shadow duration-300 hover:shadow-blue-800 shadow-blue-800'>SEND US A MESSAGE</button>
        </div>
      </div>
    </section>

  )
}

export default OurServices
