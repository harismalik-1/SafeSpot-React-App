import './Alert.css'
// import Sample from './arrangehorizontalcircle.svg'


export default function Alert( props ){
    // const handleClick = () => {
    //     console.log("hmmm")
    //   }
    return (
        <div className='alert'>
            <div className='project'>
                {/* <button onClick={handleClick()}>Hello</button> */}
                {/* <div className="room"> */}
                {/* <div className='temp1 semiText2'>Room #1</div> */}
                {/* <img className="temp1" src={Sample}/> */}
                {/* </div> */}
                {/* <div className='grayCircle'></div> */}
                <iframe className="vid" title={Math.random()} src="//your-camera-1-stream-url"></iframe>
            
                <div className='content'>
                <div className="leftContent">
                    <div className='semiText'>Name: {props.name}</div>
                    <div className='semiText'>Age: &nbsp;&nbsp;&nbsp;&nbsp;{props.age}</div>
                    <div className='semiText'>Room No: &nbsp;&nbsp;&nbsp;&nbsp;{props.age}</div>
                    <div className='semiText'>Floor: &nbsp;&nbsp;&nbsp;&nbsp;{props.age}</div>


                </div>
                <div className="rightContent">
                    <div className='semiText'>Medical Information:</div>
                    <div className='semiText'>{props.medicalInfo}</div>

                </div>
            
                </div>
            </div>
        </div>

    );
}

