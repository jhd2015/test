import { View } from '@tarojs/components'
import { Tag } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View>
      <Tag type="primary">品牌黄</Tag>
      <Tag type="success">成功绿</Tag>
      <Tag type="warning">提醒橙</Tag>
      <Tag type="danger">警报红</Tag>
      <Tag type="blue">点缀蓝</Tag>
      <Tag type="purple">点缀紫</Tag>
      <Tag type="ash">次要灰</Tag>
    </View>
  )
}
