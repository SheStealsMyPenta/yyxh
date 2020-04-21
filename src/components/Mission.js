import React, { Component } from 'react';

export default  class Mission extends Component {
  render() {
    let webData = this.props.webData;
    return (
      <section id="mission">
         <div className="row">
            <div className="twelve columns">
            <iframe id="goldendata_form_mm5jzi" src="https://jinshuju.net/f/mm5jzi?background=white&banner=hide&embedded=true" style={{width:"100%" ,frameborder:0, allowTransparency:"true", height:"1639"}}></iframe>
              { 
                webData.mission && webData.mission.map((item)=>{
                  return(
                    <div key={item.specialization} className="row item">
                       <div align='center' className="twelve columns">
                         
                       <h1><span>Mission</span></h1>
                          <br></br>
                          <p className="info">
                            {item.specialization}
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
      </section>
    );
  }
}