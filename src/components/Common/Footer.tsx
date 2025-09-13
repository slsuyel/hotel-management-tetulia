
export default function Footer() {
  return (
    <div className=" bg-secondary  border-t text-white py-8">
      <div className="container mx-auto px-8 ">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <ul className="list-none p-0">
              <span className="font-bold"> পরিকল্পনা ও বাস্তবায়নে:</span> <br />
              আফরোজ শাহীন খসরু<br />
              উপজেলা নির্বাহী অফিসার, <br />
              তেঁতুলিয়া, পঞ্চগড়
            </ul>
          </div>

          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <ul className="list-none p-0">
              <li className="flex justify-center items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Government_Seal_of_Bangladesh.svg/1200px-Government_Seal_of_Bangladesh.svg.png"
                  alt="bangladesh"
                  className="w-[50px] h-auto"
                  loading="lazy"
                />
                <span className="px-4">
                  <span className="font-bold"> ব্যবস্থাপনা ও তত্ত্বাবধানে:</span> <br />
                  উপজেলা প্রশাসন,তেঁতুলিয়া।
                </span>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <ul className="list-none p-0">
              <li className="flex justify-center items-center">
                <img
                  src="https://softwebsys.com/fav.png"
                  alt="sys"
                  className="w-[40px] h-auto"
                  loading="lazy"
                />
                <span className="px-4">
                  <span className="font-bold"> কারিগরি সহায়তায়:</span> <br />
                  <a
                    href="https://softwebsys.com/"
                    target="_blank"
                    className="no-underline text-gray-100 hover:text-gray-200"
                  >
                    সফটওয়েব সিস্টেম সল্যুশন
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" text-center">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved.</p>
      </div>
    </div>
  )
}
