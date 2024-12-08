
import React from 'react'

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Payment from './Payment'
import PaymentRates from '../PaymentRates'
import Shortened from '../Shortened'

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Home></Home>}></Route>
        <Route path='*'element={<Home></Home>}></Route>
        <Route path='/arbe'element={<Payment></Payment>}></Route>
        <Route path='/payment'element={<PaymentRates></PaymentRates>}></Route>
        <Route path='/shorten'element={<Shortened></Shortened>}></Route>
      </Routes>
      </BrowserRouter>

      <div className='tab' dir='ltr'>
  <div dir='rtl'>
   <div className='ii'>
   <i className="fa-brands fa-linkedin-in"></i>
   <i className="fa-brands fa-instagram"></i>
   <i className="fa-brands fa-twitter"></i>
   <i className="fa-brands fa-facebook"></i>
   Follow Us
   </div>

  </div>
  <img className='as' src="https://s3-alpha-sig.figma.com/img/26c3/ae0d/5bf0a2b54a8ac4c9e3fa8f062ff65d2c?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QZ4TxOo8NMm653gTPt6qycryP5ipqv7ToemSacfbfE~DhSznN4Loj4iQSEg14pCNQMEorD8PYwrBbjZbYuZAGYa9iIlIMFDNnkvFa1USMz5hQyZEHzPvj3mCdXNv546trWPJxlTQ2DPryPxWMoE9j39FvkeeKt9AkKGKbnworTFghJI8lZfwjdjbxlVYWELPdeMftG1IMTvURYFJrUdwUngSLnGahwes~SmnjIofoixKAwLIzYhoKpJxYbx08C66ShgrhKuUqyru26Khl-uUjZDRPU73ErCEhk9YNuCbjz08aNe6WIxzDVXMbvcICUiw892RZMMIqtMN5qhhFlEkHg__" alt="" width={'222px'} />
<div className='trap d-flex gap-4'>
<div>
  <h3>My Housing Hunt </h3>
  <h5>About Us</h5>
  <h5>Press Room</h5>
  <h5>Work with Us</h5>
  <h5>Market Analytics</h5>
  <h5>Professional Features</h5>
  <h5>News</h5>
</div>
<div>
  <h3>My Housing Hunt </h3>
  <h5>About Us</h5>
  <h5>Press Room</h5>
  <h5>Work with Us</h5>
  <h5>Market Analytics</h5>
  <h5>Professional Features</h5>
  <h5>News</h5>
</div>
<div>
  <h3>My Housing Hunt </h3>
  <h5>About Us</h5>
  <h5>Press Room</h5>
  <h5>Work with Us</h5>
  <h5>Market Analytics</h5>
  <h5>Professional Features</h5>
  <h5>News</h5>
</div>

 
</div>
  <div className='wae'>
  <img className='aa' src="https://s3-alpha-sig.figma.com/img/26c3/ae0d/5bf0a2b54a8ac4c9e3fa8f062ff65d2c?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QZ4TxOo8NMm653gTPt6qycryP5ipqv7ToemSacfbfE~DhSznN4Loj4iQSEg14pCNQMEorD8PYwrBbjZbYuZAGYa9iIlIMFDNnkvFa1USMz5hQyZEHzPvj3mCdXNv546trWPJxlTQ2DPryPxWMoE9j39FvkeeKt9AkKGKbnworTFghJI8lZfwjdjbxlVYWELPdeMftG1IMTvURYFJrUdwUngSLnGahwes~SmnjIofoixKAwLIzYhoKpJxYbx08C66ShgrhKuUqyru26Khl-uUjZDRPU73ErCEhk9YNuCbjz08aNe6WIxzDVXMbvcICUiw892RZMMIqtMN5qhhFlEkHg__" alt="" width={'310px'} />
<h5 dir='rtl'lang='ar'>يمكنك اختصار الروابط بسرعة أكبر باستخدام<br />واجهة برمجة التطبيقات (API) سهلة الاستخدام<br />وإضفاء الحيوية على أفكارك الإبداعية <br />والمتقدمة</h5>
    
  </div>
  </div>

    </div>
  )
}



