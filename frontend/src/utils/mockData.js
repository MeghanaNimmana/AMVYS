// Multi-language translation dictionaries
export const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'hi', name: 'हिंदी (Hindi)', flag: '🇮🇳' },
  { code: 'te', name: 'తెలుగు (Telugu)', flag: '🇮🇳' },
  { code: 'ta', name: 'தமிழ் (Tamil)', flag: '🇮🇳' },
];

export const TRANSLATIONS = {
  en: {
    appTitle: "SmartDeliver AI",
    deliveryStatus: "Out For Delivery",
    estimatedArrival: "Arriving in 14 mins",
    orderId: "Order #ORD-8942-X",
    execCardTitle: "Delivery Partner Details",
    callPartner: "Call Executive",
    whatsapp: "WhatsApp",
    sms: "Send SMS",
    triggerAiCall: "Trigger AI Voice Bot",
    aiChatTitle: "AI Delivery Assistant",
    aiPredictionHigh: "High Risk of Unreachable Delivery (88% Probability)",
    aiPredictionLow: "Customer Likely Available (94% Success Probability)",
    safeDropTitle: "Safe Drop Location",
    otpTitle: "Delivery Verification OTP",
    rtoSaved: "RTO Cost Saved",
    totalOrders: "Total Orders Monitored",
    deliverySuccess: "Delivery Success Rate",
    aiResolutionRate: "AI Resolution Rate",
    emergencyModeTitle: "Emergency Communication Mode Active",
  },
  hi: {
    appTitle: "स्मार्ट-डिलीवरी AI",
    deliveryStatus: "डिलीवरी के लिए निकल चुका है",
    estimatedArrival: "14 मिनट में पहुंच रहा है",
    orderId: "ऑर्डर #ORD-8942-X",
    execCardTitle: "डिलीवरी पार्टनर का विवरण",
    callPartner: "कॉल करें",
    whatsapp: "व्हाट्सएप",
    sms: "एसएमएस भेजें",
    triggerAiCall: "AI वॉइस बॉट शुरू करें",
    aiChatTitle: "AI डिलीवरी सहायक",
    aiPredictionHigh: "ग्राहक तक न पहुंचने का उच्च जोखिम (88% संभावना)",
    aiPredictionLow: "ग्राहक उपलब्ध होने की उच्च संभावना (94%)",
    safeDropTitle: "सुरक्षित स्थान पर रखें (Safe Drop)",
    otpTitle: "डिलीवरी ओटीपी (OTP)",
    rtoSaved: "RTO लागत बचाई गई",
    totalOrders: "कुल ट्रैक किए गए ऑर्डर",
    deliverySuccess: "सफल डिलीवरी दर",
    aiResolutionRate: "AI समाधान दर",
    emergencyModeTitle: "आपातकालीन संचार मोड सक्रिय",
  },
  te: {
    appTitle: "స్మార్ట్ డెలివరీ AI",
    deliveryStatus: "డెలివరీకి బయలుదేరింది",
    estimatedArrival: "14 నిమిషాల్లో చేరుకుంటుంది",
    orderId: "ఆర్డర్ #ORD-8942-X",
    execCardTitle: "డెలివరీ ఎగ్జిక్యూటివ్ వివరాలు",
    callPartner: "కాల్ చేయండి",
    whatsapp: "వాట్సాప్",
    sms: "SMS పంపండి",
    triggerAiCall: "AI వాయిస్ బాట్ ప్రారంభించు",
    aiChatTitle: "AI డెలివరీ సహాయకుడు",
    aiPredictionHigh: "కస్టమర్ అందుబాటులో లేకపోవడానికి అధిక ప్రమాదం (88%)",
    aiPredictionLow: "కస్టమర్ అందుబాటులో ఉండే అవకాశం (94%)",
    safeDropTitle: "సేఫ్ డ్రాప్ ప్రదేశం",
    otpTitle: "డెలివరీ OTP",
    rtoSaved: "RTO ఖర్చు పొదుపు",
    totalOrders: "మొత్తం ఆర్డర్లు",
    deliverySuccess: "విజయవంతమైన డెలివరీ శాతము",
    aiResolutionRate: "AI పరిష్కార శాతం",
    emergencyModeTitle: "ఎమర్జెన్సీ కమ్యూనికేషన్ మోడ్ యాక్టివ్",
  },
  ta: {
    appTitle: "ஸ்மார்ட் டெலிவரி AI",
    deliveryStatus: "டெலிவரிக்கு வெளியே உள்ளது",
    estimatedArrival: "14 நிமிடங்களில் வரும்",
    orderId: "ஆர்டர் #ORD-8942-X",
    execCardTitle: "டெலிவரி பார்ட்னர் விவரங்கள்",
    callPartner: "அழைக்கவும்",
    whatsapp: "வாட்ஸ்அப்",
    sms: "SMS அனுப்பவும்",
    triggerAiCall: "AI வாய்ஸ் பாட் தொடங்கு",
    aiChatTitle: "AI டெலிவரி உதவி",
    aiPredictionHigh: "வாடிக்கையாளர் கிடைக்காமல் போக அதிக வாய்ப்பு (88%)",
    aiPredictionLow: "வாடிக்கையாளர் கிடைக்க அதிக வாய்ப்பு (94%)",
    safeDropTitle: "பாதுகாப்பான இடம் (Safe Drop)",
    otpTitle: "டெலிவரி OTP",
    rtoSaved: "சேமிக்கப்பட்ட RTO செலவு",
    totalOrders: "மொத்த ஆர்டர்கள்",
    deliverySuccess: "டெலிவரி வெற்றி விகிதம்",
    aiResolutionRate: "AI தீர்வு விகிதம்",
    emergencyModeTitle: "அவசர தொடர்பு பயன்முறை செயல்படுகிறது",
  }
};

