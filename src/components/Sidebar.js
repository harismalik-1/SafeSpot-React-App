import './Sidebar.css';
import Logo from './Logo.svg'
import React, { useState, useEffect } from 'react';
// import file1 from './fall_value1.txt';
// import file2 from './fall_value2.txt';
// import file3 from './fall_value3.txt';
// import file4 from './fall_value4.txt';

const fs = require('fs')
// const axios = require('axios').default();

export default function Sidebar() {

    
        // const intervalId = setInterval(() => {
        //   readFile('/Users/vikramnarra/SafeSpot-CV-Model-main/fall_value1.txt');
        //   readFile('/Users/vikramnarra/SafeSpot-CV-Model-main/fall_value2.txt');
        //   readFile('/Users/vikramnarra/SafeSpot-CV-Model-main/fall_value3.txt');
        //   readFile('/Users/vikramnarra/SafeSpot-CV-Model-main/fall_value4.txt');
        // }, 1000);
    


    const [current, setCurrent] = useState(1)


    const data = [
        {
            name: "Vikram",
            age: 457,
            room: "4",
            floor: "1",
            url: "http://127.0.0.1:8000/video1",
            style: "border-radius: 20px 20px 0 0;",
            id: ": 12",
            hasFalled: false,
        },
        {
            name: "Haris",
            age: 13,
            room: "5",
            floor: "2",
            url: "http://127.0.0.1:8000/video2",
            id: ": 13",
            style: "border-radius: 20px 20px 0 0;",
            hasFalled: false,

        },
        {
            name: "Ana",
            age: 23,
            room: "6",
            floor: "3",
            url: "http://127.0.0.1:8000/video3",
            id: ": 08",
            style: "border-radius: 20px 20px 0 0;",
            hasFalled: false,

        }, 
        {
            name: "Asad",
            age: 45,
            room: "7",
            floor: "4",
            url: "http://127.0.0.1:8000/video4",
            id: ": 12",
            style: "border-radius: 20px 20px 0 0;",
            hasFalled: false,

        },
        {
            name: "Jake",
            age: 32,
            room: "5",
            floor: "4",
            url: "http://127.0.0.1:8000/video5",
            id: ": 15",
            hasFalled: false,

        }
    ]


  return (
    <div className='App'>
        <div>
        <img src={Logo} onClick={(e) => setCurrent(-1)} className='Logo'/>

        </div>
        <div className="sidebar">
            {data[0].hasFalled ? 
            <button className="red" onClick={(e) => setCurrent(0)}>
                <div className='id inline'>id{data[0].id}</div>
                <div className='name inline'>{data[0].name}</div>
            </button>
            : 
            <button className="roomcell" onClick={(e) => setCurrent(0)}>
                <div className='id inline'>id{data[0].id}</div>
                <div className='name inline'>{data[0].name}</div>
            </button>}

            {data[1].hasFalled ? 
            <button className="red" onClick={(e) => setCurrent(1)}>
                <div className='id inline'>id{data[1].id}</div>
                <div className='name inline'>{data[1].name}</div>
            </button>
            : 
            <button className="roomcell" onClick={(e) => setCurrent(1)}>
                <div className='id inline'>id{data[1].id}</div>
                <div className='name inline'>{data[1].name}</div>
            </button>}
            {data[2].hasFalled ? 
            <button className="red" onClick={(e) => setCurrent(2)}>
                <div className='id inline'>id{data[2].id}</div>
                <div className='name inline'>{data[2].name}</div>
            </button>
            : 
            <button className="roomcell" onClick={(e) => setCurrent(2)}>
                <div className='id inline'>id{data[2].id}</div>
                <div className='name inline'>{data[2].name}</div>
            </button>}


            {data[3].hasFalled ? 
            <button className="red" onClick={(e) => setCurrent(3)}>
                <div className='id inline'>id{data[3].id}</div>
                <div className='name inline'>{data[3].name}</div>
            </button>
            : 
            <button className="roomcell" onClick={(e) => setCurrent(3)}>
                <div className='id inline'>id{data[3].id}</div>
                <div className='name inline'>{data[3].name}</div>
            </button>}
            {data[3].hasFalled ? 
            <button className="red" onClick={(e) => setCurrent(4)}>
                <div className='id inline'>id{data[4].id}</div>
                <div className='name inline'>{data[4].name}</div>
            </button>
            : 
            <button className="roomcell" onClick={(e) => setCurrent(4)}>
                <div className='id inline'>id{data[4].id}</div>
                <div className='name inline'>{data[4].name}</div>
            </button>}

        </div>
        {current != -1 &&
        <div className='alert'>
            <div className='project'>

                    <img src={data[current].url} alt="" />
            
                <div className='content'>
                <div className="leftContent">
                    <div className='semiText'>Name: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data[current].name}</div>
                    <div className='semiText'>Age: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data[current].age}</div>
                    


                </div>
                <div className="rightContent">
                <div className='semiText'>Room No: &nbsp;{data[current].room}</div>
                    <div className='semiText'>Floor: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data[current].floor}</div>
                    <div className='semiText'></div>

                </div>
            
                </div>
            </div>
        </div>}
    </div>

  );
}

