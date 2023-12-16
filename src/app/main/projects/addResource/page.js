// 'use client'
// import React, { useEffect, useState } from 'react';
// import VirtualList from 'rc-virtual-list';
// import { Avatar, List, message } from 'antd';
// const fakeDataUrl =
//     'https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo';
// const ContainerHeight = 400;
// const addResources = () => {
//     const [data, setData] = useState([]);
//     const appendData = () => {
//         fetch(fakeDataUrl)
//             .then((res) => res.json())
//             .then((body) => {
//                 setData(data.concat(body.results));
//                 message.success(`${body.results.length} more items loaded!`);
//             });
//     };
//     useEffect(() => {
//         appendData();
//     }, []);
//     const onScroll = (e) => {
//         if (e.currentTarget.scrollHeight - e.currentTarget.scrollTop === ContainerHeight) {
//             appendData();
//         }
//     };
//     return (
//         <List>
//             <VirtualList
//                 data={data}
//                 height={ContainerHeight}
//                 itemHeight={47}
//                 itemKey="email"
//                 onScroll={onScroll}
//             >
//                 {(item) => (
//                     <List.Item key={item.email}>
//                         <List.Item.Meta
//                             avatar={<Avatar src={item.picture.large} />}
//                             title={<a href="https://ant.design">{item.name.last}</a>}
//                             description={item.email}
//                         />
//                         <div>Content</div>
//                     </List.Item>
//                 )}
//             </VirtualList>
//         </List>
//     );
// };
// export default addResources;
export default function ProjectAddedResources() {
    return (
        <>
            <div className="flex flex-row ">
                <section className="">
                    <div className="text-black font-sans text-lg  not-italic font-semibold leading-7 bg-white w-[87vw] flex justify-between items-center  px-4 py-5 flex-shrink-0 m-2  ">
                        Added New Project
                    </div>

                    <section className="h-auto w-[99%] flex flex-col items-start justify-center flex-shrink-0 self-stretch rounded-sm bg-white  gap-1   m-2 px-4 py-2 ">
                        {/* Added Resources- Profile Section */}
                        <div className=" bg-white w-[80%]  h-auto shadow-sm border-r-slate-900 flex-shrink-0 rounded-lg p-5 gap-12 ">
                            <div className=" flex flex-row justify-between items-center gap-9 py-3 mb-5">
                                {/*Add Resource txt */}
                                <div className="text-black  font-sans text-xl font-bold not-italic">
                                    Added Resources
                                </div>
                                <div className="flex flex-row justify-end gap-3 items-center">
                                    <img src="\Images\AddResoucesImages\pluswhite.png" />
                                    <img src="\Images\AddResoucesImages\editpen.png" />
                                </div>
                            </div>

                            {/* Project Manger */}
                            <div
                                className="flex  flex-wrap w-[95%] bg-white border border-slate-100 flex-shrink-0    shadow-lg p-5 shadow-slate-100   border-solid border-neutral-4 bg-neutral-1
"
                            >
                                <div className=" text-black font-sans text-lg not-italic font-semibold">
                                    Project Manager
                                </div>
                                <div className="w-[100%] bg-slate-200 h-[1px] my-3"></div>
                                {/* Profile's Project Resources */}
                                <div className="flex flex-wrap gap-5 m-7">
                                    <div className="w-40 h-40 flex-shrink-0 rounded-lg border-2 border-white bg-white shadow-md  flex flex-col  items-center justify-center gap-1">
                                        <div>
                                            <img src="\Images\AddResoucesImages\profile1.png" />
                                        </div>
                                        <div className="text-black font-sans text-lg not-italic font-semibold leading-normal">
                                            Alex Ben
                                        </div>
                                        <div className="text-slate-400 font-sans text-sm not-italic font-normal leading-normal">
                                            Project Manager
                                        </div>
                                    </div>
                                    <div className="w-40 h-40 flex-shrink-0 rounded-lg border-2 border-white bg-white shadow-md  flex flex-col  items-center justify-center gap-1">
                                        <div>
                                            <img src="\Images\AddResoucesImages\profile1.png" />
                                        </div>
                                        <div className="text-black font-sans text-lg not-italic font-semibold leading-normal">
                                            Alex Ben
                                        </div>
                                        <div className="text-slate-400 font-sans text-sm not-italic font-normal leading-normal">
                                            Project Manager
                                        </div>
                                    </div>
                                    <div className="w-40 h-40 flex-shrink-0 rounded-lg border-2 border-white bg-white shadow-md  flex flex-col  items-center justify-center gap-1">
                                        <div>
                                            <img src="\Images\AddResoucesImages\profile1.png" />
                                        </div>
                                        <div className="text-black font-sans text-lg not-italic font-semibold leading-normal">
                                            Alex Ben
                                        </div>
                                        <div className="text-slate-400 font-sans text-sm not-italic font-normal leading-normal">
                                            Project Manager
                                        </div>
                                    </div>
                                    <div className="w-40 h-40 flex-shrink-0 rounded-lg border-2 border-white bg-white shadow-md  flex flex-col  items-center justify-center gap-1">
                                        <div>
                                            <img src="\Images\AddResoucesImages\profile1.png" />
                                        </div>
                                        <div className="text-black font-sans text-lg not-italic font-semibold leading-normal">
                                            Alex Ben
                                        </div>
                                        <div className="text-slate-400 font-sans text-sm not-italic font-normal leading-normal">
                                            Project Manager
                                        </div>
                                    </div>
                                    <div className="w-40 h-40 flex-shrink-0 rounded-lg border-2 border-white bg-white shadow-md  flex flex-col  items-center justify-center gap-1">
                                        <div>
                                            <img src="\Images\AddResoucesImages\profile1.png" />
                                        </div>
                                        <div className="text-black font-sans text-lg not-italic font-semibold leading-normal">
                                            Alex Ben
                                        </div>
                                        <div className="text-slate-400 font-sans text-sm not-italic font-normal leading-normal">
                                            Project Manager
                                        </div>
                                    </div>
                                </div>
                                {/* Profile's Project Resources */}
                            </div>
                            {/* UI Developer */}
                            <div
                                className="flex  flex-wrap w-[95%] bg-white flex-shrink-0 border-slate-100 shadow-md  p-5 border border-solid border-neutral-4 bg-neutral-1
 "
                            >
                                <div className=" text-black font-sans text-lg not-italic font-semibold">
                                    UI Developer
                                </div>
                                <div className="w-[100%] bg-slate-200 h-[1px] my-3"></div>
                                {/* Profile's Project Resources */}
                                <div className="flex flex-wrap gap-5 m-7">
                                    <div className="w-40 h-40 flex-shrink-0 rounded-lg border-2 border-white bg-white shadow-md  flex flex-col  items-center justify-center gap-1">
                                        <div>
                                            <img src="\Images\AddResoucesImages\profile1.png" />
                                        </div>
                                        <div className="text-black font-sans text-lg not-italic font-semibold leading-normal">
                                            Alex Ben
                                        </div>
                                        <div className="text-slate-400 font-sans text-sm not-italic font-normal leading-normal">
                                            UI Developer
                                        </div>
                                    </div>
                                    <div className="w-40 h-40 flex-shrink-0 rounded-lg border-2 border-white bg-white shadow-md  flex flex-col  items-center justify-center gap-1">
                                        <div>
                                            <img src="\Images\AddResoucesImages\profile1.png" />
                                        </div>
                                        <div className="text-black font-sans text-lg not-italic font-semibold leading-normal">
                                            Alex Ben
                                        </div>
                                        <div className="text-slate-400 font-sans text-sm not-italic font-normal leading-normal">
                                            UI Developer
                                        </div>
                                    </div>
                                    <div className="w-40 h-40 flex-shrink-0 rounded-lg border-2 border-white bg-white shadow-md  flex flex-col  items-center justify-center gap-1">
                                        <div>
                                            <img src="\Images\AddResoucesImages\profile1.png" />
                                        </div>
                                        <div className="text-black font-sans text-lg not-italic font-semibold leading-normal">
                                            Alex Ben
                                        </div>
                                        <div className="text-slate-400 font-sans text-sm not-italic font-normal leading-normal">
                                            UI Developer
                                        </div>
                                    </div>
                                    <div className="w-40 h-40 flex-shrink-0 rounded-lg border-2 border-white bg-white shadow-md  flex flex-col  items-center justify-center gap-1">
                                        <div>
                                            <img src="\Images\AddResoucesImages\profile1.png" />
                                        </div>
                                        <div className="text-black font-sans text-lg not-italic font-semibold leading-normal">
                                            Alex Ben
                                        </div>
                                        <div className="text-slate-400 font-sans text-sm not-italic font-normal leading-normal">
                                            UI Developer
                                        </div>
                                    </div>
                                    <div className="w-40 h-40 flex-shrink-0 rounded-lg border-2 border-white bg-white shadow-md  flex flex-col  items-center justify-center gap-1">
                                        <div>
                                            <img src="\Images\AddResoucesImages\profile1.png" />
                                        </div>
                                        <div className="text-black font-sans text-lg not-italic font-semibold leading-normal">
                                            Alex Ben
                                        </div>
                                        <div className="text-slate-400 font-sans text-sm not-italic font-normal leading-normal">
                                            UI Developer
                                        </div>
                                    </div>
                                </div>
                                {/* Profile's Project Resources */}
                            </div>
                            {/* UI Developoer */}
                            {/* UI Designer */}
                            <div
                                className="flex  flex-wrap w-[95%] bg-white flex-shrink-0 border-slate-100 shadow-md p-5 border border-solid border-neutral-4 bg-neutral-1
"
                            >
                                <div className=" text-black font-sans text-lg not-italic font-semibold">
                                    UI Designer
                                </div>
                                <div className="w-[100%] bg-slate-200 h-[1px] my-3"></div>
                                {/* Profile's Project Resources */}
                                <div className="flex flex-wrap gap-5 m-7">
                                    <div className="w-40 h-40 flex-shrink-0 rounded-lg border-2 border-white bg-white shadow-md  flex flex-col  items-center justify-center gap-1">
                                        <div>
                                            <img src="\Images\AddResoucesImages\profile1.png" />
                                        </div>
                                        <div className="text-black font-sans text-lg not-italic font-semibold leading-normal">
                                            Alex Ben
                                        </div>
                                        <div className="text-slate-400 font-sans text-sm not-italic font-normal leading-normal">
                                            UI Designer
                                        </div>
                                    </div>
                                    <div className="w-40 h-40 flex-shrink-0 rounded-lg border-2 border-white bg-white shadow-md  flex flex-col  items-center justify-center gap-1">
                                        <div>
                                            <img src="\Images\AddResoucesImages\profile1.png" />
                                        </div>
                                        <div className="text-black font-sans text-lg not-italic font-semibold leading-normal">
                                            Alex Ben
                                        </div>
                                        <div className="text-slate-400 font-sans text-sm not-italic font-normal leading-normal">
                                            UI Designer
                                        </div>
                                    </div>
                                    <div className="w-40 h-40 flex-shrink-0 rounded-lg border-2 border-white bg-white shadow-md  flex flex-col  items-center justify-center gap-1">
                                        <div>
                                            <img src="\Images\AddResoucesImages\profile1.png" />
                                        </div>
                                        <div className="text-black font-sans text-lg not-italic font-semibold leading-normal">
                                            Alex Ben
                                        </div>
                                        <div className="text-slate-400 font-sans text-sm not-italic font-normal leading-normal">
                                            UI Designer
                                        </div>
                                    </div>
                                    <div className="w-40 h-40 flex-shrink-0 rounded-lg border-2 border-white bg-white shadow-md  flex flex-col  items-center justify-center gap-1">
                                        <div>
                                            <img src="\Images\AddResoucesImages\profile1.png" />
                                        </div>
                                        <div className="text-black font-sans text-lg not-italic font-semibold leading-normal">
                                            Alex Ben
                                        </div>
                                        <div className="text-slate-400 font-sans text-sm not-italic font-normal leading-normal">
                                            UI Designer
                                        </div>
                                    </div>
                                    <div className="w-40 h-40 flex-shrink-0 rounded-lg border-2 border-white bg-white shadow-md  flex flex-col  items-center justify-center gap-1">
                                        <div>
                                            <img src="\Images\AddResoucesImages\profile1.png" />
                                        </div>
                                        <div className="text-black font-sans text-lg not-italic font-semibold leading-normal">
                                            Alex Ben
                                        </div>
                                        <div className="text-slate-400 font-sans text-sm not-italic font-normal leading-normal">
                                            UI Designer
                                        </div>
                                    </div>
                                    <div className="w-40 h-40 flex-shrink-0 rounded-lg border-2 border-white bg-white shadow-md  flex flex-col  items-center justify-center gap-1">
                                        <div>
                                            <img src="\Images\AddResoucesImages\profile1.png" />
                                        </div>
                                        <div className="text-black font-sans text-lg not-italic font-semibold leading-normal">
                                            Alex Ben
                                        </div>
                                        <div className="text-slate-400 font-sans text-sm not-italic font-normal leading-normal">
                                            UI Designer
                                        </div>
                                    </div>
                                </div>
                                {/* Profile's Project Resources */}
                            </div>
                            {/* UI Designer */}
                        </div>
                    </section>
                </section>
            </div>
        </>
    );
}

