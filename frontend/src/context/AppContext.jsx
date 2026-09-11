import React, { createContext, useContext, useState } from 'react';
import { MOCK_ORDERS, INITIAL_NOTIFICATIONS, TRANSLATIONS, MOCK_EXECUTIVE, MOCK_CUSTOMER } from '../utils/mockData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activeRole, setActiveRole] = useState('customer');
  const [activeCustomerSubTab, setActiveCustomerSubTab] = useState('tracking');
  const [selectedLang, setSelectedLang] = useState('en');
  const [orders, setOrders] = useState(MOCK_ORDERS);
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);
  const [isAiCallModalOpen, setIsAiCallModalOpen] = useState(false);
  const [isSmsModalOpen, setIsSmsModalOpen] = useState(false);
  const [isAiChatOpen, setIsAiChatOpen] = useState(false);
  const [isSafeDropModalOpen, setIsSafeDropModalOpen] = useState(false);
  const [isCartDrawerOpen, setIsCartDrawerOpen] = useState(false);
  const [emergencyMode, setEmergencyMode] = useState(false);
  const [activeTab, setActiveTab] = useState('orders');

  // Cart State for Online Storefront
  const [cart, setCart] = useState([
    {
      id: 'prod-101',
      name: 'Sony WH-1000XM5 Wireless Headphones',
      price: 29990,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=400',
      quantity: 1
    }
  ]);

  const currentOrder = orders[0];

  const t = TRANSLATIONS[selectedLang] || TRANSLATIONS.en;

  // Cart Handlers
  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartDrawerOpen(true);
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateCartQuantity = (productId, delta) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        const newQty = item.quantity + delta;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  // Place Store Order & Create Live SmartDeliver Tracked Order
  const placeStoreOrder = (paymentMethod = 'UPI / GPay') => {
    if (cart.length === 0) return;

    const mainItem = cart[0];
    const newOrderId = `ORD-${Math.floor(1000 + Math.random() * 9000)}-S`;
    const newOtp = `${Math.floor(1000 + Math.random() * 9000)}`;

    const newOrderObj = {
      id: newOrderId,
      productName: mainItem.name,
      productPrice: `₹${(mainItem.price * mainItem.quantity).toLocaleString()}`,
      productImage: mainItem.image,
      status: "Out For Delivery",
      otp: newOtp,
      aiRiskScore: 18,
      aiRiskReason: "Customer prefers Normal SMS notification & Safe Drop locker.",
      suggestedAction: "Send Normal SMS OTP & Safe Drop confirmation pin",
      etaMinutes: 12,
      executive: MOCK_EXECUTIVE,
      customer: MOCK_CUSTOMER,
      locationHistory: [
        { lat: 12.9680, lng: 77.5900, time: "Just Now", status: "Hub Dispatched" }
      ],
      timeline: [
        { step: "Order Confirmed & Paid", time: "Just Now", done: true },
        { step: "Packed at Quick Hub", time: "Just Now", done: true },
        { step: "Out For Delivery", time: "Just Now", done: true },
        { step: "Executive Near Customer", time: "Pending", done: false },
        { step: "Safe Drop / OTP Verified", time: "Pending", done: false },
        { step: "Delivered", time: "Pending", done: false }
      ]
    };

    setOrders(prev => [newOrderObj, ...prev]);
    setCart([]);
    setIsCartDrawerOpen(false);
    setActiveCustomerSubTab('tracking');

    const notif = {
      id: `N-${Date.now()}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: "ORDER_PLACED",
      title: "Storefront Order Placed!",
      message: `Order ${newOrderId} confirmed via ${paymentMethod}. SmartDeliver AI assigned partner Rajesh.`,
      orderId: newOrderId,
      unread: true
    };
    setNotifications(prev => [notif, ...prev]);
  };

  // Trigger Delivery Call Failure Simulation
  const handleSimulateUnansweredCall = () => {
    const newNotifCall = {
      id: `N-${Date.now()}-1`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: "CALL_FAILED",
      title: "Call Attempt Unanswered",
      message: `Executive ${MOCK_EXECUTIVE.name} attempted phone call. Customer did not pick up.`,
      orderId: currentOrder.id,
      unread: true
    };

    const newNotifAi = {
      id: `N-${Date.now()}-2`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: "SMS_SENT",
      title: "Normal SMS & AI Escalation Sent",
      message: "AI Communication Engine dispatched Normal SMS text message + Voice Call.",
      orderId: currentOrder.id,
      unread: true
    };

    setNotifications(prev => [newNotifAi, newNotifCall, ...prev]);
    setIsSmsModalOpen(true); // Open SMS Messenger Modal
  };

  // Customer Safe Drop Confirmation
  const handleCustomerConfirmSafeDrop = (safeDropDetails) => {
    setOrders(prev => prev.map(ord => {
      if (ord.id === currentOrder.id) {
        const updatedTimeline = ord.timeline.map(t => {
          if (t.step.includes("Customer Responded") || t.step.includes("Safe Drop")) {
            return { ...t, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), done: true };
          }
          return t;
        });
        return {
          ...ord,
          status: "Safe Drop Confirmed",
          safeDropApproved: true,
          safeDropDetails,
          timeline: updatedTimeline
        };
      }
      return ord;
    }));

    const notif = {
      id: `N-${Date.now()}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: "SAFE_DROP",
      title: "Customer Approved Safe Drop",
      message: `Location: ${safeDropDetails.label || 'Apartment Security Desk'}. Photo proof verified by AI.`,
      orderId: currentOrder.id,
      unread: true
    };

    setNotifications(prev => [notif, ...prev]);
  };

  // OTP Verification by Executive
  const handleVerifyOtp = (inputOtp) => {
    if (inputOtp === currentOrder.otp) {
      setOrders(prev => prev.map(ord => {
        if (ord.id === currentOrder.id) {
          const updatedTimeline = ord.timeline.map(t => {
            if (t.step.includes("Delivered")) return { ...t, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), done: true };
            return t;
          });
          return {
            ...ord,
            status: "Delivered",
            timeline: updatedTimeline
          };
        }
        return ord;
      }));

      const notif = {
        id: `N-${Date.now()}`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        type: "DELIVERED",
        title: "Order Delivered Successfully",
        message: `OTP ${inputOtp} verified. Executive ${MOCK_EXECUTIVE.name} completed order.`,
        orderId: currentOrder.id,
        unread: true
      };

      setNotifications(prev => [notif, ...prev]);
      return { success: true };
    }
    return { success: false, message: "Invalid OTP code" };
  };

  // Trigger Emergency Mode
  const handleTriggerEmergency = () => {
    setEmergencyMode(true);
    const notif = {
      id: `N-${Date.now()}`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      type: "EMERGENCY",
      title: "Emergency Alternate Contact Called",
      message: `No response on primary contact. System calling husband Rohan (${MOCK_CUSTOMER.altPhone}).`,
      orderId: currentOrder.id,
      unread: true
    };
    setNotifications(prev => [notif, ...prev]);
  };

  return (
    <AppContext.Provider value={{
      activeRole,
      setActiveRole,
      activeCustomerSubTab,
      setActiveCustomerSubTab,
      selectedLang,
      setSelectedLang,
      orders,
      currentOrder,
      notifications,
      cart,
      addToCart,
      removeFromCart,
      updateCartQuantity,
      placeStoreOrder,
      isCartDrawerOpen,
      setIsCartDrawerOpen,
      isAiCallModalOpen,
      setIsAiCallModalOpen,
      isSmsModalOpen,
      setIsSmsModalOpen,
      isAiChatOpen,
      setIsAiChatOpen,
      isSafeDropModalOpen,
      setIsSafeDropModalOpen,
      emergencyMode,
      setEmergencyMode,
      activeTab,
      setActiveTab,
      t,
      handleSimulateUnansweredCall,
      handleCustomerConfirmSafeDrop,
      handleVerifyOtp,
      handleTriggerEmergency
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
