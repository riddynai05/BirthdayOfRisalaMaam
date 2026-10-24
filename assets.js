// High-End Luxury Aesthetics & Haute Couture Ensemble for Risala Ahmed
// Exquisite Designer Saree, Fine Heritage Jewelry, Hair Flowers, and Bindi Customization!

const SAREE_COLLECTION = [
    {
        id: 'crimson_katan',
        name: 'Royal Crimson Katan',
        type: 'Heritage Katan Silk',
        baseColor: '#7a1c2c',
        accentColor: '#d4af37',
        blouseColor: '#52101b',
        pattern: 'zari_floral',
        vibe: 'Regal Majesty',
        description: 'Rich royal crimson silk draped with opulent antique gold zari motifs and scalloped border.'
    },
    {
        id: 'emerald_banarasi',
        name: 'Midnight Emerald Banarasi',
        type: 'Banarasi Silk',
        baseColor: '#1b4332',
        accentColor: '#e0c068',
        blouseColor: '#0f291e',
        pattern: 'jamdani_panna',
        vibe: 'Grand Elegance',
        description: 'Deep emerald green silk woven with intricate golden floral jaal and grand pallu.'
    },
    {
        id: 'pearl_jamdani',
        name: 'Ivory Pearl Jamdani',
        type: 'Dhakai Handloom',
        baseColor: '#f7ede2',
        accentColor: '#c5a059',
        blouseColor: '#dfb28e',
        pattern: 'jamdani_panna',
        vibe: 'Subtle Grace',
        description: 'Delicate handwoven ivory-blush Dhakai Jamdani with delicate geometric floral weaves.'
    },
    {
        id: 'dusty_rose_chiffon',
        name: 'Dusty Rose Chiffon',
        type: 'French Chiffon',
        baseColor: '#c47b89',
        accentColor: '#f0d9de',
        blouseColor: '#934d5c',
        pattern: 'painted_roses',
        vibe: 'Modern Romance',
        description: 'Sophisticated dusty rose flowing chiffon with fine pearl scalloped borders and crystal sheen.'
    },
    {
        id: 'sapphire_silk',
        name: 'Royal Sapphire Silk',
        type: 'Pure Kanjivaram',
        baseColor: '#1d3557',
        accentColor: '#ffd700',
        blouseColor: '#14213d',
        pattern: 'paisley_butta',
        vibe: 'Aristocratic Poise',
        description: 'Majestic deep sapphire silk featuring traditional gold temple borders and rich woven pallu.'
    },
    {
        id: 'peach_organza',
        name: 'Peach Blossom Organza',
        type: 'Sheer Silk Organza',
        baseColor: '#f4a261',
        accentColor: '#e76f51',
        blouseColor: '#e67e5a',
        pattern: 'painted_roses',
        vibe: 'Dreamy Charm',
        description: 'Soft translucent peach organza with hand-painted watercolor floral motifs and soft gold piping.'
    }
];

const JEWELRY_SETS = [
    { id: 'polki_kundan', name: 'Royal Polki & Kundan Set', color: '#d4af37', gem: '#7a1c2c', desc: 'Grand uncut polki choker, chandelier jhumkas & ruby pendant' },
    { id: 'pearl_waterfall', name: 'Pearl Waterfall & Drops', color: '#ffffff', gem: '#e2e8f0', desc: 'Multi-strand cascading pearls & pearl teardrop drops' },
    { id: 'emerald_heritage', name: 'Nizam Emerald Gem Set', color: '#c5a059', gem: '#1b4332', desc: 'Deep royal emerald choker with teardrop pendant' },
    { id: 'rose_gold_solitaire', name: 'Rose Gold Diamond Choker', color: '#e8b4b8', gem: '#ffffff', desc: 'Brilliant cut solitaire diamond collar & studs' },
    { id: 'temple_gold', name: 'Antique 22K Temple Gold', color: '#d4af37', gem: '#996515', desc: 'Opulent South Asian antique gold collar with bells' },
    { id: 'none', name: 'Minimalist Dainty Gold', color: '#d4af37', gem: 'none', desc: 'Dainty gold chain and subtle studs' }
];

const HAIR_FLOWERS = [
    { id: 'none', name: 'Natural Adornment', color: 'transparent', desc: 'Minimalist clean aesthetic' },
    { id: 'jasmine_gajra', name: 'Fresh White Jasmine Gajra', color: '#fffdf5', desc: 'Double-row fragrant Mogra buds garland' },
    { id: 'crimson_roses', name: 'Velvet Crimson Garden Roses', color: '#8b0000', desc: 'Velvet fresh crimson garden roses' },
    { id: 'pink_roses', name: 'Velvet Pink Garden Roses', color: '#ff3366', desc: 'Fresh blushing pink roses' },
    { id: 'gold_matha_patti', name: 'Royal Gilded Matha Patti', color: '#d4af37', desc: 'Mughal filigree hairline headchain' },
    { id: 'pearl_pins', name: 'Shimmering Pearl Pins', color: '#ffffff', desc: 'Luminous pearl starburst pins' }
];

const BINDI_STYLES = [
    { id: 'none', name: 'Natural (No Bindi)', color: 'transparent', shape: 'none' },
    { id: 'velvet_red', name: 'Classic Velvet Red Bindi', color: '#8b0000', shape: 'dot' },
    { id: 'ruby_drop', name: 'Royal Teardrop Ruby Bindi', color: '#7a1c2c', shape: 'drop' },
    { id: 'gold_spark', name: 'Shimmering Star Gold Bindi', color: '#ffd700', shape: 'star' },
    { id: 'pearl_dot', name: 'Luminous Pearl Bindi', color: '#ffffff', shape: 'dot' }
];

const VEHICLES = [
    {
        id: 'vespa',
        name: 'Retro Cream & Rose Vespa',
        tag: 'Chic Italian Scooter',
        icon: '🛵',
        speed: 4,
        color: '#fdf0ed',
        accent: '#c47b89'
    },
    {
        id: 'bicycle',
        name: 'Parisian Basket Bicycle',
        tag: 'Floral Promenade Bike',
        icon: '🚲',
        speed: 3.2,
        color: '#f7ede2',
        accent: '#b08968'
    },
    {
        id: 'convertible',
        name: 'Vintage Cabriolet Convertible',
        tag: 'Grand Luxury Cruiser',
        icon: '🚗',
        speed: 4.8,
        color: '#f3e8ee',
        accent: '#7a1c2c'
    }
];

