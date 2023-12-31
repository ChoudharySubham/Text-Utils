import React,{useState} from 'react'

export default function About(props) {
    // const[myStyle,setMyStyle]= useState({
    //     color:'black',
    //     backgroundColor:'white'
    // })  

    let myStyle = {
        color: props.mode==='dark'?'white':'#042743',
        backgroundColor:props.mode==='dark'?'rgb(36 74 104)':'white'
    }
   
  return (
    <div classNameName='container'>
        <h1 className=" my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong>Analyze Your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                   <div className="accordion-body" style={myStyle}>
                        TextUtils give you a way to analyze your text quickly and efficiently. Be it word count, character count or
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body"style={myStyle}>
                      TextUtils is a free character counter tool that provide instant character count & word count statistics for a given text. TextUtils reports the no of words and and character. Thus it is suitable for writing text with word?character limit.   
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    <strong>Browser compatable</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    This word counter software work in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suitsbto count character in facebook, blog, books, excel documents, pdf document, essay, etc.
                    </div>
                </div>
            </div>
        </div>
        <div className="container my-3">
            {/* <button onClick={toggleStyle}type="button" className="btn btn-primary">{btnText}</button> */}
        </div>
    </div>
  )
}
