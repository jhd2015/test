import { View } from '@tarojs/components'
import { Tag } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View>
      <Tag type="primary" plain={true}>
        品牌黄
      </Tag>
      <Tag type="success" plain={true}>
        成功绿
      </Tag>
      <Tag type="warning" plain={true}>
        提醒橙
      </Tag>
      <Tag type="danger" plain={true}>
        警报红
      </Tag>
      <Tag type="blue" plain={true}>
        点缀蓝
      </Tag>
      <Tag type="purple" plain={true}>
        点缀紫
      </Tag>
      <Tag type="ash" plain={true}>
        次要灰
      </Tag>
    </View>
  )
}
