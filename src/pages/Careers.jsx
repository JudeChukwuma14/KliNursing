import React, { useState } from 'react'
import QuestionSelect from '../component/QuestionSelect';

const Careers = () => {
    const [age, setAge] = useState('Yes');
    const [state, setState] = useState('Maryland');
    const [Country, setCountry] = useState('Nigeria');
    const [referral, setReferral] = useState({
        friend: false,
        employee: false,
        advertisement: false,
        agency: false,
        internet: false,
        other: false,
      });
    const [cert, setCert] = useState({
        all: false,
        rn: false,
        lpn: false,
        gna: false,
        other: false,
      });
      const [otherDetail, setOtherDetail] = useState('');
      const [otherCert, setOtherCert] = useState('');
      const [formState, setFormState] = useState({
        vitalSigns: '',
        nurseNotes: '',
        catheterCare: '',
        insertCatheters: "",
        startIvs: "",
        suctionPatients: "",
        oxygenPatient: "",
        neurologicalAssessments: "",
        intramuscularMedications: "",
        IvMedication: "",
        patientAdmission: "",
        dischargePatient: "",
        hadCpr: "",
        intensiveCare: "",
        followingExperience: "",
      });

      const handleQuestionChange = (e, field) => {
        setFormState((prevState) => ({
          ...prevState,
          [field]: e.target.value,
        }));
      };

      const handleCheckChange = (e) => {
        const { name, checked } = e.target;
        setReferral((prevReferral) => ({
          ...prevReferral,
          [name]: checked,
        }));
      };
      const handleCertChange = (e) => {
        const { name, checked } = e.target;
        setCert((prevReferral) => ({
          ...prevReferral,
          [name]: checked,
        }));
      };


    const handleChange = (e) => {
      setAge(e.target.value);
    };
    const handleStateChange = (e) => {
      setState(e.target.value);
    };
    const handleCountryChange = (e) => {
      setCountry(e.target.value);
    };
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">PERSONAL INFORMATION</h1>
      <form>
        {/* Name Section */}
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-4">
            Name <span className="text-red-800">*</span>
          </label>
          <div className="flex space-x-4">
            <div className='w-full'>
            <input
              type="text"
              placeholder=""
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none  focus:border-green-300"
            />
            <label className="block text-gray-700">
            First
            </label>
            </div>
            <div className='w-full'>
            <input
              type="text"
              placeholder=""
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none  focus:border-green-300"
            />
            <label className="block text-gray-700">
            Middle
            </label>
            </div>
            <div className='w-full'>
            <input
              type="text"
              placeholder=""
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none  focus:border-green-300"
            />
            <label className="block text-gray-700 ">
            Last
            </label>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="mb-6">
          <label className="block text-gray-700 font-bold mb-4">
            Address <span className="text-red-800">*</span>
          </label>
          <div className='w-full mb-4'>
            <input
                type="text"
                placeholder=""
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
            />
            <label className="block text-gray-700 ">
            Street Address
            </label>
          </div>
          <div className='w-full mb-4'>
            <input
                type="text"
                placeholder=""
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
            />
            <label className="block text-gray-700 ">
            Address Line 2
            </label>
          </div>
          <div className='flex space-x-4 mb-4'>
            <div className='w-full '>
                <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
                <label className="block text-gray-700 ">
                City
                </label>
            </div>
            <div className='w-full'>
                <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
                <label className="block text-gray-700 ">
                State / Province / Region
                </label>
            </div>
          </div>

          <div className='w-1/2'>
                <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
                <label className="block text-gray-700 ">
                Zip / Postal Code
                </label>
            </div>

        </div>
        {/* email and phone */}
        <div className='flex space-x-4 mt-8'>
            <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                Email <span className="text-red-800">*</span>
            </label>
            <input
                    type="email"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>

            <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                Phone
            </label>
            <input
                    type="tel"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>
        </div>

        {/*  */}
        <div className="w-1/2 mt-4">
      <label className="block text-gray-700 font-bold mb-2">
        Are you 18 years or older <span className="text-red-800">*</span>
      </label>
      <div className="relative">
        <select
          value={age}
          onChange={handleChange}
          className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-green-500"
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 border-l border-gray-400">
          <svg className="fill-current h-4 w-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
    </div>

    {/* desired */}
    <h1 className="text-3xl text-gray-600 font-semibold mt-10">DESIRED EMPLOYMENT</h1>
    <div className='my-6 space-x-4 flex items-center'>
        <div className='w-full'>
        <label className="block text-gray-700 font-bold mb-4">
            Position you are applying for: <span className="text-red-800">*</span>
          </label>
          <div className="relative">
        <select
          value={age}
          onChange={handleChange}
          className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-green-500"
        >
          <option value="RN">Registered Nurse</option>
          <option value="MD">Medication Technician</option>
          <option value="No">Medication Technician</option>
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 border-l border-gray-400">
          <svg className="fill-current h-4 w-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
        </div>

        <div className='w-full'>
        <label className="block text-gray-700 font-bold mb-4">
            Desired Salary
          </label>
          <input
              type="text"
              placeholder=""
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none  focus:border-green-300"
            />
        </div>

        <div className='w-full'>
        <label className="block text-gray-700 font-bold mb-4">
            Start Date <span className="text-red-800">*</span>
          </label>
          <input
              type="date"
              placeholder=""
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none  focus:border-green-300"
            />
        </div>
    </div>

    {/*  */}
    <div className='flex space-x-4'>
        <div className="w-1/2 mt-4">
      <label className="block text-gray-700 font-bold mb-2">
        Are you currently employed? <span className="text-red-800">*</span>
      </label>
      <div className="relative">
        <select
          value={age}
          onChange={handleChange}
          className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-green-500"
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 border-l border-gray-400">
          <svg className="fill-current h-4 w-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
    </div>
    <div className=" mt-4">
      <label className="block text-gray-700 font-bold mb-2">
        May we inquire of your current employer? <span className="text-red-800">*</span>
      </label>
      <div className="relative w-1/2">
        <select
          value={age}
          onChange={handleChange}
          className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-green-500"
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 border-l border-gray-400">
          <svg className="fill-current h-4 w-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
    </div>
        </div>

        {/*  */}
        <div className=' mt-6 flex space-x-4 items-start'>
        <div className="w-full ">
      <label className="block text-gray-700 font-bold mb-2">
        Have you ever worked for this company? <span className="text-red-800">*</span>
      </label>
      <div className="relative w-1/4">
        <select
          value={age}
          onChange={handleChange}
          className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-green-500"
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>
        </select>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 border-l border-gray-400">
            <svg className="fill-current h-4 w-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
            </svg>
            </div>
        </div>
        </div>

        <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                Who referred you to Munas Heart Nursing? <span className="text-red-800">*</span>
            </label>
            <div className='space-y-2 flex flex-col'>
                <label>
                    <input type='checkbox' name='friend' checked={referral.friend} onChange={handleCheckChange} className='mr-2' />
                    Friend
                </label>

                <label>
                    <input type='checkbox' name='employee' checked={referral.employee} onChange={handleCheckChange} className='mr-2' />
                    Employee
                </label>
                <label>
                    <input type='checkbox' name='advertisement' checked={referral.advertisement} onChange={handleCheckChange} className='mr-2' />
                    Advertisement
                </label>
                <label>
                    <input type='checkbox' name='agency' checked={referral.agency} onChange={handleCheckChange} className='mr-2' />
                Agency
                </label>
                <label>
                    <input type='checkbox' name='other' checked={referral.other} onChange={handleCheckChange} className='mr-2' />
                Other
                </label>


            </div>
        </div>
        </div>
        {/* if other is true */}
        <div className='w-1/2'>
        {referral.other && (
                    <div>
                        <label className="block text-gray-700 font-semibold">
                            Specify
                            <input
                                type="text"
                                value={otherDetail}
                                onChange={(e) => setOtherDetail(e.target.value)}
                                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none  focus:border-green-300"
                            />

                        </label>
                    </div>
                )}
        </div>

{/* Current employer */}
<div className=' py-14 border-b border-green-900'>
    <h1 className="text-3xl font-semibold mb-6">CURRENT EMPLOYER</h1>
        <div className='flex space-x-4 mt-8'>
            <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                Current Employer
            </label>
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>

            <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                Telephone
            </label>
            <input
                    type="tel"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>
        </div>

        <div className='flex space-x-4 mt-8'>
            <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                Reason for leaving
            </label>
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>

            <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                Name of last supervisor
            </label>
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>
        </div>
</div>

{/* employment history */}
<div className=' py-14 border-b border-green-900'>
    <h1 className="text-3xl font-semibold mb-6">EMPLOYMENT HISTORY</h1>
    <div className='flex space-x-4 mt-8'>
            <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                Name of Employer 1
            </label>
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>

            <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                Job Title
            </label>
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>
        </div>

        <p className='w-1/2 my-6'>
        List your last two (2) employers, assignments of volunteer activities, including experience. Explain any gap in employment in the comments section below.
        </p>
        <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                Address <span className="text-red-800">*</span>
            </label>
            <label className="block text-gray-700">
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />

            Street Address
            </label>
            </div>

            <label className="block w-full mt-4 text-gray-700">
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />

            Address Line 2
            </label>

            <div className='mt-4 flex space-x-4'>
            <label className="block w-full  text-gray-700">
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />

            City
            </label>

            <label className="block w-full  text-gray-700">
            <div className="relative">
        <select
          value={state}
          onChange={handleStateChange}
          className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-green-500"
        >
          <option value="Alabama">Alabama</option>
          <option value="Maryland">Maryland</option>

        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 border-l border-gray-400">
          <svg className="fill-current h-4 w-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>

            State
            </label>
            </div>

            <label className="block w-full mt-4 text-gray-700">
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />

            Zip Code
            </label>

            {/* from to nature of work */}
            <div className='mt-8 flex space-x-4'>
                <div className='w-full'>
                <label className="block text-gray-700 font-bold mb-2">
                    From <span className="text-red-800">*</span>
                </label>
                <label className="block relative text-gray-700">
                <input
                        type="date"
                        placeholder=""
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                    />
                <div className="absolute inset-x-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                    className="w-6 h-6 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 00-1-1H6zm3 2V3h2v1H9zm-4 4h10v9H5V8z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
                </label>
                </div>
                <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                To <span className="text-red-800">*</span>
            </label>
            <label className="block relative text-gray-700">
            <input
                    type="date"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />

                <div className="absolute inset-x-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                    className="w-6 h-6 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 00-1-1H6zm3 2V3h2v1H9zm-4 4h10v9H5V8z"
                    clipRule="evenodd"
                    />
                </svg>
                </div>
            </label>
            </div>

            <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                What was the nature of your work? <span className="text-red-800">*</span>
            </label>
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>
            </div>

            <div className='mt-8 flex space-x-4'>
                <div className='w-full'>
                <label className="block text-gray-700 font-bold mb-2">
                    Hourly rate
                </label>
                <input
                        type="text"
                        placeholder=""
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                    />
                </div>
                <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                Name of Supervisor
            </label>
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>

            <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                Phone
            </label>
            <input
                    type="tel"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>
            </div>

            <div className='mt-8 w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                Comments
            </label>
            <textarea minLength={3} className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300 '/>

            </div>


</div>
<div className='py-14 border-b border-green-900'>
    <div className='flex space-x-4 mt-8'>
            <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                Name of Employer 2
            </label>
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>

            <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                Job Title
            </label>
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>
        </div>

        <div className='w-full mt-8'>
            <label className="block text-gray-700 font-bold mb-2">
                Address <span className="text-red-800">*</span>
            </label>
            <label className="block text-gray-700">
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />

            Street Address
            </label>
            </div>

            <label className="block w-full mt-4 text-gray-700">
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />

            Address Line 2
            </label>

            <div className='mt-4 flex  space-x-4'>

            <label className="block w-full  text-gray-700">
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            City
            </label>

            <label className="block w-full text-gray-700">
                <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            State / province / Region
            </label>
            </div>

            <div className='flex space-x-4 mt-4'>
            <label className="block w-full text-gray-700">
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />

            Zip / Postal Code
            </label>


            <label className="block w-full  text-gray-700">
            <div className="relative">
        <select
          value={state}
          onChange={handleCountryChange}
          className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-green-500"
        >
          <option value="Afghanistan">Afghanistan</option>
          <option value="Nigeria">Nigeria</option>

        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 border-l border-gray-400">
          <svg className="fill-current h-4 w-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
            Country
            </label>

            </div>

            {/* from to nature of work */}
            <div className='mt-8 flex space-x-4'>
                <div className='w-full'>
                <label className="block text-gray-700 font-bold mb-2">
                    From <span className="text-red-800">*</span>
                </label>
                <label className="block text-gray-700">
                <input
                        type="date"
                        placeholder=""
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                    />

                from
                </label>
                </div>
                <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                To <span className="text-red-800">*</span>
            </label>
            <label className="block text-gray-700">
            <input
                    type="date"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />

            to
            </label>
            </div>

            <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                What was the nature of your work? <span className="text-red-800">*</span>
            </label>
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>
            </div>

            {/*  */}
            <div className='mt-8 flex space-x-4'>
                <div className='w-full'>
                <label className="block text-gray-700 font-bold mb-2">
                    Hourly rate
                </label>
                <input
                        type="text"
                        placeholder=""
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                    />
                </div>
                <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                Name of Supervisor
            </label>
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>

            <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                Phone
            </label>
            <input
                    type="tel"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>
            </div>
            {/*  */}
            <div className='mt-8 w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                Comments
            </label>
            <textarea minLength={3} className='w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300 '/>
            </div>
            {/*  */}

            <label className="block text-gray-700 font-bold mt-6 mb-2">
                ARE YOU ELIGIBLE FOR EMPLOYMENT IN THE UNITED STATES <span className="text-red-800">*</span>
            </label>
            <label className="block w-1/2  text-gray-700">
            <div className="relative">
        <select
          value={state}
          onChange={handleStateChange}
          className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-green-500"
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>

        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 border-l border-gray-400">
          <svg className="fill-current h-4 w-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>

            (Proof of eligibility will be required before employment)
            </label>
    </div>

    {/* Educat  ion */}
        <div className=' py-14 border-b border-green-900'>
            <h1 className="text-3xl font-semibold">EDUCATION</h1>
            <h1 className="text-2xl font-semibold text-gray-700 my-6">High School</h1>
        {/*  */}
            <div className='flex space-x-4 mt-8'>
            <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
               Name of School & Location
            </label>
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>

            <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
               Number of years attended
            </label>
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>
        </div>
        {/*  */}
        <div className='flex space-x-4 mt-8'>
            <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
               Did you graduate
            </label>
            <label className="block w-full  text-gray-700">
            <div className="relative">
        <select
          value={age}
          onChange={handleChange}
          className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-green-500"
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>

        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 border-l border-gray-400">
          <svg className="fill-current h-4 w-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
            </label>
            </div>

            <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
               Major
            </label>
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>
        </div>
    {/* College | University */}
    <h1 className="text-2xl text-gray-700 font-semibold my-6">College | University</h1>
        {/*  */}
            <div className='flex space-x-4 mt-8'>
            <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
               Name of School & Location
            </label>
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>

            <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
               Number of years attended
            </label>
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>
        </div>
        {/*  */}
        <div className='flex space-x-4 mt-8'>
            <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
               Did you graduate
            </label>
            <label className="block w-full  text-gray-700">
            <div className="relative">
        <select
          value={age}
          onChange={handleChange}
          className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-green-500"
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>

        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 border-l border-gray-400">
          <svg className="fill-current h-4 w-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
            </label>
            </div>

            <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
               Major
            </label>
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>
        </div>
        {/* profession */}
        <h1 className="text-2xl font-semibold my-6">Professional Training</h1>
        {/*  */}
            <div className='flex space-x-4 mt-8'>
            <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
               Name of School & Location
            </label>
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>

            <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
               Number of years attended
            </label>
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>
        </div>
        {/*  */}
        <div className='flex space-x-4 mt-8'>
            <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
               Did you graduate
            </label>
            <label className="block w-full  text-gray-700">
            <div className="relative">
        <select
          value={age}
          onChange={handleChange}
          className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-green-500"
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>

        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 border-l border-gray-400">
          <svg className="fill-current h-4 w-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
            </label>
            </div>

            <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
               Professional Certification
            </label>
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>
        </div>
        </div>

        {/* emergency contact */}
        <div className=' py-14 border-b border-green-900'>
        <h1 className="text-3xl font-semibold mb-6">EMERGENCY CONTACT</h1>
        <div className='mt-8'>
            <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                Name <span className="text-red-800">*</span>
            </label>
            </div>
            <div className=' flex  space-x-4'>
            <label className="block w-full mt-4 text-gray-700">
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
                First
            </label>


            <label className="block w-full mt-4 text-gray-700">
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />

           Last
            </label>
            </div>
        </div>

            <div className=''>
            <label className="block w-full mt-4 text-gray-700">
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />

            Street Address
            </label>
            </div>
            {/*  */}

            <label className="block w-full mt-4  text-gray-700 ">
            <input
                type="text"
                placeholder=""
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
            />

            Address Line 2
            </label>

            {/*  */}
            <div className='mt-4 flex space-x-4'>
            <label className="block w-full  text-gray-700">
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />

            City
            </label>

            <label className="block w-full  text-gray-700">
            <div className="relative">
        <select
          value={state}
          onChange={handleStateChange}
          className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-green-500"
        >
          <option value="Alabama">Alabama</option>
          <option value="Maryland">Maryland</option>

        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 border-l border-gray-400">
          <svg className="fill-current h-4 w-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>

            State
            </label>
            </div>
            {/*  */}
            <label className="block w-1/2 mt-4 pr-2 text-gray-700">
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />

            Zip Code
            </label>
            {/* email anad relatonship */}
            <div className='mt-8 flex space-x-4'>
                <div className='w-full'>
                <label className="block text-gray-700 font-bold mb-2">
                    Email<span className="text-red-800">*</span>
                </label>
                <input
                        type="email"
                        placeholder=""
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                    />
                </div>
                <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                Relationship
            </label>
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>
            </div>
        </div>

        {/* personal preferences */}
        {/* employment history */}
    <div className=' py-14 border-b border-green-900'>
    <h1 className="text-3xl font-semibold mb-6">PERSONAL REFERENCES</h1>
    <div className=' mt-8'>
    <label className="block text-gray-700 font-bold mb-2">
                Professional Reference 1 - Name
            </label>

           <div className='flex space-x-4'>
           <label className='w-full'>
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
                First
            </label>

            <label className='w-full'>
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
                Last
            </label>
           </div>
        </div>

        <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                Address <span className="text-red-800">*</span>
            </label>
            <label className="block text-gray-700">
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />

            Street Address
            </label>
            </div>

            <label className="block w-full mt-4 text-gray-700">
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />

            Address Line 2
            </label>
            {/*  */}
            <div className='mt-4 flex space-x-4'>
            <label className="block w-full  text-gray-700">
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />

            City
            </label>

            <label className="block w-full  text-gray-700">
            <div className="relative">
        <select
          value={state}
          onChange={handleStateChange}
          className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-green-500"
        >
          <option value="Alabama">Alabama</option>
          <option value="Maryland">Maryland</option>

        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 border-l border-gray-400">
          <svg className="fill-current h-4 w-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>

            State
            </label>
            </div>

            <label className="block w-full mt-4 text-gray-700">
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />

            Zip Code
            </label>
             {/* email anad relatonship */}
             <div className='mt-8 flex space-x-4'>
                <div className='w-full'>
                <label className="block text-gray-700 font-bold mb-2">
                    Email
                </label>
                <input
                        type="email"
                        placeholder=""
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                    />
                </div>
                <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                Phone
            </label>
            <input
                    type="tel"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>
            </div>

            {/*  */}
            <div className='mt-8 flex space-x-4'>
            <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
               Business
            </label>
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>
                <div className='w-full'>
                <label className="block text-gray-700 font-bold mb-2">
                    From
                </label>
                <label className="block text-gray-700">
                <input
                        type="date"
                        placeholder=""
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                    />

                from
                </label>
                </div>
                <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                To
            </label>
            <label className="block text-gray-700">
            <input
                    type="date"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />

            to
            </label>
            </div>
            </div>

            {/* 2 */}
            <div className='pt-10'>
            <div className=''>
            <label className="block text-gray-700 font-bold mb-2">
                Professional Reference 2 - Name
            </label>

           <div className='flex space-x-4'>
           <label className='w-full'>
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
                First
            </label>

            <label className='w-full'>
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
                Last
            </label>
           </div>
        </div>

        <div className='w-full mt-8'>
            <label className="block text-gray-700 font-bold mb-2">
                Address
            </label>
            <label className="block text-gray-700">
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />

            Street Address
            </label>
            </div>

            <label className="block w-full mt-4 text-gray-700">
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />

            Address Line 2
            </label>

            <div className='mt-4 flex space-x-4'>
            <label className="block w-full  text-gray-700">
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />

            City
            </label>

            <label className="block w-full  text-gray-700">
            <div className="relative">
        <select
          value={state}
          onChange={handleStateChange}
          className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-green-500"
        >
          <option value="Alabama">Alabama</option>
          <option value="Maryland">Maryland</option>

        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 border-l border-gray-400">
          <svg className="fill-current h-4 w-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>

            State
            </label>
            </div>

            <div className='w-1/2 mt-4'>
            <label className="block w-full pr-2 text-gray-700">
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />

            Zip
            </label>

            </div>

             {/* email anad relatonship */}
             <div className='mt-8 flex space-x-4'>
                <div className='w-full'>
                <label className="block text-gray-700 font-bold mb-2">
                    Email
                </label>
                <input
                        type="email"
                        placeholder=""
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                    />
                </div>
                <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                Phone
            </label>
            <input
                    type="tel"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>
            </div>

            {/*  */}
            <div className='mt-8 flex space-x-4'>
            <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
               Business
            </label>
            <input
                    type="text"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />
            </div>
                <div className='w-full'>
                <label className="block text-gray-700 font-bold mb-2">
                    From
                </label>
                <label className="block text-gray-700">
                <input
                        type="date"
                        placeholder=""
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                    />

                from
                </label>
                </div>
                <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                To
            </label>
            <label className="block text-gray-700">
            <input
                    type="date"
                    placeholder=""
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
                />

            to
            </label>
            </div>
            </div>
            {/*  */}

            <label className="block text-gray-700 font-bold mt-6 mb-2">
                Have you been convicted of a crime in the last 5 years? <span className="text-red-800">*</span>
            </label>
            <label className="block w-1/2  text-gray-700">
            <div className="relative">
        <select
          value={state}
          onChange={handleStateChange}
          className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:border-green-500"
        >
          <option value="Yes">Yes</option>
          <option value="No">No</option>

        </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 border-l border-gray-400">
          <svg className="fill-current h-4 w-4 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
          </svg>
        </div>
      </div>
            </label>
            {/*  */}
            <h3 className="block text-gray-700 font-bold my-6">
                Please check the box <span className="text-red-800">*</span>
            </h3>
            <h3 className=" text-gray-700 flex items-center gap-2 font-bold">
                <input type='checkbox'/>
                I certify that the facts contained in this application are true and complete. Any misrepresentation or falsification of information or significant omissions will be cause for rejection of my application or for a subsequent discipline up to and including dismissal from employment if discovered at the later date. I understand that if employed, my employment is not guaranteed for any term, and my employment may be terminated by the employer or myself at any time and for any reason with or without prior notice. No representative of Ageless Healthcare other than the owners is authorized to make any assurance or promise of continued employment and any such assurance must be in writing signed by the owners.
            </h3>


</div>

{/*  */}
<h1 className="text-2xl font-semibold text-gray-700 my-7">CERTIFICATION</h1>
{/*  */}
<div className=' mt-6 flex flex-row-reverse space-x-4 items-start'>
        <div className="w-full ">
      <label className="block text-gray-700 font-bold mb-2">
        State
            <input
                type="text"
                placeholder=""
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-green-300"
            />
      </label>

        </div>

        <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
                Check all that apply <span className="text-red-800">*</span>
            </label>
            <div className='space-y-2 flex flex-col'>
                <label>
                    <input type='checkbox' name='friend' checked={cert.all} onChange={handleCheckChange} className='mr-2' />
                    Select All
                </label>

                <label>
                    <input type='checkbox' name='employee' checked={cert.rn} onChange={handleCheckChange} className='mr-2' />
                    RN
                </label>
                <label>
                    <input type='checkbox' name='advertisement' checked={cert.lpn} onChange={handleCheckChange} className='mr-2' />
                    LPN
                </label>
                <label>
                    <input type='checkbox' name='agency' checked={cert.gna} onChange={handleCheckChange} className='mr-2' />
                GNA/CNA
                </label>
                <label>
                    <input type='checkbox' name='other' checked={cert.other} onChange={handleCheckChange} className='mr-2' />
                Other
                </label>
            </div>
        </div>
        </div>
        {/* if other is true */}
        <div className='w-1/2 mt-2'>
        {referral.other && (
                    <div>
                        <label className="block text-gray-700 font-semibold">
                            Specify
                            <input
                                type="text"
                                value={otherCert}
                                onChange={(e) => setOtherCert(e.target.value)}
                                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none  focus:border-green-300"
                            />

                        </label>
                    </div>
                )}
        </div>

        {/*  */}
        <h1 className="text-2xl font-semibold text-gray-700 my-7">SKILLS</h1>
            <label className="block text-gray-700 font-bold mt-6 mb-4">
                The following information will help us place you where your skills, knowledge of nursing and preferences will be best suited
            </label>
            {/*  */}
            <div className='space-y-6'>

            <div className=" flex space-x-4">
                <QuestionSelect
                    question="Can you do vital signs?"
                    value={formState.vitalSigns}
                    onChange={(e) => handleQuestionChange(e, 'vitalSigns')}
                />
                <QuestionSelect
                    question="Can you do nurses notes?"
                    value={formState.nurseNotes}
                    onChange={(e) => handleQuestionChange(e, 'nurseNotes')}
                />
                <QuestionSelect
                    question="Can you do catheter care?"
                    value={formState.catheterCare}
                    onChange={(e) => handleQuestionChange(e, 'catheterCare')}
                />
            </div>
            <div className=" flex space-x-4">
                <QuestionSelect
                    question="Can you do insert catheters?"
                    value={formState.insertCatheters}
                    onChange={(e) => handleQuestionChange(e, 'insertCatheters')}
                />
                <QuestionSelect
                    question="Can you do start IVs?"
                    value={formState.startIvs}
                    onChange={(e) => handleQuestionChange(e, 'startIvs')}
                />
                <QuestionSelect
                    question="Do you suction patients?"
                    value={formState.suctionPatients}
                    onChange={(e) => handleQuestionChange(e, 'suctionPatients')}
                />
            </div>
            <div className=" flex space-x-4">
                <QuestionSelect
                    question="Can you set up oxygen for patients?"
                    value={formState.oxygenPatient}
                    onChange={(e) => handleQuestionChange(e, 'oxygenPatient')}
                />
                <QuestionSelect
                    question="Can you do neurological Assessments?"
                    value={formState.neurologicalAssessments}
                    onChange={(e) => handleQuestionChange(e, 'neurologicalAssessments')}
                />
                <QuestionSelect
                    question="can you give intramuscular medications?"
                    value={formState.intramuscularMedications}
                    onChange={(e) => handleQuestionChange(e, 'intramuscularMedications')}
                />
            </div>
            <div className=" flex space-x-4">
                <QuestionSelect
                    question="Can you give IV medications?"
                    value={formState.IvMedication}
                    onChange={(e) => handleQuestionChange(e, 'IvMedication')}
                />
                <QuestionSelect
                    question="Can you assess patients for admission?"
                    value={formState.patientAdmission}
                    onChange={(e) => handleQuestionChange(e, 'patientAdmission')}
                />
                <QuestionSelect
                    question="Can you discharge patients?"
                    value={formState.dischargePatient}
                    onChange={(e) => handleQuestionChange(e, 'dischargePatient')}
                />
            </div>
            <div className=" flex space-x-4">
                <QuestionSelect
                    question="Have you had CPR?"
                    value={formState.hadCpr}
                    onChange={(e) => handleQuestionChange(e, 'hadCpr')}
                />
                <QuestionSelect
                    question="Do you have intensive care experience?"
                    value={formState.intensiveCare}
                    onChange={(e) => handleQuestionChange(e, 'intensiveCare')}
                />
                <QuestionSelect
                    question="In which of the following areas have you had experience?"
                    value={formState.followingExperience}
                    onChange={(e) => handleQuestionChange(e, 'followingExperience')}
                />
            </div>
            </div>
            {/*  */}
            <label className="block w-1/2 text-gray-700 font-bold mt-8">
            Have you had any special training in nursing? If so, what?
                            <input
                                type="text"
                                className="w-full mt-2 pr-2 p-3 border border-gray-300 rounded-md focus:outline-none  focus:border-green-300"
                            />
                        </label>
        <h1 className="text-2xl font-semibold text-gray-700 my-7">SKILLS</h1>
            <label className="block text-gray-700 font-bold mt-6 mb-4">
                The following information will help us place you where your skills, knowledge of nursing and preferences will be best suited
            </label>
            {/*  */}
            <div className='space-y-6'>

            <div className=" flex space-x-4">
                <QuestionSelect
                    question="Are you a licensed driver?"
                    value={formState.vitalSigns}
                    onChange={(e) => handleQuestionChange(e, 'vitalSigns')}
                />
                <QuestionSelect
                    question="Will you travel 30 minutes one way?"
                    value={formState.nurseNotes}
                    onChange={(e) => handleQuestionChange(e, 'nurseNotes')}
                />
                <QuestionSelect
                    question="Are you a licensed driver?"
                    value={formState.catheterCare}
                    onChange={(e) => handleQuestionChange(e, 'catheterCare')}
                />
            </div>
            <div className=" flex space-x-4">
                <QuestionSelect
                    question="Will you work shifts at a hospital?"
                    value={formState.insertCatheters}
                    onChange={(e) => handleQuestionChange(e, 'insertCatheters')}
                />
                <QuestionSelect
                    question="Will you work shifts at a nursing home?"
                    value={formState.startIvs}
                    onChange={(e) => handleQuestionChange(e, 'startIvs')}
                />
                <QuestionSelect
                    question="Will you work private duty cases?"
                    value={formState.suctionPatients}
                    onChange={(e) => handleQuestionChange(e, 'suctionPatients')}
                />
            </div>
            <div className=" flex space-x-4">
                <QuestionSelect
                    question="Please rate your physical condition"
                    value={formState.oxygenPatient}
                    onChange={(e) => handleQuestionChange(e, 'physicalCondition')}
                />
                <QuestionSelect
                    question="Select the time of day you are available?"
                    value={formState.neurologicalAssessments}
                    onChange={(e) => handleQuestionChange(e, 'neurologicalAssessments')}
                />
                 <div className='w-full'>
            <label className="block text-gray-700 font-bold mb-2">
               Select your days of availability <span className="text-red-800">*</span>
            </label>
            <div className='space-y-2 flex flex-col'>
                <label>
                    <input type='checkbox' name='friend' checked={referral.friend} onChange={handleCheckChange} className='mr-2' />
                    Monday
                </label>

                <label>
                    <input type='checkbox' name='employee' checked={referral.employee} onChange={handleCheckChange} className='mr-2' />
                    Tuesday
                </label>
                <label>
                    <input type='checkbox' name='advertisement' checked={referral.advertisement} onChange={handleCheckChange} className='mr-2' />
                    Wednesday
                </label>
                <label>
                    <input type='checkbox' name='agency' checked={referral.agency} onChange={handleCheckChange} className='mr-2' />
                Thursday
                </label>
                <label>
                    <input type='checkbox' name='other' checked={referral.other} onChange={handleCheckChange} className='mr-2' />
                Friday
                </label>
                <label>
                    <input type='checkbox' name='other' checked={referral.other} onChange={handleCheckChange} className='mr-2' />
                Saturday
                </label>
                <label>
                    <input type='checkbox' name='other' checked={referral.other} onChange={handleCheckChange} className='mr-2' />
                Sunday
                </label>


            </div>
        </div>
            </div>

            </div>
            {/*  */}
           <div className='mt-8 flex space-x-4'>
           <label className="block w-full text-gray-700 font-bold ">
            How many hours a week do you wish to work?
                            <input
                                type="text"
                                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none  focus:border-green-300"
                            />
                        </label>
                        <label className="block w-full text-gray-700 font-bold">
            Do you have any handicaps? If so, please describe:
                            <input
                                type="text"
                                className="w-full mt-2 p-3 border border-gray-300 rounded-md focus:outline-none  focus:border-green-300"
                            />
                        </label>
           </div>


</div>
{/* last part */}
<div className='space-y-4 mt-14'>
    <p>If I am employed, I agree to comply with and be bound by the safety and health rules and regulations, and rules of conduct of Munas Heart Nursing. This application will remain on active file for 60 days. If I am hired within this period, this form will be transferred to my individual personal file. If I am not hired or have not heard from this agency within 60 days, this application is no longer active and I will need to reapply for employment if I wish to be considered for a job with Munas Heart Nursing.</p>
    <p>I do hereby give the employer and/or its agents, including consumer-reporting bureaus, the right to investigate any and all statements made in this application for the purpose of employment and retention of employment. This investigation may include, but not limited to, credit reports, criminal conviction records, motor vehicle driving records and previous employment history. Further, I hereby release from liability and hold harmless Beneficial Support Services ,it’s representative, all persons and organizations/companies for furnishing such information.</p>
    <p>If required, I agree to a drug-testing prior and during employment or for post-accident occurrences. The employer, Munas Heart Nursing is an Equal Opportunity Employer. The employer does not discriminate in employment and no questions on this application is used for the purpose of limiting or excusing any applicant’s consideration for employment on a basis prohibited by local, state or federal law.</p>
    <p>NOTICE: This is to inform you that as part of processing your employment application, we may obtain a consumer report, which includes information as to your character, general reputation, personal characteristics and mode of living. If an investigative report is requested, you have the right to make a written request within a reasonable period of time for a complete and accurate disclosure of additional information concerning the nature and scope of the investigation. By signing below, you acknowledge receipt of a copy of this notice and a copy of the “Summary of Your Rights under the Fair Credit Reporting Act.”</p>
</div>
<div className="pt-8">
      <div className="flex space-x-4">
        {/* Signature Field */}
        <div className="w-1/2">
          <label className="block text-gray-700 font-semibold mb-2">
            Signature <span className="text-red-500">*</span>
          </label>
          <textarea
            className="w-full h-32 p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
          />
        </div>

        {/* Date Field */}
        <div className="w-1/2">
          <label className="block text-gray-700 font-semibold mb-2">Date</label>
          <div className="relative">
            <input
              type="date"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            />

          </div>
        </div>
      </div>

      {/* Attach Photocopies Section */}
      <div className="mt-12">
        <p className="text-gray-700 font-semibold mb-6">Please attach photocopies of the following:</p>
        <ul className="list-disc pl-5 space-y-4 text-gray-700">
          <li>Birth Certificate</li>
          <li>Driver's License</li>
          <li>Copy of Social Security card</li>
          <li>Employment Authorization/Eligibility</li>
          <li>CPR Certifications (if any)</li>
          <li>Professional License (if any)</li>
          <li>First Aid Certificate (if any)</li>
          <li>BLS Unrestricted professional Lic (if any)</li>
          <li>Criminal background check using CJIS</li>
        </ul>
      </div>

      {/* file */}
      <label className='block text-gray-700 font-bold mb-3 mt-8'>File</label>
      <div className='border-2 border-dashed border-gray-300 py-12 rounded-lg text-center cursor-pointer'>
        <p className="text-gray-500">Drop files here or</p>
        <label className='block mt-2 '>
            <input type='file' multiple className='hidden' accept='.pdf, .jpg' />
            <span className='bg-purple-600 text-white px-4 py-2 rounded-md cursor-pointer'> Select files</span>
        </label>
      </div>
      {/* file restriction */}
      <p className="mt-4 text-gray-600 text-sm">
          Accepted file types: pdf, jpg, Max. file size: 32 MB, Max. files: 5.
        </p>
    </div>
    {/* Submit button */}
        <button
          type="submit"
          className="mt-4 bg-purple-600 text-white px-6 py-2 rounded-md hover:bg-purple-700"
            >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Careers
