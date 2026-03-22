const SUPREME_CONFIG = {
    API_URL: "https://script.google.com/macros/s/AKfycbwy6NXwdPKGU1O4BCflBJLPFzp8jKOe1fF7B5Cv869O58AFzDLOPIG3bmpu8OHpuNNP/exec",
    COMPANY_NAME: "Supreme Outdoor",
    
    // WORKFLOW STAGES
    STATUS: {
        PENDING: "Awaiting Approval",     // Sales submitted
        ACTIVE: "Approved - In Progress", // Manager approved, visible to Floor
        PRINTED: "Ready for Fabrication", // Printery done, Fabrication starts
        FINISHED: "Completed"             // Fabrication done
    },

    SALES_REPS: ["House", "Sandra R.", "Kadeen F.", "Bianca W.", "Amara J."],
    
    PRINTER_MODELS: [
        "Yotta Hybrid - Roll to Roll", 
        "Yotta Flatbed", 
        "Meitu - Eco Solvent", 
        "Meitu DTF - Dye Sublimation", 
        "Meitu - Dye Sublimation"
    ],

    SUBSTRATE_TYPES: [
        "Banner - 13oz White Back", "Banner - 15oz Black Back", "Banner - Mesh",
        "Vinyl - Gloss", "Vinyl - Matte", "One-Way Vision",
        "ACM Board", "PVC Board", "Coroplast", "Acrylic",
        "DTF Film", "Sublimation Paper"
    ]
};
