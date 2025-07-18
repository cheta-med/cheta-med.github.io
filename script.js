// Sample medicine database
const medicineDB = [const medicineDB = [
    // ========== CARDIAC & BP (15) ==========
    {
        name: "Amlokind-AT",
        generic: "Amlodipine + Atenolol",
        manufacturer: "Mankind",
        dosage: "Tablet (5mg + 50mg)",
        uses: "Hypertension",
        sideEffects: "Swelling, Fatigue"
    },
    {
        name: "Telmakind Beta 25",
        generic: "Telmissartan + Metoprolol",
        manufacturer: "Mankind",
        dosage: "Tablet",
        uses: "High BP",
        sideEffects: "Dizziness"
    },
    {
        name: "Nicardia 10",
        generic: "Nifedipine",
        manufacturer: "J.B. Chemicals",
        dosage: "Tablet (10mg)",
        uses: "Angina, Hypertension",
        sideEffects: "Headache, Flushing"
    },

    // ========== PAIN & FEVER (20) ==========
    {
        name: "Sumo",
        generic: "Nimesulide",
        manufacturer: "Alkem",
        dosage: "Tablet (100mg)",
        uses: "Pain, Fever",
        sideEffects: "Heartburn"
    },
    {
        name: "Zerodol-P",
        generic: "Aceclofenac + Paracetamol",
        manufacturer: "Ipca",
        dosage: "Tablet (100mg + 500mg)",
        uses: "Arthritis, Pain",
        sideEffects: "Gastric irritation"
    },
    {
        name: "Meftal-500",
        generic: "Mefenamic Acid",
        manufacturer: "Blue Cross",
        dosage: "Tablet (500mg)",
        uses: "Period pain, Fever",
        sideEffects: "Diarrhea"
    },

    // ========== GASTRO (15) ==========
    {
        name: "Aciloc 150",
        generic: "Ranitidine",
        manufacturer: "Cadila",
        dosage: "Tablet (150mg)",
        uses: "Acidity, Ulcer",
        sideEffects: "Headache"
    },
    {
        name: "Pan 40",
        generic: "Pantoprazole",
        manufacturer: "Alkem",
        dosage: "Tablet (40mg)",
        uses: "GERD, Acidity",
        sideEffects: "Nausea"
    },
    {
        name: "Buscogast",
        generic: "Hyoscine Butylbromide",
        manufacturer: "Abbott",
        dosage: "Tablet (10mg)",
        uses: "Stomach cramps",
        sideEffects: "Dry mouth"
    },

    // ========== ANTIBIOTICS (12) ==========
    {
        name: "Eltocin-250",
        generic: "Erythromycin",
        manufacturer: "Eli Lilly",
        dosage: "Tablet (250mg)",
        uses: "Bacterial infections",
        sideEffects: "Nausea"
    },
    {
        name: "Cipol-X",
        generic: "Ciprofloxacin",
        manufacturer: "Alkem",
        dosage: "Tablet (500mg)",
        uses: "UTI, Infections",
        sideEffects: "Tendon damage risk"
    },

    // ========== ALLERGY & COLD (10) ==========
    {
        name: "Avil 25",
        generic: "Pheniramine",
        manufacturer: "Sanofi",
        dosage: "Tablet (25mg)",
        uses: "Allergies",
        sideEffects: "Drowsiness"
    },
    {
        name: "Sinarest",
        generic: "Paracetamol + Phenylephrine + Chlorpheniramine",
        manufacturer: "Centaur",
        dosage: "Tablet",
        uses: "Cold, Allergy",
        sideEffects: "Sleepiness"
    },

    // ========== DERMA (8) ==========
    {
        name: "Betnesol",
        generic: "Betamethasone",
        manufacturer: "Glaxo",
        dosage: "Cream (0.1%)",
        uses: "Skin inflammation",
        sideEffects: "Thinning of skin"
    },
    {
        name: "Dexona",
        generic: "Dexamethasone",
        manufacturer: "Zydus",
        dosage: "Tablet (0.5mg)",
        uses: "Allergies, Inflammation",
        sideEffects: "Increased appetite"
    },

    // ========== VITAMINS (10) ==========
    {
        name: "Evion 400",
        generic: "Vitamin E",
        manufacturer: "Merck",
        dosage: "Capsule (400IU)",
        uses: "Antioxidant",
        sideEffects: "Rare"
    },
    {
        name: "D3 Must",
        generic: "Vitamin D3",
        manufacturer: "USV",
        dosage: "Sachet (60K IU)",
        uses: "Vitamin D deficiency",
        sideEffects: "Hypercalcemia (if overdosed)"
    },

    // ========== OTHERS (10) ==========
    {
        name: "Deriphyllin",
        generic: "Theophylline + Etofylline",
        manufacturer: "Zydus",
        dosage: "Tablet (150mg)",
        uses: "Asthma, COPD",
        sideEffects: "Palpitations"
    },
    {
        name: "Periset",
        generic: "Perinorm",
        manufacturer: "Alkem",
        dosage: "Tablet (10mg)",
        uses: "Vomiting, Nausea",
        sideEffects: "Drowsiness"
    }
];
    // Pain & Fever
    {
        name: "Crocin",
        generic: "Paracetamol",
        manufacturer: "GSK India",
        dosage: "Tablet (500mg)",
        uses: "Fever, Mild to moderate pain",
        sideEffects: "Rare: Skin rash. Very rare: Liver damage with overdose"
    },
    {
        name: "Dolo 650",
        generic: "Paracetamol",
        manufacturer: "Micro Labs",
        dosage: "Tablet (650mg)",
        uses: "Fever, Pain relief",
        sideEffects: "Generally well tolerated"
    },
    {
        name: "Combiflam",
        generic: "Paracetamol + Ibuprofen",
        manufacturer: "Sanofi India",
        dosage: "Tablet (325mg + 400mg)",
        uses: "Pain, Inflammation",
        sideEffects: "Heartburn, Nausea, Dizziness"
    },
    {
        name: "Volini",
        generic: "Diclofenac",
        manufacturer: "Sanofi India",
        dosage: "Gel (1%)",
        uses: "Pain relief, Inflammation",
        sideEffects: "Skin irritation at application site"
    },

    // Antibiotics
    {
        name: "Azithral",
        generic: "Azithromycin",
        manufacturer: "Alembic Pharma",
        dosage: "Tablet (500mg)",
        uses: "Bacterial infections",
        sideEffects: "Nausea, Diarrhea, Abdominal pain"
    },
    {
        name: "Cifran",
        generic: "Ciprofloxacin",
        manufacturer: "Ranbaxy",
        dosage: "Tablet (500mg)",
        uses: "Bacterial infections, UTI",
        sideEffects: "Tendon rupture risk, Photosensitivity"
    },
    {
        name: "Moxikind CV",
        generic: "Amoxicillin + Clavulanic Acid",
        manufacturer: "Mankind Pharma",
        dosage: "Tablet (625mg)",
        uses: "Bacterial infections",
        sideEffects: "Diarrhea, Skin rash"
    },

    // Cardiac
    {
        name: "Ecosprin",
        generic: "Aspirin",
        manufacturer: "USV",
        dosage: "Tablet (75mg)",
        uses: "Heart attack prevention",
        sideEffects: "Bleeding risk, Heartburn"
    },
    {
        name: "Cardivas",
        generic: "Carvedilol",
        manufacturer: "Sun Pharma",
        dosage: "Tablet (3.125mg, 6.25mg)",
        uses: "High BP, Heart failure",
        sideEffects: "Dizziness, Fatigue"
    },
    {
        name: "Storvas",
        generic: "Atorvastatin",
        manufacturer: "Sun Pharma",
        dosage: "Tablet (10mg, 20mg)",
        uses: "High cholesterol",
        sideEffects: "Muscle pain, Liver enzyme changes"
    },

    // Diabetes
    {
        name: "Glycomet",
        generic: "Metformin",
        manufacturer: "USV",
        dosage: "Tablet (500mg, 850mg)",
        uses: "Type 2 Diabetes",
        sideEffects: "Diarrhea, Nausea"
    },
    {
        name: "Januvia",
        generic: "Sitagliptin",
        manufacturer: "MSD",
        dosage: "Tablet (100mg)",
        uses: "Type 2 Diabetes",
        sideEffects: "Headache, Upper respiratory infection"
    },

    // Gastrointestinal
    {
        name: "Pantop",
        generic: "Pantoprazole",
        manufacturer: "Alkem Labs",
        dosage: "Tablet (40mg)",
        uses: "Acidity, GERD",
        sideEffects: "Headache, Diarrhea"
    },
    {
        name: "Cyclopam",
        generic: "Dicyclomine + Paracetamol",
        manufacturer: "Mankind Pharma",
        dosage: "Tablet (20mg + 500mg)",
        uses: "Abdominal pain, Colic",
        sideEffects: "Dry mouth, Blurred vision"
    },

    // Neuro/Psychiatric
    {
        name: "Calmpose",
        generic: "Diazepam",
        manufacturer: "Ranbaxy",
        dosage: "Tablet (5mg)",
        uses: "Anxiety, Muscle spasm",
        sideEffects: "Drowsiness, Dependence risk"
    },
    {
        name: "Lonazep",
        generic: "Clonazepam",
        manufacturer: "Sun Pharma",
        dosage: "Tablet (0.5mg)",
        uses: "Anxiety, Seizures",
        sideEffects: "Drowsiness, Dizziness"
    },

    // Respiratory
    {
        name: "Asthalin",
        generic: "Salbutamol",
        manufacturer: "Cipla",
        dosage: "Inhaler (100mcg/dose)",
        uses: "Asthma, Bronchospasm",
        sideEffects: "Tremors, Palpitations"
    },
    {
        name: "Montair",
        generic: "Montelukast",
        manufacturer: "Cipla",
        dosage: "Tablet (10mg)",
        uses: "Asthma, Allergies",
        sideEffects: "Headache, Abdominal pain"
    },

    // Vitamins & Supplements
    {
        name: "Becosules",
        generic: "B-Complex Vitamins",
        manufacturer: "Pfizer",
        dosage: "Capsule",
        uses: "Vitamin B deficiency",
        sideEffects: "Rare at recommended doses"
    },
    {
        name: "Shelcal",
        generic: "Calcium + Vitamin D3",
        manufacturer: "Elder Pharma",
        dosage: "Tablet (500mg + 250IU)",
        uses: "Calcium deficiency",
        sideEffects: "Constipation, Bloating"
    },

    // Dermatology
    {
        name: "Benzac AC",
        generic: "Benzoyl Peroxide",
        manufacturer: "Galderma",
        dosage: "Gel (2.5%, 5%)",
        uses: "Acne",
        sideEffects: "Skin dryness, Irritation"
    },
    {
        name: "Candid",
        generic: "Clotrimazole",
        manufacturer: "Glenmark",
        dosage: "Cream (1%)",
        uses: "Fungal infections",
        sideEffects: "Local irritation"
    },
    {
        name: "Zerodol",
        generic: "Aceclofenac",
        manufacturer: "Ipca Labs",
        dosage: "Tablet (100mg)",
        uses: "Pain, Inflammation",
        sideEffects: "Heartburn, Abdominal pain"
    },
    {
        name: "Hifenac",
        generic: "Aceclofenac + Paracetamol",
        manufacturer: "Intas Pharma",
        dosage: "Tablet (100mg + 500mg)",
        uses: "Pain, Inflammation",
        sideEffects: "Nausea, Dizziness"
    },
    {
        name: "Rantac",
        generic: "Ranitidine",
        manufacturer: "J B Chemicals",
        dosage: "Tablet (150mg)",
        uses: "Acidity, Ulcer",
        sideEffects: "Headache, Constipation"
    },
    {
        name: "Zifi",
        generic: "Cefixime",
        manufacturer: "FDC Limited",
        dosage: "Tablet (200mg)",
        uses: "Bacterial infections",
        sideEffects: "Diarrhea, Stomach pain"
    },
    {
        name: "Cetzine",
        generic: "Cetirizine",
        manufacturer: "Dr Reddy's",
        dosage: "Tablet (10mg)",
        uses: "Allergies",
        sideEffects: "Drowsiness, Dry mouth"
    },
    {
        name: "Revital",
        generic: "Multivitamin + Minerals",
        manufacturer: "Ranbaxy",
        dosage: "Capsule",
        uses: "Nutritional supplement",
        sideEffects: "Rare when taken as directed"
    },
    {
        name: "Liv 52",
        generic: "Herbal Liver Formulation",
        manufacturer: "Himalaya",
        dosage: "Tablet/Syrup",
        uses: "Liver support",
        sideEffects: "Generally safe"
    },
    {
        name: "Gelusil",
        generic: "Aluminium Hydroxide + Magnesium Hydroxide + Simethicone",
        manufacturer: "Pfizer",
        dosage: "Tablet/Chewable Tablet",
        uses: "Acidity, Gas",
        sideEffects: "Constipation (with long use)"
    }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsContainer = document.querySelector('.results-container');
const template = document.querySelector('.template');
const modal = document.getElementById('detailsModal');
const closeBtn = document.querySelector('.close-btn');

// Display all medicines initially
displayMedicines(medicineDB);

// Search functionality
searchBtn.addEventListener('click', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredMeds = medicineDB.filter(med => 
        med.name.toLowerCase().includes(searchTerm) || 
        med.generic.toLowerCase().includes(searchTerm)
    );
    displayMedicines(filteredMeds);
});

