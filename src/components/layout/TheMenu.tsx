import Link from 'next/link'
import { Menu } from 'antd'
import {
  HomeOutlined,
  DatabaseOutlined,
  CompassOutlined,
} from '@ant-design/icons'

export default function TheMenu() {
  return (
    <Menu theme="dark" mode="inline">
      <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link href="/home">Home</Link>
      </Menu.Item>
      <Menu.Item key="single-view" icon={<DatabaseOutlined />}>
        <Link href="/single-view">Single View</Link>
      </Menu.Item>
      <Menu.Item key="comparison-view" icon={<CompassOutlined />}>
        <Link href="/comparison-view">Comparison View</Link>
      </Menu.Item>
    </Menu>
  )
}
