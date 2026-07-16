#  CDOT Meet — Frontend UI

A landing page for **CDOT Meet**, a government video conferencing platform, built with React.js using a modular, component-based architecture.

---

##  Features

###  Landing Page Development
Built the landing page for CDOT Meet using **React.js** with a modular, component-based structure.

![Landing Page](https://github.com/user-attachments/assets/fb39e4fd-0d6b-4990-95ed-31c507bde5b2)

---

###  Dynamic Data Rendering & API Integration
Developed a dynamic **Stats Section** (Active Users, Total Meetings, Total Duration, Meeting Attendees) integrated with **React Query** to fetch live data from the API. Used **React Intersection Observer** to trigger data loading on scroll, with **Skeleton Loaders** for smooth loading states.


![Stats Section](https://github.com/user-attachments/assets/c35a9df8-57ae-4929-9697-5169ac695cb4)

---

###  Feature Showcase Section
Built an interactive **3D card** using **Embla Carousel** with autoplay, displaying key platform features using **Font Awesome** icons in a clean, responsive layout.


![Feature Carousel](
https://github.com/user-attachments/assets/fb42073c-0fc7-44ef-aab4-1c1ad2d02acf)

---

###  Organizations Showcase
Built a seamless **auto-scrolling logo marquee** to highlight trusted organizations across India, using **React Bootstrap** for a clean, continuously animated display.


![Partner Organizations Slider](https://github.com/user-attachments/assets/533733be-dda3-4547-9fc2-5e047b0c47bb)

---

##  Technologies Used

- React
- React Query
- Embla Carousel
- Font Awesome
- React Intersection Observer
- React Bootstrap

---

##  Project Structure

```
src/
├── Website Stats/
│   ├── WebsiteStats.jsx
│   ├── StatsCard.jsx
│   ├── StatsCardPlaceholder.jsx
│   └── website_counter.css
│
├── Brand Slider/
│   ├── BrandSlider.jsx
│   └── slider.scss
│
├── Expressive Feature/
│   ├── ExpressiveFeaturesSlider.jsx
│   └── expressive_features_slider.css
│
└── Enhanced Securities/
    ├── EnhancedSecuritiesCard.jsx
    └── EnhancedSecurities.css
```

---

##  Installation & Setup

**1. Clone the repository**
```bash
git clone https://github.com/raut-anuj/InternshipProject.git
cd InternshipProject
```

**2. Install dependencies**
```bash
npm install
```

**3. Install additional packages** (if not already installed)
```bash
npm install framer-motion@6.5.1
npm install react-intersection-observer@10.0.3
npm install embla-carousel-react@8.6.0 embla-carousel-autoplay@8.6.0
```

**4. Run the project**
```bash
npm run dev
```

---

## Author

**Anuj Raut**  
GitHub: [@raut-anuj](https://github.com/raut-anuj)
