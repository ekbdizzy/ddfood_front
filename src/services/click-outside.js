import ReactDOM from "react-dom";

const handleCLickOutside = (e, func) => {
    const domNode = ReactDOM.findDOMNode(this);
    if (!domNode || !domNode.contains(e.target)) {
        func()
    }
};

export default handleCLickOutside;
