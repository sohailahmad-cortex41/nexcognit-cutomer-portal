export interface Agent {
  id: string;
  name: string;
  role: string;
  status: "active" | "inactive" | "training";
  conversationCount: number;
  successRate: number;
  avgDuration: string;
  avatar?: string;
}

export interface Conversation {
  id: string;
  agentId: string;
  agentName: string;
  customerName: string;
  sentiment: "positive" | "neutral" | "negative";
  purpose: "sales" | "booking" | "support" | "complaint";
  outcome: "success" | "failed" | "pending";
  duration: string;
  timestamp: string;
  channel: "web" | "phone" | "email" | "chat";
  messages?: Message[];
  aiInsights?: AIInsights;
}

export interface Message {
  id: string;
  role: "agent" | "customer";
  content: string;
  timestamp: string;
}

export interface AIInsights {
  sentiment: "positive" | "neutral" | "negative";
  purpose: string;
  summary: string;
  outcome: string;
  keyTopics: string[];
  recommendations?: string[];
}

export const mockAgents: Agent[] = [
  {
    id: "1",
    name: "Sales Agent Pro",
    role: "Sales & Lead Conversion",
    status: "active",
    conversationCount: 1247,
    successRate: 87.5,
    avgDuration: "4m 32s",
  },
  {
    id: "2",
    name: "BookBot Scheduler",
    role: "Appointment Booking",
    status: "active",
    conversationCount: 892,
    successRate: 92.3,
    avgDuration: "2m 15s",
  },
  {
    id: "3",
    name: "Support Assistant",
    role: "Customer Support",
    status: "active",
    conversationCount: 2103,
    successRate: 78.9,
    avgDuration: "6m 47s",
  },
  {
    id: "4",
    name: "Restaurant Greeter",
    role: "Reservation & Inquiries",
    status: "active",
    conversationCount: 567,
    successRate: 94.1,
    avgDuration: "3m 10s",
  },
  {
    id: "5",
    name: "E-commerce Helper",
    role: "Product Recommendations",
    status: "training",
    conversationCount: 234,
    successRate: 65.2,
    avgDuration: "5m 22s",
  },
];

