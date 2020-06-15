import React, {Component} from "react";
import './mobile-bottom-menu.scss';
import {connect} from 'react-redux';
import CategoriesList from "../categories-list/categories-list";
import ReactDOM from "react-dom";


class CategoriesBottomIcon extends Component {

    state = {
        categoriesIsActive: false
    };


    componentDidMount() {
        document.addEventListener('click',
            this.handleCLickOutside, true);
    }

    componentWillUnmount() {
        document.removeEventListener('click',
            this.handleCLickOutside, true);
    }


    handleCLickOutside = (e) => {
        const domNode = ReactDOM.findDOMNode(this);
        if (domNode || domNode.contains(e.target)) {
            this.setState({categoriesIsActive: false})
        }
    };


    addLockDiv = () => {
        return (
            <div className='lock'
                 onClick={() => this.toggleCategoriesIsActive()}/>
        )
    };

    toggleCategoriesIsActive = () => {
        const {categoriesIsActive} = this.state;
        return (
            this.setState({
                categoriesIsActive: !categoriesIsActive
            }))
    };

    render() {
        const {categoriesIsActive} = this.state;
        let categoriesListClasses = 'categories-list';
        if (!categoriesIsActive) {
            categoriesListClasses += ' categories-list__hidden'
        }

        return (
            <>
                {categoriesIsActive ? this.addLockDiv() : ''}
                <div className={categoriesListClasses}>
                    <div>
                        <CategoriesList
                            onClick={() => this.toggleCategoriesIsActive()}/>
                    </div>
                </div>
                <div className='categories-icon'
                     onClick={() => this.toggleCategoriesIsActive()}>
                    <div className='icon-title'>
                        Категории
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = ({categories: {categoriesList}}) => {
    return {
        categories: categoriesList
    }
};

export default connect(mapStateToProps)(CategoriesBottomIcon);

