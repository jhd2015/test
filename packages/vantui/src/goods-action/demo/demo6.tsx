/* eslint-disable */
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton,
  Toast,
} from '@antmjs/vantui'
import { View } from '@tarojs/components'

export default function Demo() {
  const click = function () {
    Toast.show({
      message: '点击demo',
    })
  }

  return (
    <>
      <GoodsAction safeAreaInsetBottom={false}>
        {/* <GoodsActionIcon icon="chat-o" text="客服" onClick={click} />
      <GoodsActionIcon icon="cart-o" text="购物车" onClick={click} />
      <GoodsActionButton text="加入购物车" type="warning" onClick={click} /> */}
        <GoodsActionButton text="按钮文字" onClick={click} />
        <Toast id="GoodsAction-demo1" />
      </GoodsAction>
      <GoodsAction safeAreaInsetBottom={false}>
        {/* <GoodsActionIcon icon="chat-o" text="客服" onClick={click} />
      <GoodsActionIcon icon="cart-o" text="购物车" onClick={click} />*/}
        <GoodsActionButton text="加入购物车" onClick={click} />
        <GoodsActionButton text="按钮文字" onClick={click} />
      </GoodsAction>
      <GoodsAction safeAreaInsetBottom={false}>
        <GoodsActionIcon icon="chat-o" text="转发" openType="share" />
        {/* <GoodsActionIcon icon="cart-o" text="购物车" onClick={click} /> */}
        <GoodsActionButton text="加入购物车" type="warning" onClick={click} />
        <GoodsActionButton text="立即购买" onClick={click} />
      </GoodsAction>
      <GoodsAction safeAreaInsetBottom={false}>
        <GoodsActionIcon icon="chat-o" text="转发" openType="share" />
        {/* <GoodsActionIcon icon="cart-o" text="购物车" onClick={click} /> */}
        {/* <GoodsActionButton text="加入购物车" type="warning" onClick={click} /> */}
        <GoodsActionButton text="立即购买" onClick={click} />
      </GoodsAction>
      <GoodsAction safeAreaInsetBottom={false}>
        <GoodsActionIcon icon="chat-o" text="转发" openType="share" />
        <GoodsActionIcon icon="cart-o" text="购物车" onClick={click} />
        <GoodsActionButton text="加入购物车" type="warning" onClick={click} />
        <GoodsActionButton text="立即购买" onClick={click} />
      </GoodsAction>
      <GoodsAction safeAreaInsetBottom={false}>
        <GoodsActionIcon icon="chat-o" text="转发" openType="share" />
        <GoodsActionIcon icon="cart-o" text="购物车" onClick={click} />
        {/* <GoodsActionButton text="加入购物车" type="warning" onClick={click} /> */}
        <GoodsActionButton text="立即购买" onClick={click} />
      </GoodsAction>
      <GoodsAction safeAreaInsetBottom={false}>
        <GoodsActionIcon icon="chat-o" text="转发" openType="share" />
        <GoodsActionIcon icon="cart-o" text="购物车" onClick={click} />
        <GoodsActionIcon icon="cart-o" text="购物车" onClick={click} />
        <GoodsActionButton text="主要按钮" type="warning" onClick={click} />
        <GoodsActionButton text="主要按钮" onClick={click} />
      </GoodsAction>
      <GoodsAction safeAreaInsetBottom={false}>
        <GoodsActionIcon icon="chat-o" text="转发" openType="share" />
        <GoodsActionIcon icon="cart-o" text="购物车" onClick={click} />
        <GoodsActionIcon icon="cart-o" text="购物车" onClick={click} />
        {/* <GoodsActionButton text="主要按钮" type="warning" onClick={click} /> */}
        <GoodsActionButton text="主要按钮" onClick={click} />
      </GoodsAction>
      <GoodsAction safeAreaInsetBottom={false}>
        <GoodsActionIcon icon="chat-o" text="转发" openType="share" />
        <GoodsActionIcon icon="cart-o" text="购物车" onClick={click} />
      </GoodsAction>
      <GoodsAction safeAreaInsetBottom={false}>
        <GoodsActionIcon icon="chat-o" text="转发" openType="share" />
        <GoodsActionIcon icon="cart-o" text="购物车" onClick={click} />
        <GoodsActionIcon icon="cart-o" text="购物车" onClick={click} />
      </GoodsAction>
      <GoodsAction safeAreaInsetBottom={false}>
        <GoodsActionIcon icon="chat-o" text="转发" />
        <GoodsActionIcon icon="cart-o" text="购物车1" onClick={click} />
        <GoodsActionIcon icon="chat-o" text="转发" />
        <GoodsActionIcon icon="cart-o" text="购物车" onClick={click} />
      </GoodsAction>
      <GoodsAction safeAreaInsetBottom={false}>
        <View style={{ flex: 1 }}>
          <View>合计 ¥328,660.00</View>
          <View>优惠 ¥325,660.00</View>
        </View>
        <GoodsActionButton
          style={{ width: '235rpx' }}
          text="主要按钮"
          onClick={click}
        />
      </GoodsAction>
      <View style={{ height: '100px' }} />
    </>
  )
}