// Display medicines in the UI
function displayMedicines(medicines) {
    // Clear previous results
    resultsContainer.innerHTML = '';

    if (medicines.length === 0) {
        resultsContainer.innerHTML = '<p>No medicines found. Try a different search.</p>';
        return;
    }

    medicines.forEach(medicine => {
        const card = template.cloneNode(true);
        card.classList.remove('template');
        card.style.display = 'block';
        
        card.querySelector('.med-name').textContent = medicine.name;
        card.querySelector('.generic span').textContent = medicine.generic;
        card.querySelector('.manufacturer span').textContent = medicine.manufacturer;
        card.querySelector('.uses span').textContent = medicine.uses;
        
        card.querySelector('.details-btn').addEventListener('click', () => {
            showMedicineDetails(medicine);
        });
        
        resultsContainer.appendChild(card);
    });
}

// Show medicine details in modal
function showMedicineDetails(medicine) {
    document.getElementById('detail-name').textContent = medicine.name;
    document.getElementById('detail-generic').textContent = medicine.generic;
    document.getElementById('detail-manufacturer').textContent = medicine.manufacturer;
    document.getElementById('detail-dosage').textContent = medicine.dosage;
    document.getElementById('detail-uses').textContent = medicine.uses;
    document.getElementById('detail-side-effects').textContent = medicine.sideEffects;
    
    modal.style.display = 'block';
}

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
