import { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { Drawer } from 'antd'
import TheMenu from 'components/layout/TheMenu'
import s from 'styles/components/layout/TheSider.module.css'

interface Props {
  isDrawerVsbl: boolean
  setDrawerVsbl: Dispatch<SetStateAction<boolean>>
}

export default function TheDrawer({ isDrawerVsbl, setDrawerVsbl }: Props) {
  return (
    <Drawer
      placement="left"
      closable={false}
      onClose={() => setDrawerVsbl(false)}
      visible={isDrawerVsbl}
      width={200}
      bodyStyle={{ backgroundColor: '#001529', padding: 0 }}
    >
      <div className={s.logo}>
        <Image
          src="/images/white-logo.png"
          alt="White Logo"
          width={135}
          height={40}
        />
      </div>

      <TheMenu />
    </Drawer>
  )
}
