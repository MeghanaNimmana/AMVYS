56-6666-- SmartDeliver AI Database Schema for PostgreSQL
-- Version: 1.0.0
-- Created: 2026-07-20

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Table: Customers
CREATE TABLE IF NOT EXISTS customers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) UNIQUE NOT NULL,
    alt_phone VARCHAR(20),
    email VARCHAR(255) UNIQUE NOT NULL,
    preferred_language VARCHAR(10) DEFAULT 'en', -- en, hi, te, ta
    preferred_contact_method VARCHAR(50) DEFAULT 'WhatsApp',
    preferred_time_slot VARCHAR(100),
    historical_rto_rate NUMERIC(5,2) DEFAULT 0.0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table: Delivery Executives
CREATE TABLE IF NOT EXISTS delivery_executives (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20) UNIQUE NOT NULL,
    photo_url TEXT,
    vehicle_number VARCHAR(50) NOT NULL,
    vehicle_type VARCHAR(100) NOT NULL, -- e.g., Electric Scooter
    rating NUMERIC(3,2) DEFAULT 4.9,
    total_deliveries INTEGER DEFAULT 0,
    languages TEXT[], -- ARRAY of languages spoken
    status VARCHAR(50) DEFAULT 'Active', -- Active, Offline, On Break
    current_lat NUMERIC(10,7),
    current_lng NUMERIC(10,7),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table: Products
CREATE TABLE IF NOT EXISTS products (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    category VARCHAR(100),
    price NUMERIC(10,2) NOT NULL,
    image_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table: Safe Drop Locations
CREATE TABLE IF NOT EXISTS safe_drop_locations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_id UUID REFERENCES customers(id) ON DELETE CASCADE,
    label VARCHAR(255) NOT NULL, -- Security Gate, Parcel Locker
    latitude NUMERIC(10,7),
    longitude NUMERIC(10,7),
    instructions TEXT,
    photo_proof_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table: Orders
CREATE TABLE IF NOT EXISTS orders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_code VARCHAR(50) UNIQUE NOT NULL, -- e.g. ORD-8942-X
    customer_id UUID REFERENCES customers(id) ON DELETE CASCADE,
    executive_id UUID REFERENCES delivery_executives(id) ON DELETE SET NULL,
    product_id UUID REFERENCES products(id) ON DELETE CASCADE,
    safe_drop_id UUID REFERENCES safe_drop_locations(id) ON DELETE SET NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'Out For Delivery',
    otp VARCHAR(10) NOT NULL,
    ai_risk_score INTEGER DEFAULT 0, -- 0 to 100
    ai_risk_reason TEXT,
    suggested_action TEXT,
    eta_minutes INTEGER DEFAULT 15,
    delivery_attempts INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table: Notifications & Escalation Audit
CREATE TABLE IF NOT EXISTS notifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    channel VARCHAR(50) NOT NULL, -- WHATSAPP, SMS, AI_VOICE, PUSH, EMAIL
    recipient VARCHAR(100) NOT NULL,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'SENT', -- SENT, DELIVERED, READ, FAILED
    sent_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table: AI Responses & Conversations Log
CREATE TABLE IF NOT EXISTS ai_responses (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    customer_intent VARCHAR(100),
    sentiment VARCHAR(50), -- Positive, Neutral, Urgent, Frustrated
    detected_language VARCHAR(10),
    raw_prompt TEXT,
    ai_generated_response TEXT,
    action_taken VARCHAR(100),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Table: Delivery Logs & Timeline History
CREATE TABLE IF NOT EXISTS delivery_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    order_id UUID REFERENCES orders(id) ON DELETE CASCADE,
    event_type VARCHAR(100) NOT NULL,
    notes TEXT,
    actor VARCHAR(100), -- Executive, Customer, AI_Engine, Admin
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Create Indexes for High Performance Queries
CREATE INDEX IF NOT EXISTS idx_orders_customer ON orders(customer_id);
CREATE INDEX IF NOT EXISTS idx_orders_executive ON orders(executive_id);
CREATE INDEX IF NOT EXISTS idx_orders_status ON orders(status);
CREATE INDEX IF NOT EXISTS idx_notifications_order ON notifications(order_id);
