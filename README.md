#  CDOT Meet — Frontend UI

A landing page for **CDOT Meet**, a government video conferencing platform, built with React.js using a modular, component-based architecture.

---

##  Features

###  Landing Page Development
Built the landing page for CDOT Meet using **React.js** with a modular, component-based structure.

![Landing Page](https://github.com/user-attachments/assets/d2502b43-7812-4ec1-a78b-8f352ec5dc89)

---

###  Dynamic Data Rendering & API Integration
Developed a dynamic **Stats Section** (Active Users, Total Meetings, Total Duration, Meeting Attendees) integrated with **React Query** to fetch live data from the API. Used **React Intersection Observer** to trigger data loading on scroll, with **Skeleton Loaders** for smooth loading states.


![Stats Section](https://github.com/user-attachments/assets/3347aa64-956a-4fdf-b6d3-1a920d1bf148)

---

###  Feature Showcase Section
Built an interactive **3D card** using **Embla Carousel** with autoplay, displaying key platform features using **Font Awesome** icons in a clean, responsive layout.


![Feature Carousel](https://github.com/user-attachments/assets/5dc3a97d-af4a-428e-a694-6e3676fe81b8)

---

###  Organizations Showcase
Built a seamless **auto-scrolling logo marquee** to highlight trusted organizations across India, using **React Bootstrap** for a clean, continuously animated display.


![Partner Organizations Slider](https://github.com/user-attachments/assets/af25caec-1844-401f-874a-98c6baf67e5d)

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
npm install react-intersection-observer
npm install embla-carousel-react embla-carousel-autoplay
```

**4. Run the project**
```bash
npm run dev
```

---

## Author

**Anuj Raut**  
GitHub: [@raut-anuj](https://github.com/raut-anuj)