// HAUTE COUTURE ENSEMBLE SHOWCASE (NO CHARACTER FIGURE)
// Showcases the custom curated Saree on a Royal Dressmaker Mannequin,
// alongside Gilded Velvet Trays for Fine Jewelry, Hair Gajra/Flowers, and Forehead Bindi!
function generateCoutureEnsembleSVG(options = {}) {
    const saree = SAREE_COLLECTION.find(s => s.id === options.sareeId) || SAREE_COLLECTION[0];
    const jewelry = JEWELRY_SETS.find(j => j.id === options.jewelryId) || JEWELRY_SETS[0];
    const hairFlower = HAIR_FLOWERS.find(h => h.id === options.flowerId) || HAIR_FLOWERS[0];
    const bindi = BINDI_STYLES.find(b => b.id === options.bindiId) || BINDI_STYLES[0];
    const width = options.width || 340;
    const height = options.height || 540;

    // Pattern definitions for Saree
    let patternSvg = '';
    if (saree.pattern === 'zari_floral') {
        patternSvg = `
            <pattern id="sareePat" width="22" height="22" patternUnits="userSpaceOnUse">
                <circle cx="11" cy="11" r="2.5" fill="${saree.accentColor}" opacity="0.85"/>
                <circle cx="3" cy="3" r="1.2" fill="${saree.accentColor}" opacity="0.6"/>
                <circle cx="19" cy="19" r="1.2" fill="${saree.accentColor}" opacity="0.6"/>
                <path d="M11,6 Q14,11 11,16 Q8,11 11,6" fill="none" stroke="${saree.accentColor}" stroke-width="0.7" opacity="0.75"/>
            </pattern>
        `;
    } else if (saree.pattern === 'jamdani_panna') {
        patternSvg = `
            <pattern id="sareePat" width="18" height="18" patternUnits="userSpaceOnUse">
                <polygon points="9,2 16,9 9,16 2,9" fill="none" stroke="${saree.accentColor}" stroke-width="0.8" opacity="0.8"/>
                <circle cx="9" cy="9" r="1.5" fill="${saree.accentColor}"/>
            </pattern>
        `;
    } else if (saree.pattern === 'paisley_butta') {
        patternSvg = `
            <pattern id="sareePat" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M14,8 C17,5 21,7 20,12 C19,16 14,20 14,20 C14,20 9,16 8,12 C7,7 11,5 14,8 Z" fill="${saree.accentColor}" opacity="0.75"/>
            </pattern>
        `;
    } else if (saree.pattern === 'painted_roses') {
        patternSvg = `
            <pattern id="sareePat" width="32" height="32" patternUnits="userSpaceOnUse">
                <circle cx="16" cy="16" r="5" fill="${saree.accentColor}" opacity="0.4"/>
                <circle cx="16" cy="16" r="2.8" fill="#ffffff" opacity="0.7"/>
                <path d="M11,16 Q16,11 21,16" stroke="#ffffff" stroke-width="0.8" fill="none"/>
            </pattern>
        `;
    } else {
        patternSvg = `
            <pattern id="sareePat" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="8" cy="8" r="1.2" fill="${saree.accentColor}" opacity="0.8"/>
            </pattern>
        `;
    }

    // Jewelry Tray Render
    let jewelryDisplaySvg = '';
    let jColor = jewelry.color || '#d4af37';
    let jGem = jewelry.gem || '#7a1c2c';

    if (jewelry.id === 'pearl_waterfall') {
        jewelryDisplaySvg = `
            <path d="M40,240 Q60,250 80,240" fill="none" stroke="#ffffff" stroke-width="2.5" stroke-dasharray="3,1.5"/>
            <path d="M38,245 Q60,256 82,245" fill="none" stroke="#f0f4f8" stroke-width="2.2" stroke-dasharray="3,1.5"/>
            <circle cx="60" cy="256" r="3" fill="#ffffff" stroke="#c5a059" stroke-width="0.6"/>
            <!-- Earrings on tray -->
            <circle cx="48" cy="268" r="2.2" fill="#fff" stroke="#c5a059" stroke-width="0.5"/>
            <circle cx="72" cy="268" r="2.2" fill="#fff" stroke="#c5a059" stroke-width="0.5"/>
        `;
    } else if (jewelry.id === 'emerald_heritage') {
        jewelryDisplaySvg = `
            <path d="M40,240 Q60,252 80,240" fill="none" stroke="#c5a059" stroke-width="3"/>
            <path d="M38,244 Q60,257 82,244" fill="none" stroke="#e0c068" stroke-width="1.6"/>
            <ellipse cx="60" cy="256" rx="3.5" ry="4.5" fill="#1b4332" stroke="#e0c068" stroke-width="1"/>
            <!-- Jhumkas -->
            <circle cx="48" cy="268" r="2.2" fill="#c5a059"/>
            <circle cx="72" cy="268" r="2.2" fill="#c5a059"/>
        `;
    } else if (jewelry.id === 'rose_gold_solitaire') {
        jewelryDisplaySvg = `
            <path d="M40,242 Q60,252 80,242" fill="none" stroke="#e8b4b8" stroke-width="2"/>
            <polygon points="60,252 63.5,256 60,260 56.5,256" fill="#ffffff" stroke="#e8b4b8" stroke-width="0.8"/>
            <polygon points="48,266 50.5,269 48,272 45.5,269" fill="#ffffff" stroke="#e8b4b8" stroke-width="0.8"/>
            <polygon points="72,266 74.5,269 72,272 69.5,269" fill="#ffffff" stroke="#e8b4b8" stroke-width="0.8"/>
        `;
    } else if (jewelry.id === 'none') {
        jewelryDisplaySvg = `
            <path d="M42,244 Q60,252 78,244" fill="none" stroke="#d4af37" stroke-width="1.2"/>
            <circle cx="60" cy="252" r="1.8" fill="#d4af37"/>
            <circle cx="48" cy="266" r="1.5" fill="#d4af37"/>
            <circle cx="72" cy="266" r="1.5" fill="#d4af37"/>
        `;
    } else {
        // Royal Polki & Kundan Set (Default)
        jewelryDisplaySvg = `
            <path d="M38,240 Q60,252 82,240" fill="none" stroke="#d4af37" stroke-width="3"/>
            <path d="M36,244 Q60,258 84,244" fill="none" stroke="#faecc8" stroke-width="1.8"/>
            <ellipse cx="60" cy="256" rx="4" ry="5" fill="#7a1c2c" stroke="#ffd700" stroke-width="1"/>
            <circle cx="60" cy="263" r="1.6" fill="#ffffff"/>
            <!-- Matching Jhumkas -->
            <g fill="#d4af37" stroke="#b8860b" stroke-width="0.5">
                <circle cx="46" cy="268" r="2.5"/>
                <path d="M43,271 L49,271 L47,277 L45,277 Z" fill="#7a1c2c"/>
                <circle cx="74" cy="268" r="2.5"/>
                <path d="M71,271 L77,271 L75,277 L73,277 Z" fill="#7a1c2c"/>
            </g>
        `;
    }

    // Flowers & Bindi Tray Render
    let flowerDisplaySvg = '';
    if (hairFlower.id === 'jasmine_gajra') {
        flowerDisplaySvg = `
            <g fill="#fffdfa" stroke="#e2d8c3" stroke-width="0.6" filter="drop-shadow(0 1px 2px rgba(0,0,0,0.18))">
                <circle cx="264" cy="242" r="3.6"/><circle cx="272" cy="240" r="3.8"/>
                <circle cx="280" cy="242" r="3.6"/><circle cx="286" cy="247" r="3.8"/>
                <circle cx="288" cy="255" r="3.6"/><circle cx="284" cy="262" r="3.8"/>
                <circle cx="276" cy="265" r="3.6"/><circle cx="268" cy="262" r="3.8"/>
                <circle cx="264" cy="255" r="3.6"/><circle cx="264" cy="247" r="3.8"/>
                <!-- Inner glow -->
                <circle cx="275" cy="252" r="2.5" fill="#fff9db"/>
            </g>
        `;
    } else if (hairFlower.id === 'crimson_roses' || hairFlower.id === 'pink_roses') {
        const col = hairFlower.id === 'pink_roses' ? '#ff3366' : '#8b0000';
        const colL = hairFlower.id === 'pink_roses' ? '#ff758f' : '#b22222';
        flowerDisplaySvg = `
            <g transform="translate(276, 250)">
                <circle cx="-6" cy="-4" r="7" fill="${col}"/>
                <circle cx="-6" cy="-4" r="4" fill="${colL}"/>
                <circle cx="-6" cy="-4" r="2" fill="#fff"/>
                <circle cx="6" cy="4" r="6" fill="${col}"/>
                <circle cx="6" cy="4" r="3" fill="${colL}"/>
                <path d="M-12,-8 Q-16,-12 -12,-15 Q-8,-12 -12,-8 Z" fill="#2d6a4f"/>
            </g>
        `;
    } else if (hairFlower.id === 'gold_matha_patti') {
        flowerDisplaySvg = `
            <g transform="translate(276, 250)">
                <path d="M-14,0 Q0,-8 14,0" stroke="#ffd700" stroke-width="2" fill="none"/>
                <circle cx="0" cy="-4" r="3" fill="#ff0055" stroke="#ffd700" stroke-width="0.8"/>
                <polygon points="0,-9 1.5,-6 4,-6 2,-4 3,-1 0,-3 -3,-1 -2,-4 -4,-6 -1.5,-6" fill="#ffd700"/>
            </g>
        `;
    } else if (hairFlower.id === 'pearl_pins') {
        flowerDisplaySvg = `
            <g fill="#ffffff" stroke="#c5a059" stroke-width="0.8">
                <circle cx="268" cy="245" r="4"/>
                <circle cx="282" cy="248" r="3.5"/>
                <circle cx="274" cy="258" r="4.2"/>
            </g>
        `;
    } else {
        flowerDisplaySvg = `
            <circle cx="275" cy="252" r="3" fill="#d4af37" opacity="0.4"/>
            <text x="275" y="255" font-family="'Outfit', sans-serif" font-size="9" fill="#997b4d" text-anchor="middle">Natural</text>
        `;
    }

    return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 540" width="${width}" height="${height}" class="avatar-svg">
        <defs>
            <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="blur"/>
                <feComposite in="SourceGraphic" in2="blur" operator="over"/>
            </filter>
            <filter id="trayShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="4" stdDeviation="5" flood-color="#7a1c2c" flood-opacity="0.15"/>
            </filter>
            <linearGradient id="boutiqueBackdrop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#fff5f8"/>
                <stop offset="45%" stop-color="#fce4eb"/>
                <stop offset="100%" stop-color="#f5d0dc"/>
            </linearGradient>
            <linearGradient id="blouseGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="${saree.blouseColor}"/>
                <stop offset="100%" stop-color="${saree.baseColor}"/>
            </linearGradient>
            <linearGradient id="palluZari" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="${saree.accentColor}"/>
                <stop offset="50%" stop-color="#ffeeb3"/>
                <stop offset="100%" stop-color="${saree.accentColor}"/>
            </linearGradient>
            <linearGradient id="mannequinWood" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#d4af37"/>
                <stop offset="50%" stop-color="#faecc8"/>
                <stop offset="100%" stop-color="#b8860b"/>
            </linearGradient>
            <linearGradient id="pedestalGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#ffffff"/>
                <stop offset="50%" stop-color="#fdf4f2"/>
                <stop offset="100%" stop-color="#eed8cc"/>
            </linearGradient>
            ${patternSvg}
        </defs>

        <!-- ========================================== -->
        <!-- LUXURY BOUTIQUE SALON BACKDROP             -->
        <!-- ========================================== -->
        <rect x="0" y="0" width="340" height="540" fill="url(#boutiqueBackdrop)" rx="24"/>

        <!-- Silk Curtains with Gold Ties -->
        <g opacity="0.55">
            <path d="M0,0 Q50,110 16,260 Q40,360 0,460 L0,0 Z" fill="#f8cfd8"/>
            <rect x="0" y="240" width="20" height="5" rx="2.5" fill="#d4af37"/>
            <path d="M340,0 Q290,110 324,260 Q300,360 340,460 L340,0 Z" fill="#f8cfd8"/>
            <rect x="320" y="240" width="20" height="5" rx="2.5" fill="#d4af37"/>
        </g>

        <!-- Gilded Top Arch & Hanging Crystal Chandelier -->
        <g id="chandelier">
            <path d="M0,0 L340,0 L340,32 Q170,62 0,32 Z" fill="#fff8f9" stroke="#d4af37" stroke-width="1.4"/>
            <g transform="translate(170, 0)">
                <line x1="0" y1="0" x2="0" y2="24" stroke="#d4af37" stroke-width="1.2"/>
                <circle cx="0" cy="24" r="3.5" fill="#d4af37"/>
                <path d="M-18,28 Q0,22 18,28 Q0,32 -18,28 Z" fill="#ffd700" stroke="#b8860b" stroke-width="0.8"/>
                <circle cx="-13" cy="35" r="2.2" fill="#ffffff" filter="url(#softGlow)"/>
                <circle cx="-6" cy="37" r="2.5" fill="#ffffff" filter="url(#softGlow)"/>
                <circle cx="0" cy="40" r="3.0" fill="#ffffff" filter="url(#softGlow)"/>
                <circle cx="6" cy="37" r="2.5" fill="#ffffff" filter="url(#softGlow)"/>
                <circle cx="13" cy="35" r="2.2" fill="#ffffff" filter="url(#softGlow)"/>
            </g>
        </g>

        <!-- Ambient Golden Stars & Sparkles -->
        <g fill="#ffd700" opacity="0.8">
            <polygon points="50,110 52,114 56,115.5 52,117 50,121 48,117 44,115.5 48,114" filter="url(#softGlow)"/>
            <polygon points="290,120 291.5,123.5 295,124.5 291.5,125.5 290,129 288.5,125.5 285,124.5 288.5,123.5" filter="url(#softGlow)"/>
            <circle cx="45" cy="160" r="12" fill="#ffffff" opacity="0.3" filter="url(#softGlow)"/>
            <circle cx="295" cy="165" r="14" fill="#ffffff" opacity="0.3" filter="url(#softGlow)"/>
        </g>

        <!-- Marble Floor Pedestal -->
        <ellipse cx="170" cy="470" rx="95" ry="18" fill="url(#pedestalGrad)" stroke="#d4af37" stroke-width="2" filter="drop-shadow(0 4px 10px rgba(0,0,0,0.1))"/>
        <ellipse cx="170" cy="470" rx="80" ry="12" fill="none" stroke="#ffffff" stroke-width="1.2" opacity="0.8"/>

        <!-- ========================================== -->
        <!-- CENTRAL HAUTE COUTURE DRESSMAKER FORM      -->
        <!-- Draped in Risala Ma'am's Custom Saree      -->
        <!-- ========================================== -->

        <!-- Mannequin Gilded Cast-Iron Stand Base -->
        <g id="mannequinStand">
            <!-- Stand column -->
            <rect x="168" y="400" width="4" height="60" fill="url(#mannequinWood)"/>
            <!-- Antique scrolled tripod feet -->
            <path d="M145,464 Q170,454 195,464" stroke="url(#mannequinWood)" stroke-width="3" fill="none"/>
            <circle cx="145" cy="464" r="2.5" fill="#d4af37"/>
            <circle cx="195" cy="464" r="2.5" fill="#d4af37"/>
            <!-- Turned finial cap atop mannequin -->
            <circle cx="170" cy="78" r="6" fill="url(#mannequinWood)" stroke="#b8860b" stroke-width="0.8"/>
            <rect x="167" y="84" width="6" height="8" rx="2" fill="url(#mannequinWood)"/>
        </g>

        <!-- Mannequin Torso & Saree Drape -->
        <g id="coutureSareeDrape">
            <!-- Mannequin Velvet Neck & Shoulders -->
            <path d="M162,92 L162,110 Q170,113 178,110 L178,92 Z" fill="#ecd9cc"/>
            <path d="M148,110 Q170,118 192,110 L196,128 L144,128 Z" fill="#ecd9cc"/>

            <!-- Tailored Saree Blouse on Form -->
            <path d="M144,124 Q170,132 196,124 L192,166 Q170,170 148,166 Z" fill="url(#blouseGrad)"/>
            <path d="M150,124 Q170,140 190,124" fill="none" stroke="${saree.accentColor}" stroke-width="2"/>

            <!-- Flattering Saree Skirt (Hugs waist, flares to hem) -->
            <path d="M148,166 Q170,164 192,166 Q204,215 208,285 Q212,355 218,416 Q170,428 122,416 Q128,355 132,285 Q136,215 148,166 Z" fill="${saree.baseColor}"/>
            <path d="M148,166 Q170,164 192,166 Q204,215 208,285 Q212,355 218,416 Q170,428 122,416 Q128,355 132,285 Q136,215 148,166 Z" fill="url(#sareePat)"/>

            <!-- Front Pleats (Patli) with Golden Zari Piping -->
            <g stroke="${saree.accentColor}" stroke-width="1.4" opacity="0.9">
                <path d="M164,168 L162,420"/>
                <path d="M167,168 L166,422"/>
                <path d="M170,168 L170,423"/>
                <path d="M173,168 L174,422"/>
                <path d="M176,168 L178,420"/>
            </g>

            <!-- Saree Bottom Border (Paar) - Scalloped Gold Zari -->
            <path d="M122,408 Q170,420 218,408 L218,418 Q170,430 122,418 Z" fill="url(#palluZari)"/>
            <path d="M123,403 Q170,415 217,403" stroke="#ffffff" stroke-width="1.2" stroke-dasharray="3,3" fill="none"/>

            <!-- Saree Pallu (Aanchal) - Diagonal Drape across Bust -->
            <path d="M192,166 Q165,185 140,128 L132,134 Q156,204 192,174 Z" fill="${saree.baseColor}"/>
            <path d="M192,166 Q165,185 140,128 L132,134 Q156,204 192,174 Z" fill="url(#sareePat)"/>

            <!-- Cascading Pallu over Left Shoulder with Golden Zari Hem -->
            <path d="M132,134 Q118,190 106,290 Q122,310 138,285 Q142,210 140,128 Z" fill="${saree.baseColor}" filter="url(#softGlow)"/>
            <path d="M132,134 Q118,190 106,290 Q122,310 138,285 Q142,210 140,128 Z" fill="url(#sareePat)"/>
            <path d="M106,285 Q122,305 138,280" stroke="url(#palluZari)" stroke-width="6" fill="none"/>
            <path d="M104,289 Q122,309 140,284" stroke="${saree.accentColor}" stroke-width="1.4" stroke-dasharray="2,3" fill="none"/>

            <!-- Golden Waistband / Kamarbandh Accent -->
            <path d="M148,167 Q170,173 192,167" fill="none" stroke="${jColor}" stroke-width="2.4"/>
            <circle cx="170" cy="170" r="2.8" fill="${jGem}"/>
        </g>

        <!-- ========================================== -->
        <!-- FLOATING GILDED VELVET DISPLAY TRAYS       -->
        <!-- ========================================== -->

        <!-- LEFT TRAY: FINE HERITAGE JEWELRY -->
        <g id="jewelryTray" filter="url(#trayShadow)">
            <!-- Gilded Oval Tray -->
            <ellipse cx="60" cy="255" rx="44" ry="34" fill="#ffffff" stroke="#d4af37" stroke-width="2"/>
            <!-- Velvet Lining -->
            <ellipse cx="60" cy="255" rx="38" ry="28" fill="#4a101d"/>
            <!-- Jewelry Items -->
            ${jewelryDisplaySvg}
            <!-- Tray Label Plaque -->
            <rect x="22" y="286" width="76" height="18" rx="9" fill="#ffffff" stroke="#d4af37" stroke-width="1.2"/>
            <text x="60" y="299" font-family="'Outfit', sans-serif" font-size="9" font-weight="700" fill="#7a1c2c" text-anchor="middle">👑 Fine Jewelry</text>
        </g>

        <!-- RIGHT TRAY: FRESH HAIR FLOWERS / GAJRA -->
        <g id="flowerTray" filter="url(#trayShadow)">
            <!-- Gilded Oval Tray -->
            <ellipse cx="275" cy="255" rx="44" ry="34" fill="#ffffff" stroke="#d4af37" stroke-width="2"/>
            <!-- Velvet Lining -->
            <ellipse cx="275" cy="255" rx="38" ry="28" fill="#fdf0ea"/>
            <!-- Flowers Item -->
            ${flowerDisplaySvg}
            <!-- Tray Label Plaque -->
            <rect x="234" y="286" width="82" height="18" rx="9" fill="#ffffff" stroke="#d4af37" stroke-width="1.2"/>
            <text x="275" y="299" font-family="'Outfit', sans-serif" font-size="9" font-weight="700" fill="#7a1c2c" text-anchor="middle">🌺 Hair Gajra</text>
        </g>

        <!-- ========================================== -->
        <!-- BOTTOM PERSONALIZED COUTURE BANNER         -->
        <!-- ========================================== -->
        <g id="nameBadge" transform="translate(60, 492)">
            <rect x="0" y="0" width="220" height="34" rx="17" fill="#ffffff" opacity="0.96" stroke="#d4af37" stroke-width="1.5" filter="url(#softGlow)"/>
            <circle cx="16" cy="17" r="3.5" fill="${saree.baseColor}"/>
            <circle cx="204" cy="17" r="3.5" fill="${saree.baseColor}"/>
            <text x="110" y="16" font-family="'Playfair Display', serif" font-size="13" font-weight="800" fill="#7a1c2c" text-anchor="middle">October 24, 2026</text>
            <text x="110" y="28" font-family="'Outfit', sans-serif" font-size="9" font-weight="600" fill="#997b4d" text-anchor="middle" letter-spacing="0.5">${saree.name}</text>
        </g>
    </svg>
    `;
}

// Aliases for seamless integration
const generateAvatarSVG = generateCoutureEnsembleSVG;
const generatePrettyAvatarSVG = generateCoutureEnsembleSVG;

// FRESH FLOWER BOUQUET SVG
function generateBouquetSVG(width = 280, height = 280) {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 280" width="${width}" height="${height}">
        <defs>
            <linearGradient id="kraftPaper" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#fdf0ea"/>
                <stop offset="100%" stop-color="#eed8cc"/>
            </linearGradient>
            <linearGradient id="roseRed" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#ff3366"/>
                <stop offset="100%" stop-color="#99002e"/>
            </linearGradient>
            <linearGradient id="blushRose" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#ffccd5"/>
                <stop offset="100%" stop-color="#fb6f92"/>
            </linearGradient>
            <linearGradient id="satinRibbon" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#d4af37"/>
                <stop offset="50%" stop-color="#fff2b2"/>
                <stop offset="100%" stop-color="#d4af37"/>
            </linearGradient>
        </defs>

        <polygon points="140,265 65,140 215,140" fill="url(#kraftPaper)" stroke="#d4af37" stroke-width="1.8"/>
        <polygon points="140,265 85,150 195,150" fill="#edd6bc" opacity="0.6"/>

        <g fill="#2d6a4f">
            <path d="M80,120 Q55,90 70,75 Q95,95 80,120 Z"/>
            <path d="M200,120 Q225,90 210,75 Q185,95 200,120 Z"/>
            <path d="M140,80 Q130,45 140,35 Q150,45 140,80 Z"/>
            <path d="M105,95 Q85,60 100,50 Q115,70 105,95 Z"/>
            <path d="M175,95 Q195,60 180,50 Q165,70 175,95 Z"/>
        </g>
        <g fill="#ffffff" stroke="#e0e0e0" stroke-width="0.5">
            <circle cx="75" cy="85" r="3"/><circle cx="82" cy="78" r="3.5"/><circle cx="90" cy="88" r="3"/>
            <circle cx="205" cy="85" r="3"/><circle cx="198" cy="78" r="3.5"/><circle cx="190" cy="88" r="3"/>
            <circle cx="135" cy="50" r="3"/><circle cx="145" cy="46" r="3.5"/>
        </g>

        <!-- Fresh Roses & Lilies -->
        <g transform="translate(140, 105)">
            <circle cx="0" cy="0" r="26" fill="url(#roseRed)"/>
            <circle cx="0" cy="0" r="18" fill="#d90429"/>
            <circle cx="0" cy="0" r="5" fill="#ff758f"/>
        </g>
        <g transform="translate(100, 115)">
            <circle cx="0" cy="0" r="22" fill="url(#blushRose)"/>
            <circle cx="0" cy="0" r="14" fill="#ff758f"/>
        </g>
        <g transform="translate(180, 115)">
            <circle cx="0" cy="0" r="22" fill="#fffdfa" stroke="#f0e6df" stroke-width="1"/>
            <circle cx="0" cy="0" r="14" fill="#ffccd5"/>
            <circle cx="0" cy="0" r="5" fill="#ffd166"/>
        </g>
        <g transform="translate(140, 65)">
            <circle cx="0" cy="0" r="20" fill="url(#roseRed)"/>
            <circle cx="0" cy="0" r="12" fill="#ff4d6d"/>
        </g>

        <!-- Ribbon Bow -->
        <g transform="translate(140, 175)">
            <path d="M-6,8 Q-20,40 -28,55 Q-22,58 -8,25 Z" fill="url(#satinRibbon)"/>
            <path d="M6,8 Q20,40 28,55 Q22,58 8,25 Z" fill="url(#satinRibbon)"/>
            <ellipse cx="-18" cy="-2" rx="18" ry="10" transform="rotate(-20 -18 -2)" fill="url(#satinRibbon)"/>
            <ellipse cx="18" cy="-2" rx="18" ry="10" transform="rotate(20 18 -2)" fill="url(#satinRibbon)"/>
            <circle cx="0" cy="0" r="7" fill="#c5a059" stroke="#fff2b2" stroke-width="1.5"/>
        </g>

        <g transform="translate(140, 218)">
            <rect x="-65" y="0" width="130" height="24" rx="12" fill="#ffffff" stroke="#d4af37" stroke-width="1.2"/>
            <text x="0" y="16" font-family="'Playfair Display', serif" font-size="11" font-weight="700" fill="#7a1c2c" text-anchor="middle">Happy Birthday Ma'am</text>
        </g>
    </svg>
    `;
}

