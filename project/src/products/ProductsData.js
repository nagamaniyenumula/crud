import React from 'react';

import ProductsDesign from './ProductDesign';

class ProductsData extends React.Component {
  constructor() {
    super();
    this.state = {
      mobiles: [
        {
          id: 1,
          title: 'APPLE iPhone 11 (Black, 64 GB)',
          img: 'https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=70',
          offeredPrice: '37,999',
          originalPrice: '43,900',
          rating: '4.6',
          highlights: [
            '64 GB ROM',
            '15.49 cm (6.1 inch) Liquid Retina HD Display',
            '12MP + 12MP | 12MP Front Camera',
          ],
        },
        {
          id: 1,
          title: 'APPLE iPhone 11 (White, 64 GB)',
          img: 'https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/k/y/d/iphone-11-256-u-mwm82hn-a-apple-0-original-imafkg25mhaztxns.jpeg?q=70',
          offeredPrice: '37,999',
          originalPrice: '43,900',
          rating: '4.6',
          highlights: [
            '64 GB ROM',
            '15.49 cm (6.1 inch) Liquid Retina HD Display',
            '12MP + 12MP | 12MP Front Camera',
          ],
        },{
          id: 1,
          title: 'APPLE iPhone 11 (White, 64 GB)',
          img: 'https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/k/y/d/iphone-11-256-u-mwm82hn-a-apple-0-original-imafkg25mhaztxns.jpeg?q=70',
          offeredPrice: '37,999',
          originalPrice: '43,900',
          rating: '4.6',
          highlights: [
            '64 GB ROM',
            '15.49 cm (6.1 inch) Liquid Retina HD Display',
            '12MP + 12MP | 12MP Front Camera',
          ],
        },
      ],
    };
  }
  render() {
    return <>
      {
        this.state.mobiles.map((mobile,i)=>{
          return <ProductsDesign data={mobile}/>
        })
      }
    </>;
  }
}
export default ProductsData;
