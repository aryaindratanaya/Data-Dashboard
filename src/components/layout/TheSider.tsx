import Image from 'next/image'
import { Layout } from 'antd'
import TheMenu from 'components/layout/TheMenu'
import s from 'styles/components/layout/TheSider.module.css'

const { Sider } = Layout

interface Props {
  isSiderCllps: boolean
}

export default function TheSider({ isSiderCllps }: Props) {
  return (
    <Sider className={s.sider} collapsed={isSiderCllps} collapsedWidth={0}>
      <div className={s.logo}>
        <Image
          src="/images/white-logo.png"
          alt="Rentalann Logo"
          width={135}
          height={40}
        />
      </div>

      <TheMenu />
    </Sider>
  )
}
