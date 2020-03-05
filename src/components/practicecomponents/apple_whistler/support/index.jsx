import React from 'react'

const SupportComponent = () => {
    return (
        <div className="container-fluid support_page">
            {/* row1 */}
            <div className="lg mar60 gotowhistler"> 
                <div className="col-8">
                    <h1>Getting Support on Whistler</h1>
                    <p>Compute is backed by round-the-clock operational support, a solutions team for best practices and guidance, 
                        and the overall community of Compute users.</p>
                </div>
                <div className="col-4">
                    <h5>System Status</h5>
                    <p><a href="http://whistler-perf.apple.com" target="_blank" >Go to whistler-perf.apple.com ›</a></p>
                </div>
            </div>
            {/* row2 */}
            <div className="lg mar60 filearadar">
                <div className="col-8">
                    <h4>Development Issues</h4>
                    <h5>File a radar</h5>
                    <br/>
                    <p>File a radar to <strong>ireporter | Whistler</strong> with a detailed description of your issue. Low-impact bug reports, 
                    feature requests, and usability feedback will be triaged within one week and backlogged for future consideration. Radars for 
                    regressions will be triaged and updated within an estimated two-day timeframe.</p>
                </div>
                <div className="col-4">
                <div><a href="rdar://new/problem/component=ireporter&amp;version=Whistler" className="btn btn-primary ">File a Radar</a></div>
                </div>
            </div>
            {/* row3 */}
            <div className="lg mar60 email_support">
                <div className="col-8">
                    <h5>Send an Email</h5>
                    <p>Send a detailed description of your issue including as much debugging information as you can disclose to the whistler web Support team at bthunga@apple.com.</p>
                </div>
                <div className="col-4">
                <a href="mailto:bthunga@apple.com" className="btn btn-primary ">Email Support</a>
                </div>
            </div>
        </div>
    )
}

export default SupportComponent; 