// Mock Delivery Executive
export const MOCK_EXECUTIVE = {
  id: "EXEC-701",
  name: "Rajesh Kumar",
  photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300",
  phone: "+91 99999 99999",
  vehicleNo: "KA-01-EQ-9821",
  vehicleType: "Electric Scooter (Ather 450X)",
  rating: 4.9,
  deliveriesCompleted: 1420,
  languages: ["English", "Hindi", "Kannada"],
  currentLat: 12.9716,
  currentLng: 77.5946,
  experienceYears: 3.5,
  status: "Active - Near Customer"
};

// Mock Customer Profile
export const MOCK_CUSTOMER = {
  id: "CUST-901",
  name: "Ananya Sharma",
  phone: "+91 99999 99999",
  altPhone: "+91 88888 88888 (Husband - Rohan)",
  email: "ananya.sharma@example.com",
  preferredContact: "WhatsApp & AI Call",
  preferredLang: "en",
  deliveryInstructions: "Please ring doorbell twice. If busy, leave with security gate or safe box.",
  safeDropPin: {
    lat: 12.9750,
    lng: 77.6010,
    label: "Apartment Security Desk / Parcel Locker #14",
    photoUrl: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&q=80&w=600"
  },
  preferredTimeSlot: "14:00 PM - 16:00 PM",
  historicalRTO: "Low (1 previous RTO in 34 orders)"
};

// Active Mock Orders
export const MOCK_ORDERS = [
  {
    id: "ORD-8942-X",
    productName: "Sony WH-1000XM5 Noise Canceling Headphones",
    productPrice: "₹29,990",
    productImage: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400",
    status: "Out For Delivery",
    otp: "5829",
    aiRiskScore: 88,
    aiRiskReason: "Customer declined 2 phone calls. AI predicts customer is in a meeting.",
    suggestedAction: "Trigger Automated AI Voice Bot & Safe Drop Offer on WhatsApp",
    etaMinutes: 14,
    executive: MOCK_EXECUTIVE,
    customer: MOCK_CUSTOMER,
    locationHistory: [
      { lat: 12.9650, lng: 77.5850, time: "13:30 PM", status: "Hub Dispatched" },
      { lat: 12.9680, lng: 77.5900, time: "13:45 PM", status: "In Transit" },
      { lat: 12.9716, lng: 77.5946, time: "13:55 PM", status: "Near Customer Location" }
    ],
    timeline: [
      { step: "Order Confirmed", time: "09:00 AM", done: true },
      { step: "Packed & Verified", time: "10:15 AM", done: true },
      { step: "Out For Delivery", time: "13:15 PM", done: true },
      { step: "Executive Near Customer", time: "13:50 PM", done: true },
      { step: "Call Attempted (Unanswered)", time: "13:52 PM", done: true, alert: true },
      { step: "AI WhatsApp Triggered", time: "13:53 PM", done: true, ai: true },
      { step: "AI Voice Bot Active", time: "13:54 PM", done: true, ai: true },
      { step: "Customer Responded (Safe Drop)", time: "Pending", done: false },
      { step: "Delivered", time: "Pending", done: false }
    ]
  }
];

// Admin Analytics Mock Data
export const MOCK_ADMIN_ANALYTICS = {
  totalOrders: 14850,
  deliveredOrders: 14120,
  rtoOrdersAvoided: 642,
  actualRTO: 88,
  rtoPercentage: "0.59%",
  revenueSavedINR: "₹18,45,000",
  aiResolutionSuccessRate: "94.2%",
  avgResponseTimeSec: 28,
  communicationChannels: [
    { name: "WhatsApp AI Bot", count: 3200, success: "96%" },
    { name: "AI Interactive Voice Call", count: 1850, success: "91%" },
    { name: "SMS Smart Link", count: 980, success: "84%" },
    { name: "Safe Drop Auto-Approval", count: 1420, success: "98%" }
  ],
  monthlyTrend: [
    { month: "Jan", standardRTO: 4.8, aiSmartRTO: 0.9, revenueSaved: 12.4 },
    { month: "Feb", standardRTO: 5.2, aiSmartRTO: 0.8, revenueSaved: 14.1 },
    { month: "Mar", standardRTO: 4.5, aiSmartRTO: 0.7, revenueSaved: 15.8 },
    { month: "Apr", standardRTO: 5.1, aiSmartRTO: 0.6, revenueSaved: 16.9 },
    { month: "May", standardRTO: 4.9, aiSmartRTO: 0.6, revenueSaved: 17.5 },
    { month: "Jun", standardRTO: 5.4, aiSmartRTO: 0.59, revenueSaved: 18.45 }
  ],
  executiveLeaderboard: [
    { id: "EXEC-701", name: "Rajesh Kumar", rating: 4.9, deliveries: 420, rtoRate: "0.2%" },
    { id: "EXEC-502", name: "Suresh Raina", rating: 4.8, deliveries: 395, rtoRate: "0.4%" }
  ]
};

export const INITIAL_NOTIFICATIONS = [
  {
    id: "N-101",
    timestamp: "13:54 PM",
    type: "AI_VOICE",
    title: "AI Voice Call Initiated",
    message: "System automatically phoned Ananya Sharma (+91 99999 99999) in English. Asking for delivery slot or safe drop.",
    orderId: "ORD-8942-X",
    unread: true
  }
];
