import Vendor from '../models/vendorModel.js'
import asyncHandler from 'express-async-handler';

// @desc    Get vendors list
// @route   GET /api/vendors
// @access  TBD
const getVendors = asyncHandler(async (req, res) => {
  const vendors = await Vendor.find();
  console.log("vendors", vendors);
  if(vendors) {
    res.json({
      data: vendors
    })
  } else {
    res.status(404);
    throw new Error('Vendors not found')
  }

});

// @desc    Register a new vendor
// @route   POST /api/vendors
// @access  Public
const registerVendor = asyncHandler(async (req, res) => {
  const { 
    imageUrl,
    name,
    icon,
    owner,
    food,
    city,
    state,
    phoneNumber,
    status,
    latitude,
    longitude
  } = req.body;

  const vendorExists = await Vendor.findOne({ name })
  if (vendorExists) {
    res.status(400);
    throw new Error("Vendor already exists");
  }

  const newVendor = await Vendor.create({
    imageUrl,
    name,
    icon,
    owner,
    food,
    city,
    state,
    phoneNumber,
    status,
    latitude,
    longitude
  });

  console.log("newVendor", newVendor);

  if (newVendor) {
    res.status(201).json({
      newVendor
    });
  } else {
    res.status(400);
    throw new Error("Invalid vendor data");
  }

});

export {
  getVendors,
  registerVendor
}