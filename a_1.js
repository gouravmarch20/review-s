"use client";
import React, { Fragment, useEffect, useState, useRef } from "react";
import BottomRightSheet from "@/Components/Components/BottomRightSheet";
import moment from "moment";
import { _subscriptionPlanList } from "@/services/apis/GlobalAPIs";
import { getGuestUserID } from "@/services/helper/SessionManager";

import {
  faBarsFilter,
  faTrashCan,
  faXmarkLarge,
} from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@/Components/Components/Button";
import {
  STORE_PRODUCT,
  CLEAR_offset,
  CLEAR_sortBy,
} from "@/services/constant/marketPlaceConstant";
import { faCartCircleExclamation } from "@fortawesome/pro-light-svg-icons";
import {
  clearHomePageState,
  getCuratedFeedHome,
} from "@/app/(pages)/redux/slices/marketPlaceSlice";

import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCartProduct,
  changeCartNoOfItem,
  getStoreProduct_WishList,
  removeFromWishList,
  addProductToCart,
} from "@/app/(pages)/redux/slices/cartSlice";
import { toast } from "react-toastify";
import {
  TOAST_DEFAULT,
  REMOVE_PRODUCT_FROM_CART_MSG,
  ADD_TO_CART_MSG,
  FAIL_TO_ADD_IN_CART_MSG,
  REMOVE_PRODUCT_FROM_WISHLIST,
} from "@/services/constant/toastConstant";
import ModalRsa from "@/Components/MarketPlace/components/modal/ModalRsa";
import ModalAmbulance from "@/Components/MarketPlace/components/modal/ModalAmbulance";
import ModalVarient from "@/Components/MarketPlace/components/modal/ModalVarient";

