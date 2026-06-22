/* =====================================
   MOBILE NAVIGATION
===================================== */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
}

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu?.classList.remove("show");
  });
});

/* =====================================
   CONTACT PAGE ENQUIRY FORM
===================================== */

const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const phone = document.getElementById("phone")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const company = document.getElementById("company")?.value.trim();
    const projectType =
      document.getElementById("projectType")?.value.trim();
    const location =
      document.getElementById("location")?.value.trim();
    const budget =
      document.getElementById("budget")?.value.trim();
    const timeline =
      document.getElementById("timeline")?.value.trim();
    const message =
      document.getElementById("message")?.value.trim();
    const consent =
      document.getElementById("consent")?.checked;

    if (
      !name ||
      !phone ||
      !email ||
      !projectType ||
      !location ||
      !message ||
      !consent
    ) {
      if (formStatus) {
        formStatus.className = "contact-form-status error";
        formStatus.textContent =
          "Please complete all required fields and accept the consent checkbox.";
      } else {
        alert(
          "Please complete all required fields and accept the consent checkbox."
        );
      }

      return;
    }

    const whatsappNumber = "919779951910";

    const enquiryMessage = `
Hello Nexjone Square Team,

I would like to discuss a project requirement.

CONTACT DETAILS
Name: ${name}
Phone: ${phone}
Email: ${email}
Company / Organisation: ${company || "Not specified"}

PROJECT DETAILS
Project Type: ${projectType}
Project Location: ${location}
Estimated Budget: ${budget || "To be discussed"}
Expected Timeline: ${timeline || "Not specified"}

REQUIREMENT
${message}

Please contact me regarding the next steps.
    `.trim();

    const whatsappURL =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(enquiryMessage);

    if (formStatus) {
      formStatus.className = "contact-form-status success";
      formStatus.textContent =
        "Your enquiry is ready. Opening WhatsApp...";
    }

    const whatsappWindow = window.open(
      whatsappURL,
      "_blank",
      "noopener,noreferrer"
    );

    if (!whatsappWindow && formStatus) {
      formStatus.className = "contact-form-status error";
      formStatus.textContent =
        "Popup was blocked. Please allow popups or use the WhatsApp button.";
      return;
    }

    setTimeout(() => {
      contactForm.reset();

      if (formStatus) {
        formStatus.textContent =
          "WhatsApp opened successfully. Please send the prepared message.";
      }
    }, 800);
  });
}
/* =====================================
   PROJECT DETAIL DATA
===================================== */

