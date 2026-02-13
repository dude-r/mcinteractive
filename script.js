const HOTSPOTS = [
  {
    "x": 23.52,
    "y": 58.46
  },
  {
    "x": 74.77,
    "y": 58.46
  },
  {
    "x": 8.67,
    "y": 59.13
  },
  {
    "x": 36.66,
    "y": 59.13
  },
  {
    "x": 13.27,
    "y": 64.82
  },
  {
    "x": 83.18,
    "y": 65.63
  },
  {
    "x": 51.51,
    "y": 66.98
  },
  {
    "x": 53.75,
    "y": 75.64
  },
  {
    "x": 18.79,
    "y": 78.35
  },
  {
    "x": 8.02,
    "y": 82.14
  },
  {
    "x": 3.29,
    "y": 83.63
  }
];
const PANELS = [
  {
    "title": "Voluntary coverage",
    "risk": "If employees cannot tailor benefits to their situation, it can show up as frustration, lower retention, and extra recruiting churn.",
    "solution": "Offer a simple menu of employee-paid options so people can buy what they actually value.",
    "bullets": [
      "Critical illness, accident, and hospital indemnity",
      "Life, dependent life, short-term and long-term disability",
      "Pet insurance or legal services (if offered)",
      "Buy-up vision or dental tiers"
    ],
    "linkText": "Voluntary benefits overview",
    "link": "https://www.motionconnected.com"
  },
  {
    "title": "Health plan basics",
    "risk": "Most confusion comes from the same few things: deductible vs out-of-pocket max, in-network vs out-of-network, and what \u201ccovered\u201d really means.",
    "solution": "Teach the three numbers that matter and point people to the right place when they need help fast.",
    "bullets": [
      "Deductible: what you pay before the plan kicks in",
      "Coinsurance: your share after the deductible",
      "Out-of-pocket max: your financial ceiling for covered services"
    ],
    "linkText": "Plan basics (edit link)",
    "link": "#"
  },
  {
    "title": "Prescription savings",
    "risk": "Employees overpay for meds when they do not know the formulary, generic options, and preferred pharmacies.",
    "solution": "Give people a \u201cbefore you refill\u201d checklist that reduces surprise costs.",
    "bullets": [
      "Check generic and therapeutic alternatives",
      "Use preferred pharmacy and mail-order when it makes sense",
      "Ask about prior authorization if coverage is denied"
    ],
    "linkText": "Rx resources (edit link)",
    "link": "#"
  },
  {
    "title": "Telehealth and virtual care",
    "risk": "People default to urgent care or the ER when they could have handled it in 10 minutes virtually.",
    "solution": "Make virtual care obvious, trustworthy, and easy to access from one place.",
    "bullets": [
      "Common issues: minor illness, rashes, sinus, refills",
      "Behavioral health visits for therapy and coaching",
      "Know when in-person care is still the right move"
    ],
    "linkText": "Telehealth access (edit link)",
    "link": "#"
  },
  {
    "title": "Preventive care",
    "risk": "Employees skip screenings because they think it costs money or they are not sure what is included.",
    "solution": "Clarify what is typically covered at no cost under preventive care rules and how to schedule it.",
    "bullets": [
      "Annual physical and age-based screenings",
      "Vaccines and routine labs when coded as preventive",
      "Remind: billing codes matter, confirm with carrier"
    ],
    "linkText": "Preventive care guide (edit link)",
    "link": "#"
  },
  {
    "title": "Dental and vision",
    "risk": "Dental and vision are easy wins, but people ignore them when they do not know the basics.",
    "solution": "Provide quick rules of thumb and an easy way to find in-network providers.",
    "bullets": [
      "Dental: cleanings, basic, major, ortho (if offered)",
      "Vision: exams, frames or contacts allowances",
      "Provider search link and ID card access"
    ],
    "linkText": "Dental/vision info (edit link)",
    "link": "#"
  },
  {
    "title": "Life and disability",
    "risk": "These benefits are often misunderstood until a tough moment hits. That is the worst time to learn how it works.",
    "solution": "Explain beneficiary basics and what triggers disability coverage in plain language.",
    "bullets": [
      "Confirm beneficiaries annually",
      "Short-term vs long-term disability and elimination periods",
      "Where to file a claim and required documentation"
    ],
    "linkText": "Life/disability info (edit link)",
    "link": "#"
  },
  {
    "title": "HSA and FSA",
    "risk": "Employees miss out on tax savings because they do not know which account fits their plan choice.",
    "solution": "Provide a simple decision tree and examples.",
    "bullets": [
      "HSA: available with an HSA-eligible HDHP, funds can roll over",
      "FSA: use-it-or-lose-it rules vary (some plans allow carryover)",
      "Eligible expenses: meds, dental, vision, dependent care (if offered)"
    ],
    "linkText": "HSA/FSA explainer (edit link)",
    "link": "#"
  },
  {
    "title": "ID cards and carrier portals",
    "risk": "When people cannot find their ID card or login, they stop. Then HR gets the ticket.",
    "solution": "Put ID card access, portal links, and \u201cwho to call\u201d in one place.",
    "bullets": [
      "Digital ID card in the carrier app (if available)",
      "Portal login reset steps",
      "Customer service number and hours"
    ],
    "linkText": "Carrier access links (edit link)",
    "link": "#"
  },
  {
    "title": "Claims and appeals",
    "risk": "Denied claims feel personal and confusing. Without a clear path, employees either give up or escalate to HR.",
    "solution": "Show the steps and timing, plus what information helps most.",
    "bullets": [
      "Request EOB and reason code",
      "Ask provider to re-code if appropriate",
      "File an appeal within the plan deadline"
    ],
    "linkText": "Claims help (edit link)",
    "link": "#"
  },
  {
    "title": "Mental health and EAP",
    "risk": "Employees delay care because it feels hard to start or they are not sure what is confidential.",
    "solution": "Make the first step simple and normalize using the EAP.",
    "bullets": [
      "Short-term counseling sessions (varies by plan)",
      "Work-life resources: legal, financial, caregiving",
      "Crisis guidance and where to go immediately if urgent"
    ],
    "linkText": "EAP resources (edit link)",
    "link": "#"
  }
];

