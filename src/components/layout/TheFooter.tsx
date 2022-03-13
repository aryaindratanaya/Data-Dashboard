import { Layout } from 'antd'
import s from 'styles/components/layout/TheFooter.module.css'

const { Footer } = Layout

export default function TheFooter() {
  return (
    <Footer className={s.footer}>
      <strong>Data Dashboard</strong> by Indra Tanaya
    </Footer>
  )
}
