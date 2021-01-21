import React, { useEffect } from 'react';
import { fetchCart } from '../../redux/cart/cart-action';
import { useDispatch, useSelector } from 'react-redux';
const Cart = () => {
  const disptach = useDispatch();
  useEffect(() => {
    disptach(fetchCart());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchCartState = useSelector((state) => state.fetchCartReducer);
  if (fetchCartState.data) {
    console.log(fetchCartState.data);
  }
  return (
    <React.Fragment>
      {fetchCartState.data.length
        ? fetchCartState.data.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <div clasName="card mb-3" style={{ maxWidth: '50%' }}>
                  <div clasName="row g-0">
                    <div clasName="col-md-4">
                      <img src={item.imageUrl} alt="" />
                    </div>
                    <div clasName="col-md-8">
                      <div clasName="card-body">
                        <h5 clasName="card-title">{item.imageName}</h5>
                        <p clasName="card-text">₹{item.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </React.Fragment>
            );
          })
        : null}
    </React.Fragment>
  );
};
export default Cart;
