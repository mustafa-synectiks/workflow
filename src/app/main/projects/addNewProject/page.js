'use client';
// import React, { useState } from 'react';
// import Link from 'next/link';
// import {
//     AccountBookFilled,
//     BellFilled,
//     ProjectFilled,
//     IdcardFilled,
//     SignalFilled,
//     VideoCameraOutlined,
//     RightOutlined,
//     LeftOutlined,
//     DownOutlined,
// } from '@ant-design/icons';
// import { Space, Layout, Menu, Button,  Typography, Dropdown, message, } from 'antd';

// const { Title, Paragraph, Text } = Typography;
// export default function ProjectForm() {
//     const [collapsed, setCollapsed] = useState(false);

//     const toggleSider = () => {
//         setCollapsed(!collapsed);
//     };
//     const items = [
//         {
//             label: 'All Projects',
//             key: '1',
//         },
//         {
//             label: 'In Progress',
//             key: '1',
//         },
//         {
//             label: 'Completed',
//             key: '3',
//         },

//     ];
//     const handleMenuClick = (e) => {
//         message.info('Click on menu item.');
//         console.log('click', e);
//     };
//     const menuProps = {
//         items,
//         onClick: handleMenuClick,
//     };
//     return (
//         <>

//                     <div style={{ margin: '18px 16px', padding: '0px 10px', minHeight: 280 }}>
//                         <h1 className='ml-2 uppercase text-3xl'>workflow Management</h1>
//                         <div className='bg-white flex flex-row justify-between items-center py-2 px-5 mb-5'>
//                             <Title level={3}>Add New Project</Title>
//                             {/* <div><Button> All Project</Button></div> */}
//                             <Dropdown menu={menuProps}>
//                                 <Button>
//                                     <Space>
//                                         All Project
//                                         <DownOutlined />
//                                     </Space>
//                                 </Button>
//                             </Dropdown>
//                         </div>

//                         {/* Shows a Details of Project */}
//                         <section className="relative ProjectFormFlexingHeroSec pt-5 pb-16">
//                             <form className="ProjectFormFlex">
//                                 <div className="ProjectFormSectioAdj">
//                                     <label className="PFDetailsList" htmlFor="Project">
//                                         Project Name:
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="name"
//                                         placeholder="Project name"
//                                         className="inputSpaceForm"
//                                     />
//                                 </div>

//                                 <div className="ProjectFormSectioAdj">
//                                     <label className="PFDetailsList" htmlFor="Project">
//                                         Project Manager :
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="name"
//                                         placeholder="Admin name"
//                                         className="inputSpaceForm"
//                                     />
//                                 </div>

//                                 <div className="ProjectFormSectioAdj">
//                                     <label className="PFDetailsList" htmlFor="Project">
//                                         Project Description :
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="name"
//                                         placeholder="Description.."
//                                         className="inputSpaceForm"
//                                     />
//                                 </div>
//                                 <div className="ProjectFormSectioAdj">
//                                     <label className="PFDetailsList" htmlFor="Project">
//                                         Add Resources :
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="name"
//                                         placeholder="Please enter name"
//                                         className="inputSpaceFormAddResouces"
//                                     />
//                                 </div>

//                                 <div className="ProjectFormSectioAdj">
//                                     <label className="PFDetailsList" htmlFor="Project">
//                                         Project Department :
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id=" name"
//                                         placeholder=" Please describe your customer service, internal customers directly.."
//                                         className="inputSpaceFormAddResouces"
//                                     />
//                                 </div>