const WishlistDrawer = ({
  bottomRightSheet,
  placement,
  handleSetBottomRightSheet,
}) => {
  const dispatch = useDispatch();
  const { push } = useRouter();
  const { data: session, status, token, update } = useSession();
  const wishListItem = useSelector((state) => state?.cart?.wishListItem);

  const [removeFromWishListLoading, setRemoveFromWishListLoading] =
    useState("ideal");
  let prevRemoveFromWishListLoading = useRef("ideal");

  console.log(`  removeFromWishListLoading ++ `, removeFromWishListLoading);
  // kogox
  const [kogoxPackagePrice, setKogoxPackagePrice] = useState(0);
  const subscriptionPlanList = async () => {
    const subscriptionPlans = await _subscriptionPlanList();
    if (subscriptionPlans?.data?.subscriptionNewPlanList) {
      let plans = subscriptionPlans.data.subscriptionNewPlanList.sort(
        (a, b) => b.days - a.days
      );
      console.log("first", plans[plans.length - 1].offer_price);
      setKogoxPackagePrice(plans[plans.length - 1].offer_price);
    }
  };
  useEffect(() => {
    subscriptionPlanList();
    return () => {
      console.log(`unmount`);

      dispatch(clearHomePageState({ CLEAR_offset, CLEAR_sortBy }));
    };
  }, []);
  //

  useEffect(() => {
    return () => {
      console.log("unmount 2", removeFromWishListLoading);
      console.log("unmount 22", prevRemoveFromWishListLoading);
      if (prevRemoveFromWishListLoading.current !== "ideal") {
        let paloadFeed = {
          cardType: "MARKETPLACECARD",
          master_category_Name: "FORYOU",
        };
        dispatch(getCuratedFeedHome(paloadFeed));
      }
    };
  }, []);

  // const noOfItemsInWishlist = useSelector(
  //   (state) => state?.cart?.noOfItemsInWishlist
  // );
  const [whichModalToShow, setwhichModalToShow] = useState({
    variant: false,
    ambulance: false,
    rsa: false,
  });
  const [modalProductData, setModalProductData] = useState({});
  const hasPro = session?.user?.hasPro;

  useEffect(() => {
    const wishListPayload = {
      user_id: session?.user?._id,
    };

    dispatch(getStoreProduct_WishList(wishListPayload));
  }, [session?.user?._id]);

  const showModalBeforeAddToCart = (productData) => {
    console.log(`  isFou--`, productData);

    const wishListProduct = {
      ...productData?.room_detail,
      // _id : productData?.room_detail?._id ,
      // image : productData.room_detail.image ,
      // is_variant_available : productData.room_detail.is_variant_available ,
      // room_price : productData.room_detail.room_price ,
      // room_name : productData.room_detail.room_name ,
      // room_description : productData.room_detail.room_description ,
      // variantAttribute :  productData.room_detail.variantAttribute,
      // variantList :  productData.room_detail.variantList,
      // wheel_type :  productData.room_detail.wheel_type,
      // place :  productData.room_detail.place,
      // category :  productData.room_detail.category,
    };
    console.log(`  wishListProduct`, wishListProduct);

    productData = { ...wishListProduct };

    let isFound = false;
    if (productData?.category?.category_name === "RSA") {
      setwhichModalToShow((prev) => ({ ...prev, rsa: true }));
      setModalProductData(productData);
      isFound = true;
    } else if (productData?.category?.category_name === "Ambulance") {
      setwhichModalToShow((prev) => ({ ...prev, ambulance: true }));
      setModalProductData(productData);
      isFound = true;
    } else if (productData?.is_variant_available) {
      setwhichModalToShow((prev) => ({ ...prev, variant: true }));
      setModalProductData(productData);
      isFound = true;
    }
    console.log(` isFound `, isFound);

    if (isFound) {
      return false;
    } else {
      return true;
    }
  };

  const handleDelete = (wishListItem) => {
    setRemoveFromWishListLoading(true);

    const removeProductPayload = {
      _id: wishListItem?._id,
    };
    dispatch(removeFromWishList(removeProductPayload)).then(() => {
      const getWishP = {
        user_id: session?.user?._id,
      };
      toast.success(REMOVE_PRODUCT_FROM_WISHLIST, TOAST_DEFAULT);

      dispatch(getStoreProduct_WishList(getWishP)).then(() => {
        setRemoveFromWishListLoading(false);
        prevRemoveFromWishListLoading.current = false;
      });
    });
  };

  const handleAddToCart = (cardData) => {
    if (showModalBeforeAddToCart(cardData)) {
      const addProductPayload = {
        item_id: cardData?.room_detail?._id,
        user_id: null,
        guest_user_id: "",
        item_qty: 1,
        selected_vehicle_id: [],
        start_date: moment().unix(),
        end_date: moment.unix(),
      };
      const getCartPayload = {
        guest_user_id: "",
        user_id: "",
      };

      if (status === "authenticated") {
        addProductPayload.user_id = session?.user?._id;
        getCartPayload.user_id = session?.user?._id;
      } else if (status == "unauthenticated") {
        addProductPayload.guest_user_id = getGuestUserID();
        getCartPayload.guest_user_id = getGuestUserID();
      }
      console.log(` addProductPayload `, addProductPayload);

      dispatch(addProductToCart(addProductPayload)).then((res) => {
        console.log(`addProductToCart  `, res);

        if (res?.payload) {
          toast.success(ADD_TO_CART_MSG, TOAST_DEFAULT);
        } else {
          toast.error(FAIL_TO_ADD_IN_CART_MSG, TOAST_DEFAULT);
        }
        dispatch(getCartProduct(getCartPayload));
      });
    }
  };

  return (
    <div className="position-relative">
      <BottomRightSheet
        openTo={bottomRightSheet}
        close={() => handleSetBottomRightSheet("")}
        name="Sorting"
        title=""
        preFixAction={
          <span className="   p-7p  inline-block rounded ui-label ">
            Wishlist
          </span>
        }
        postFixAction={
          <button
            type="button"
            className="bg-transparent border-0 shadow-none text-decoration-none button-label text-active p-0 "
            onClick={() => handleSetBottomRightSheet("")}
          >
            <FontAwesomeIcon icon={faXmarkLarge} className="text-kogo-white" />
          </button>
        }
        placement={placement}
      >
        <div className="" style={{ paddingBottom: "200px" }}>
          {wishListItem?.length !== 0 ? (
            wishListItem?.map((wishListItem) => (
              <>
                <div
                  className="row g-3  border-bottom  border-disabled  p-3"
                  key={wishListItem?._id}
                >
                  <div className="col-3 mt-4">
                    <img
                      src={wishListItem?.room_detail?.image[0]}
                      className="rounded object-fit-cover "
                      width={70}
                      height={70}
                    />
                  </div>
                  <div className="col-8 mt-4 ">
                    <p className="body lc">
                      {wishListItem?.room_detail?.room_name}
                    </p>
                    {/* <p className="button-label">
                      {" "}
                      ₹{" "}
                      {wishListItem?.room_detail?.room_price?.toLocaleString()}
                    </p> */}


                          {/* {session?.user?.hasPro ? ( */}
                          {true ? (

<div className="mb-10p">
  <p className="mb-0 caption-subtitle text-invalid text-decoration-line-through mt-2">
    {/* real price  */}₹
    {wishListItem?.room_detail?.room_price?.toLocaleString()}
  </p>

  <div className="caption-subtitle mt-0">
    <span className="text-special me-1 button-label">
      {/* Discount */}₹
      {(
        wishListItem?.room_detail?.room_price -
        wishListItem?.room_detail?.max_coin
      ).toLocaleString()}
    </span>{" "}
  </div>
</div>
) : (
<>
  <p className="mb-0 caption-subtitle text-info title mt-2">
    ₹{wishListItem?.room_detail?.room_price?.toLocaleString()}
  </p>
</>
)}
                    <div>
                      <Button
                        title="Add To Cart"
                        onClick={() => handleAddToCart(wishListItem)}
                      />
                    </div>
                  </div>
                  <div className="col-1 mt-4">
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      className="text-danger cursor-pointer"
                      onClick={() =>
                        removeFromWishListLoading !== true
                          ? handleDelete(wishListItem)
                          : ""
                      }
                    />
                  </div>
                </div>
              </>
            ))
          ) : (
            <>
              <div
                style={{
                  width: "100%",
                  height: "500px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="d-flex flex-column mb-0 text-center">
                  <div className="px-2">
                    <FontAwesomeIcon
                      icon={faCartCircleExclamation}
                      size="2xl"
                    />
                  </div>
                  <div className="px-2">
                    <p className="text-center profiletitle mb-0">
                      No products in Wishlist
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </BottomRightSheet>

      {whichModalToShow?.rsa ? (
        <ModalRsa
          setwhichModalToShow={setwhichModalToShow}
          whichModalToShow={whichModalToShow}
          modalProductData={modalProductData}
        />
      ) : null}
      {whichModalToShow?.ambulance ? (
        <ModalAmbulance
          setwhichModalToShow={setwhichModalToShow}
          whichModalToShow={whichModalToShow}
          modalProductData={modalProductData}
        />
      ) : null}
      {whichModalToShow?.variant ? (
        <ModalVarient
          setwhichModalToShow={setwhichModalToShow}
          whichModalToShow={whichModalToShow}
          modalProductData={modalProductData}
          hasPro={hasPro}
          kogoxPackagePrice={kogoxPackagePrice}
        />
      ) : null}
    </div>
  );
};

export default WishlistDrawer;
