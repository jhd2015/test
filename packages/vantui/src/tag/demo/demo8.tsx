import { View } from '@tarojs/components'
import { Tag } from '@antmjs/vantui'

export default function Demo() {
  return (
    <View>
      <Tag type="primary" weak>
        品牌黄
      </Tag>
      <Tag type="success" weak>
        成功绿
      </Tag>
      <Tag type="warning" weak>
        提醒橙
      </Tag>
      <Tag type="danger" weak>
        警报红
      </Tag>
      <Tag type="blue" weak>
        点缀蓝
      </Tag>
      <Tag type="purple" weak>
        点缀紫
      </Tag>
      <Tag type="ash" weak>
        次要灰
      </Tag>
    </View>
  )
}
