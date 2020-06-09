import React from 'react';

class ImagePopup extends React.Component {
    constructor() {
        super();
        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }
    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    setWrapperRef(node) {
        this.wrapperRef = node;
    }
    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
           this.props.closePopup();
        }
    }

    render() {
        return (
            <div ref={this.setWrapperRef} className="imagePopup">
                <img alt="Popup" src={process.env.PUBLIC_URL + this.props.image} />
            </div>
        )
    }
}

export default ImagePopup;