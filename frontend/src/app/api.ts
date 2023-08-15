export interface Vendor {
  id: string
  dateCreated: string
  imageURL: string
  name: string
  owner: string
  food: string
  city: string
  state: string
  phoneNumber: string
  status: string
  latitude: string
  longitude: string
}

export async function getVendors(): Promise<Vendor[]> {
  const results = await fetch("/vendors.json")
  const vendors = results.json()
  return vendors
}
