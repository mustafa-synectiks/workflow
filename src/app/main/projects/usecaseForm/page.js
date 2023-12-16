import React from 'react'

const newform = () => {

    return (
        <div>

            <div className='flex w-[100%] flex-col items-start gap-5'>
                <div className='flex w-[100%] h-7 flex-col justify-center text-black text-2xl non-italic font-semibold leading-snug'>Procurement Workflow</div>
                <div className='text-black text-2xl font-semibold leading-normal bg-white px-4 py-4 w-[100%] h-14 flex items-center'>Usecase </div>
                <div className='text-black text-2xl font-semibold leading-normal bg-white px-4 py-4 w-[100%] h-14 flex items-center'>Basic Details</div>
            </div>

            <div className='flex flex-col w-[100%] items-start gap-2.5 shrink-0'>
                <form>
                    <div className='flex gap-3 ml-10 mt-5'>
                        <div className='flex flex-col text-end justify-around mb-11 gap-2'>
                            <label>UserCase Name:</label>
                            <label>Assign to:</label>
                            <label>UserCase description:</label>
                        </div>
                        <div className='flex flex-col justify-around gap-6'>
                            <input type='text' className='w-[35.5rem] p-1 border border-white shadow-md' placeholder='Admin name'></input>
                            <input type='text' className='w-[35.5rem] p-1 border border-white shadow-md' placeholder='Project name'></input>
                            <textarea className='w-[35.5rem] h-[4.7500rem] p-1 border border-white shadow-md' placeholder='Description.....'></textarea>
                        </div>
                    </div>
                </form>
            </div>

            {/* //Workflow Head section */}


            <div className='text-black text-2xl font-semibold leading-normal bg-white px-4 py-3 w-[100%] flex items-center mt-6 mb-6'>Workflow Stage Details</div>

            <form>
                {/* Requirement section */}

                <div className='flex w-[100%] flex-col items-center shrink-0  gap-8 bg-white mb-4'>
                    <div className='w-[100%] px-6 py-4  flex items-center  justify-between border-y border-b-neutral-300 border border-t-0 border-x-0'>
                        <div className='text-pink-300 text-xl non-italic font-medium leading-normal '>1.Requirement</div>
                        <div className='text-blue-500'>View More</div>
                    </div>

                    <div className='flex px-6 items-start self-stretch w-[100%] gap-4 border-y border-t-neutral-300 border-b-0'>
                        <div className='flex flex-col items-start w-[50%]  gap-4 '>
                            <label className=' text-blue-400 text-sm font-normal leading-snug'>Assign To:</label>
                            <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' placeholder='example' />
                        </div>

                        <div className='flex flex-col items-start w-[50%]  gap-4'>
                            <label className=' text-blue-400 text-sm font-normal leading-snug'>Description:</label>
                            <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' placeholder='example' />
                        </div>
                    </div>
                </div>

                {/* Requirement Sub-Stage Details */}
                <div className='w-[100%] py-2 bg-white'>
                    <div className=' w-[95%] flex px-6 py-4 flex-col items-start border-b-neutral-300 border border-t-0 border-x-0 bg-white mt-2 text-pink-300 text-xl font-medium leading-normal'>Requirement Sub-Stage Details</div>
                    <div className='w-[95%]'>

                        <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
                            <h1 className='text-blue-500 ml-5'>Create Usecase Document</h1>
                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Assign To:</label>
                                <select className='w-[100%] px-3 py-1 border border-neutral-300'>
                                    <option>@</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Start - End date</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date'></input>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Comments</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text'></input>
                            </div>
                        </div>

                        <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
                            <h1 className='text-blue-500 pl-14'>Create Screen Design</h1>

                            <div className='flex flex-col gap-2 w-[25%] '>
                                <label className='w-[100%]'>Assign To:</label>
                                <select className='w-[100%] px-3 py-1 border border-neutral-300'>
                                    <option>@</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Start - End date</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type=''></input>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Comments</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text'></input>
                            </div>

                        </div>

                        <div className='flex items-center justify-around  w-[100%]'>
                            <h1 className='text-blue-500 ml-5'>Updating Usecase in Netlifi</h1>
                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Assign To:</label>
                                <select className='w-[100%] px-3 py-1 border border-neutral-300' >
                                    <option>@</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Start - End date</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type=''></input>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Comments</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text'></input>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='flex items-center justify-end p-4'>
                    <div className='flex gap-4 text-lg'>
                        <button className='w-28 h-10 border'>Cancel</button>
                        <button className='w-28 h-10 border bg-blue-500 text-white'>Save</button>
                    </div>
                </div>
            </form>


            {/* 2.Mock Development */}
            <form>
                <div className='flex w-[100%] flex-col items-center shrink-0  gap-8 bg-white mb-4'>
                    <div className='w-[100%] px-6 py-4  flex items-center  justify-between border-y border-b-neutral-300 border border-t-0 border-x-0'>
                        <div className='text-pink-300 text-xl non-italic font-medium leading-normal '>2.Mock Development</div>
                        <div className='text-blue-500'>View More</div>
                    </div>

                    <div className='flex px-6 items-start self-stretch w-[100%] gap-4 border-y border-t-neutral-300 border-b-0'>
                        <div className='flex flex-col items-start w-[50%]  gap-4 '>
                            <label className=' text-blue-400 text-sm font-normal leading-snug'>Assign To:</label>
                            <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' placeholder='example' />
                        </div>

                        <div className='flex flex-col items-start w-[50%]  gap-4'>
                            <label className=' text-blue-400 text-sm font-normal leading-snug'>Description:</label>
                            <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' placeholder='example' />
                        </div>
                    </div>
                </div>

                {/* Mock Development Sub-Stage Details */}

                <div className='w-[100%] py-2 bg-white'>
                    <div className=' w-[95%] flex px-6 py-4 flex-col items-start border-b-neutral-300 border border-t-0 border-x-0 bg-white mt-2 text-pink-300 text-xl font-medium leading-normal'>Mock Development Sub-Stage Details</div>
                    <div className='w-[95%]'>

                        <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
                            <h1 className='text-blue-500 mr-28'>Create API Spec</h1>
                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Assign To:</label>
                                <select className='w-[100%] px-3 py-1 border border-neutral-300'>
                                    <option>@</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Start - End date</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date'></input>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Comments</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text'></input>
                            </div>
                        </div>


                        <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
                            <h1 className='text-blue-500 mr-20'>Create Postman Test</h1>
                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Assign To:</label>
                                <select className='w-[100%] px-3 py-1 border border-neutral-300'>
                                    <option>@</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Start - End date</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date'></input>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Comments</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text'></input>
                            </div>
                        </div>


                        <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
                            <h1 className='text-blue-500'>Create UI Screen with Mock API</h1>
                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Assign To:</label>
                                <select className='w-[100%] px-3 py-1 border border-neutral-300'>
                                    <option>@</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Start - End date</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date'></input>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Comments</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text'></input>
                            </div>
                        </div>


                        <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
                            <h1 className='text-blue-500 mr-32'>Create Test ApI</h1>
                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Assign To:</label>
                                <select className='w-[100%] px-3 py-1 border border-neutral-300'>
                                    <option>@</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Start - End date</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date'></input>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Comments</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text'></input>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='flex items-center justify-end p-4'>
                    <div className='flex gap-4 text-lg'>
                        <button className='w-28 h-10 border'>Cancel</button>
                        <button className='w-28 h-10 border bg-blue-500 text-white'>Save</button>
                    </div>
                </div>
            </form>






            {/* 3.Actual Development */}
            <form>

                <div className='flex w-[100%] flex-col items-center shrink-0  gap-8 bg-white mb-4'>
                    <div className='w-[100%] px-6 py-4  flex items-center  justify-between border-y border-b-neutral-300 border border-t-0 border-x-0'>
                        <div className='text-pink-300 text-xl non-italic font-medium leading-normal '>3.Actual Development</div>
                        <div className='text-blue-500'>View More</div>
                    </div>

                    <div className='flex px-6 items-start self-stretch w-[100%] gap-4 border-y border-t-neutral-300 border-b-0'>
                        <div className='flex flex-col items-start w-[50%]  gap-4 '>
                            <label className=' text-blue-400 text-sm font-normal leading-snug'>Assign To:</label>
                            <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' placeholder='example' />
                        </div>

                        <div className='flex flex-col items-start w-[50%]  gap-4'>
                            <label className=' text-blue-400 text-sm font-normal leading-snug'>Description:</label>
                            <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' placeholder='example' />
                        </div>
                    </div>
                </div>

                {/* Actual Development Sub-Stage Details */}
                <div className='w-[100%] py-2 bg-white'>
                    <div className=' w-[95%] flex px-6 py-4 flex-col items-start border-b-neutral-300 border border-t-0 border-x-0 bg-white mt-2 text-pink-300 text-xl font-medium leading-normal'>Mock Development Sub-Stage Details</div>
                    <div className='w-[95%]'>


                        <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
                            <h1 className='text-blue-500 mr-12'>Data Design GitHub Page</h1>
                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Assign To:</label>
                                <select className='w-[100%] px-3 py-1 border border-neutral-300'>
                                    <option>@</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Start - End date</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date'></input>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Comments</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text'></input>
                            </div>
                        </div>

                        <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
                            <h1 className='text-blue-500 mr-9'>API Source Code in GitHub</h1>
                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Assign To:</label>
                                <select className='w-[100%] px-3 py-1 border border-neutral-300'>
                                    <option>@</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Start - End date</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date'></input>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Comments</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text'></input>
                            </div>
                        </div>


                        <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
                            <h1 className='text-blue-500 mr-5'>Populate Test data in GitHub</h1>
                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Assign To:</label>
                                <select className='w-[100%] px-3 py-1 border border-neutral-300'>
                                    <option>@</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Start - End date</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date'></input>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Comments</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text'></input>
                            </div>
                        </div>




                        <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
                            <h1 className='text-blue-500 mr-20'>Junit5 Test in GitHub</h1>
                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Assign To:</label>
                                <select className='w-[100%] px-3 py-1 border border-neutral-300'>
                                    <option>@</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Start - End date</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date'></input>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Comments</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text'></input>
                            </div>
                        </div>




                        <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
                            <h1 className='text-blue-500 mr-1'>Cucumber BDD tests in GitHub</h1>
                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Assign To:</label>
                                <select className='w-[100%] px-3 py-1 border border-neutral-300'>
                                    <option>@</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Start - End date</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date'></input>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Comments</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text'></input>
                            </div>
                        </div>



                        <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
                            <h1 className='text-blue-500 mr-4'>Code Review with Tech Lead</h1>
                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Assign To:</label>
                                <select className='w-[100%] px-3 py-1 border border-neutral-300'>
                                    <option>@</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Start - End date</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date'></input>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Comments</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text'></input>
                            </div>
                        </div>


                        <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
                            <h1 className='text-blue-500 mr-12'>Actual UI-API Integration</h1>
                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Assign To:</label>
                                <select className='w-[100%] px-3 py-1 border border-neutral-300'>
                                    <option>@</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Start - End date</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date'></input>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Comments</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text'></input>
                            </div>
                        </div>


                        <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
                            <h1 className='text-blue-500 mr-8'>Branch Merge after Review</h1>
                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Assign To:</label>
                                <select className='w-[100%] px-3 py-1 border border-neutral-300'>
                                    <option>@</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Start - End date</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date'></input>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Comments</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text'></input>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-end p-4'>
                    <div className='flex gap-4 text-lg'>
                        <button className='w-28 h-10 border'>Cancel</button>
                        <button className='w-28 h-10 border bg-blue-500 text-white'>Save</button>
                    </div>
                </div>
            </form>







            {/* 4.CI/CD/TEST */}
            <form>

                <div className='flex w-[100%] flex-col items-center shrink-0  gap-8 bg-white mb-4'>
                    <div className='w-[100%] px-6 py-4  flex items-center  justify-between border-y border-b-neutral-300 border border-t-0 border-x-0'>
                        <div className='text-pink-300 text-xl non-italic font-medium leading-normal '>4.CI/CD/TEST</div>
                        <div className='text-blue-500'>View More</div>
                    </div>

                    <div className='flex px-6 items-start self-stretch w-[100%] gap-4 border-y border-t-neutral-300 border-b-0'>
                        <div className='flex flex-col items-start w-[50%]  gap-4 '>
                            <label className=' text-blue-400 text-sm font-normal leading-snug'>Assign To:</label>
                            <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' placeholder='example' />
                        </div>

                        <div className='flex flex-col items-start w-[50%]  gap-4'>
                            <label className=' text-blue-400 text-sm font-normal leading-snug'>Description:</label>
                            <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' placeholder='example' />
                        </div>
                    </div>
                </div>

                {/* Actual Development Sub-Stage Details */}
                <div className='w-[100%] py-2 bg-white'>
                    <div className=' w-[95%] flex px-6 py-4 flex-col items-start border-b-neutral-300 border border-t-0 border-x-0 bg-white mt-2 text-pink-300 text-xl font-medium leading-normal'>CI/CD Sub-Stage Details</div>
                    <div className='w-[95%]'>


                        <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
                            <h1 className='text-blue-500 mr-20'>Create CI/CD Pipeline</h1>
                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Assign To:</label>
                                <select className='w-[100%] px-3 py-1 border border-neutral-300'>
                                    <option>@</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Start - End date</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date'></input>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Comments</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text'></input>
                            </div>
                        </div>

                        <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
                            <h1 className='text-blue-500 mr-9'>Create Kubernetes Operator</h1>
                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Assign To:</label>
                                <select className='w-[100%] px-3 py-1 border border-neutral-300'>
                                    <option>@</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Start - End date</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date'></input>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Comments</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text'></input>
                            </div>
                        </div>


                        <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
                            <h1 className='text-blue-500 mr-3'>Link API With Github and Netlifi</h1>
                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Assign To:</label>
                                <select className='w-[100%] px-3 py-1 border border-neutral-300'>
                                    <option>@</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Start - End date</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date'></input>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Comments</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text'></input>
                            </div>
                        </div>




                        <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
                            <h1 className='text-blue-500 '>Upload Test Result in S# Website</h1>
                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Assign To:</label>
                                <select className='w-[100%] px-3 py-1 border border-neutral-300'>
                                    <option>@</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Start - End date</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date'></input>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Comments</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text'></input>
                            </div>
                        </div>




                        <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
                            <h1 className='text-blue-500'>Upload Test env URL in Netlifi site</h1>
                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Assign To:</label>
                                <select className='w-[100%] px-3 py-1 border border-neutral-300'>
                                    <option>@</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Start - End date</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date'></input>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Comments</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text'></input>
                            </div>
                        </div>



                        <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
                            <h1 className='text-blue-500 mr-28'>Stage after review</h1>
                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Assign To:</label>
                                <select className='w-[100%] px-3 py-1 border border-neutral-300'>
                                    <option>@</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Start - End date</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date'></input>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Comments</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text'></input>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='flex items-center justify-end p-4'>
                    <div className='flex gap-4 text-lg'>
                        <button className='w-28 h-10 border'>Cancel</button>
                        <button className='w-28 h-10 border bg-blue-500 text-white'>Save</button>
                    </div>
                </div>
            </form>




            {/* 5.Stage / Release */}
            <form>
                <div className='flex w-[100%] flex-col items-center shrink-0  gap-8 bg-white mb-4'>
                    <div className='w-[100%] px-6 py-4  flex items-center  justify-between border-y border-b-neutral-300 border border-t-0 border-x-0'>
                        <div className='text-pink-300 text-xl non-italic font-medium leading-normal '>5.Stage / Release</div>
                        <div className='text-blue-500'>View More</div>
                    </div>

                    <div className='flex px-6 items-start self-stretch w-[100%] gap-4 border-y border-t-neutral-300 border-b-0'>
                        <div className='flex flex-col items-start w-[50%]  gap-4 '>
                            <label className=' text-blue-400 text-sm font-normal leading-snug'>Assign To:</label>
                            <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' placeholder='example' />
                        </div>

                        <div className='flex flex-col items-start w-[50%]  gap-4'>
                            <label className=' text-blue-400 text-sm font-normal leading-snug'>Description:</label>
                            <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' placeholder='example' />
                        </div>
                    </div>
                </div>

                {/* Mock Development Sub-Stage Details */}

                <div className='w-[100%] py-2 bg-white'>
                    <div className=' w-[95%] flex px-6 py-4 flex-col items-start border-b-neutral-300 border border-t-0 border-x-0 bg-white mt-2 text-pink-300 text-xl font-medium leading-normal'>Stage / Release Sub-Stage Details</div>
                    <div className='w-[95%]'>

                        <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
                            <h1 className='text-blue-500 mr-12'>Stage Test and Review</h1>
                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Assign To:</label>
                                <select className='w-[100%] px-3 py-1 border border-neutral-300'>
                                    <option>@</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Start - End date</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date'></input>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Comments</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text'></input>
                            </div>
                        </div>


                        <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
                            <h1 className='text-blue-500 mr-24'>Promote to Prod</h1>
                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Assign To:</label>
                                <select className='w-[100%] px-3 py-1 border border-neutral-300'>
                                    <option>@</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Start - End date</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date'></input>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Comments</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text'></input>
                            </div>
                        </div>


                        <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
                            <h1 className='text-blue-500 mr-8'>API Security Test in Prod</h1>
                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Assign To:</label>
                                <select className='w-[100%] px-3 py-1 border border-neutral-300'>
                                    <option>@</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Start - End date</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date'></input>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Comments</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text'></input>
                            </div>
                        </div>


                        <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
                            <h1 className='text-blue-500'>Create/Update Release Note</h1>
                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Assign To:</label>
                                <select className='w-[100%] px-3 py-1 border border-neutral-300'>
                                    <option>@</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Start - End date</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date'></input>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Comments</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text'></input>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='flex items-center justify-end p-4'>
                    <div className='flex gap-4 text-lg'>
                        <button className='w-28 h-10 border'>Cancel</button>
                        <button className='w-28 h-10 border bg-blue-500 text-white'>Save</button>
                    </div>
                </div>
            </form>





            {/* 6.Publish / Operate */}
            <form>
                <div className='flex w-[100%] flex-col items-center shrink-0  gap-8 bg-white mb-4'>
                    <div className='w-[100%] px-6 py-4  flex items-center  justify-between border-y border-b-neutral-300 border border-t-0 border-x-0'>
                        <div className='text-pink-300 text-xl non-italic font-medium leading-normal '>6.Publish / Operate</div>
                        <div className='text-blue-500'>View More</div>
                    </div>

                    <div className='flex px-6 items-start self-stretch w-[100%] gap-4 border-y border-t-neutral-300 border-b-0'>
                        <div className='flex flex-col items-start w-[50%]  gap-4 '>
                            <label className=' text-blue-400 text-sm font-normal leading-snug'>Assign To:</label>
                            <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' placeholder='example' />
                        </div>

                        <div className='flex flex-col items-start w-[50%]  gap-4'>
                            <label className=' text-blue-400 text-sm font-normal leading-snug'>Description:</label>
                            <input type='text' className='w-[100%] h=[1.375rem] p-1 border border-neutral-300 rounded-sm' placeholder='example' />
                        </div>
                    </div>
                </div>

                {/* Mock Development Sub-Stage Details */}

                <div className='w-[100%] py-2 bg-white'>
                    <div className=' w-[95%] flex px-6 py-4 flex-col items-start border-b-neutral-300 border border-t-0 border-x-0 bg-white mt-2 text-pink-300 text-xl font-medium leading-normal'>Publish / Operate Sub-Stage Details</div>
                    <div className='w-[95%]'>

                        <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
                            <h1 className='text-blue-500 '>Stage Test and Review</h1>
                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Assign To:</label>
                                <select className='w-[100%] px-3 py-1 border border-neutral-300'>
                                    <option>@</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Start - End date</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date'></input>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Comments</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text'></input>
                            </div>
                        </div>


                        <div className='flex items-center justify-around shadow-sm shadow-neutral-300 w-[100%]'>
                            <h1 className='text-blue-500 mr-12'>Promote to Prod</h1>
                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Assign To:</label>
                                <select className='w-[100%] px-3 py-1 border border-neutral-300'>
                                    <option>@</option>
                                </select>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Start - End date</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='date'></input>
                            </div>

                            <div className='flex flex-col gap-2 w-[25%]'>
                                <label className='w-[100%]'>Comments</label>
                                <input className='w-[100%] px-3 py-1 border border-neutral-300' type='text'></input>
                            </div>
                        </div>


                    </div>
                </div>
                <div className='flex items-center justify-end p-4'>
                    <div className='flex gap-4 text-lg'>
                        <button className='w-28 h-10 border'>Cancel</button>
                        <button className='w-28 h-10 border bg-blue-500 text-white'>Save</button>
                    </div>
                </div>
            </form>






        </div>
    )
}

export default newform