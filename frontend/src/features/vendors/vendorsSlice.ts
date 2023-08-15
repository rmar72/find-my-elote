import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { Vendor } from "../../app/api"

export interface VendorsState {
  vendors: { [id: string]: Vendor }
}

const initialState: VendorsState = {
  vendors: {},
}

const vendorsSlice = createSlice({
  initialState,
  name: "vendors",
  reducers: {
    receivedVendors(state, action: PayloadAction<Vendor[]>) {
      const vendors = action.payload
      vendors.forEach((vendor) => {
        state.vendors[vendor.id] = vendor
      })
    },
  },
})

export const { receivedVendors } = vendorsSlice.actions
export default vendorsSlice.reducer