const projectDetails = {
  "multipurpose-indoor-hall": {
    title: "Multipurpose Indoor Hall",
    category: "Indoor Sports Infrastructure",
    location: "Village Bhangal Kalan, District SBS Nagar, Punjab",
    scheme: "Khelo India Scheme",
    cost: "₹4.50 Cr.",
    area: "6 Acre",
    image: "assets/images/project1.png",
    shortText:
      "A multipurpose indoor sports facility developed to support badminton, basketball, gymnastics, squash, table tennis, shooting range and athlete support spaces.",
    overview:
      "This project represents a complete indoor sports infrastructure development under the Khelo India Scheme. The facility was planned to support multiple sports disciplines along with essential support areas such as changing rooms, coaches’ rooms, store rooms, spectator gallery, bathrooms and parking.",
    highlights: [
      "Multipurpose indoor sports facility",
      "Developed under Khelo India Scheme",
      "Badminton, basketball, gymnastics and squash facilities",
      "Shooting range, table tennis and gym room",
      "Spectator gallery and athlete support spaces",
      "Parking, bathrooms and changing rooms"
    ],
    facilities: [
      "Badminton",
      "Basketball",
      "Gymnastics",
      "Shooting Range",
      "Squash Court",
      "Table Tennis",
      "Gym Room",
      "Spectator Gallery",
      "Changing Rooms",
      "Coaches’ Rooms",
      "Store Room",
      "Parking"
    ]
  },

  "mohali-hockey-turf": {
    title: "Synthetic Hockey Ground — Sector 63",
    category: "Hockey Infrastructure",
    location: "S.A.S. Nagar, Mohali, Punjab",
    scheme: "Sports Infrastructure Development",
    cost: "Project Based",
    area: "International Standard Hockey Field",
    image: "assets/images/sports-profile/projects/Bathinda Multipurpose.png",
    shortText:
      "International-standard synthetic hockey ground developed as part of major sports infrastructure works in Punjab.",
    overview:
      "The Sector 63 Mohali synthetic hockey ground is part of the documented sports infrastructure portfolio associated with Punjab State Sports Council works. The project represents specialized hockey turf development involving synthetic surfacing, field markings, sports-grade base preparation and support infrastructure.",
    highlights: [
      "International-standard synthetic hockey turf",
      "Sports-grade surface and field marking",
      "Suitable for institutional and competitive hockey use",
      "Part of documented sports infrastructure assignments",
      "Outdoor facility development with technical execution focus"
    ],
    facilities: [
      "Synthetic Hockey Turf",
      "Field Marking",
      "Outdoor Sports Surface",
      "Spectator / Support Infrastructure",
      "Drainage and Base Preparation"
    ]
  },

  "bathinda-hockey-turf": {
    title: "Synthetic Hockey Ground — Govt. Rajindra College",
    category: "Hockey Infrastructure",
    location: "Bathinda, Punjab",
    scheme: "Sports Infrastructure Development",
    cost: "Project Based",
    area: "International Standard Hockey Field",
    image: "assets/images/sports-profile/projects/hockey-ground.png",
    shortText:
      "Blue synthetic hockey astro turf facility developed for institutional sports infrastructure at Bathinda.",
    overview:
      "The Govt. Rajindra College Bathinda hockey turf is listed among the international-standard synthetic hockey grounds in the official sports infrastructure record. The facility supports organized hockey training and institutional-level sports activity.",
    highlights: [
      "Blue synthetic hockey astro turf",
      "Institutional sports facility",
      "International-standard hockey ground",
      "Sports surface execution and finishing",
      "Designed for long-term sports usage"
    ],
    facilities: [
      "Hockey Astro Turf",
      "Field Markings",
      "Outdoor Sports Facility",
      "Training Infrastructure",
      "Spectator / Peripheral Support"
    ]
  },

  "ghudda-hockey-ground": {
    title: "Synthetic Hockey Ground — Govt. Sports School Ghudda",
    category: "Hockey Infrastructure",
    location: "Ghudda, District Bathinda, Punjab",
    scheme: "Sports School Infrastructure",
    cost: "Project Based",
    area: "International Standard Hockey Field",
    image: "assets/images/sports-profile/projects/Olympian Prithipal Singh Hockey Ground, PAU Ludhiana.png",
    shortText:
      "Synthetic hockey turf facility associated with Government Sports School, Ghudda, supporting student-athlete training and sports development.",
    overview:
      "The Govt. Sports School Ghudda hockey ground is part of the documented list of international-standard hockey infrastructure works. The facility supports school-level and advanced training environments for young athletes.",
    highlights: [
      "Sports school hockey infrastructure",
      "Synthetic turf playing surface",
      "Training-focused facility",
      "Supports student-athlete development",
      "Part of Punjab sports infrastructure portfolio"
    ],
    facilities: [
      "Synthetic Hockey Ground",
      "Training Field",
      "Sports School Facility",
      "Outdoor Turf System",
      "Athlete Development Infrastructure"
    ]
  },

  "pau-hockey-ground": {
    title: "Olympian Prithipal Singh Hockey Ground",
    category: "Hockey Infrastructure",
    location: "Punjab Agricultural University, Ludhiana",
    scheme: "University Sports Infrastructure",
    cost: "Project Based",
    area: "International Standard Hockey Field",
    image: "assets/images/sports-profile/projects/Olympian Prithipal Singh Hockey Ground, PAU Ludhiana.png",
    shortText:
      "University-level synthetic hockey ground associated with PAU Ludhiana and named after Olympian Prithipal Singh.",
    overview:
      "The Olympian Prithipal Singh Synthetic Hockey Ground at Punjab Agricultural University, Ludhiana is listed in the official sports project record. It represents university-level hockey infrastructure developed for training, competitions and institutional sports use.",
    highlights: [
      "University-level hockey facility",
      "Named after Olympian Prithipal Singh",
      "Synthetic hockey surface",
      "Institutional sports development",
      "Supports training and competitive play"
    ],
    facilities: [
      "Synthetic Hockey Turf",
      "University Sports Facility",
      "Training Area",
      "Outdoor Hockey Ground",
      "Spectator and Support Infrastructure"
    ]
  },

  "gndu-hockey-ground": {
    title: "Synthetic Hockey Ground — Guru Nanak Dev University",
    category: "Hockey Infrastructure",
    location: "Amritsar, Punjab",
    scheme: "University Sports Infrastructure",
    cost: "Project Based",
    area: "International Standard Hockey Field",
    image: "assets/images/sports-profile/projects/Guru Nanak Dev University, Amritsar.png",
    shortText:
      "Synthetic hockey ground developed for university-level sports training and institutional sports activity at GNDU Amritsar.",
    overview:
      "The Guru Nanak Dev University Synthetic Hockey Ground at Amritsar is part of the documented project list. The facility strengthens university sports infrastructure and supports organized hockey training and competitions.",
    highlights: [
      "University hockey infrastructure",
      "Synthetic sports surface",
      "Training and competition support",
      "Institutional sports development",
      "Outdoor hockey facility"
    ],
    facilities: [
      "Synthetic Hockey Ground",
      "University Training Facility",
      "Outdoor Sports Surface",
      "Field Marking",
      "Support Infrastructure"
    ]
  },

  "dhudike-hockey-turf": {
    title: "Global Category Hockey Astro Turf",
    category: "Hockey Infrastructure",
    location: "Village Dhudike, District Moga, Punjab",
    scheme: "Sports Infrastructure Development",
    cost: "Project Based",
    area: "Hockey Astro Turf Facility",
    image: "assets/images/sports-profile/projects/Surjeet Hockey Academy, Burlton Park, Jalandhar.png",
    shortText:
      "Hockey astro turf facility developed in Village Dhudike, District Moga, supporting sports access beyond major urban centres.",
    overview:
      "This project showcases sports infrastructure development at village level, supporting the idea of accessible sports facilities for schools, communities and local athletes.",
    highlights: [
      "Village-level hockey infrastructure",
      "Astro turf playing surface",
      "Sports access for local athletes",
      "Community sports development",
      "Outdoor hockey facility"
    ],
    facilities: [
      "Hockey Astro Turf",
      "Outdoor Playing Field",
      "Community Sports Facility",
      "Field Marking",
      "Training Support"
    ]
  },

  "surjeet-hockey-academy": {
    title: "Surjeet Hockey Academy",
    category: "Hockey Infrastructure",
    location: "Burlton Park, Jalandhar, Punjab",
    scheme: "Academy Sports Infrastructure",
    cost: "Project Based",
    area: "Hockey Academy Facility",
    image: "assets/images/sports-profile/projects/Surjeet Hockey Academy, Burlton Park, Jalandhar.png",
    shortText:
      "Hockey academy infrastructure at Burlton Park, Jalandhar, supporting structured training and sports development.",
    overview:
      "Surjeet Hockey Academy at Burlton Park, Jalandhar represents dedicated hockey infrastructure for academy-level training and sports development. The facility supports coaching, player development and organized sports activity.",
    highlights: [
      "Academy-level hockey facility",
      "Dedicated training environment",
      "Synthetic turf infrastructure",
      "Supports player development",
      "Located at Burlton Park, Jalandhar"
    ],
    facilities: [
      "Hockey Turf",
      "Academy Training Facility",
      "Outdoor Sports Ground",
      "Player Development Space",
      "Support Infrastructure"
    ]
  },

  "synthetic-athletic-track": {
    title: "Synthetic Athletic Track",
    category: "Athletics Infrastructure",
    location: "Punjab",
    scheme: "Sports Infrastructure Development",
    cost: "Project Based",
    area: "400m Track Facility",
    image: "assets/images/sports-profile/projects/athletic-track.png",
    shortText:
      "Synthetic athletic track infrastructure designed for running, athletics training and competitive sports usage.",
    overview:
      "The documented project portfolio includes synthetic athletic tracks at Govt. Sports School Ghudda and Village Badal, District Sri Muktsar Sahib. These facilities support athletics training, school sports, competitions and long-term athlete development.",
    highlights: [
      "Synthetic running track system",
      "Suitable for athletics training",
      "Supports school and institutional sports",
      "Outdoor performance surface",
      "Built for durability and safety"
    ],
    facilities: [
      "400m Running Track",
      "Synthetic Surface",
      "Athletics Field",
      "Lane Marking",
      "Training Facility"
    ]
  },

  "swimming-pool-development": {
    title: "Swimming Pool Development",
    category: "Aquatic Sports Facilities",
    location: "Institutional & Sports Facility Projects",
    scheme: "Aquatic Sports Infrastructure",
    cost: "Project Based",
    area: "Training / Institutional Pool",
    image: "assets/images/swimmingpool.png",
    shortText:
      "Institutional and training pool infrastructure with civil works, finishing, water systems and facility planning support.",
    overview:
      "Swimming pool infrastructure development includes planning and execution support for institutional aquatic facilities, training pools and sports complexes. The work involves civil construction, pool finishing, water systems, deck planning and long-term operational usability.",
    highlights: [
      "Institutional swimming pool planning",
      "Civil works and pool finishing",
      "Water system coordination",
      "Training and sports-use facility",
      "Long-term operation support"
    ],
    facilities: [
      "Swimming Pool",
      "Pool Deck",
      "Water Systems",
      "Training Lanes",
      "Spectator / Support Area"
    ]
  },

  "indoor-sports-flooring": {
    title: "Indoor Sports Flooring",
    category: "Indoor Sports Infrastructure",
    location: "Nawanshahr, Punjab",
    scheme: "Indoor Sports Facility Development",
    cost: "Project Based",
    area: "Multipurpose Indoor Court",
    image: "assets/images/sports-profile/projects/indoor-hostel.png",
    shortText:
      "PU flooring and indoor sports court development for multipurpose play and institutional sports use.",
    overview:
      "Indoor sports flooring projects involve the development of multipurpose courts for badminton, basketball, volleyball, squash, table tennis and indoor training facilities. These spaces require precision flooring, sports marking, lighting and durable finishing.",
    highlights: [
      "PU indoor sports flooring",
      "Multipurpose court marking",
      "Suitable for indoor sports halls",
      "Durable institutional finish",
      "Supports multiple sport formats"
    ],
    facilities: [
      "PU Flooring",
      "Badminton Court",
      "Basketball Marking",
      "Indoor Hall",
      "Training Space"
    ]
  },

  "badminton-squash-courts": {
    title: "Badminton & Squash Court Development",
    category: "Indoor Court Infrastructure",
    location: "Polo Ground Patiala / Mansa, Punjab",
    scheme: "Indoor Sports Infrastructure",
    cost: "Project Based",
    area: "Indoor Court Facility",
    image: "assets/images/sports-profile/projects/multipurpose-stadium.png",
    shortText:
      "Indoor badminton and squash court construction, renovation and upgradation for public sports facilities.",
    overview:
      "The documented project list includes renovation, upgradation and construction of badminton and squash courts at Polo Ground, Patiala, along with construction of two badminton courts at Mansa. These projects support indoor racket sports and multipurpose indoor sports usage.",
    highlights: [
      "Badminton and squash court development",
      "Indoor hall renovation and upgradation",
      "Court flooring and marking",
      "Public sports facility support",
      "Institutional sports usage"
    ],
    facilities: [
      "Badminton Courts",
      "Squash Courts",
      "Indoor Court Flooring",
      "Sports Marking",
      "Hall Upgradation"
    ]
  }
};
/* =====================================
   PROJECT DETAIL PAGE RENDER
===================================== */

