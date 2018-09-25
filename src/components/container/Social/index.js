import * as React from 'react';
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Social extends React.Component {

    visibilityHandler = () => {
        const node = ReactDOM.findDOMNode(this);
        const elemSocial = node.querySelector(".social-sharing");
        elemSocial.classList.toggle("active");
    }

    render() {
        return (
            <div className="social">
                <FontAwesomeIcon icon="ellipsis-v" onClick={this.visibilityHandler} />
                <div className="social-sharing">
                    <span><FontAwesomeIcon icon="share-alt" />Share</span>
                    <span><FontAwesomeIcon icon="shield-alt" />Claim this panel</span>
                    <span><FontAwesomeIcon icon="comment-alt" />Send Feedback</span>
                </div>
            </div>
        );
    }
}

export default Social;