import React, { FC } from 'react'
interface SidebarWrapperProps {
  title: string
  action: string
}
const SidebarWrapper: FC<SidebarWrapperProps> = ({
  title,
  action,
  children,
}) => (
  <div>
    <div className="flex justify-between border-b border-secondary text-secondary items-end pb-2">
      <div className="text-3xl font-light">{title}</div>
      <div className="text-xs">{action}</div>
    </div>
    <div className="py-1 border-b border-secondary">{children}</div>
  </div>
)

export default SidebarWrapper
