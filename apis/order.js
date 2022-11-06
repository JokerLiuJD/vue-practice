//获取产品信息
export function useGetGoodsInfoApi(id, type = "course") {
  return useHttpGet("", `/goods/read?type=${type}&id=${id}`, {
    lazy: true,
  });
}

//获取可用优惠券    /user_coupon?goods_id=6&type=course&page=1
export function useGetUseableUserCouponApi(id, type = "course") {
  return useHttpGet(
    "GetUseableUserCoupon",
    `/user_coupon?goods_id=${id}&type=${type}&page=1`
  );
}

//创建订单
export function useCreateOrderApi(body, type) {
  let url = `/order/save`;
  
  if (type === "flashsale") {
    url = `/order/flashsale`;
  }
  return useHttpPost("CreateOrder", url, {
    body,
  });
}

//微信pc支付
export function useWxpayApi(no) {
  return useHttpPost("wxpay", `/order/wxpay`, {
    body: {
      no,
    },
  });
}

//查询订单支付状态
export function useGetWxpayStatusApi(no) {
  return useHttpPost("getWxpayStatus", `/order/iswxpay`, {
    body: {
      no,
    },
    $: true,
  });
}
