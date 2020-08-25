import React from 'react';
import './Product.css';


class Product extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isSelected: false, 
            isMouseEntered: false,
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }
    handleClick() {
        if (!this.state.isSelected && this.props.isAvailable) {
            this.setState({
                isSelected: true,
            });
        } else {
            this.setState({
                isSelected: false,
                isMouseEntered: false,
            });
        }
    };
    handleMouseEnter() {
        if (this.state.isSelected) {
            console.log('enter');
            this.setState({
                isMouseEntered: true,
            });
        }
    };
    handleMouseLeave() {
        console.log('out');
        this.setState({
            isMouseEntered: false,
        });
    };

    render() {
        return(
            <div className={ 'product' + (!this.props.isAvailable ? ' product_disabled' : '') + (this.state.isSelected ? ' product_selected' : '') }>
                <div
                    className="product__card"
                    onClick={this.handleClick}
                    onMouseEnter={this.handleMouseEnter}
                    onMouseLeave={this.handleMouseLeave}
                >
                    <div className="product__content_wrapper">
                        {
                            !this.state.isMouseEntered &&
                            <div className="product__subtitle">
                                Сказочное заморское яство
                            </div> 
                        }
                        {
                            this.state.isMouseEntered &&
                            <div className="product__subtitle product__subtitle_hovered">
                                Котэ не одобряет?
                            </div> 
                        }
                        <div className="product__title">
                            Нямушка
                        </div>
                        <div className="product__type">
                            {this.props.productType}
                        </div>
                        <div 
                            className="product__kit"
                            dangerouslySetInnerHTML={{__html: this.props.productKit}}
                        ></div>
                            
                        <div className="product__weight__wrapper">
                            <div className="product__weight__num">
                                {this.props.productWeight}
                            </div>
                            <div className="product__weight__unit">
                                 кг
                            </div>
                        </div> 
                    </div>
                </div>
                {
                    (!this.props.isAvailable) &&
                    <div className="product__description">
                        Печалька, {this.props.productType} закончился.
                    </div> 
                    
                }
             


                {
                    (this.props.isAvailable && this.state.isSelected) &&
                    <div className="product__description">
                        {this.props.productDescription}
                    </div>
                    
                }
                {
                    (this.props.isAvailable && !this.state.isSelected) &&
                    <div className="product__description">
                    Чего сидишь? Порадуй котэ, <a className="product__link" onClick={this.handleClick}>купи</a>.
                    </div> 
                    
                }
                
            </div>
        )
    }
}

export default Product;