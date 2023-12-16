
export default function UseCasesPro() {
  return (
    <>
      <main className="bg-gray-200  w-full  ">
        <div className="flex flex-row items-center justify-between  p-5 ">
          <div className="flex w-80   h-8 flex-col justify-center flex-shrink-0 text-black font-sans text-3xl not-italic font-semibold leading-7 ">
            Procurement workflow
          </div>
          <img src="/Images/wrong.svg" />
        </div>
        {/* Top bar UseCase */}
        <section className="flex flex-row  justify-between items-center bg-white w-auto h-14 flex-shrink-0  px-3 mb-5 ">
          <p
            className="text-black font-sans text-lg not-italic font-semibold  leading-7 w-[82px] h-10 flex  items-center gap-4 bg-white
"
          >
            UseCases
          </p>
          <div className="flex flex-row justify-start items-center gap-2">
            <div className="flex flex-row justify-start items-center ">
              <input
                className="  text-black font-sans text-sm not-italic font-normal leading-7 w-52 h-8  flex px-1 py-3 items-start gap-[10px]  border-black
"
                type="text"
                placeholder="Search text"
              />
              <span>
                <button className="flex px-0 py-4 justify-center items-center gap-2 self-start border rounded-sm bg-blue-500 w-11 h-8 ">
                  <img src="/Images/Search.svg" className="fill-white" />
                </button>
              </span>
            </div>
            <button className="flex px-1 py-4 items-center justify-center gap-2 rounded-sm border bg-blue-500 w-24 h-8 text-white text-center font-sans text-sm not-italic font-normal leading-7">
              Orinet View
            </button>
            <button className="flex px-1 py-4 items-center justify-center gap-2 rounded-sm border bg-blue-600 w-32 h-8 text-white text-center font-sans text-sm not-italic font-normal leading-7">
              Resource View
            </button>
          </div>
        </section>
        {/* Requiment Mock Development  actual component  CD/Ci test  Stage/Release */}
        <section className=" flex flex-row justify-start gap-3 p-3 items-start">
          {/* Requirement section */}
          <div className=" bg-blue-50 flex flex-col px-3 py-3 w-72 items-center justify-center  ">
            <div className="flex flex-row justify-between w-64 item-start pb-3  ">
              <p className="text-blue-800 font-sans text-base not-italic font-semibold leading-6">
                Requirement
              </p>
              <img src="Images/Plus.svg" className="w-6" />
            </div>
            <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
              <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-20  h-7">
                UseCase-1
              </p>
              <div className=" flex flex-row justify-start items-center gap-2">
                <div>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start
"
                  >
                    Assigned to
                  </p>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start
"
                  >
                    No. of Resources:
                  </p>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start
"
                  >
                    Dates:
                  </p>
                </div>
                <div>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    Angela Monus
                  </p>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    04
                  </p>
                  <p
                    className="text-orange-500 font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    12/09/2023
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/*  Mock development   */}
          <div className=" flex flex-col items-start justify-center gap-10 ">
            <div className=" bg-blue-50 flex flex-col px-3 py-3 w-72 items-center justify-center gap-3">
              <div className="flex flex-row justify-between w-64 item-start pb-3   ">
                <p className="text-blue-800 font-sans text-base not-italic font-semibold leading-6">
                  Mock Develpoment
                </p>
                <img src="Images/Plus.svg" className="w-6" />
              </div>
              <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3 ">
                <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-20  h-7">
                  UseCase-1
                </p>
                <div className=" flex flex-row justify-start items-center gap-2">
                  <div>
                    <p
                      className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start
"
                    >
                      Assigned to
                    </p>
                    <p
                      className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start
"
                    >
                      No. of Resources:
                    </p>
                    <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                      Dates:
                    </p>
                  </div>
                  <div>
                    <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start">
                      Angela Monus
                    </p>
                    <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start">
                      04
                    </p>
                    <p
                      className="text-orange-500 font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                    >
                      12/09/2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
                <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-20  h-7">
                  UseCase-2
                </p>
                <div className=" flex flex-row justify-start items-center gap-2">
                  <div>
                    <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                      Assigned to
                    </p>
                    <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                      No. of Resources:
                    </p>
                    <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                      Dates:
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                    >
                      Angela Monus
                    </p>
                    <p
                      className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                    >
                      04
                    </p>
                    <p
                      className="text-green-500 font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                    >
                      12/09/2023
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
                <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-20  h-7">
                  UseCase-3
                </p>
                <div className=" flex flex-row justify-start items-center gap-2">
                  <div>
                    <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                      Assigned to
                    </p>
                    <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                      No. of Resources:
                    </p>
                    <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                      Dates:
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                    >
                      Angela Monus
                    </p>
                    <p
                      className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                    >
                      04
                    </p>
                    <p
                      className="text-orange-500 font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                    >
                      12/09/2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
                <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-20  h-7">
                  UseCase-4
                </p>
                <div className=" flex flex-row justify-start items-center gap-2">
                  <div>
                    <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                      Assigned to
                    </p>
                    <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                      No. of Resources:
                    </p>
                    <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                      Dates:
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                    >
                      Angela Monus
                    </p>
                    <p
                      className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                    >
                      04
                    </p>
                    <p
                      className="text-green-500 font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                    >
                      12/09/2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mock development */}

          {/* Actual Development */}
          <div className=" bg-blue-50 flex flex-col px-3 py-3 w-72 items-center justify-center gap-3 ">
            <div className="flex flex-row justify-between w-64 item-start pb-3  ">
              <p className="text-blue-800 font-sans text-base not-italic font-semibold leading-6">
                Actual Development
              </p>
              <img src="Images/Plus.svg" className="w-6" />
            </div>
            <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
              <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-20  h-7">
                UseCase-1
              </p>
              <div className=" flex flex-row justify-start items-center gap-2">
                <div>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    Assigned to
                  </p>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    No. of Resources:
                  </p>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    Dates:
                  </p>
                </div>
                <div>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    Angela Monus
                  </p>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    04
                  </p>
                  <p
                    className="text-green-500 font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    12/09/2023
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
              <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-20  h-7">
                UseCase-2
              </p>
              <div className=" flex flex-row justify-start items-center gap-2">
                <div>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    Assigned to
                  </p>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    No. of Resources:
                  </p>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    Dates:
                  </p>
                </div>
                <div>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    Angela Monus
                  </p>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    04
                  </p>
                  <p
                    className="text-orange-500 font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    12/09/2023
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Actual Development */}
          {/* CD/CI Develpoment */}
          <div className=" bg-blue-50 flex flex-col px-3 py-3 w-72 items-center justify-center gap-3 ">
            <div className="flex flex-row justify-between w-64 item-start pb-3  ">
              <p className="text-blue-800 font-sans text-base not-italic font-semibold leading-6">
                CD/CI Development
              </p>
              <img src="Images/Plus.svg" className="w-6" />
            </div>
            <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
              <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-20  h-7">
                UseCase-1
              </p>
              <div className=" flex flex-row justify-start items-center gap-2">
                <div>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    Assigned to
                  </p>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    No. of Resources:
                  </p>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    Dates:
                  </p>
                </div>
                <div>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    Angela Monus
                  </p>
                  <p className="NameProfileColUsecaseComp">04</p>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
