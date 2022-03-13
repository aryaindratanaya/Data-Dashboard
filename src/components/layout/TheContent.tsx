import { ReactNode } from 'react'
import s from 'styles/components/layout/TheContent.module.css'

interface Props {
  children: ReactNode
}

export default function TheContent({ children }: Props) {
  return <div className={s.content}>{children}</div>
}
