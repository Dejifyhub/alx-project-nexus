🍽️ ProjectNexus — Food Delivery App
Built with React Native · TypeScript · TailwindCSS · Appwrite

FoodieX is a modern food-delivery mobile app crafted with React Native, leveraging TypeScript for type-safety, Tailwind CSS for rapid UI styling, and Appwrite for backend services, authentication, database, and storage.
It features Google Auth, smart food search, cart management, and smooth navigation powered by Expo Router.

🚀 Features
🔐 Authentication

Google OAuth login

Email/Password login (optional)

Secure user session handled by Appwrite

🍔 Food Ordering

Browse restaurants and food categories

Detailed meal pages with images, pricing, and customizations

Add items to cart

Update quantity dynamically

Remove items from cart

🔍 Smart Search

Search by meal name, category, or keywords

Fuzzy search with instant results

Optimized queries via Appwrite Databases

🛒 Shopping Cart

Add/Remove items

Increase/Decrease quantity

Automatically calculated total price

Persistent cart across sessions

🧭 App Navigation

Expo Router

Bottom Tabs & Stack navigation

Smooth transitions and animations

🖼️ File Storage

Food images stored and served from Appwrite Storage

Secure access rules

URL transformations for optimized images

🛠️ Tech Stack
Layer	Technology
Frontend	React Native (Expo), TypeScript, TailwindCSS (NativeWind)
Backend	Appwrite Cloud / Self-hosted
Database	Appwrite Databases (Collections for users, meals, restaurants, cart)
Auth	Appwrite Auth + Google OAuth
Storage	Appwrite Buckets
Navigation	Expo Router
State Mgmt	React Context / Zustand / Redux (your choice)
📂 Project Structure
.
├── app/
│   ├── (auth)/         # Login & Signup
│   ├── (tabs)/         # Bottom tab navigator
│   ├── home/           # Home screen
│   ├── restaurant/     # Restaurant pages
│   ├── meal/           # Meal detail pages
│   ├── cart/           # Shopping cart
│   └── profile/        # User profile
│
├── lib/
│   ├── appwrite.ts     # Appwrite client & configs
│   ├── auth.ts         # Google & Email Auth
│   └── api.ts          # DB actions (CRUD)
│
├── components/
│   ├── MealCard.tsx
│   ├── RestaurantCard.tsx
│   ├── CartItem.tsx
│   └── UI/...
│
├── types/
│   └── index.ts        # TypeScript types
│
└── README.md

⚙️ Installation
1️⃣ Clone the repo
git clone https://github.com/your-username/foodiex
cd foodiex

2️⃣ Install dependencies
npm install

3️⃣ Add environment variables (Appwrite)

Create a file:

.env


Add:

EXPO_PUBLIC_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
EXPO_PUBLIC_APPWRITE_PROJECT_ID=xxxx
EXPO_PUBLIC_APPWRITE_DATABASE_ID=xxxx
EXPO_PUBLIC_APPWRITE_USER_COLLECTION_ID=xxxx
EXPO_PUBLIC_APPWRITE_RESTAURANTS_COLLECTION_ID=xxxx
EXPO_PUBLIC_APPWRITE_MEALS_COLLECTION_ID=xxxx
EXPO_PUBLIC_APPWRITE_CART_COLLECTION_ID=xxxx
EXPO_PUBLIC_APPWRITE_BUCKET_ID=xxxx
GOOGLE_WEB_CLIENT_ID=xxxx

4️⃣ Start the app
npx expo start


Scan QR code with Expo Go.

🗄️ Appwrite Setup
Create these collections:
Collection	Fields
users	name, email, avatar, providerId
restaurants	name, image, location, rating
meals	restaurantId, name, description, price, image
cart	userId, mealId, quantity
Enable Google OAuth

In Appwrite console:
Auth → OAuth → Google → Add Web Client ID

🎨 UI/UX Notes

Tailwind ensures fast development with consistent styling

Responsive layouts for different device sizes

Accessible typography & contrast

Intuitive layout inspired by Uber Eats & DoorDash

🔮 Future Improvements

Real-time order tracking using Appwrite Subscriptions

Push notifications (Expo Notifications)

Delivery partner app

Payment integration (Stripe)
