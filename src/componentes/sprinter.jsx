// import React from 'react'

const Sprinter = ({content},{title}) => {
    return (
        <>
            <section className='sectionWraper'>
                <div className='row' id='containerTitle'>
                    <div className="col bg-12 md-12 sm-12">
                        <p>{title}</p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col bg-6 md-12 sm-12' id='containerText'>
                        <p>{content}</p>
                    </div>
                    <div className='col bg-6 md-12 sm-12' id='containerImage'>
                    
                        <p>hello world</p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Sprinter;
