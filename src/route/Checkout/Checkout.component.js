import ContentWrapper from '@scandipwa/scandipwa/src/component/ContentWrapper';
import {Checkout as CheckoutSource} from '../../../node_modules/@scandipwa/scandipwa/src/route/Checkout/Checkout.component';
import Steps from './Steps';
class Checkout extends CheckoutSource {
constructor(props){
    super(props)
}
    render(){
        return(
            <>
            <Steps steps={this.stepMap}/>
            <ContentWrapper 
             wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
            label={ __('Checkout page') }>
                                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>

                </ContentWrapper>
            </>

        ) 
}
}
 
export default Checkout;