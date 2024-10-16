import React from "react";

function About(props) {

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? '#2C3333' : 'white'
    }

    return (
        <div>
            <h1 style={myStyle}>About us</h1>
            <div className="accordion" id="accordionPanelsStayOpenExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne" style={myStyle}>
                            Analyze your text.
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                        <div className="accordion-body" style={myStyle}>
                            TextIfy give you a way to analyse your text quickly and efficiently. be it word count, character count or time required to read your text.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo" style={myStyle}>
                            Free to use.
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                        <div className="accordion-body" style={myStyle}>
                            Textify is a free character counter tool that provides instant character count and word count statistics for a given text. TextIfy report the number of words and character. thus it is suitable for writing text with word/ character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree" style={myStyle}>
                            Browser compatible.
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse">
                        <div className="accordion-body" style={myStyle}>
                            This word counter software works in any web browser such as Chrome, Firefox, Internet Explorer, Safari, Opera. its suits to count character in Facebook, blog, books, Excel document, PDF, documents, essay, etc.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;