function renderProjectDetail() {
  const projectDetailPage = document.getElementById("projectDetailPage");

  if (!projectDetailPage) return;

  const params = new URLSearchParams(window.location.search);
  const projectId = params.get("id");

  const project = projectDetails[projectId];

  if (!project) {
    projectDetailPage.innerHTML = `
      <section class="project-not-found">
        <div class="container">
          <h1>Project Not Found</h1>
          <p>The project you are looking for could not be found.</p>
          <a href="index.html#projects" class="btn btn-primary">
            Back to Projects
          </a>
        </div>
      </section>
    `;
    return;
  }

  document.title = `${project.title} | Nexjone Square Private Limited`;

  projectDetailPage.innerHTML = `
    <section
      class="project-detail-banner"
      style="background:
        linear-gradient(
          90deg,
          rgba(3, 14, 35, 0.82) 0%,
          rgba(3, 14, 35, 0.58) 42%,
          rgba(3, 14, 35, 0.18) 100%
        ),
        url('${project.image}');
        background-size: cover;
        background-position: center;
      "
    >
      <div class="container">
        <div class="project-detail-hero-content">
          <span class="project-detail-category">
            ${project.category}
          </span>

          <h1>${project.title}</h1>

          <p>${project.shortText}</p>

          <div class="project-detail-meta">
            <div>
              <strong>Location</strong>
              <span>${project.location}</span>
            </div>

            <div>
              <strong>Scheme / Type</strong>
              <span>${project.scheme}</span>
            </div>

            <div>
              <strong>Scale</strong>
              <span>${project.area}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section project-detail-main-section">
      <div class="container project-detail-main-grid">

        <div class="project-detail-main-content">
          <span class="section-tag">Project Overview</span>

          <h2>About This Project</h2>

          <p>${project.overview}</p>

          <div class="project-detail-image-card">
            <img src="${project.image}" alt="${project.title}" />
          </div>
        </div>

        <aside class="project-detail-side-card">
          <span>Project Summary</span>

          <h3>${project.title}</h3>

          <ul>
            <li>
              <i class="fa-solid fa-location-dot"></i>
              ${project.location}
            </li>

            <li>
              <i class="fa-solid fa-layer-group"></i>
              ${project.category}
            </li>

            <li>
              <i class="fa-solid fa-ruler-combined"></i>
              ${project.area}
            </li>

            <li>
              <i class="fa-solid fa-indian-rupee-sign"></i>
              ${project.cost}
            </li>
          </ul>

          <a href="contact.html" class="btn btn-primary full-btn">
            Discuss Similar Project
          </a>
        </aside>

      </div>
    </section>

    <section class="section project-highlights-section">
      <div class="container">
        <div class="section-heading center">
          <span class="section-tag">Key Highlights</span>
          <h2>Scope & Facility Highlights</h2>
          <p>
            A quick view of the major facility components and project strengths.
          </p>
        </div>

        <div class="project-highlights-grid">
          ${project.highlights
            .map(
              (item) => `
                <div class="project-highlight-card">
                  <i class="fa-solid fa-check"></i>
                  <span>${item}</span>
                </div>
              `
            )
            .join("")}
        </div>

        <div class="project-facility-strip">
          ${project.facilities
            .map((item) => `<span>${item}</span>`)
            .join("")}
        </div>
      </div>
    </section>

    <section class="section project-detail-cta-section">
      <div class="container">
        <div class="project-detail-cta-box">
          <div>
            <span class="section-tag">Plan Your Project</span>
            <h2>Looking to Build a Similar Sports Facility?</h2>
            <p>
              Connect with Nexjone Square Private Limited for sports
              infrastructure planning, technical consultancy, execution
              support and quality-focused project development.
            </p>
          </div>

          <a href="contact.html" class="btn btn-primary">
            Request Consultation
            <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  `;
}

renderProjectDetail();