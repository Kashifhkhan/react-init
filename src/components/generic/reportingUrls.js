import React, { Component } from 'react';

class ReportingUrls extends Component {
    render() {
        return (
            // <isloop items="${pdict.reportingURLs}" var="URL">
            //     <isinclude url="${URL}" />
            // </isloop>
            <div>
                {
                    this.props.urls.map(url => 
                       <span>${url}</span>
                    )
                }
                
            </div>
        );
    }
}

export default ReportingUrls;