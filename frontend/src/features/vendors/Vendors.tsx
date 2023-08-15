import React, { useEffect } from "react"
import { useAppSelector, useAppDispatch } from "../../app/hooks"
import { receivedVendors } from "./vendorsSlice"
import { getVendors } from "../../app/api"

export function Vendors() {
  const dispatch = useAppDispatch()
  const vendors = useAppSelector((state) => state.vendors.vendors)

  useEffect(() => {
    getVendors().then((vendors) => {
      dispatch(receivedVendors(vendors))
    })
  }, [])

  return <div>123 Vendors</div>
}
