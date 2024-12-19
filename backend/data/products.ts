import { PricingDetail } from "../entities/pricing/PricingDetail.entity";
import { Product } from "../entities/products/Product.entity";
import { Profiles } from "../entities/profile/Profile.entity";

export const categories = [
  { id: "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6", name: "Alcoholic Beverages" },
  { id: "p6o5n4m3-l2k1j0i9-h8g7f6e5-d4c3b2a1", name: "Food" },
];

export const subCategories = [
  { id: "f1e2d3c4-b5a6-7d8e-9f0g-1h2i3j4k5l6m", name: "Wine", categoryId: "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6" },
  { id: "m1l2k3j4-h5g6-7i8f-9e0d-1c2b3a4d5f6g", name: "Beer", categoryId: "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6" },
  { id: "g1f2e3d4-h5d6-7c8b-9a0j-1i2k3l4m5n6o", name: "Fruits", categoryId: "p6o5n4m3-l2k1j0i9-h8g7f6e5-d4c3b2a1" },
  { id: "a1b2c3d4-d5e6-7f8g-9h0i-1j2k3l4m5n6p", name: "Biscuits", categoryId: "p6o5n4m3-l2k1j0i9-h8g7f6e5-d4c3b2a1" },
];

export const segments = [
  { id: "s1e2g3m4-e5n6-7t8s-9a0g-b1f2g3h4i5j6", name: "Red" },
  { id: "s2e3g4m5-e6n7-8t9s-0a1g-b2f3g4h5i6j7", name: "Sparkling" },
  { id: "s3e4g5m6-e7n8-9t0s-1a2g-b3f4g5h6i7j8", name: "Pale Lager" },
  { id: "s4e5g6m7-e8n9-0t1s-2a3g-b4f5g6h7i8j9", name: "Stout" },
  { id: "s5e6g7m8-e9n0-1t2s-3a4g-b5f6g7h8i9j0", name: "Fruit" },
  { id: "s6e7g8m9-e0n1-2t3s-4a5g-b6f7g8h9i0j1", name: "Snack" },
];

export const brands = [
  { id: "b1r2a3n4-d5e6-7f8g-9h0i-1j2k3l4m5n6o", name: "High Garden" },
  { id: "b2r3a4n5-d6e7-8f9g-0h1i-2j3k4l5m6n7p", name: "Koyama Wines" },
  { id: "b3r4a5n6-d7e8-9f0g-1h2i-3j4k5l6m7n8q", name: "Corona" },
  { id: "b4r5a6n7-d8e9-0f1g-2h3i-4j5k6l7m8n9r", name: "Guinness" },
  { id: "b5r6a7n8-d9e0-1f2g-3h4i-5j6k7l8m9s0t", name: "Fresh Farm" },
  { id: "b6r7a8n9-d0e1-2f3g-4h5i-6j7k8l9m0u1v", name: "Tropical Fruits" },
  { id: "b7r8a9n0-d1e2-3f4g-5h6i-7j8k9l0m1v2w", name: "Nabisco" },
  { id: "b8r9a0n1-d2e3-4f5g-6h7i-8j9k0l1m2v3x", name: "McVitie's" },
];

