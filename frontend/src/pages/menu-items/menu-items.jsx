import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { menuItem } from '../../redux/menu-items/menu-items-action';
import { addCart } from '../../redux/cart/cart-action';
const MenuItems = () => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(menuItem());
  }, [dispatch]);
  const handleQuantity = (e) => {
    e.persist();
    setQuantity(e.target.value);
  };
  const handleCart = (e, id) => {
    e.preventDefault();
    const params = {
      itemId: id,
      quantity: quantity,
    };
    dispatch(addCart(params));
  };
  const menuItemsState = useSelector((state) => state.menuItemsReducer);
  return (
    <main>
      <div className="container">
        <div className="row mt-5">
          {menuItemsState.data.length
            ? menuItemsState.data.map((item, index) => {
                return (
                  <React.Fragment key={item._id}>
                    <div className="col-sm-6">
                      <div className="card mb-2" style={{ width: '18rem' }}>
                        <img
                          className="card-img-top"
                          alt=""
                          src={item.imageUrl}
                          style={{ width: '100%' }}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{item.itemName}</h5>
                          <p className="card-text font-weight-bold">
                            ₹{item.price}
                          </p>
                          <div className="form-group">
                            <input
                              class="form-control-sm"
                              type="number"
                              placeholder="quantity"
                              onChange={handleQuantity}
                              style={{ width: '40%' }}
                            />
                          </div>
                          <button
                            className="btn btn-danger btn-xs"
                            onClick={(e) => handleCart(e, item._id)}>
                            Add Cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })
            : null}
        </div>
      </div>
    </main>
  );
};
export default MenuItems;
