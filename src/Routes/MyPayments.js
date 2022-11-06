import React from 'react';

import Bankdetail from './Bankdetail';
import Invoice from './Invoice';

import { Route, Routes } from 'react-router-dom';
import { Payment } from './Payment';
const MyPayments = () => {
  return (
    <div className='payment'>

<Routes>
    <Route   path='/solution' element={<Invoice/>}>Invoice</Route>
    <Route path='/screening' element={<Bankdetail/>}>Bankdetail</Route>
    </Routes>

    <Payment/>
    </div>
  );
};

export default MyPayments;