//                                 <div className="ProjectFormSectioAdj">
//                                     <label className="PFDetailsList" htmlFor="Project">
//                                         Project Duration :
//                                     </label>
//                                     <input type="date" id="name" className="inputSpaceForm" />
//                                 </div>
//                                 <div className="ProjectFormSectioAdj">
//                                     <label className="PFDetailsList" htmlFor="Project">
//                                         Budget <span>(optional)</span> :
//                                     </label>
//                                     <input
//                                         type="text"
//                                         id="name"
//                                         className="inputSpaceForm"
//                                         placeholder="...."
//                                     />
//                                 </div>
//                             </form>
//                             <Button className="absolute right-5 bottom-2 bg-blue-500 text-white my-4"><Link href='/main/projects/addStage'>Next</Link></Button>
//                         </section>
//                     </div>

//         </>
//     );
// }

import React, { useState } from 'react';
import Link from "next/link";
import NavLink from "@/app/nav-link";
import { Button } from "antd";
import axios from 'axios';
export default function ProjectForm() {
    const [formData, setFormData] = useState({
        projectName: '',
        projectManager: '',
        projectDescription: '',
        projectDepartment: '',
        startDate: '',
        endDate: '',
    });
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Make a POST request using Axios (replace the API endpoint)
            const response = await axios.post('https://23t3zw1dvd.execute-api.us-east-1.amazonaws.com/dev/project', formData);

            // Handle the response (you can log it or perform other actions)
            console.log('Project added successfully:', response.data);

            // Reset the form data
            setFormData({
                projectName: '',
                projectManager: '',
                projectDescription: '',
                projectDepartment: '',
                startDate: '',
                endDate: '',
            });
        } catch (error) {
            console.error('Error adding project:', error.message);
        }
    };

    return (
        <>
            {/* This section shows Header of Adding New Projects   */}
            <section
                className="flex flex-row w-[1218] h-14 px-3 py-6 justify-between items-center bg-white
 mb-4"
            >
                <div className="text-black font-sans text-xl font-semibold not-italic leading-7 w-40  flex items-center  gap-1 h-10">
                    Add New Project
                </div>
                <div className="flex flex-row items-center justify-center bg-white border rounded-sm shadow-sm border-slate-200   w-28 h-8 px-1 py-4 flex-shrink-0 text-black font-sans  text-sm font-normal leading-snug gap-2">
                    All Project{" "}
                    <span className="w-2 h-3">
                        <img src="/Images/downarrow.svg" />{" "}
                    </span>{" "}
                </div>
            </section>
            {/* Shows a Details of Project */}
            <section className="flex flex-col items-center flex-shrink-0 justify-between w-auto py-1 bg-white ">
                <form className="flex flex-col px-6 py-5 items-center justify-center gap-3 " onSubmit={handleSubmit}>
                    <div className="flex flex-row items-center justify-between">
                        <label
                            className="text-black  text-left font-sans text-base font-normal not-italic leading-6 w-40 h-6"
                            for="Project"

                        >
                            Project Name:
                        </label>
                        <input
                            type="text" name="projectName" value={formData.projectName} onChange={handleChange}
                            id="name"
                            placeholder="Project name"
                            className="text-slate-500 font-sans text-sm font-normal not-italic leading-6 pb-1 self-stretch items-center flex-1 border rounded-sm border-slate-200 bg-slate-100 shadow px-1 py-1 h-8 w-96 m-1"
                        />
                    </div>

                    <div className="flex flex-row items-center justify-between">
                        <label
                            className="text-black  text-left font-sans text-base font-normal not-italic leading-6 w-40 h-6"
                            for="Project"
                        >
                            Project Manager :
                        </label>
                        <input
                            type="text" name="projectManager" value={formData.projectManager} onChange={handleChange}
                            id="name"
                            placeholder="Admin name"
                            className="text-slate-500 font-sans text-sm font-normal not-italic leading-6 pb-1 self-stretch items-center flex-1 border rounded-sm border-slate-200 bg-slate-100 shadow px-1 py-1 h-8 w-96 m-1"
                        />
                    </div>

                    <div className="flex flex-row items-baseline justify-between">
                        <label
                            className="text-black  text-left font-sans text-base font-normal not-italic leading-6 w-40 h-6"
                            for="Project"
                        >
                            Project Description :
                        </label>
                        <textarea name="projectDescription" value={formData.projectDescription} onChange={handleChange}
                            id="name"
                            placeholder="Description.."
                            className="text-slate-500 font-sans text-sm font-normal not-italic leading-6 pb-1 self-stretch items-center flex-1 border rounded-sm border-slate-200 bg-slate-100 shadow px-1 py-1 h-28 w-96 m-1"
                        />
                    </div>
                    {/* <div className="flex flex-row items-center justify-between">
                        <label
                            className="text-black  text-left font-sans text-base font-normal not-italic leading-6 w-40 h-6"
                            for="Project"
                        >
                            Add Resources :
                        </label>
                        <textarea
                            type="text"
                            id="name"
                            placeholder="Please enter name"
                            className="text-slate-500 font-sans text-sm font-normal not-italic leading-6  self-stretch items-center flex-1 border  rounded-sm  border-slate-200 bg-slate-100 shadow px-1 py-1 h-20 w-96 m-1"
                        />
                    </div> */}

                    <div className="flex flex-row items-center justify-between">
                        <label
                            className="text-black  text-left font-sans text-base font-normal not-italic leading-6 w-40 h-6"
                            for="Project"
                        >
                            Project Department :
                        </label>
                        <input
                            type="text" name="projectDepartment" value={formData.projectDepartment} onChange={handleChange}
                            id=" name"
                            placeholder=" Please describe your customer service, internal customers directly.."
                            className="text-slate-500 font-sans text-sm font-normal not-italic leading-6  self-stretch items-center flex-1 border  rounded-sm  border-slate-200 bg-slate-100 shadow px-1 py-1 h-8 w-96 m-1"
                        />
                    </div>

                    <div className="flex flex-row items-center justify-between">
                        <label
                            className="text-black  text-left font-sans text-base font-normal not-italic leading-6 w-40 h-6"
                            for="Project"
                        >
                            Project Duration :
                        </label>
                        <div>
                            <input type="date" name="startDate" value={formData.startDate} onChange={handleChange}
                                id="name"
                                className="text-slate-500 font-sans text-sm font-normal not-italic leading-6 pb-1 self-stretch items-center flex-1 border rounded-sm border-slate-200 bg-slate-100 shadow px-1 py-1 h-8 w-[184px] m-1"
                            />
                            <span>-</span>
                            <input
                                type="date" name="endDate" value={formData.endDate} onChange={handleChange}
                                id="name"
                                className="text-slate-500 font-sans text-sm font-normal not-italic leading-6 pb-1 self-stretch items-center flex-1 border rounded-sm border-slate-200 bg-slate-100 shadow px-1 py-1 h-8 w-[184px] m-1"
                            />
                        </div>
                    </div>
                    <div className="flex flex-row items-center justify-between">
                        <label
                            className="text-black  text-left font-sans text-base font-normal not-italic leading-6 w-40 h-6"
                            for="Project"
                        >
                            Budget <span>(optional)</span> :
                        </label>
                        <input
                            type="text"
                            id="name"
                            className="text-slate-500 font-sans text-sm font-normal not-italic leading-6 pb-1 self-stretch items-center flex-1 border rounded-sm border-slate-200 bg-slate-100 shadow px-1 py-1 h-8 w-96 m-1"
                            placeholder="...."
                        />
                    </div>
                </form>
                <Button
                    type="submit"
                    className="ml-[90%] m-10 px-1 py-1 justify-center items-center rounded-sm border border-blue-500 bg-blue-500 shadow-sm w-16 h-8 font-sans text-center text-white text-sm font-normal not-italic leading-3 flex-row-reverse"
                >Save
                </Button>
                    <Link className='px-6 py-3 bg-blue-500'
                    href="/main/projects/resourcePool">Next</Link>
            </section>
        </>
    );
}