// ARTISAN RESTAURANT BIRTHDAY CAKE SVG - Symmetrical, Flawlessly Aligned 3-Tier Creation
function generateArtisanCakeSVG(candlesLit = true, cutStage = 0) {
    const flameDisplay = candlesLit ? 'inline' : 'none';
    const smokeDisplay = candlesLit ? 'none' : 'inline';

    // When cutStage > 0, display the freshly served slice and golden cake server
    const servedSliceSvg = cutStage > 0 ? `
        <!-- Served Cake Slice on Golden Rimmed Porcelain Saucer -->
        <g id="servedCakePlate" transform="translate(252, 276)">
            <!-- Little Porcelain Saucer -->
            <ellipse cx="0" cy="18" rx="34" ry="10" fill="#ffffff" stroke="#c5a059" stroke-width="1.2"/>
            <ellipse cx="0" cy="16" rx="28" ry="8" fill="#fdfaf6"/>
            <!-- Cake Slice (Layered Strawberry & Vanilla) -->
            <path d="M-14,14 L14,14 L18,-6 L-10,-6 Z" fill="#ffffff" stroke="#dfb2a9" stroke-width="0.8"/>
            <!-- Strawberry Filling Ribbon -->
            <line x1="-12" y1="4" x2="16" y2="4" stroke="#c1121f" stroke-width="2.5"/>
            <!-- Cream Top -->
            <polygon points="-10,-6 18,-6 12,-12 -16,-12" fill="#fffdfa" stroke="#c5a059" stroke-width="0.8"/>
            <circle cx="0" cy="-10" r="3.5" fill="#c1121f"/>
            <!-- Golden Cake Fork -->
            <path d="M-24,18 L-20,6 L-18,6 L-22,18 Z" fill="url(#cakeGold)"/>
        </g>
        <!-- Clean Cut Mark on Top Tier -->
        <g id="cakeCutMark">
            <path d="M 180,158 L 210,172 L 210,188 L 180,174 Z" fill="rgba(193, 18, 31, 0.45)" stroke="#c1121f" stroke-width="1"/>
            <line x1="180" y1="158" x2="210" y2="172" stroke="#c5a059" stroke-width="1.5"/>
        </g>
    ` : '';

    return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 370" width="100%" height="100%">
        <defs>
            <linearGradient id="marblePedestal" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#ffffff"/>
                <stop offset="60%" stop-color="#fdf8f4"/>
                <stop offset="100%" stop-color="#eed8cc"/>
            </linearGradient>
            <linearGradient id="cakeGold" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#c5a059"/>
                <stop offset="50%" stop-color="#faecc8"/>
                <stop offset="100%" stop-color="#c5a059"/>
            </linearGradient>
            <linearGradient id="tier1Grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#f8efe6"/>
                <stop offset="30%" stop-color="#ffffff"/>
                <stop offset="70%" stop-color="#fffdfa"/>
                <stop offset="100%" stop-color="#ebdccb"/>
            </linearGradient>
            <linearGradient id="tier2Grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#f3c6cd"/>
                <stop offset="30%" stop-color="#fcecee"/>
                <stop offset="70%" stop-color="#fcecee"/>
                <stop offset="100%" stop-color="#e8afb8"/>
            </linearGradient>
            <linearGradient id="tier3Grad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#f8efe6"/>
                <stop offset="30%" stop-color="#ffffff"/>
                <stop offset="70%" stop-color="#fffdfa"/>
                <stop offset="100%" stop-color="#ebdccb"/>
            </linearGradient>
            <filter id="cakeDropShadow" x="-10%" y="-10%" width="120%" height="125%">
                <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#7a1c2c" flood-opacity="0.14"/>
            </filter>
        </defs>

        <g filter="url(#cakeDropShadow)">
            <!-- 1. GILDED MARBLE PEDESTAL STAND (Centered cx=180) -->
            <!-- Pedestal Foot -->
            <ellipse cx="180" cy="346" rx="64" ry="10" fill="url(#cakeGold)" stroke="#9a7b38" stroke-width="1"/>
            <!-- Pedestal Stem -->
            <path d="M 166,312 L 160,344 A 20 5 0 0 0 200,344 L 194,312 Z" fill="url(#cakeGold)"/>
            <!-- Marble Platter Rim -->
            <ellipse cx="180" cy="315" rx="136" ry="22" fill="#bfa052"/>
            <!-- Marble Platter Surface -->
            <ellipse cx="180" cy="311" rx="135" ry="22" fill="url(#marblePedestal)" stroke="#c5a059" stroke-width="1.8"/>
            <ellipse cx="180" cy="309" rx="124" ry="19" fill="#ffffff" stroke="#faecc8" stroke-width="1"/>

            <!-- 2. TIER 1 (BASE TIER: rx=104, ry=19, y=254 to y=304, center cx=180) -->
            <g id="cakeTier1Group">
                <!-- Side Wall -->
                <path d="M 76,254 L 76,304 A 104 19 0 0 0 284,304 L 284,254 A 104 19 0 0 1 76,254 Z" fill="url(#tier1Grad)" stroke="#dfceba" stroke-width="1"/>
                <!-- Bottom Gold Beaded Rim -->
                <path d="M 76,304 A 104 19 0 0 0 284,304" fill="none" stroke="url(#cakeGold)" stroke-width="3.5" stroke-dasharray="4,3"/>
                <!-- Top Surface -->
                <ellipse cx="180" cy="254" rx="104" ry="19" fill="#ffffff" stroke="#ebdcc9" stroke-width="1"/>
                <!-- Ruby Strawberries on Tier 1 Step -->
                <circle cx="98" cy="262" r="5.5" fill="#b81424" stroke="#ffebee" stroke-width="1"/>
                <circle cx="132" cy="270" r="5.5" fill="#b81424" stroke="#ffebee" stroke-width="1"/>
                <circle cx="228" cy="270" r="5.5" fill="#b81424" stroke="#ffebee" stroke-width="1"/>
                <circle cx="262" cy="262" r="5.5" fill="#b81424" stroke="#ffebee" stroke-width="1"/>
                <!-- Tier 1 (Bottom): Risala Ma'am -->
                <text x="180" y="300" font-family="'Playfair Display', serif" font-size="16" font-weight="800" fill="#7a1c2c" text-anchor="middle" letter-spacing="1.2">Risala Ma'am</text>
            </g>

            <!-- 3. TIER 2 (MIDDLE TIER: rx=72, ry=15, y=204 to y=252, center cx=180) -->
            <g id="cakeTier2Group">
                <!-- Side Wall -->
                <path d="M 108,204 L 108,252 A 72 15 0 0 0 252,252 L 252,204 A 72 15 0 0 1 108,204 Z" fill="url(#tier2Grad)" stroke="#d8959f" stroke-width="1"/>
                <!-- Bottom Gold Rim -->
                <path d="M 108,252 A 72 15 0 0 0 252,252" fill="none" stroke="url(#cakeGold)" stroke-width="3" stroke-dasharray="3,2"/>
                <!-- Top Surface -->
                <ellipse cx="180" cy="204" rx="72" ry="15" fill="#fdedf0" stroke="#dfa6af" stroke-width="1"/>
                <!-- Tier 2 (2nd Part): Birthday -->
                <text x="180" y="244" font-family="'Playfair Display', serif" font-size="15" font-weight="800" fill="#7a1c2c" text-anchor="middle" letter-spacing="1.2">Birthday</text>
            </g>

            <!-- 4. TIER 3 (TOP TIER: rx=46, ry=11, y=158 to y=202, center cx=180) -->
            <g id="cakeTier3Group">
                <!-- Side Wall -->
                <path d="M 134,158 L 134,202 A 46 11 0 0 0 226,202 L 226,158 A 46 11 0 0 1 134,158 Z" fill="url(#tier3Grad)" stroke="#dfceba" stroke-width="1"/>
                <!-- Bottom Gold Rim -->
                <path d="M 134,202 A 46 11 0 0 0 226,202" fill="none" stroke="url(#cakeGold)" stroke-width="2.5" stroke-dasharray="3,2"/>
                <!-- Top Surface -->
                <ellipse cx="180" cy="158" rx="46" ry="11" fill="#ffffff" stroke="#c5a059" stroke-width="1.2"/>
                <!-- Tier 3 (Upper Part): Happy -->
                <text x="180" y="192" font-family="'Playfair Display', serif" font-size="14" font-weight="800" fill="#7a1c2c" text-anchor="middle" letter-spacing="1.2">Happy</text>
            </g>

            <!-- Served Slice & Cut Mark (when cake is cut) -->
            ${servedSliceSvg}

            <!-- 5. CANDLES (SYMMETRICALLY CENTERED AT cx=180) -->
            <!-- Center Candle (cx=180) -->
            <g id="candleCenter">
                <rect x="177" y="130" width="6" height="28" rx="3" fill="url(#cakeGold)" stroke="#9a7b38" stroke-width="0.8"/>
                <line x1="180" y1="130" x2="180" y2="125" stroke="#222" stroke-width="1.2"/>
                <!-- Flame -->
                <g class="candle-flame" style="display: ${flameDisplay};">
                    <path d="M 180,111 C 184,116 184,121 180,125 C 176,121 176,116 180,111 Z" fill="#ffb703"/>
                    <path d="M 180,114 C 182,118 182,122 180,125 C 178,122 178,118 180,114 Z" fill="#ffffff"/>
                </g>
                <!-- Smoke -->
                <g class="candle-smoke" style="display: ${smokeDisplay};" opacity="0.65">
                    <circle cx="180" cy="121" r="3" fill="#cbd5e1"/>
                    <circle cx="184" cy="114" r="4" fill="#e2e8f0"/>
                </g>
            </g>

            <!-- Left Candle (cx=154, offset -26px) -->
            <g id="candleLeft">
                <rect x="151.5" y="137" width="5" height="22" rx="2.5" fill="#ffffff" stroke="#c5a059" stroke-width="0.8"/>
                <line x1="154" y1="137" x2="154" y2="133" stroke="#222" stroke-width="1"/>
                <!-- Flame -->
                <g class="candle-flame" style="display: ${flameDisplay};">
                    <path d="M 154,120 C 158,124 158,129 154,133 C 150,129 150,124 154,120 Z" fill="#ffb703"/>
                    <path d="M 154,123 C 156,126 156,130 154,133 C 152,130 152,126 154,123 Z" fill="#ffffff"/>
                </g>
                <g class="candle-smoke" style="display: ${smokeDisplay};" opacity="0.65">
                    <circle cx="154" cy="129" r="2.8" fill="#cbd5e1"/>
                </g>
            </g>

            <!-- Right Candle (cx=206, offset +26px) -->
            <g id="candleRight">
                <rect x="203.5" y="137" width="5" height="22" rx="2.5" fill="#ffffff" stroke="#c5a059" stroke-width="0.8"/>
                <line x1="206" y1="137" x2="206" y2="133" stroke="#222" stroke-width="1"/>
                <!-- Flame -->
                <g class="candle-flame" style="display: ${flameDisplay};">
                    <path d="M 206,120 C 210,124 210,129 206,133 C 202,129 202,124 206,120 Z" fill="#ffb703"/>
                    <path d="M 206,123 C 208,126 208,130 206,133 C 204,130 204,126 206,123 Z" fill="#ffffff"/>
                </g>
                <g class="candle-smoke" style="display: ${smokeDisplay};" opacity="0.65">
                    <circle cx="206" cy="129" r="2.8" fill="#cbd5e1"/>
                </g>
            </g>
        </g>
    </svg>
    `;
}

// LUXURY SEALED BIRTHDAY ENVELOPE SVG (LOCKED / UNLOCKED)
function generateSealedEnvelopeSVG(isUnlocked = false) {
    const sealGlow = isUnlocked ? '#ffe082' : '#f5c518';
    const lockSymbol = isUnlocked ? '🔓' : '🔒';
    const statusText = isUnlocked ? 'UNLOCKED' : 'SEALED WITH LOVE';
    const statusColor = isUnlocked ? '#2d6a4f' : '#7a1c2c';

    return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 210" width="100%" height="100%">
        <defs>
            <linearGradient id="envelopeBg" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stop-color="#fffdfa"/>
                <stop offset="50%" stop-color="#fdf6ee"/>
                <stop offset="100%" stop-color="#f5e6d6"/>
            </linearGradient>
            <linearGradient id="envFlapGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#fff8f0"/>
                <stop offset="100%" stop-color="#eddac7"/>
            </linearGradient>
            <linearGradient id="crimsonRibbon" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#5c0e1e"/>
                <stop offset="30%" stop-color="#8f2237"/>
                <stop offset="50%" stop-color="#b8334d"/>
                <stop offset="70%" stop-color="#8f2237"/>
                <stop offset="100%" stop-color="#5c0e1e"/>
            </linearGradient>
            <linearGradient id="goldRibbonTrim" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stop-color="#c5a059"/>
                <stop offset="50%" stop-color="#faecc8"/>
                <stop offset="100%" stop-color="#c5a059"/>
            </linearGradient>
            <filter id="envShadow" x="-10%" y="-10%" width="120%" height="130%">
                <feDropShadow dx="0" dy="8" stdDeviation="10" flood-color="#7a1c2c" flood-opacity="0.18"/>
            </filter>
            <filter id="sealGlowFilt" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur"/>
                <feMerge>
                    <feMergeNode in="blur"/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>
        </defs>

        <!-- Main Envelope Body -->
        <g filter="url(#envShadow)">
            <rect x="25" y="30" width="230" height="150" rx="16" fill="url(#envelopeBg)" stroke="#c5a059" stroke-width="2"/>
            
            <!-- Diagonal Envelope Back Folds -->
            <path d="M25,180 L140,110 L255,180" fill="none" stroke="#e6d4c0" stroke-width="1.5"/>
            <path d="M25,30 L115,100" fill="none" stroke="#eedcc9" stroke-width="1.2"/>
            <path d="M255,30 L165,100" fill="none" stroke="#eedcc9" stroke-width="1.2"/>

            <!-- Flap Overlay -->
            <polygon points="25,30 255,30 140,118" fill="url(#envFlapGrad)" stroke="#c5a059" stroke-width="1.5"/>
            
            <!-- Horizontal Ribbon -->
            <rect x="25" y="93" width="230" height="24" fill="url(#crimsonRibbon)"/>
            <line x1="25" y1="93" x2="255" y2="93" stroke="url(#goldRibbonTrim)" stroke-width="1.5"/>
            <line x1="25" y1="117" x2="255" y2="117" stroke="url(#goldRibbonTrim)" stroke-width="1.5"/>

            <!-- Vertical Ribbon -->
            <rect x="128" y="30" width="24" height="150" fill="url(#crimsonRibbon)"/>
            <line x1="128" y1="30" x2="128" y2="180" stroke="url(#goldRibbonTrim)" stroke-width="1.5"/>
            <line x1="152" y1="30" x2="152" y2="180" stroke="url(#goldRibbonTrim)" stroke-width="1.5"/>

            <!-- Center Gold Seal Medallion -->
            <g transform="translate(140, 105)" filter="url(#sealGlowFilt)">
                <!-- Medallion Outer Ring -->
                <circle cx="0" cy="0" r="34" fill="#7a1c2c" stroke="url(#goldRibbonTrim)" stroke-width="3"/>
                <circle cx="0" cy="0" r="30" fill="#fdfaf5" stroke="#c5a059" stroke-width="1.5"/>
                <circle cx="0" cy="0" r="28" fill="#fff" opacity="0.9"/>
                
                <!-- Lock Symbol -->
                <text x="0" y="8" font-size="24" text-anchor="middle" dominant-baseline="central">${lockSymbol}</text>
            </g>

            <!-- Bottom Status Tag on Envelope -->
            <g transform="translate(140, 160)">
                <rect x="-70" y="0" width="140" height="20" rx="10" fill="#ffffff" stroke="#c5a059" stroke-width="1"/>
                <text x="0" y="13.5" font-family="'Outfit', sans-serif" font-size="9" font-weight="700" fill="${statusColor}" text-anchor="middle" letter-spacing="1">${statusText}</text>
            </g>
        </g>
    </svg>
    `;
}
