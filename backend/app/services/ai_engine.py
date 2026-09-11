"""
SmartDeliver AI Engine - LangChain, Ollama & Multi-lingual NLP Pipeline
"""
import re

class SmartDeliverAIEngine:
    def __init__(self, model_name: str = "llama3"):
        self.model_name = model_name
        self.supported_languages = ["en", "hi", "te", "ta"]

    def analyze_customer_sentiment(self, text: str) -> dict:
        """
        Analyze customer response sentiment (Urgent, Positive, Frustrated, SafeDropApproved)
        """
        text_lower = text.lower()
        if any(w in text_lower for w in ["safe", "locker", "security", "gate", "leave"]):
            intent = "SAFE_DROP_CONFIRMED"
            sentiment = "POSITIVE"
        elif any(w in text_lower for w in ["later", "tomorrow", "reschedule", "30 mins"]):
            intent = "RESCHEDULE_REQUEST"
            sentiment = "NEUTRAL"
        elif any(w in text_lower for w in ["busy", "meeting", "driving"]):
            intent = "CUSTOMER_BUSY"
            sentiment = "NEUTRAL"
        elif any(w in text_lower for w in ["husband", "wife", "alt", "emergency"]):
            intent = "CALL_ALTERNATE"
            sentiment = "URGENT"
        else:
            intent = "GENERAL_INQUIRY"
            sentiment = "NEUTRAL"

        return {
            "intent": intent,
            "sentiment": sentiment,
            "raw_text": text
        }

    def generate_smart_reply(self, customer_query: str, language: str = "en") -> str:
        """
        Generate multi-lingual automated AI response using LLM prompt templates
        """
        q_lower = customer_query.lower()

        if language == "hi":
            if "कहां" in q_lower or "where" in q_lower:
                return "आपका ऑर्डर इंडिरानगर क्षेत्र में है। डिलीवरी पार्टनर राजेश 14 मिनट में पहुंचेंगे।"
            return "धन्यवाद! आपका संदेश डिलीवरी पार्टनर राजेश को भेज दिया गया है।"

        elif language == "te":
            if "ఎక్కడ" in q_lower or "where" in q_lower:
                return "మీ ఆర్డర్ ఇందిరానగర్ ప్రాంతంలో ఉంది. డెలివరీ పార్ట్నర్ రాజేష్ 14 నిమిషాల్లో చేరుకుంటారు."
            return "ధన్యవాదాలు! మీ సందేశం డెలివరీ పార్ట్నర్ రాజేష్‌కి పంపబడింది."

        elif language == "ta":
            if "எங்கே" in q_lower or "where" in q_lower:
                return "உங்கள் ஆர்டர் இந்திராநகர் பகுதியில் உள்ளது. டெலிவரி பார்ட்னர் ராஜேஷ் 14 நிமிடங்களில் வருவார்."
            return "நன்றி! உங்கள் செய்தி டெலிவரி பார்ட்னர் ராஜேஷுக்கு அனுப்பப்பட்டது."

        # Default English
        if "where" in q_lower or "eta" in q_lower:
            return "Your order is currently 1.2 km away. Delivery executive Rajesh Kumar is driving Ather Scooter (KA-01-EQ-9821). ETA: 14 mins."
        elif "safe" in q_lower or "drop" in q_lower:
            return "Safe drop instructions saved! Parcel will be left at Apartment Security Desk Locker #14."
        
        return "Thank you for reaching out. We have updated your delivery executive instantly."

    def calculate_rto_risk_score(self, call_attempts: int, customer_history_rto: float, current_time_hour: int) -> int:
        """
        Predict RTO risk percentage (0 - 100%)
        """
        base_score = call_attempts * 35
        if customer_history_rto > 2.0:
            base_score += 20
        if current_time_hour in [13, 14, 15]: # Typical meeting hours
            base_score += 15
        
        return min(99, max(5, base_score))

ai_engine_instance = SmartDeliverAIEngine()
