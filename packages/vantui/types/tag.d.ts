import { FunctionComponent, ReactNode } from 'react'
import { ViewProps } from '@tarojs/components'

export interface TagProps extends ViewProps {
  size?: 'large' | 'medium' | 'mini'
  mark?: boolean
  color?: string
  plain?: boolean
  round?: boolean
  textColor?: string
  type?:
    | 'default'
    | 'primary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'blue'
    | 'purple'
    | 'purple'
    | 'ash'
  weak?: boolean
  closeable?: boolean
  children?: ReactNode
  onClose?: (e: any) => void
}

declare const Tag: FunctionComponent<TagProps>

export { Tag }