export const mockConversations: Conversation[] = [
  // Conversation 1: Sales - Recent (Today) - Long conversation
  {
    id: "conv-001",
    agentId: "1",
    agentName: "Sales Agent Pro",
    customerName: "John Doe",
    sentiment: "positive",
    purpose: "sales",
    outcome: "success",
    duration: "8m 45s",
    timestamp: "2026-02-03T10:15:00",
    channel: "web",
    messages: [
      {
        id: "1",
        role: "agent",
        content: "Hello! Welcome to TechStore. I'm Sarah, your sales assistant. How can I help you find the perfect device today?",
        timestamp: "10:15:00",
      },
      {
        id: "2",
        role: "customer",
        content: "Hi Sarah! I'm looking for a new laptop for work. I do a lot of programming and some graphic design.",
        timestamp: "10:15:42",
      },
      {
        id: "3",
        role: "agent",
        content: "Excellent! Programming and design work require good performance. What's your budget range, and do you have any brand preferences?",
        timestamp: "10:16:05",
      },
      {
        id: "4",
        role: "customer",
        content: "I'm thinking around $1500-$2000. I've heard good things about both MacBooks and Dell XPS laptops.",
        timestamp: "10:16:48",
      },
      {
        id: "5",
        role: "agent",
        content: "Perfect budget! Both are excellent choices. The MacBook Pro 14\" with M3 chip starts at $1,599 and offers exceptional performance for creative work with its unified memory architecture. The Dell XPS 15 with Intel i7 and RTX 4050 graphics is $1,749 and gives you more ports and upgrade options. Which aspect is more important to you - battery life and ecosystem integration, or raw GPU power and expandability?",
        timestamp: "10:17:15",
      },
      {
        id: "6",
        role: "customer",
        content: "I think battery life and portability are more important to me. I travel quite a bit for work. How's the battery on the MacBook?",
        timestamp: "10:18:02",
      },
      {
        id: "7",
        role: "agent",
        content: "The MacBook Pro 14\" excels at that! You'll get 15-17 hours of real-world usage, and it weighs only 3.5 lbs. It's perfect for travel. Plus, if you're already in the Apple ecosystem with an iPhone or iPad, the integration is seamless - AirDrop, Universal Control, etc. The display is also stunning with mini-LED technology.",
        timestamp: "10:18:30",
      },
      {
        id: "8",
        role: "customer",
        content: "That sounds great! I do have an iPhone. What about the RAM and storage options?",
        timestamp: "10:19:15",
      },
      {
        id: "9",
        role: "agent",
        content: "The base model comes with 8GB unified memory and 512GB SSD. For programming and design, I'd recommend upgrading to 16GB ($200 more) to ensure smooth multitasking. Storage-wise, 512GB is usually sufficient if you use cloud storage, but 1TB is available for $200 additional. Would you like me to configure that for you?",
        timestamp: "10:19:45",
      },
      {
        id: "10",
        role: "customer",
        content: "Yes, let's go with 16GB RAM. 512GB storage should be fine. What's the total?",
        timestamp: "10:20:30",
      },
      {
        id: "11",
        role: "agent",
        content: "Perfect! That brings us to $1,799 for the MacBook Pro 14\" with M3 chip, 16GB unified memory, and 512GB SSD. We currently have a promotion - free AppleCare+ for the first year (valued at $99) and complimentary USB-C hub. Plus, we offer 0% financing for 12 months if you're interested. Would you like to proceed?",
        timestamp: "10:21:00",
      },
      {
        id: "12",
        role: "customer",
        content: "That's a great deal! Yes, let's do it. I'll take the 12-month financing option.",
        timestamp: "10:21:45",
      },
      {
        id: "13",
        role: "agent",
        content: "Wonderful! I'm adding that to your cart now with the financing option. You'll receive your MacBook Pro in 2-3 business days with free shipping. I'll also include setup instructions and our dedicated support number. Is there anything else you'd like to add - perhaps a laptop sleeve or external storage?",
        timestamp: "10:22:15",
      },
      {
        id: "14",
        role: "customer",
        content: "A laptop sleeve would be great! Nothing else for now though.",
        timestamp: "10:22:58",
      },
      {
        id: "15",
        role: "agent",
        content: "Perfect! I've added our premium neoprene laptop sleeve ($29.99) to your order. Your total is $1,828.99 with free shipping. You'll receive a confirmation email shortly with your financing details and tracking information. Thank you for choosing TechStore!",
        timestamp: "10:23:40",
      },
    ],
    aiInsights: {
      sentiment: "positive",
      purpose: "Product inquiry leading to successful purchase",
      summary: "Customer sought a laptop for programming and design work. Agent successfully identified needs (portability, battery life), recommended MacBook Pro 14\" with appropriate upgrades, and closed the sale with financing and promotional offers.",
      outcome: "Successfully converted lead with $1,828.99 purchase and 12-month financing commitment",
      keyTopics: ["laptop", "programming", "design", "MacBook Pro", "financing", "travel"],
      recommendations: [
        "Follow up with onboarding email after delivery",
        "Schedule post-purchase satisfaction call in 2 weeks",
        "Suggest AppleCare+ renewal before first year ends"
      ],
    },
  },
  
  // Conversation 2: Restaurant Booking - 5 days ago - Detailed booking
  {
    id: "conv-002",
    agentId: "4",
    agentName: "Restaurant Greeter",
    customerName: "Sarah Miller",
    sentiment: "positive",
    purpose: "booking",
    outcome: "success",
    duration: "6m 22s",
    timestamp: "2026-01-29T14:30:00",
    channel: "chat",
    messages: [
      {
        id: "1",
        role: "agent",
        content: "Good afternoon! Welcome to La Belle Cuisine. I'm Pierre, your reservation assistant. How may I help you today?",
        timestamp: "14:30:00",
      },
      {
        id: "2",
        role: "customer",
        content: "Hi Pierre! I'd like to make a reservation for this Saturday evening. Do you have availability for 6 people?",
        timestamp: "14:30:25",
      },
      {
        id: "3",
        role: "agent",
        content: "Absolutely! This Saturday, February 1st, for 6 guests. What time were you thinking? We have openings at 6:00 PM, 7:30 PM, and 8:45 PM.",
        timestamp: "14:30:50",
      },
      {
        id: "4",
        role: "customer",
        content: "7:30 PM would be perfect. It's actually for my parents' anniversary, so I'd love a nice table if possible.",
        timestamp: "14:31:40",
      },
      {
        id: "5",
        role: "agent",
        content: "How wonderful! Congratulations to your parents! For such a special occasion, I can reserve our window table overlooking the garden - it's one of our most romantic spots. Would you like me to arrange a complimentary anniversary dessert as well?",
        timestamp: "14:32:05",
      },
      {
        id: "6",
        role: "customer",
        content: "Oh that would be amazing! Yes, please! They love chocolate.",
        timestamp: "14:32:50",
      },
      {
        id: "7",
        role: "agent",
        content: "Perfect! I'll note that for our pastry chef - our chocolate soufflé is divine. Now, do any of your guests have dietary restrictions we should be aware of? We want to ensure everyone has a memorable experience.",
        timestamp: "14:33:15",
      },
      {
        id: "8",
        role: "customer",
        content: "Yes, actually my sister is vegetarian and my dad has a gluten sensitivity.",
        timestamp: "14:34:00",
      },
      {
        id: "9",
        role: "agent",
        content: "Noted! We have an excellent vegetarian menu and our chef can easily accommodate gluten-free needs. I'll make sure your server is briefed on this. Can I have your name and phone number to confirm the reservation?",
        timestamp: "14:34:30",
      },
      {
        id: "10",
        role: "customer",
        content: "Sure! It's Sarah Miller, phone number is 555-0123.",
        timestamp: "14:35:10",
      },
      {
        id: "11",
        role: "agent",
        content: "Wonderful, Sarah! Your reservation is confirmed for Saturday, February 1st at 7:30 PM for 6 guests. Window table with garden view, anniversary dessert, with vegetarian and gluten-free accommodations noted. You'll receive a confirmation email shortly. Is there anything else I can help with?",
        timestamp: "14:35:45",
      },
      {
        id: "12",
        role: "customer",
        content: "That's perfect! Thank you so much, Pierre!",
        timestamp: "14:36:20",
      },
    ],
    aiInsights: {
      sentiment: "positive",
      purpose: "Special occasion restaurant reservation",
      summary: "Customer made a reservation for 6 guests to celebrate parents' anniversary. Agent provided excellent service by offering prime seating, complimentary dessert, and noting dietary restrictions.",
      outcome: "Successfully booked reservation with special accommodations",
      keyTopics: ["reservation", "anniversary", "dietary restrictions", "special occasion"],
      recommendations: [
        "Send reminder 24 hours before reservation",
        "Ensure fresh flowers on table",
        "Have anniversary card signed by staff"
      ],
    },
  },
  
  // Conversation 3: Support - 1 month ago - Technical troubleshooting
  {
    id: "conv-003",
    agentId: "3",
    agentName: "Support Assistant",
    customerName: "Mike Johnson",
    sentiment: "negative",
    purpose: "support",
    outcome: "success",
    duration: "11m 34s",
    timestamp: "2026-01-03T16:20:00",
    channel: "phone",
    messages: [
      {
        id: "1",
        role: "agent",
        content: "Thank you for calling TechSupport. This is Alex. I see you're calling about your internet connection issue. Can you describe what's happening?",
        timestamp: "16:20:00",
      },
      {
        id: "2",
        role: "customer",
        content: "Yeah, my internet has been super slow for the past 3 days. I'm paying for 500 Mbps but I'm barely getting 20 Mbps. This is really frustrating.",
        timestamp: "16:20:35",
      },
      {
        id: "3",
        role: "agent",
        content: "I completely understand your frustration, Mike. Slow internet is incredibly inconvenient. Let's get this fixed right away. Are you currently connected via WiFi or ethernet cable?",
        timestamp: "16:21:00",
      },
      {
        id: "4",
        role: "customer",
        content: "WiFi. My router is in the living room and I work from my home office.",
        timestamp: "16:21:40",
      },
      {
        id: "5",
        role: "agent",
        content: "Got it. First, let's run a quick test. Can you go to speedtest.net and run a speed test? Let me know what numbers you get for download and upload speeds.",
        timestamp: "16:22:05",
      },
      {
        id: "6",
        role: "customer",
        content: "Okay, running it now... It says 18 Mbps download and 12 Mbps upload. Way below what I'm paying for.",
        timestamp: "16:23:15",
      },
      {
        id: "7",
        role: "agent",
        content: "Thank you for checking. Now, let's try connecting directly to your router with an ethernet cable if you have one available. This will help us determine if it's a WiFi issue or a broader connection problem.",
        timestamp: "16:23:45",
      },
      {
        id: "8",
        role: "customer",
        content: "Hold on... Okay, connected directly. Running the test again.",
        timestamp: "16:25:30",
      },
      {
        id: "9",
        role: "customer",
        content: "Wow, I'm getting 480 Mbps now! So it's definitely a WiFi problem.",
        timestamp: "16:26:45",
      },
      {
        id: "10",
        role: "agent",
        content: "Excellent detective work! So your internet connection is fine, but your WiFi signal is weak. This often happens with distance and interference. How far is your office from the router, and are there walls in between?",
        timestamp: "16:27:10",
      },
      {
        id: "11",
        role: "customer",
        content: "About 40 feet and yes, there are two walls between them.",
        timestamp: "16:27:50",
      },
      {
        id: "12",
        role: "agent",
        content: "That's likely the issue. I'd recommend getting a WiFi extender or mesh system. However, let me first try optimizing your current setup. Can you access your router settings? I'll guide you through changing the WiFi channel to reduce interference.",
        timestamp: "16:28:15",
      },
      {
        id: "13",
        role: "customer",
        content: "Sure, I can try that. What do I need to do?",
        timestamp: "16:29:00",
      },
      {
        id: "14",
        role: "agent",
        content: "Great! In your web browser, type 192.168.1.1 and log in with your router credentials. Then go to Wireless Settings and change the channel from Auto to Channel 11 for 2.4GHz and Channel 149 for 5GHz. These are typically less congested.",
        timestamp: "16:29:30",
      },
      {
        id: "15",
        role: "customer",
        content: "Okay, done. Should I disconnect and reconnect to WiFi?",
        timestamp: "16:30:45",
      },
      {
        id: "16",
        role: "agent",
        content: "Yes, please do that and run another speed test from your office on WiFi.",
        timestamp: "16:31:05",
      },
      {
        id: "17",
        role: "customer",
        content: "Much better! I'm getting 125 Mbps now. Still not 500, but way better than 20!",
        timestamp: "16:31:50",
      },
      {
        id: "18",
        role: "agent",
        content: "That's a huge improvement! For the full 500 Mbps in your office, you'd still need a WiFi extender or mesh system. I can send you recommendations, or we can schedule a technician to install a professional mesh system. What would you prefer?",
        timestamp: "16:32:20",
      },
      {
        id: "19",
        role: "customer",
        content: "Send me the recommendations. 125 Mbps is good enough for now. Thanks for your help, Alex!",
        timestamp: "16:33:05",
      },
    ],
    aiInsights: {
      sentiment: "positive",
      purpose: "Technical support for slow internet connection",
      summary: "Customer experiencing slow WiFi speeds. Agent systematically diagnosed the issue as WiFi range/interference problem, optimized router settings, and improved speed from 20 to 125 Mbps. Provided recommendations for further improvement.",
      outcome: "Successfully resolved immediate issue and provided upgrade path",
      keyTopics: ["internet speed", "WiFi", "troubleshooting", "router settings"],
      recommendations: [
        "Send WiFi extender product recommendations via email",
        "Follow up in 1 week to check if additional help needed",
        "Consider proactive outreach about mesh system promotion"
      ],
    },
  },
  
  // Conversation 4: Complaint - 2 weeks ago - Difficult customer
  {
    id: "conv-004",
    agentId: "3",
    agentName: "Support Assistant",
    customerName: "Emma Wilson",
    sentiment: "negative",
    purpose: "complaint",
    outcome: "pending",
    duration: "9m 18s",
    timestamp: "2026-01-20T11:45:00",
    channel: "web",
    messages: [
      {
        id: "1",
        role: "customer",
        content: "I need to speak to someone about my order. This is completely unacceptable!",
        timestamp: "11:45:00",
      },
      {
        id: "2",
        role: "agent",
        content: "I sincerely apologize for any inconvenience. I'm here to help resolve this for you right away. Can you please provide your order number and tell me what happened?",
        timestamp: "11:45:20",
      },
      {
        id: "3",
        role: "customer",
        content: "Order #45782. I ordered a blue dress for my daughter's wedding THIS WEEKEND and you sent me a black one! Do you know how important this is?",
        timestamp: "11:46:05",
      },
      {
        id: "4",
        role: "agent",
        content: "I'm so sorry - I can imagine how stressful this must be with the wedding this weekend. Let me pull up your order right away and see exactly what happened. One moment please.",
        timestamp: "11:46:30",
      },
      {
        id: "5",
        role: "agent",
        content: "I see the order here. You're absolutely right - you ordered the Royal Blue Evening Dress size 8, but our warehouse mistakenly sent the Black Evening Dress. This is entirely our error, and I'm going to fix this immediately.",
        timestamp: "11:47:15",
      },
      {
        id: "6",
        role: "customer",
        content: "And how exactly are you going to fix it? The wedding is in 3 days!",
        timestamp: "11:47:55",
      },
      {
        id: "7",
        role: "agent",
        content: "I'm checking our inventory now. We do have the Royal Blue Evening Dress size 8 in stock at our closest distribution center. I can arrange for overnight express shipping at no charge to you. What's the latest day you absolutely need it?",
        timestamp: "11:48:20",
      },
      {
        id: "8",
        role: "customer",
        content: "Friday. I'm leaving Friday morning for the wedding venue which is 4 hours away.",
        timestamp: "11:49:00",
      },
      {
        id: "9",
        role: "agent",
        content: "Understood. I'm going to personally expedite this order with guaranteed delivery by Thursday end of day. You'll have it Friday morning for sure. I'm also refunding your original shipping cost and taking 30% off the dress price as an apology for this error. And you can keep the black dress - no need to return it.",
        timestamp: "11:49:35",
      },
      {
        id: "10",
        role: "customer",
        content: "Okay... that's better. But what if it doesn't arrive on time?",
        timestamp: "11:50:40",
      },
      {
        id: "11",
        role: "agent",
        content: "I'm giving you my direct line and email. If there are ANY issues whatsoever, contact me immediately and I will personally drive it to you if needed. I'm also sending you tracking information with real-time updates. You'll be able to see exactly where it is at all times.",
        timestamp: "11:51:10",
      },
      {
        id: "12",
        role: "customer",
        content: "Alright. I really hope this works out. This wedding is very important to me.",
        timestamp: "11:52:20",
      },
      {
        id: "13",
        role: "agent",
        content: "I completely understand, and I promise you this will be delivered on time. You'll receive a confirmation email within 5 minutes with all the details, my contact information, and your partial refund. Is there anything else I can help with to ensure you're fully prepared for the wedding?",
        timestamp: "11:52:50",
      },
      {
        id: "14",
        role: "customer",
        content: "No, just make sure that dress arrives. Thank you.",
        timestamp: "11:53:45",
      },
    ],
    aiInsights: {
      sentiment: "negative",
      purpose: "Order error complaint with time-sensitive event",
      summary: "Customer received wrong color dress 3 days before daughter's wedding. Agent acknowledged error, arranged overnight shipping, provided compensation (refund shipping + 30% off + keep wrong item), and gave personal contact for accountability.",
      outcome: "Complaint partially resolved pending successful delivery",
      keyTopics: ["wrong item", "wedding", "time-sensitive", "compensation", "urgent delivery"],
      recommendations: [
        "Monitor delivery tracking closely",
        "Personal follow-up call on Thursday to confirm delivery",
        "Send flowers or gift card for wedding as goodwill gesture",
        "Investigate warehouse error to prevent future incidents"
      ],
    },
  },
  
  // Conversation 5: Sales - Yesterday - Product comparison
  {
    id: "conv-005",
    agentId: "5",
    agentName: "E-commerce Helper",
    customerName: "David Brown",
    sentiment: "neutral",
    purpose: "sales",
    outcome: "success",
    duration: "7m 50s",
    timestamp: "2026-02-02T15:30:00",
    channel: "chat",
    messages: [
      {
        id: "1",
        role: "agent",
        content: "Hello! Welcome to FitGear. I'm Lisa. Looking for fitness equipment today?",
        timestamp: "15:30:00",
      },
      {
        id: "2",
        role: "customer",
        content: "Hi! Yes, I'm trying to decide between treadmills. I'm looking at the ProRun 3000 and the SpeedMax Elite. What's the difference?",
        timestamp: "15:30:35",
      },
      {
        id: "3",
        role: "agent",
        content: "Great question! Both are excellent choices. The ProRun 3000 ($1,299) has a 2.5 HP motor, max speed of 10 mph, and is perfect for walking and jogging. The SpeedMax Elite ($1,899) has a 3.5 HP motor, goes up to 12 mph, includes more cushioning, and has built-in workout programs. What's your primary use case?",
        timestamp: "15:31:05",
      },
      {
        id: "4",
        role: "customer",
        content: "Mainly jogging, but I'd like the option to do sprint training occasionally. I'm training for a 10K.",
        timestamp: "15:32:00",
      },
      {
        id: "5",
        role: "agent",
        content: "For sprint intervals, the SpeedMax Elite would be the better choice. The more powerful motor handles quick speed changes better, and the enhanced cushioning is important for high-impact running. Plus, it has pre-programmed interval training modes. Are you concerned about the $600 price difference?",
        timestamp: "15:32:35",
      },
      {
        id: "6",
        role: "customer",
        content: "A bit, yeah. Is it really worth the extra cost?",
        timestamp: "15:33:25",
      },
      {
        id: "7",
        role: "agent",
        content: "I'd say yes for your needs. Consider this: the stronger motor means longer lifespan (SpeedMax has 10-year motor warranty vs 5-year on ProRun), better performance for sprints, and you won't outgrow it as your fitness improves. We also have 0% financing available for 18 months on the SpeedMax.",
        timestamp: "15:34:00",
      },
      {
        id: "8",
        role: "customer",
        content: "That warranty difference is significant. What about delivery and setup?",
        timestamp: "15:35:10",
      },
      {
        id: "9",
        role: "agent",
        content: "Both include free delivery and professional setup within 5-7 business days. Setup takes about 45 minutes. We also offer a 30-day trial period - if you don't love it, we'll pick it up and refund you fully. No restocking fees.",
        timestamp: "15:35:40",
      },
      {
        id: "10",
        role: "customer",
        content: "Okay, you've convinced me. Let's go with the SpeedMax Elite. Can I do the financing?",
        timestamp: "15:36:45",
      },
      {
        id: "11",
        role: "agent",
        content: "Absolutely! I'll add the SpeedMax Elite to your cart with the 18-month 0% financing option. Would you like to add the extended warranty ($149 for 3 additional years) or heart rate monitor ($79)?",
        timestamp: "15:37:15",
      },
      {
        id: "12",
        role: "customer",
        content: "I'll take the heart rate monitor, but I'll pass on the extended warranty for now.",
        timestamp: "15:37:58",
      },
      {
        id: "13",
        role: "agent",
        content: "Perfect! Your total is $1,978 ($1,899 + $79 for monitor). With financing, that's $109.89/month for 18 months. You'll receive delivery scheduling within 24 hours. Anything else I can help with today?",
        timestamp: "15:38:30",
      },
    ],
    aiInsights: {
      sentiment: "neutral",
      purpose: "Product comparison and purchase decision",
      summary: "Customer comparing two treadmills for 10K training. Agent identified need for sprint capability, justified premium model with better specs and warranty, and closed sale with financing option.",
      outcome: "Successfully converted comparison shopper with $1,978 sale",
      keyTopics: ["treadmill", "comparison", "running", "sprint training", "financing", "warranty"],
      recommendations: [
        "Send 10K training guide after delivery",
        "Follow up after 30 days to ensure satisfaction",
        "Suggest complementary products (running shoes, mat) in 2 weeks"
      ],
    },
  },
  
  // Conversation 6: Booking - 10 days ago - Medical appointment
  {
    id: "conv-006",
    agentId: "2",
    agentName: "BookBot Scheduler",
    customerName: "Jennifer Lee",
    sentiment: "positive",
    purpose: "booking",
    outcome: "success",
    duration: "5m 15s",
    timestamp: "2026-01-24T09:15:00",
    channel: "phone",
    messages: [
      {
        id: "1",
        role: "agent",
        content: "Good morning! This is CareFirst Medical. I'm Amy with scheduling. How can I help you?",
        timestamp: "09:15:00",
      },
      {
        id: "2",
        role: "customer",
        content: "Hi Amy! I need to schedule my annual physical. I haven't had one in about 2 years.",
        timestamp: "09:15:30",
      },
      {
        id: "3",
        role: "agent",
        content: "Definitely time for one! Are you an existing patient with us, and do you have a preferred doctor?",
        timestamp: "09:15:50",
      },
      {
        id: "4",
        role: "customer",
        content: "Yes, I usually see Dr. Martinez.",
        timestamp: "09:16:20",
      },
      {
        id: "5",
        role: "agent",
        content: "Perfect! Dr. Martinez has availability next week. I have Tuesday the 28th at 10:00 AM or Thursday the 30th at 2:00 PM. Which works better for you?",
        timestamp: "09:16:45",
      },
      {
        id: "6",
        role: "customer",
        content: "Thursday at 2 PM would be ideal.",
        timestamp: "09:17:25",
      },
      {
        id: "7",
        role: "agent",
        content: "Excellent! I have you scheduled for Thursday, January 30th at 2:00 PM with Dr. Martinez. Since it's been 2 years, we'll do a comprehensive physical including blood work. Please fast for 12 hours before your appointment - no food or drinks except water after 2 AM that morning. Sound okay?",
        timestamp: "09:17:55",
      },
      {
        id: "8",
        role: "customer",
        content: "Got it! Should I bring anything?",
        timestamp: "09:18:50",
      },
      {
        id: "9",
        role: "agent",
        content: "Yes, please bring your insurance card, ID, and a list of any medications you're currently taking. If you have any specific health concerns you want to discuss, write them down so you don't forget. We'll send you a reminder email and text 24 hours before your appointment.",
        timestamp: "09:19:15",
      },
      {
        id: "10",
        role: "customer",
        content: "Perfect! Thank you so much, Amy!",
        timestamp: "09:20:10",
      },
    ],
    aiInsights: {
      sentiment: "positive",
      purpose: "Annual physical examination scheduling",
      summary: "Patient scheduled annual physical with preferred doctor. Agent provided clear instructions for fasting and items to bring, set expectations for comprehensive exam.",
      outcome: "Successfully scheduled appointment with proper preparation instructions",
      keyTopics: ["annual physical", "blood work", "fasting", "appointment"],
      recommendations: [
        "Send pre-appointment questionnaire 48 hours before",
        "Automated reminder with fasting instructions",
        "Follow up after appointment for any additional tests needed"
      ],
    },
  },
];

export const dashboardStats = {
  totalConversations: 4242,
  conversationsTrend: "+12.5%",
  totalSalesBookings: 1847,
  salesTrend: "+8.3%",
  successRate: 84.7,
  successTrend: "+3.2%",
  avgResponseTime: "2.3s",
  responseTrend: "-15.2%",
};

export const sentimentData = [
  { name: "Positive", value: 2547, percentage: 60 },
  { name: "Neutral", value: 1273, percentage: 30 },
  { name: "Negative", value: 422, percentage: 10 },
];

export const purposeData = [
  { name: "Sales", value: 1523 },
  { name: "Booking", value: 1185 },
  { name: "Support", value: 1102 },
  { name: "Complaint", value: 432 },
];

export const outcomeData = [
  { name: "Success", value: 3589 },
  { name: "Failed", value: 423 },
  { name: "Pending", value: 230 },
];