export const products: Product[] = [
  // Alcoholic Beverages -> Wine
  {
    id: "p1o2i3u4-y5t6r7e8-w9q0p1a2-s3d4f5g6h7j8",
    title: "High Garden Pinot Noir 2021",
    skuCode: "HGVPIN216",
    brandId: "b1r2a3n4-d5e6-7f8g-9h0i-1j2k3l4m5n6o",  // High Garden
    categoryId: "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",  // Alcoholic Beverages
    subCategoryId: "f1e2d3c4-b5a6-7d8e-9f0g-1h2i3j4k5l6m",  // Wine
    segmentId: "s1e2g3m4-e5n6-7t8s-9a0g-b1f2g3h4i5j6",  // Red
    isValid: true,
  },
  {
    id: "p2o3i4u5-y6t7r8e9-w0q1p2a3-s4d5f6g7h8j9",
    title: "Koyama Methode Brut Nature NV",
    skuCode: "KOYBRUNV6",
    brandId: "b2r3a4n5-d6e7-8f9g-0h1i-2j3k4l5m6n7p",  // Koyama Wines
    categoryId: "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",  // Alcoholic Beverages
    subCategoryId: "f1e2d3c4-b5a6-7d8e-9f0g-1h2i3j4k5l6m",  // Wine
    segmentId: "s2e3g4m5-e6n7-8t9s-0a1g-b2f3g4h5i6j7",  // Sparkling
    isValid: true,
  },
  // Alcoholic Beverages -> Beer
  {
    id: "p3o4i5u6-y7t8r9e0-w1q2p3a4-s5d6f7g8h9j0",
    title: "Corona Extra",
    skuCode: "CRNEXTRA",
    brandId: "b3r4a5n6-d7e8-9f0g-1h2i-3j4k5l6m7n8q",  // Corona
    categoryId: "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",  // Alcoholic Beverages
    subCategoryId: "m1l2k3j4-h5g6-7i8f-9e0d-1c2b3a4d5f6g",  // Beer
    segmentId: "s3e4g5m6-e7n8-9t0s-1a2g-b3f4g5h6i7j8",  // Pale Lager
    isValid: true,
  },
  {
    id: "p4o5i6u7-y8t9r0e1-w2q3p4a5-s6d7f8g9h9k0",
    title: "Guinness Draught",
    skuCode: "GNNDRAUGHT",
    brandId: "b4r5a6n7-d8e9-0f1g-2h3i-4j5k6l7m8n9r",  // Guinness
    categoryId: "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",  // Alcoholic Beverages
    subCategoryId: "m1l2k3j4-h5g6-7i8f-9e0d-1c2b3a4d5f6g",  // Beer
    segmentId: "s4e5g6m7-e8n9-0t1s-2a3g-b4f5g6h7i8j9",  // Stout
    isValid: true,
  },
  // Food -> Fruits
  {
    id: "p5o6i7u8-y9t0r1e2-w3q4p5a6-s7d8f9g0h9j0",
    title: "Red Apple",
    skuCode: "APLRED001",
    brandId: "b5r6a7n8-d9e0-1f2g-3h4i-5j6k7l8m9s0t",  // Fresh Farm
    categoryId: "p6o5n4m3-l2k1j0i9-h8g7f6e5-d4c3b2a1",  // Food
    subCategoryId: "g1f2e3d4-h5d6-7c8b-9a0j-1i2k3l4m5n6o",  // Fruits
    segmentId: "s5e6g7m8-e9n0-1t2s-3a4g-b5f6g7h8i9j0",  // Fruit
    isValid: true,
  },
  {
    id: "p6o7i8u9-y0t1r2e3-w4q5p6a7-s8d9f0g1h2j0",
    title: "Green Apple",
    skuCode: "APLGRN001",
    brandId: "b5r6a7n8-d9e0-1f2g-3h4i-5j6k7l8m9s0t",  // Fresh Farm
    categoryId: "p6o5n4m3-l2k1j0i9-h8g7f6e5-d4c3b2a1",  // Food
    subCategoryId: "g1f2e3d4-h5d6-7c8b-9a0j-1i2k3l4m5n6o",  // Fruits
    segmentId: "s5e6g7m8-e9n0-1t2s-3a4g-b5f6g7h8i9j0",  // Fruit
    isValid: true,
  },
  {
    id: "p7o8i9u0-y1t2r3e4-w5q6p7a8-s9d0f1g2h3j0",
    title: "Banana",
    skuCode: "APLBNN001",
    brandId: "b5r6a7n8-d9e0-1f2g-3h4i-5j6k7l8m9s0t",  // Fresh Farm
    categoryId: "p6o5n4m3-l2k1j0i9-h8g7f6e5-d4c3b2a1",  // Food
    subCategoryId: "g1f2e3d4-h5d6-7c8b-9a0j-1i2k3l4m5n6o",  // Fruits
    segmentId: "s5e6g7m8-e9n0-1t2s-3a4g-b5f6g7h8i9j0",  // Fruit
    isValid: true,
  },
  // Food -> Biscuits
  {
    id: "p8o9i0u1-y2t3r4e5-w6q7p8a9-s0d1f2g3h4j0",
    title: "McVitie's Digestive Biscuits",
    skuCode: "MVDGBISCUIT1",
    brandId: "b8r9a0n1-d2e3-4f5g-6h7i-8j9k0l1m2v3x",  // McVitie's
    categoryId: "p6o5n4m3-l2k1j0i9-h8g7f6e5-d4c3b2a1",  // Food
    subCategoryId: "a1b2c3d4-d5e6-7f8g-9h0i-1j2k3l4m5n6p",  // Biscuits
    segmentId: "s6e7g8m9-e0n1-2t3s-4a5g-b6f7g8h9i0j1",  // Snack
    isValid: true,
  },
];


