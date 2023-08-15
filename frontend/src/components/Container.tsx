import React from "react"

type Props = {
  children?: React.ReactNode
  className?: string
  type?: string
}
const Container: React.FC<Props> = ({ children, className, type }) => {
  let containerClass = "container"

  if (type) containerClass = `${containerClass} container-${type}`
  if (className) containerClass = `${containerClass} ${className}`

  return <div className={containerClass}>{children}</div>
}

export default Container