DateGreenClrDate"
                  >
                    12/09/2023
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
              <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-20  h-7">
                UseCase-2
              </p>
              <div className=" flex flex-row justify-start items-center gap-2">
                <div>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    Assigned to
                  </p>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    No. of Resources:
                  </p>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    Dates:
                  </p>
                </div>
                <div>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    Angela Monus
                  </p>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    04
                  </p>
                  <p
                    className="text-orange-500 font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    12/09/2023
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
              <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-20  h-7">
                UseCase-3
              </p>
              <div className=" flex flex-row justify-start items-center gap-2">
                <div>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    Assigned to
                  </p>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    No. of Resources:
                  </p>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    Dates:
                  </p>
                </div>
                <div>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    Angela Monus
                  </p>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    04
                  </p>
                  <p
                    className="text-green-500 font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    12/09/2023
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
              <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-20  h-7">
                UseCase-4
              </p>
              <div className=" flex flex-row justify-start items-center gap-2">
                <div>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    Assigned to
                  </p>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    No. of Resources:
                  </p>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    Dates:
                  </p>
                </div>
                <div>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    Angela Monus
                  </p>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    04
                  </p>
                  <p
                    className="text-orange-500 font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    12/09/2023
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* CD/CI Develpoment */}
          {/* Stage Release */}
          <div className=" bg-blue-50 flex flex-col px-3 py-3 w-72 items-center justify-center gap-3 ">
            <div className="flex flex-row justify-between w-64 item-start pb-3  ">
              <p className="text-blue-800 font-sans text-base not-italic font-semibold leading-6">
                Stage Release
              </p>
              <img src="Images/Plus.svg" className="w-6" />
            </div>
            <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
              <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-20  h-7">
                UseCase-1
              </p>
              <div className=" flex flex-row justify-start items-center gap-2">
                <div>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    Assigned to
                  </p>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    No. of Resources:
                  </p>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    Dates:
                  </p>
                </div>
                <div>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    Angela Monus
                  </p>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    04
                  </p>
                  <p
                    className="text-orange-500 font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    12/09/2023
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
              <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-20  h-7">
                UseCase-2
              </p>
              <div className=" flex flex-row justify-start items-center gap-2">
                <div>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    Assigned to
                  </p>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    No. of Resources:
                  </p>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    Dates:
                  </p>
                </div>
                <div>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    Angela Monus
                  </p>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    04
                  </p>
                  <p
                    className="text-green-500 font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    12/09/2023
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
              <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-20  h-7">
                UseCase-3
              </p>
              <div className=" flex flex-row justify-start items-center gap-2">
                <div>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    Assigned to
                  </p>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    No. of Resources:
                  </p>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    Dates:
                  </p>
                </div>
                <div>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    Angela Monus
                  </p>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    04
                  </p>
                  <p
                    className="text-orange-500 font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    12/09/2023
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
              <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-20  h-7">
                UseCase-4
              </p>
              <div className=" flex flex-row justify-start items-center gap-2">
                <div>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start
"
                  >
                    Assigned to
                  </p>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start
"
                  >
                    No. of Resources:
                  </p>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start
"
                  >
                    Dates:
                  </p>
                </div>
                <div>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    Angela Monus
                  </p>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    04
                  </p>
                  <p
                    className="text-green-500 font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    12/09/2023
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white w-60 rounded-lg p-3 leading-4 gap-3">
              <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-20  h-7">
                UseCase-5
              </p>
              <div className=" flex flex-row justify-start items-center gap-2">
                <div>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    Assigned to
                  </p>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    No. of Resources:
                  </p>
                  <p className="text-black font-sans text-sm not-italic font-semibold leading-7 w-28 h-6 text-start">
                    Dates:
                  </p>
                </div>
                <div>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    Angela Monus
                  </p>
                  <p
                    className="text-black font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    04
                  </p>
                  <p
                    className="text-orange-500 font-sans text-sm not-italic font-semibold leading-7 w-24 h-6 text-start
"
                  >
                    12/09/2023
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
