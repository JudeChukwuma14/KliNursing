import React from "react";
import backgroundImage from "../assets/image/ContactImage.jpg";
import about_one from "../assets/image/aboutImage.jpg";
import about_two from "../assets/image/aboutImage1.jpg";
import about_three from "../assets/image/aboutImage2.jpg";
import about_four from "../assets/image/b-5.jpg";
import about_five from "../assets/image/b-2.jpg";

export default function AboutUs() {
  const img = {
    backgroundImage: `url(${backgroundImage})`,
  };
  return (
    <div>
      <div
        style={img}
        className="bg-cover relative bg-no-repeat w-full h-[30vh] lg:h-[40vh] bg-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/*  */}
        <div className="flex relative flex-col justify-center items-center h-full">
          <h1 className="text-center lg:pt-16 md:text-4xl font-bold md:pt-16 lg:text-[60px] pt-8 text-white">
            About Us
          </h1>
          <span className="flex justify-start items-center pl-3 md:pl-6 lg:pl-8 pt-2 md:pt-10 lg:pt-18 text-[10px] md:text-[18px] text-white">
            <a href="/" className="font-bold">
              Home
            </a>
            / <a href="/about-us">About Us</a>
          </span>
        </div>
      </div>
      <div className=" text-center">
        <p className="text-sm md:text-[18px] md:leading-9 font-light w-[100%] px-9 mt-9 text-justify">
        Our Mission is to provide safe and Quality care to our Clients. Residential Service Agency: Our Services Include skilled and non-skilled services. Skilled services include Medication Administration, Wellness Visit, Comprehensive Physical Assessment, Diabetes, hypertension Management, Enteral Feeding, Wound care, Infusion therapy, infusion management, Blood Draws/ Phlebotomy services, patient teaching. Respiratory services such as Tracheostomy care, Vent care, Oxygen Monitoring. Unskilled Services (Personal Care Services/ Companion care) include Bathing, grooming and assistance with dressing, Vital signs, Meal preparation and feeding, Range of motion Exercise, personal laundry, and linen change running errands, grocery shopping and light housekeeping. Medical Staffing Agency: We are a staffing agency that staff Registered Nurses (RN's), Certified Nurse Assistant (CNA's) Geriatric Nursing Assistant (GNA's), Licensed Practical Nurse (LPN's) Social Workers, Respiratory Therapist, Case Manager, companion, Sitter, to different facilities. Our staff and staffing schedules are flexible to meet your needs. We staff Acute care and rehab Facilities, Nursing homes, pharmacies 24/7 to provide excellent continuous care. Our staffs are licensed, registered and our company is fully insured and bonded.
        </p>
      </div>
      <div className=" text-center">
        <h1 className=" pt-7 pb-4 font-bold text-2xl lg:text-4xl md:text-3xl lg:pb-7">
          WHY CHOSE KLI NUSRING
        </h1>
      </div>
      <div>
        <div className=" flex flex-col-reverse items-center justify-center px-8 pb-9 lg:flex-row lg:gap-8 ">
          <div>
            {/* <h1 className=" py-2 font-big font-bold text-lg md:text-2xl">
              WHY CHOSE KLI NUSRING
            </h1> */}

            <p className="text-sm md:text-[18px] md:leading-9 font-light  lg:w-[700px] text-justify">
              KLI Nursing Services INC, strives to lead the industry in our
              region with our innovative Residential Service Agency and staffing
              Agency programs. Our team of Health care professionals continue to
              develop new options for Home care and supplemental staffing in,
              residential home, acute care facilities, long term care
              facilities, personal home care and private offices. Studies show
              that facilities can save money by keeping their core staffing
              levels at a minimum and using supplemental staffing only as their
              census rises. Select one of our associates to supplement your
              schedule for a 13- or 16-week contract. We also offer a per diem
              staffing plan, with no minimum usage requirement. We have a vast
              array of options for supplemental staffing. Let us tailor one to
              fit your needs. Special rates are available for physician's
              offices and personal home care.
            </p>
          </div>
          <div>
            <img
              src={about_two}
              className="w-[350px] md:w-[100%] lg:w-[600px] pb-3"
            />
          </div>
        </div>

        <div className=" flex flex-col-reverse items-center justify-center px-8 pb-9 lg:flex-row-reverse lg:gap-8 ">
          <div>
            <h1 className=" py-2 font-bold text-lg md:text-2xl">What We Do</h1>

            <li className=" text-sm md:text-[18px] md:leading-9 font-light lg:w-[700px] text-justify">
              Residential Service Agency: Skilled services include Medication
              Administration, Wellness Visit, Comprehensive Physical Assessment,
              Diabetes, hypertension Management, Enteral Feeding, Wound care,
              Infusion therapy, infusion management, Blood Draws/ Phlebotomy,
              patient teaching. Respiratory services such as Tracheostomy care,
              Vent care, Oxygen Monitoring. Unskilled Services include Bathing,
              grooming and assistance with dressing, Vital signs, Meal
              preparation and feeding, Range of motion Exercise, personal
              laundry, and linen change running errands, grocery shopping and
              light housekeeping
            </li>
            <li className=" text-sm md:text-[18px] md:leading-9 font-light lg:w-[700px] text-justify">
              Medical Staffing: We staff Acute care and rehab, Facilities,
              Nursing homes, pharmacies 24/7 to provide excellent continuous
              care.
            </li>
            <li className=" text-sm md:text-[18px] md:leading-9 font-light lg:w-[700px] text-justify">
              Call us any time, our staffing coordinator will assist you with
              your staffing needs.
            </li>
          </div>
          <div>
            <img
              src={about_three}
              className="w-[350px] md:w-[100%] lg:w-[550px] pr-8"
            />
          </div>
        </div>
        <div className=" flex flex-col-reverse items-center justify-center px-8 pb-9 lg:flex-row lg:gap-8 ">
          <div>
            <h1 className=" py-2 font-bold text-lg md:text-2xl md:w-[600px] lg:w-[700px] w-[300px]">
              Residential Service and Staffing Solution for today's Dynamic
              Health Care Climate
            </h1>

            <p className=" text-sm md:text-[18px] md:leading-9 font-light lg:w-[700px] w- text-justify">
              KLI Nursing Services, INC. was founded with the objective of
              helping families and their loved ones get the quality care they
              need, in the comfort of their home or place of choice, we also
              provide health care facilities with their long- and short-term
              staffing needs. Our paramount goal is to assist you in providing
              your patients and residents with compassionate, competent and
              professional care. Since its inception, <br />
              KLI Nursing Services INC. has been devoted to upgrading the
              quality of staffs available to you. Our quality of work and
              dedication is well known to those we serve, we value every
              relationship we build. We handle each client need individually and
              encourage ongoing client feedback to ensure client satisfaction.
              When you contract with KLI Nursing Services, Inc. you are hiring
              an experienced team of health care professionals who are happy to
              meet your staffig challenges head-on.Our health care
              administration oversees operation and maintains direct line of
              communication with your case Managers, Support planner and
              facility Representatives.
            </p>
          </div>
          <div>
            <img
              src={about_four}
              className="w-[350px] md:w-[100%] lg:w-[550px]"
            />
          </div>
        </div>

        <div className="  flex flex-col-reverse items-center justify-center px-8 pb-9 lg:flex-row-reverse lg:gap-8 ">
          <div>
            <h1 className=" py-2 font-bold text-lg md:text-2xl lg:w-[700px] w-[300px] md:w-[600px] ">
              Hiring, Background Checks, Quality Assurance Documentation
            </h1>

            <p className=" text-sm md:text-[18px] md:leading-9 lg:w-[700px] text-justify">
              Registered Nurses, LPNs, CMTs, CNAS and personal assistant staffs
              are chosen as associates after completing a careful and
              comprehensive screening process. The successful candidate will
              have the following documents on file for inspection
              <li>Employment Application</li>
              <li> Recent skills checklist</li>
              <li>Professional and Personal References</li>
              <li>
                Current nursing license for the state in which the nurse is to
                practice
              </li>
              <li>Professional and specialty certifications</li>
              <li> Currents BCLS, ACLS, PALS, and NRP certifications</li>
              <li>
                Documentation of U.S Citizenship, or lawful work permits, (as
                required by the United States Citizenship and Immigration
                Services)
              </li>
              <li>
                Documentation of Hepatitis B immunization, positive titer
                result, or sign waiver form
              </li>
            </p>
          </div>
          <div className="">
            <img
              src={about_five}
              className="w-[350px] md:w-[100%] lg:w-[550px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
