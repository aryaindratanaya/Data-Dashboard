import { ReactNode, useState } from 'react'
import { Layout, Grid } from 'antd'
import TheSider from 'components/layout/TheSider'
import TheHeader from 'components/layout/TheHeader'
import TheContent from 'components/layout/TheContent'
import TheFooter from 'components/layout/TheFooter'
import TheDrawer from 'components/layout/TheDrawer'
import s from 'styles/components/layout/TheLayout.module.css'

const { useBreakpoint } = Grid

interface Props {
  children: ReactNode
}

export default function TheLayout({ children }: Props) {
  const [isSiderCllps, setSiderCllps] = useState(false)
  const [isDrawerVsbl, setDrawerVsbl] = useState(false)

  const screens = useBreakpoint()
  const isScreenBig = Boolean(screens.lg || screens.xl || screens.xxl)

  return (
    <Layout>
      {isScreenBig ? (
        <TheSider isSiderCllps={isSiderCllps} />
      ) : (
        <TheDrawer isDrawerVsbl={isDrawerVsbl} setDrawerVsbl={setDrawerVsbl} />
      )}

      <Layout
        className={isScreenBig && !isSiderCllps ? s.layout : s.layoutcollapsed}
      >
        <TheHeader
          isScreenBig={isScreenBig}
          isSiderCllps={isSiderCllps}
          setSiderCllps={setSiderCllps}
          setDrawerVsbl={setDrawerVsbl}
        />
        <TheContent>{children}</TheContent>
        <TheFooter />
      </Layout>
    </Layout>
  )
}
