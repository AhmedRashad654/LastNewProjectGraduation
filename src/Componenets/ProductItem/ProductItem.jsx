import { Button } from "react-bootstrap";
import { url } from "../../axios/axios";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Link, useNavigate } from "react-router-dom";
import formatCurrency from "../formatcurrency";
import { handleAddWishLish, removeFromWishList } from "../../api/api";
import { useDispatch, useSelector } from "react-redux";
import { setWishList } from "../../slice/slice";

export default function ProductItem({
  product,
  hoverProduct,
  handleMouseOver,
  handleMouseOut,
}) {
  const { getItemsQuantity, increaseQuantity, decreaseQuantity, removeItem } =
    useShoppingCart();
  const quantity = getItemsQuantity(product._id);
  const navigate = useNavigate();
  ////////////function handle Add WishList/////////////
  const dispatch = useDispatch();
  async function addWishLish(id) {
    const result = await handleAddWishLish(id);
    dispatch(setWishList(result?.data?.data?.products));
  }

  /////////////remove wish list////////
  async function handleRemove(id) {
    const result = await removeFromWishList( id );
    if ( result ) {
      dispatch(setWishList(result?.data?.data?.products));
   }
  }
  //////////wishlist from redux//////////
  const favorite = useSelector((state) => state?.favoriteproducts?.products);

  return (
    <div
      onMouseOver={() => handleMouseOver(product._id)}
      onMouseOut={handleMouseOut}
      className="col"
    >
      <div className="card no-border">
        <div className="position-relative">
          <img
            src={`${url}/img/${product.image}`}
            className="card-img-top"
            alt={product.name}
          />
          {quantity === 0 ? (
            <Button
              onClick={() => {
                if (localStorage.getItem("token")) {
                  increaseQuantity(product);
                } else {
                  navigate("/login");
                }
              }}
              className={`btn btn-dark w-100 showbutton ${
                hoverProduct === product._id ? "d-block" : "d-none"
              }`}
            >
              Add to Cart
            </Button>
          ) : (
            <div
              className={`w-100 ${
                hoverProduct === product._id ? "d-block" : "d-none"
              }`}
            >
              <div className="d-flex align-items-center justify-content-center">
                <Button
                  onClick={() => {
                    if (localStorage.getItem("token")) {
                      increaseQuantity(product);
                    } else {
                      navigate("/login");
                    }
                  }}
                  size="sm"
                >
                  +
                </Button>
                <span>{quantity} in cart</span>
                <Button
                  onClick={() => {
                    if (localStorage.getItem("token")) {
                      decreaseQuantity(product);
                    } else {
                      navigate("/login");
                    }
                  }}
                  size="sm"
                >
                  -
                </Button>
              </div>
              <Button
                onClick={() => {
                  if (localStorage.getItem("token")) {
                    removeItem(product);
                  } else {
                    navigate("/login");
                  }
                }}
                variant="danger"
                className="mt-2"
              >
                Remove
              </Button>
            </div>
          )}
          <div className="icons">
            <button className="btn-icon favourit">
              {favorite?.length > 0 &&
              favorite.find((e) => e._id === product?._id) ? (
                <i
                  className="fa-solid fa-heart iconwishfavourit"
                  onClick={() => handleRemove(product?._id)}
                ></i>
              ) : (
                <i
                  className="fa-regular fa-heart iconwish"
                  onClick={() => {
                    if (localStorage.getItem("token")) {
                      addWishLish(product?._id);
                    } else {
                      navigate("/login");
                    }
                  }}
                ></i>
              )}
            </button>
            <Link to={`/details/${product._id}`}>
              <i className="fa-regular fa-eye icondetails"></i>
            </Link>
          </div>
        </div>
        <div className="card-body">
          <h5 className="card-title">{product?.name}</h5>
          <p>{formatCurrency(product?.price)}</p>
        </div>
      </div>
    </div>
  );
}




