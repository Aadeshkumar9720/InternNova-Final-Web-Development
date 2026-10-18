const programs = {
  core: [
    {
      icon: "</>",
      title: "Web Development",
      desc: "Build responsive interfaces and practical web applications from the ground up.",
      meta: ["HTML • CSS • JS", "Project based"],
    },
    {
      icon: "Py",
      title: "Python Programming",
      desc: "Strengthen programming fundamentals through automation, scripting and applied tasks.",
      meta: ["Python", "Hands-on tasks"],
    },
    {
      icon: "☕",
      title: "Java Development",
      desc: "Practice Java programming and software development through structured project work.",
      meta: ["Java", "Real-world tasks"],
    },
    {
      icon: "⌁",
      title: "Cyber Security",
      desc: "Explore security fundamentals, ethical hacking concepts and practical defensive thinking.",
      meta: ["Security", "Practical labs"],
    },
    {
      icon: "AI",
      title: "Artificial Intelligence",
      desc: "Learn core AI concepts and turn them into beginner-friendly implementations.",
      meta: ["AI / ML", "Applied learning"],
    },
    {
      icon: "DA",
      title: "Data Analytics",
      desc: "Work with data, insights and business-focused analytical workflows.",
      meta: ["Analytics", "Portfolio project"],
    },
  ],
  premium: [
    {
      icon: "Py",
      title: "Python & Automation",
      desc: "Mentor-led advanced practice with real-world projects and career guidance.",
      meta: ["Mentor-led", "Premium track"],
    },
    {
      icon: "☕",
      title: "Java Software Development",
      desc: "Build stronger software development habits with guided implementation work.",
      meta: ["Mentor-led", "Premium track"],
    },
    {
      icon: "⌁",
      title: "Cybersecurity & Ethical Hacking",
      desc: "Go deeper into security concepts through practical, industry-oriented tasks.",
      meta: ["Mentor-led", "Premium track"],
    },
    {
      icon: "AI",
      title: "AI & Machine Learning",
      desc: "Move from concepts to hands-on AI/ML projects with structured guidance.",
      meta: ["Mentor-led", "Premium track"],
    },
    {
      icon: "</>",
      title: "Full Stack Web Development",
      desc: "Develop end-to-end web applications with project-focused mentorship.",
      meta: ["Mentor-led", "Premium track"],
    },
    {
      icon: "DA",
      title: "Data Analytics & BI",
      desc: "Build practical analytics skills and communicate data-driven insights.",
      meta: ["Mentor-led", "Premium track"],
    },
  ],
};

const domains = [
  [
    "01",
    "Web Development",
    "Build responsive websites and modern web applications.",
    "</>",
  ],
  [
    "02",
    "Data Analytics",
    "Turn raw data into useful insights and decisions.",
    "DA",
  ],
  [
    "03",
    "Cyber Security",
    "Understand digital security, risks and defensive practices.",
    "⌁",
  ],
  [
    "04",
    "Artificial Intelligence",
    "Explore AI concepts through practical implementations.",
    "AI",
  ],
  [
    "05",
    "Python Programming",
    "Automate, prototype and solve problems with Python.",
    "Py",
  ],
  [
    "06",
    "Java Development",
    "Strengthen software development with Java projects.",
    "☕",
  ],
];

const testimonials = [
  {
    quote:
      "I stopped thinking of projects as assignments and started treating them like proof of what I can build.",
    name: "Sample Student",
    role: "Illustrative testimonial · Web Development",
    initial: "AM",
  },
  {
    quote:
      "The structured tasks helped me connect what I studied in class with the workflow used to actually build something.",
    name: "Sample Student",
    role: "Illustrative testimonial · Data Analytics",
    initial: "PS",
  },
  {
    quote:
      "Getting feedback while building made the learning curve much less intimidating. I finished with work I could show.",
    name: "Sample Student",
    role: "Illustrative testimonial · Cyber Security",
    initial: "RV",
  },
];

