import { Dispatch, SetStateAction } from 'react'
import { Layout } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MenuOutlined,
} from '@ant-design/icons'
import s from 'styles/components/layout/TheHeader.module.css'

const { Header } = Layout

interface Props {
  isScreenBig: boolean
  isSiderCllps: boolean
  setSiderCllps: Dispatch<SetStateAction<boolean>>
  setDrawerVsbl: Dispatch<SetStateAction<boolean>>
}

export default function TheHeader({
  isScreenBig,
  isSiderCllps,
  setSiderCllps,
  setDrawerVsbl,
}: Props) {
  return (
    <Header className={`${s.header} ${isScreenBig && s.headerSticky}`}>
      <div className={s.menuToggler}>
        {isScreenBig ? (
          isSiderCllps ? (
            <MenuUnfoldOutlined onClick={() => setSiderCllps((v) => !v)} />
          ) : (
            <MenuFoldOutlined onClick={() => setSiderCllps((v) => !v)} />
          )
        ) : (
          <MenuOutlined onClick={() => setDrawerVsbl(true)} />
        )}
      </div>
    </Header>
  )
}