export const profiles: Profiles[] = [
  {
    id: "123e4567-e89b-12d3-a456-426614174000", // Random UUID string
    name: "Global Wholesale Price",
    expDate: new Date("2024-12-31T23:59:59Z"), // Example expiration date
    status: 1,
    isValid: true,
  },
];

export const pricingDetail: PricingDetail[] = [
  {
    id: "abc12345-def6-7890-gh12-ijklmnopqrst", // Random UUID string
    productId: "p1o2i3u4-y5t6r7e8-w9q0p1a2-s3d4f5g6h7j8", // High Garden Pinot Noir 2021
    profileId: "123e4567-e89b-12d3-a456-426614174000",
    amount: 279.06, // From the product
    adjustment: 0,
    newAmount: 279.06, // Same as the amount
    isValid: true,
  },
  {
    id: "def12345-ghi6-7890-jk12-lmnopqrstuvwx",
    productId: "p2o3i4u5-y6t7r8e9-w0q1p2a3-s4d5f6g7h8j9", // Koyama Methode Brut Nature NV
    profileId: "123e4567-e89b-12d3-a456-426614174000",
    amount: 120.0,
    adjustment: 0,
    newAmount: 120.0,
    isValid: true,
  },
  {
    id: "ghi12345-jkl6-7890-mn12-opqrstuvwxyz",
    productId: "p3o4i5u6-y7t8r9e0-w1q2p3a4-s5d6f7g8h9j0", // Corona Extra
    profileId: "123e4567-e89b-12d3-a456-426614174000",
    amount: 45.0,
    adjustment: 0,
    newAmount: 45.0,
    isValid: true,
  },
  {
    id: "jkl12345-mno6-7890-pq12-rstuvwxyzabcd",
    productId: "p4o5i6u7-y8t9r0e1-w2q3p4a5-s6d7f8g9h9k0", // Guinness Draught
    profileId: "123e4567-e89b-12d3-a456-426614174000",
    amount: 55.0,
    adjustment: 0,
    newAmount: 55.0,
    isValid: true,
  },
  {
    id: "mno12345-pqr6-7890-st12-uvwxyzabcdefgh",
    productId: "p5o6i7u8-y9t0r1e2-w3q4p5a6-s7d8f9g0h9j0", // Red Apple
    profileId: "123e4567-e89b-12d3-a456-426614174000",
    amount: 3.5,
    adjustment: 0,
    newAmount: 3.5,
    isValid: true,
  },
  {
    id: "pqr12345-stu6-7890-vw12-xyzabcdefghijkl",
    productId: "p6o7i8u9-y0t1r2e3-w4q5p6a7-s8d9f0g1h2j0", // Green Apple
    profileId: "123e4567-e89b-12d3-a456-426614174000",
    amount: 4.0,
    adjustment: 0,
    newAmount: 4.0,
    isValid: true,
  },
  {
    id: "stu12345-vwx6-7890-yz12-abcdefghijklmnop",
    productId: "p7o8i9u0-y1t2r3e4-w5q6p7a8-s9d0f1g2h3j0", // Banana
    profileId: "123e4567-e89b-12d3-a456-426614174000",
    amount: 2.5,
    adjustment: 0,
    newAmount: 2.5,
    isValid: true,
  },
  {
    id: "vwx12345-yza6-7890-bc12-defghijklmnopqr",
    productId: "p8o9i0u1-y2t3r4e5-w6q7p8a9-s0d1f2g3h4j0", // McVitie's Digestive Biscuits
    profileId: "123e4567-e89b-12d3-a456-426614174000",
    amount: 6.0,
    adjustment: 0,
    newAmount: 6.0,
    isValid: true,
  },
];