const faqs = [
  [
    "Who is InternNova for?",
    "InternNova is designed for students and early-career learners who want structured practical exposure alongside their academic learning.",
  ],
  [
    "What domains are available?",
    "Current career-focused domains include Web Development, Data Analytics, Cyber Security, Artificial Intelligence, Python Programming and Java Development.",
  ],
  [
    "How are the programs structured?",
    "Programs use a practical learning flow: understand the fundamentals, complete structured tasks, build projects and strengthen your portfolio with guidance along the way.",
  ],
  [
    "Are the internships online?",
    "InternNova offers virtual learning and internship experiences, making the programs accessible to students regardless of location.",
  ],
  [
    "Does completing an internship guarantee a job?",
    "No. The purpose is to build practical skills, project evidence and career readiness. Employment outcomes depend on each student and the opportunities they pursue.",
  ],
];

const programGrid = document.getElementById("programGrid");
const programTabs = document.querySelectorAll(".program-tab");

function renderPrograms(type = "core") {
  programGrid.innerHTML = programs[type]
    .map(
      (program, index) => `
    <article class="program-card reveal visible">
      <div class="program-icon">${program.icon}</div>
      <h3>${program.title}</h3>
      <p>${program.desc}</p>
      <div class="program-meta">${program.meta.map((item) => `<span>${item}</span>`).join("")}</div>
      <a class="program-link" href="#apply">Explore track →</a>
    </article>
  `,
    )
    .join("");
}

programTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    programTabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    renderPrograms(tab.dataset.program);
  });
});
renderPrograms();

document.getElementById("domainGrid").innerHTML = domains
  .map(
    (d) => `
  <article class="domain-card">
    <span class="domain-num">${d[0]}</span><span class="domain-arrow">${d[3]}</span>
    <h3>${d[1]}</h3><p>${d[2]}</p>
  </article>
`,
  )
  .join("");

const faqList = document.getElementById("faqList");
faqList.innerHTML = faqs
  .map(
    (faq, index) => `
  <div class="faq-item ${index === 0 ? "open" : ""}">
    <button class="faq-question"><span>${faq[0]}</span><span>+</span></button>
    <div class="faq-answer"><p>${faq[1]}</p></div>
  </div>
`,
  )
  .join("");

document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.parentElement;
    document.querySelectorAll(".faq-item").forEach((other) => {
      if (other !== item) other.classList.remove("open");
    });
    item.classList.toggle("open");
  });
});

let storyIndex = 0;
const quoteText = document.getElementById("quoteText");
const personName = document.getElementById("personName");
const personRole = document.getElementById("personRole");
const personAvatar = document.getElementById("personAvatar");
const storyDots = document.getElementById("storyDots");

function renderStory() {
  const story = testimonials[storyIndex];
  quoteText.textContent = story.quote;
  personName.textContent = story.name;
  personRole.textContent = story.role;
  personAvatar.textContent = story.initial;
  storyDots.innerHTML = testimonials
    .map((_, i) => `<span class="${i === storyIndex ? "active" : ""}"></span>`)
    .join("");
}

document.getElementById("prevStory").addEventListener("click", () => {
  storyIndex = (storyIndex - 1 + testimonials.length) % testimonials.length;
  renderStory();
});
document.getElementById("nextStory").addEventListener("click", () => {
  storyIndex = (storyIndex + 1) % testimonials.length;
  renderStory();
});
renderStory();

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", open);
});
navLinks
  .querySelectorAll("a")
  .forEach((link) =>
    link.addEventListener("click", () => navLinks.classList.remove("open")),
  );

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.12 },
);
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const counters = document.querySelectorAll("[data-count]");
let counterStarted = false;
const counterObserver = new IntersectionObserver(
  (entries) => {
    if (entries.some((e) => e.isIntersecting) && !counterStarted) {
      counterStarted = true;
      counters.forEach((el) => {
        const target = Number(el.dataset.count);
        let current = 0;
        const step = Math.max(1, Math.ceil(target / 35));
        const timer = setInterval(() => {
          current = Math.min(target, current + step);
          el.textContent = current + (target >= 1000 ? "+" : "+");
          if (current >= target) clearInterval(timer);
        }, 30);
      });
    }
  },
  { threshold: 0.4 },
);
document.querySelector(".stats-strip") &&
  counterObserver.observe(document.querySelector(".stats-strip"));

const backTop = document.getElementById("backTop");
window.addEventListener("scroll", () =>
  backTop.classList.toggle("show", window.scrollY > 650),
);
backTop.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" }),
);
