import React from 'react';

const FooterComponent = () => {
    let d = new Date();
    return(
        <footer className="footer">
            <div>Copyright © {d.getFullYear()} Apple Inc. All rights reserved..</div>
            <nav className="navbar_bottom">
                <ul>
                    <li className="delimeter"><a href="/compute/support/" className="abc" alt="crumb">Support</a></li>
                    <li><a href="rdar://new/problem/component=ireporter&amp;version=Whistler">File a Radar </a></li>
                </ul>
            </nav>
        </footer>
    )
}
export default FooterComponent