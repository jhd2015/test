/* eslint-disable */
import { View } from '@tarojs/components'
import { Button } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View>
      <Button icon="wechat-pay" type="primary" />
      <Button icon="weibo" type="primary">
        按钮
      </Button>
      <Button icon="https://www.dalezhuang.com/favicon.ico" type="info">
        按钮
      </Button>
    </View>
  )
}