const elHotspots = document.getElementById("hotspots");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalRisk = document.getElementById("modalRisk");
const modalSolution = document.getElementById("modalSolution");
const modalBullets = document.getElementById("modalBullets");
const modalLink = document.getElementById("modalLink");

let lastFocus = null;

function openModal(panel){
  lastFocus = document.activeElement;
  modalTitle.textContent = panel.title;
  modalRisk.textContent = panel.risk;
  modalSolution.textContent = panel.solution;

  modalBullets.innerHTML = "";
  (panel.bullets || []).forEach((b) => {
    const li = document.createElement("li");
    li.textContent = b;
    modalBullets.appendChild(li);
  });

  modalLink.textContent = panel.linkText || "Open related resource";
  modalLink.href = panel.link || "#";

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  const closeBtn = modal.querySelector(".modal__close");
  if (closeBtn) closeBtn.focus();
}

function closeModal(){
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastFocus) lastFocus.focus();
}

function buildHotspots(){
  elHotspots.innerHTML = "";
  HOTSPOTS.forEach((pos, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "hotspot";
    btn.style.left = pos.x + "%";
    btn.style.top = pos.y + "%";
    btn.setAttribute("aria-label", "Open info panel " + (idx + 1));

    btn.addEventListener("click", () => openModal(PANELS[idx] || PANELS[0]));
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(PANELS[idx] || PANELS[0]);
      }
    });

    elHotspots.appendChild(btn);
  });
}

buildHotspots();

modal.addEventListener("click", (e) => {
  const target = e.target;
  if (target && target.dataset && target.dataset.close === "true") closeModal();
});

document.addEventListener("keydown", (e) => {
  if (!modal.classList.contains("is-open")) return;
  if (e.key === "Escape") closeModal();
});
