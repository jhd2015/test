import { View } from '@tarojs/components'
import { Tag } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View>
      <Tag type="danger" size="mini">
        标签
      </Tag>
      <Tag type="danger">标签</Tag>
      <Tag type="danger" size="large">
        标签
      </Tag>
    </View>
  )
}
