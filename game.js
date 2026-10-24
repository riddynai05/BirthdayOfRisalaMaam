// Story-Driven Birthday Celebration Engine for Risala Ahmed
// Featuring the Gorgeous Barbie Vector Character, Dreamy Aesthetic Backgrounds, and Heartfelt Celebration!

const StoryState = {
    currentStage: 'stage-intro',
    selectedVehicle: 'vespa',
    sareeId: 'crimson_katan',
    hairstyleId: 'classic_bun',
    jewelryId: 'polki_kundan',
    flowerId: 'jasmine_gajra',
    bindiId: 'none',
    
    // Ride 1 progress (Avenue to Mall)
    mallDistance: 0,
    mallArrived: false,

    // Ride 2 progress (Promenade to Restaurant)
    restaurantDistance: 0,
    restaurantArrived: false,

    // Restaurant state
    bouquetReceived: false,
    candlesLit: true,
    cakeCut: false,

    // Custom Letter Content
    customLetterText: `Happiest Birthday, Ma’am! 

I always wish you good health, endless happiness, and all the beautiful things life has to offer. You are, and will always be, one of my most favourite people. I genuinely admire you more than words could ever express, and I feel incredibly grateful to have someone as kind and sweet as you in my life.

You helped me so much during my second semester, Ma’am. You’ve done things for me that you probably don’t even realise meant so much to me and I honestly cannot thank you enough for them. You were a ray of sunshine during a time when I really needed it, and I will always be grateful to you for that. You may not even know how much of a difference you’ve made, but you truly have.

I look up to you a lot, Ma’am, and I hope you always know how appreciated, admired, and loved you are. You deserve all the happiness in the world. May Allah always shower His rahmat upon you and your family, keep you all healthy and safe, and fill your life with endless peace, happiness, and blessings. Ameen. 🤍

I made this for you with so much love. It may not be the most advanced or perfect thing, but it’s something I made wholeheartedly, and this is the little something I could create for someone I admire so much. I hope you like it, Ma’am.

Happy Birthday once again! May you always keep smiling and stay as wonderful as you are. ❤️`
};

// Floating cherry blossom petals for Mall ride
const mallPetals = [];
for (let i = 0; i < 28; i++) {
    mallPetals.push({
        x: Math.random() * 900,
        y: Math.random() * 380,
        size: Math.random() * 5 + 3,
        vx: Math.random() * 2 + 1.2,
        vy: Math.random() * 1.5 + 0.8,
        rot: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 4
    });
}

// Floating fairy light sparkles for Restaurant ride
const restStars = [];
for (let i = 0; i < 35; i++) {
    restStars.push({
        x: Math.random() * 900,
        y: Math.random() * 160,
        size: Math.random() * 2.5 + 1,
        opacity: Math.random() * 0.7 + 0.3,
        pulseSpeed: Math.random() * 0.05 + 0.02
    });
}

// --- STAGE NAVIGATION SYSTEM ---
function goToStage(stageId) {
    document.querySelectorAll('.game-stage').forEach(el => {
        el.classList.remove('active');
        el.style.display = 'none';
    });

    const targetEl = document.getElementById(stageId);
    if (targetEl) {
        targetEl.style.display = 'block';
        setTimeout(() => {
            targetEl.classList.add('active');
        }, 30);
    }

    StoryState.currentStage = stageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Stage-specific setups & Smooth Audio Transitions
    if (stageId === 'stage-ride-mall' || stageId === 'stage-ride-restaurant') {
        window.sfx.startSmoothRideMusic();
    } else {
        window.sfx.stopSmoothRideMusic();
    }

    if (stageId === 'stage-ride-mall') {
        initRideMall();
    } else if (stageId === 'stage-mall') {
        initBoutiqueUI();
        updateBoutiqueAvatar();
    } else if (stageId === 'stage-ride-restaurant') {
        initRideRestaurant();
    } else if (stageId === 'stage-flowers') {
        initFlowersStage();
    } else if (stageId === 'stage-cake') {
        initCakeStage();
    } else if (stageId === 'stage-letter') {
        renderCustomLetter();
    } else if (stageId === 'stage-funny-game') {
        initFunnyGame();
    } else if (stageId === 'stage-finish') {
        initFinishStage();
    }
}

// --- CONFETTI & PARTICLES ---
const confettiCanvas = document.getElementById('confettiCanvas');
const confettiCtx = confettiCanvas.getContext('2d');
let confettiList = [];

function resizeCanvases() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
    const sp = document.getElementById('sparkleCanvas');
    if (sp) {
        sp.width = window.innerWidth;
        sp.height = window.innerHeight;
    }
}
window.addEventListener('resize', resizeCanvases);
window.addEventListener('orientationchange', resizeCanvases);

// Global Mobile Touch Safety: Reset driving state when touch ends anywhere
const handleGlobalTouchEnd = () => {
    isDrivingMall = false;
    isDrivingRest = false;
    const b1 = document.getElementById('driveMallHoldBtn');
    if (b1) b1.style.transform = 'scale(1)';
    const b2 = document.getElementById('driveRestHoldBtn');
    if (b2) b2.style.transform = 'scale(1)';
};
window.addEventListener('touchend', handleGlobalTouchEnd);
window.addEventListener('touchcancel', handleGlobalTouchEnd);

function triggerCelebrationConfetti(count = 120) {
    const colors = ['#d4af37', '#7a1c2c', '#ff6b8b', '#ffffff', '#ffd1dc', '#1b4332'];
    for (let i = 0; i < count; i++) {
        confettiList.push({
            x: Math.random() * confettiCanvas.width,
            y: -20,
            size: Math.random() * 8 + 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 5,
            vy: Math.random() * 4 + 2.5,
            rot: Math.random() * 360,
            rotSpeed: (Math.random() - 0.5) * 6
        });
    }
}

function updateConfetti() {
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    for (let i = confettiList.length - 1; i >= 0; i--) {
        const p = confettiList[i];
        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.rotSpeed;

        confettiCtx.save();
        confettiCtx.translate(p.x, p.y);
        confettiCtx.rotate((p.rot * Math.PI) / 180);
        confettiCtx.fillStyle = p.color;
        confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.75);
        confettiCtx.restore();

        if (p.y > confettiCanvas.height + 20) {
            confettiList.splice(i, 1);
        }
    }
    requestAnimationFrame(updateConfetti);
}

// Golden ambient sparkles
const sparkleCanvas = document.getElementById('sparkleCanvas');
const sparkleCtx = sparkleCanvas ? sparkleCanvas.getContext('2d') : null;
let sparkles = [];

function initSparkles() {
    if (!sparkleCanvas) return;
    for (let i = 0; i < 40; i++) {
        sparkles.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size: Math.random() * 4 + 2,
            speedY: Math.random() * 0.6 + 0.2,
            opacity: Math.random() * 0.6 + 0.2,
            growth: (Math.random() - 0.5) * 0.02
        });
    }
}

function updateSparkles() {
    if (!sparkleCtx) return;
    sparkleCtx.clearRect(0, 0, sparkleCanvas.width, sparkleCanvas.height);
    sparkles.forEach(s => {
        s.y -= s.speedY;
        s.opacity += s.growth;
        if (s.opacity > 0.8 || s.opacity < 0.2) s.growth *= -1;
        if (s.y < -10) {
            s.y = sparkleCanvas.height + 10;
            s.x = Math.random() * sparkleCanvas.width;
        }

        sparkleCtx.save();
        sparkleCtx.fillStyle = `rgba(212, 175, 55, ${s.opacity})`;
        sparkleCtx.beginPath();
        sparkleCtx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        sparkleCtx.fill();
        sparkleCtx.restore();
    });
    requestAnimationFrame(updateSparkles);
}

// --- STAGE 1: RIDE TO MALL ENGINE ---
let mallAnimFrame = null;
let mallCanvas = null;
let mallCtx = null;
let mallRoadOffset = 0;
let isDrivingMall = false;

function initRideMall() {
    mallCanvas = document.getElementById('rideMallCanvas');
    if (!mallCanvas) return;
    mallCtx = mallCanvas.getContext('2d');
    mallCanvas.width = 800;
    mallCanvas.height = 380;

    // Vehicle cards click
    const vCards = document.querySelectorAll('#stage-ride-mall .vehicle-option-card');
    vCards.forEach(card => {
        if (card.dataset.vehicle === StoryState.selectedVehicle) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
        card.addEventListener('click', () => {
            vCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            StoryState.selectedVehicle = card.dataset.vehicle;
            document.querySelectorAll('#stage-ride-restaurant .vehicle-option-card').forEach(c3 => {
                c3.classList.toggle('selected', c3.dataset.vehicle === StoryState.selectedVehicle);
            });
            window.sfx.playGentleChime();
            renderMallRide();
        });
    });

    // Interactive Manual Drive Button (Hold to Drive)
    const driveHoldBtn = document.getElementById('driveMallHoldBtn');
    if (driveHoldBtn) {
        const startDriving = (e) => {
            if (e && e.type !== 'mousedown') e.preventDefault();
            isDrivingMall = true;
            StoryState.mallDistance = Math.min(100, StoryState.mallDistance + 8);
            driveHoldBtn.style.transform = 'scale(0.97)';
        };
        const stopDriving = (e) => {
            if (e && e.type !== 'mouseup' && e.type !== 'mouseleave') e.preventDefault();
            isDrivingMall = false;
            driveHoldBtn.style.transform = 'scale(1)';
        };

        driveHoldBtn.addEventListener('mousedown', startDriving);
        driveHoldBtn.addEventListener('mouseup', stopDriving);
        driveHoldBtn.addEventListener('mouseleave', stopDriving);
        driveHoldBtn.addEventListener('touchstart', startDriving, { passive: false });
        driveHoldBtn.addEventListener('touchend', stopDriving, { passive: false });
        driveHoldBtn.addEventListener('touchcancel', stopDriving, { passive: false });
    }

    // Keyboard support (Right Arrow / D / Space)
    window.addEventListener('keydown', (e) => {
        if (StoryState.currentStage === 'stage-ride-mall') {
            if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D' || e.key === ' ') {
                isDrivingMall = true;
            }
        }
    });
    window.addEventListener('keyup', (e) => {
        if (StoryState.currentStage === 'stage-ride-mall') {
            if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D' || e.key === ' ') {
                isDrivingMall = false;
            }
        }
    });

    const proceedMallBtn = document.getElementById('enterMallBoutiqueBtn');
    if (proceedMallBtn) {
        proceedMallBtn.addEventListener('click', () => {
            window.sfx.playGentleChime();
            goToStage('stage-mall');
        });
    }

    startMallLoop();
}

function startMallLoop() {
    if (mallAnimFrame) cancelAnimationFrame(mallAnimFrame);

    function loop() {
        if (StoryState.currentStage !== 'stage-ride-mall') return;
        updateMallRide();
        renderMallRide();
        mallAnimFrame = requestAnimationFrame(loop);
    }
    loop();
}

function updateMallRide() {
    const veh = VEHICLES.find(v => v.id === StoryState.selectedVehicle) || VEHICLES[0];
    
    // Advance distance when player is driving (Fast & Snappy: ~3-4 seconds)
    if (isDrivingMall) {
        mallRoadOffset += veh.speed * 1.6;
        StoryState.mallDistance = Math.min(100, StoryState.mallDistance + 0.45);
    }

    // Update drifting cherry blossom petals
    mallPetals.forEach(p => {
        p.x -= (p.vx + (isDrivingMall ? 2 : 0.5));
        p.y += p.vy;
        p.rot += p.rotSpeed;
        if (p.x < -20) p.x = (mallCanvas ? mallCanvas.width : 800) + 20;
        if (p.y > (mallCanvas ? mallCanvas.height : 380) + 10) p.y = -10;
    });

    const distEl = document.getElementById('mallDistanceText');
    const progBar = document.getElementById('mallProgressBar');
    if (distEl) distEl.textContent = `${Math.floor(StoryState.mallDistance * 10)} m / 1000 m`;
    if (progBar) progBar.style.width = `${StoryState.mallDistance}%`;

    const enterBtn = document.getElementById('enterMallBoutiqueBtn');
    if (StoryState.mallDistance >= 100 && !StoryState.mallArrived) {
        StoryState.mallArrived = true;
        if (enterBtn) {
            enterBtn.disabled = false;
            enterBtn.style.opacity = '1';
            enterBtn.innerHTML = '✨ Arrived! Step into the Boutique →';
            triggerCelebrationConfetti(80);
            window.sfx.playGentleChime();
        }
    }
}

// Breathtaking, dreamy Barbie-Promenade morning background!
function renderMallRide() {
    if (!mallCtx || !mallCanvas) return;
    const ctx = mallCtx;
    const w = mallCanvas.width;
    const h = mallCanvas.height;

    ctx.clearRect(0, 0, w, h);

    // 1. Pastel Rose-Gold Morning Sky with Soft Gradient
    const skyGrad = ctx.createLinearGradient(0, 0, 0, h);
    skyGrad.addColorStop(0, '#fff5f7');
    skyGrad.addColorStop(0.35, '#fde2e8');
    skyGrad.addColorStop(0.7, '#fad2e1');
    skyGrad.addColorStop(1, '#f5c6d3');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, w, h);

    // Glowing morning sun in sky
    ctx.fillStyle = 'rgba(255, 230, 200, 0.45)';
    ctx.beginPath();
    ctx.arc(w - 140, 70, 50, 0, Math.PI * 2);
    ctx.fill();

    // 2. Soft Fluffy Pastel Pink Clouds
    ctx.fillStyle = 'rgba(255, 255, 255, 0.65)';
    const cloudOffset = (mallRoadOffset * 0.15) % (w + 300);
    for (let c = 0; c < 4; c++) {
        const cx = ((c * 260) - cloudOffset + w + 300) % (w + 300) - 80;
        ctx.beginPath();
        ctx.arc(cx, 45, 22, 0, Math.PI * 2);
        ctx.arc(cx + 25, 40, 28, 0, Math.PI * 2);
        ctx.arc(cx + 50, 48, 20, 0, Math.PI * 2);
        ctx.fill();
    }

    // 3. Distant City Skyline & Grand Mall Facade with Gilded Domes
    const mallX = w - 260;
    // Boutique townhouses skyline
    ctx.fillStyle = 'rgba(230, 180, 195, 0.35)';
    ctx.fillRect(w - 380, 85, 360, 100);
    // Parisian Mansard Roofs
    ctx.fillStyle = 'rgba(160, 80, 110, 0.25)';
    ctx.beginPath();
    ctx.moveTo(w - 380, 85);
    ctx.lineTo(w - 350, 50);
    ctx.lineTo(w - 290, 50);
    ctx.lineTo(w - 270, 85);
    ctx.closePath();
    ctx.fill();

    // The Grand Mall Facade
    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    ctx.fillRect(mallX, 75, 240, 110);
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2;
    ctx.strokeRect(mallX, 75, 240, 110);

    // Gilded Dome
    ctx.fillStyle = '#ffd700';
    ctx.beginPath();
    ctx.arc(mallX + 120, 75, 45, Math.PI, 0);
    ctx.fill();
    ctx.strokeStyle = '#b8860b';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Golden Finial
    ctx.beginPath();
    ctx.arc(mallX + 120, 26, 5, 0, Math.PI * 2);
    ctx.fill();

    // Boutique Title
    ctx.fillStyle = '#7a1c2c';
    ctx.font = 'bold 12px "Playfair Display", serif';
    ctx.fillText('LE GRAND BOUTIQUE', mallX + 46, 110);

    // Striped Pink & White Boutique Awnings
    for (let aw = 0; aw < 3; aw++) {
        const ax = mallX + 20 + aw * 75;
        ctx.fillStyle = '#ff85a1';
        ctx.fillRect(ax, 130, 60, 16);
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(ax + 15, 130, 15, 16);
        ctx.fillRect(ax + 45, 130, 15, 16);
    }

    // 4. Promenade Cobblestone Avenue
    const roadGrad = ctx.createLinearGradient(0, 185, 0, h);
    roadGrad.addColorStop(0, '#f2dcd5');
    roadGrad.addColorStop(0.5, '#e5c5bd');
    roadGrad.addColorStop(1, '#d8b0a5');
    ctx.fillStyle = roadGrad;
    ctx.fillRect(0, 185, w, h - 185);

    // Golden Sidewalk Curb
    ctx.fillStyle = '#c5a059';
    ctx.fillRect(0, 182, w, 4);

    // 5. Blooming Cherry Blossom Trees along the Promenade
    for (let i = 0; i < 5; i++) {
        const treeX = ((i * 220) - (mallRoadOffset * 0.75)) % (w + 240);
        const actualX = treeX < -120 ? treeX + w + 360 : treeX;
        
        // Brown trunk
        ctx.fillStyle = '#5c3a21';
        ctx.fillRect(actualX - 5, 140, 10, 45);

        // Fluffy layered pink cherry blossom puffs
        ctx.fillStyle = 'rgba(255, 182, 193, 0.85)';
        ctx.beginPath();
        ctx.arc(actualX - 18, 120, 24, 0, Math.PI * 2);
        ctx.arc(actualX + 18, 120, 24, 0, Math.PI * 2);
        ctx.arc(actualX, 105, 30, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'rgba(255, 105, 180, 0.65)';
        ctx.beginPath();
        ctx.arc(actualX - 10, 115, 18, 0, Math.PI * 2);
        ctx.arc(actualX + 10, 115, 18, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(actualX, 102, 12, 0, Math.PI * 2);
        ctx.fill();
    }

    // 6. Victorian Streetlamps with Flower Baskets
    for (let l = 0; l < 4; l++) {
        const lampX = ((l * 280 + 100) - (mallRoadOffset * 0.85)) % (w + 260);
        const actualLX = lampX < -80 ? lampX + w + 360 : lampX;

        ctx.strokeStyle = '#4a2c35';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(actualLX, 184);
        ctx.lineTo(actualLX, 100);
        ctx.stroke();

        // Lamp arm & globe
        ctx.beginPath();
        ctx.arc(actualLX, 94, 7, 0, Math.PI * 2);
        ctx.fillStyle = '#fff4cc';
        ctx.fill();
        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = 1.5;
        ctx.stroke();

        // Hanging Pink Flower Basket
        ctx.fillStyle = '#b08968';
        ctx.fillRect(actualLX - 10, 125, 20, 10);
        ctx.fillStyle = '#ff6b8b';
        ctx.beginPath();
        ctx.arc(actualLX - 4, 124, 6, 0, Math.PI * 2);
        ctx.arc(actualLX + 4, 124, 6, 0, Math.PI * 2);
        ctx.fill();
    }

    // 7. Road Dividing White/Gold Dashed Line
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 3;
    ctx.setLineDash([20, 20]);
    ctx.lineDashOffset = -mallRoadOffset % 40;
    ctx.beginPath();
    ctx.moveTo(0, 260);
    ctx.lineTo(w, 260);
    ctx.stroke();
    ctx.setLineDash([]);

    // 8. Drifting Pink Cherry Blossom Petals
    ctx.fillStyle = '#ff8da1';
    mallPetals.forEach(p => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rot * Math.PI) / 180);
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size, p.size * 0.55, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    });

    // 9. Draw Barbie Vector Character Seated on Selected Vehicle
    drawPromenadeRider(ctx, 120, 220, false);
}

// =========================================================================
// VECTOR RIDER & VEHICLE SYSTEM (BARBIE PROPORTIONS)
// Seated naturally, delicate doll features, fluttering silk pallu,
// and matching selected Saree, Jewelry, Hair Flowers, & Bindi!
// =========================================================================
// =========================================================================
// PROMENADE VEHICLE RENDERER (CLEAN LUXURY VEHICLE DISPLAY)
// Displays the selected vintage vehicle in pristine detail without humanoid figures!
// In Night Mode (Chapter 3), vehicles are radiantly illuminated with projector
// headlights, volumetric light beams, glowing taillights, chrome whitewall trims,
// and soft ground underglow for maximum visibility on the twilight boulevard.
// =========================================================================
function drawPromenadeRider(ctx, x, y, dressedInBoutique = false) {
    ctx.save();
    
    // Gentle suspension bounce when driving
    const isDriving = (StoryState.currentStage === 'stage-ride-mall' && isDrivingMall) || 
                      (StoryState.currentStage === 'stage-ride-restaurant' && isDrivingRest);
    const bounce = isDriving ? Math.sin(Date.now() * 0.02) * 1.8 : 0;
    ctx.translate(x, y + bounce);

    const vehicleType = StoryState.selectedVehicle;
    const isNight = dressedInBoutique;

    // ==========================================
    // 0. NIGHT MODE LIGHTING EFFECTS (GROUND UNDER-GLOW & HEADLIGHT BEAMS)
    // ==========================================
    if (isNight) {
        // A. Soft Warm Ground Under-glow beneath vehicle wheels and chassis
        const underGlow = ctx.createRadialGradient(65, 28, 10, 65, 28, 90);
        underGlow.addColorStop(0, 'rgba(255, 235, 160, 0.35)');
        underGlow.addColorStop(0.45, 'rgba(255, 215, 120, 0.16)');
        underGlow.addColorStop(1, 'rgba(255, 200, 100, 0)');
        ctx.fillStyle = underGlow;
        ctx.beginPath();
        ctx.ellipse(65, 30, 90, 16, 0, 0, Math.PI * 2);
        ctx.fill();

        // B. Dynamic Projector Headlight Beam casting forward across the avenue
        let beamStartX = 110, beamStartY = -23;
        if (vehicleType === 'bicycle') {
            beamStartX = 116; beamStartY = -14;
        } else if (vehicleType === 'convertible') {
            beamStartX = 138; beamStartY = 10;
        }

        ctx.save();
        // Forward Volumetric Projector Cone
        const beamGrad = ctx.createRadialGradient(
            beamStartX, beamStartY, 5,
            beamStartX + 180, beamStartY + 25, 270
        );
        beamGrad.addColorStop(0, 'rgba(255, 255, 245, 0.90)');
        beamGrad.addColorStop(0.12, 'rgba(255, 250, 210, 0.60)');
        beamGrad.addColorStop(0.4, 'rgba(255, 235, 160, 0.25)');
        beamGrad.addColorStop(0.8, 'rgba(255, 220, 130, 0.07)');
        beamGrad.addColorStop(1, 'rgba(255, 220, 130, 0)');

        ctx.fillStyle = beamGrad;
        ctx.beginPath();
        ctx.moveTo(beamStartX, beamStartY);
        ctx.lineTo(beamStartX + 330, beamStartY - 22);
        ctx.quadraticCurveTo(beamStartX + 380, beamStartY + 35, beamStartX + 340, beamStartY + 78);
        ctx.lineTo(beamStartX, beamStartY + 6);
        ctx.closePath();
        ctx.fill();

        // Bright illuminated puddle splash on the road ahead
        const roadSplash = ctx.createRadialGradient(
            beamStartX + 145, 28, 8,
            beamStartX + 145, 28, 115
        );
        roadSplash.addColorStop(0, 'rgba(255, 250, 210, 0.40)');
        roadSplash.addColorStop(0.5, 'rgba(255, 230, 160, 0.18)');
        roadSplash.addColorStop(1, 'rgba(255, 220, 130, 0)');
        ctx.fillStyle = roadSplash;
        ctx.beginPath();
        ctx.ellipse(beamStartX + 145, 28, 115, 17, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    // ==========================================
    // 1. RETRO CREAM & ROSE ITALIAN VESPA
    // ==========================================
    if (vehicleType === 'vespa') {
        // Rear Wheel & Tire
        ctx.fillStyle = '#1e1e1e';
        ctx.beginPath();
        ctx.arc(15, 26, 17, 0, Math.PI * 2);
        ctx.fill();

        if (isNight) {
            // Crisp silver rim outline for high contrast against dark road
            ctx.strokeStyle = '#f8fafc';
            ctx.lineWidth = 2;
            ctx.stroke();
            // Luminous Whitewall ring
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(15, 26, 13, 0, Math.PI * 2);
            ctx.stroke();
        }

        // Rear Hubcap
        ctx.fillStyle = isNight ? '#e2e8f0' : '#cbd5e1';
        ctx.beginPath();
        ctx.arc(15, 26, 8, 0, Math.PI * 2);
        ctx.fill();
        if (isNight) {
            ctx.fillStyle = '#d4af37';
            ctx.beginPath();
            ctx.arc(15, 26, 4, 0, Math.PI * 2);
            ctx.fill();
        }

        // Rear Engine Cowl & Body
        ctx.fillStyle = isNight ? '#fff8f4' : '#fdf0ed';
        ctx.beginPath();
        ctx.moveTo(2, 22);
        ctx.quadraticCurveTo(8, -8, 42, -8);
        ctx.lineTo(58, 12);
        ctx.lineTo(34, 24);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = isNight ? '#e08ba0' : '#c47b89';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        if (isNight) {
            // Specular metallic sheen along cowl curve
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
            ctx.lineWidth = 1.8;
            ctx.beginPath();
            ctx.moveTo(6, 16);
            ctx.quadraticCurveTo(12, -4, 38, -5);
            ctx.stroke();

            // Glowing Ruby Taillight at rear of cowl
            const tailGlow = ctx.createRadialGradient(0, 10, 1, 0, 10, 12);
            tailGlow.addColorStop(0, '#ff1a40');
            tailGlow.addColorStop(0.55, 'rgba(255, 30, 60, 0.55)');
            tailGlow.addColorStop(1, 'rgba(255, 0, 0, 0)');
            ctx.fillStyle = tailGlow;
            ctx.beginPath();
            ctx.arc(0, 10, 12, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#ff3366';
            ctx.beginPath();
            ctx.arc(0, 10, 4, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#ffd700';
            ctx.lineWidth = 1;
            ctx.stroke();
        }

        // Chrome Rear Luggage Rack
        ctx.strokeStyle = isNight ? '#f1f5f9' : '#cbd5e1';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(4, 6);
        ctx.lineTo(-8, 2);
        ctx.lineTo(-6, -4);
        ctx.stroke();

        // Rich Brown Hand-Stitched Leather Seat
        ctx.fillStyle = '#4a282d';
        ctx.beginPath();
        ctx.roundRect(14, -14, 46, 10, 4);
        ctx.fill();
        ctx.strokeStyle = '#ffd700';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Floorboard
        ctx.fillStyle = '#2b2d42';
        ctx.fillRect(44, 16, 40, 6);
        if (isNight) {
            // Polished foot-strip chrome
            ctx.fillStyle = '#cbd5e1';
            ctx.fillRect(46, 18, 36, 1.5);
        }

        // Front Curved Leg Shield
        ctx.fillStyle = isNight ? '#fff8f4' : '#fdf0ed';
        ctx.beginPath();
        ctx.moveTo(68, 16);
        ctx.lineTo(92, 14);
        ctx.quadraticCurveTo(102, -18, 110, -24);
        ctx.lineTo(98, 24);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = isNight ? '#e08ba0' : '#c47b89';
        ctx.lineWidth = 2.5;
        ctx.stroke();

        if (isNight) {
            // Gold trim line along shield edge
            ctx.strokeStyle = '#ffd700';
            ctx.lineWidth = 1.8;
            ctx.beginPath();
            ctx.moveTo(70, 15);
            ctx.lineTo(90, 13);
            ctx.quadraticCurveTo(99, -16, 107, -22);
            ctx.stroke();
        }

        // Front Wheel & Mudguard
        ctx.fillStyle = '#1e1e1e';
        ctx.beginPath();
        ctx.arc(104, 26, 17, 0, Math.PI * 2);
        ctx.fill();

        if (isNight) {
            ctx.strokeStyle = '#f8fafc';
            ctx.lineWidth = 2;
            ctx.stroke();
            // Whitewall ring
            ctx.strokeStyle = '#ffffff';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.arc(104, 26, 13, 0, Math.PI * 2);
            ctx.stroke();
        }

        ctx.fillStyle = isNight ? '#e2e8f0' : '#cbd5e1';
        ctx.beginPath();
        ctx.arc(104, 26, 8, 0, Math.PI * 2);
        ctx.fill();
        if (isNight) {
            ctx.fillStyle = '#d4af37';
            ctx.beginPath();
            ctx.arc(104, 26, 4, 0, Math.PI * 2);
            ctx.fill();
        }

        // Chrome Steering Column & Handlebars
        ctx.strokeStyle = isNight ? '#f1f5f9' : '#94a3b8';
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        ctx.moveTo(106, -23);
        ctx.lineTo(84, -20);
        ctx.stroke();

        // Speedometer console dial glow in night mode
        if (isNight) {
            ctx.fillStyle = '#fef08a';
            ctx.beginPath();
            ctx.arc(95, -22, 2.5, 0, Math.PI * 2);
            ctx.fill();
        }

        // Dual Chrome Retro Mirrors
        ctx.strokeStyle = isNight ? '#f8fafc' : '#cbd5e1';
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.moveTo(86, -20);
        ctx.lineTo(82, -32);
        ctx.arc(82, -34, 4, 0, Math.PI * 2);
        ctx.moveTo(102, -22);
        ctx.lineTo(106, -34);
        ctx.arc(106, -36, 4, 0, Math.PI * 2);
        ctx.stroke();

        // Glowing Vintage Round Headlamp
        if (isNight) {
            // Radiant headlamp aura
            const headGlow = ctx.createRadialGradient(110, -23, 2, 110, -23, 22);
            headGlow.addColorStop(0, '#ffffff');
            headGlow.addColorStop(0.35, '#fff6bd');
            headGlow.addColorStop(0.7, 'rgba(255, 215, 100, 0.45)');
            headGlow.addColorStop(1, 'rgba(255, 215, 100, 0)');
            ctx.fillStyle = headGlow;
            ctx.beginPath();
            ctx.arc(110, -23, 22, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.fillStyle = isNight ? '#ffffff' : '#fff9db';
        ctx.beginPath();
        ctx.arc(110, -23, 7.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = '#ffd700';
        ctx.lineWidth = 2;
        ctx.stroke();

    // ==========================================
    // 2. PARISIAN BASKET BICYCLE
    // ==========================================
    } else if (vehicleType === 'bicycle') {
        // Rear Wheel with Spokes
        ctx.strokeStyle = isNight ? '#f8fafc' : '#1e1e1e';
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        ctx.arc(15, 24, 22, 0, Math.PI * 2);
        ctx.stroke();

        // Spokes
        ctx.strokeStyle = isNight ? '#e2e8f0' : '#cbd5e1';
        ctx.lineWidth = isNight ? 1.5 : 1;
        ctx.beginPath();
        ctx.moveTo(15, 2); ctx.lineTo(15, 46);
        ctx.moveTo(-7, 24); ctx.lineTo(37, 24);
        if (isNight) {
            // Diagonal spokes for full wheel brilliance
            ctx.moveTo(-1, 8); ctx.lineTo(31, 40);
            ctx.moveTo(-1, 40); ctx.lineTo(31, 8);
        }
        ctx.stroke();

        // Hubcap
        ctx.fillStyle = isNight ? '#ffd700' : '#94a3b8';
        ctx.beginPath();
        ctx.arc(15, 24, 4, 0, Math.PI * 2);
        ctx.fill();

        // Rear Ruby Safety Reflector
        if (isNight) {
            const refGlow = ctx.createRadialGradient(0, 18, 1, 0, 18, 10);
            refGlow.addColorStop(0, '#ff1a40');
            refGlow.addColorStop(0.6, 'rgba(255, 30, 60, 0.55)');
            refGlow.addColorStop(1, 'rgba(255, 0, 0, 0)');
            ctx.fillStyle = refGlow;
            ctx.beginPath();
            ctx.arc(0, 18, 10, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#ff2a55';
            ctx.beginPath();
            ctx.arc(0, 18, 3.5, 0, Math.PI * 2);
            ctx.fill();
        }

        // Vintage Pastel Bike Frame
        ctx.strokeStyle = isNight ? '#e2ad76' : '#b08968';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(15, 24);
        ctx.lineTo(52, 24);
        ctx.lineTo(38, -10);
        ctx.lineTo(15, 24);
        ctx.moveTo(38, -10);
        ctx.lineTo(88, -12);
        ctx.lineTo(105, 24);
        ctx.stroke();

        if (isNight) {
            // Top tube bright metallic highlight
            ctx.strokeStyle = '#fff0d4';
            ctx.lineWidth = 1.8;
            ctx.beginPath();
            ctx.moveTo(38, -10);
            ctx.lineTo(88, -12);
            ctx.stroke();
        }

        // Sprung Brown Leather Saddle
        ctx.fillStyle = '#4a2810';
        ctx.beginPath();
        ctx.roundRect(30, -16, 24, 8, 4);
        ctx.fill();
        ctx.strokeStyle = '#ffd700';
        ctx.lineWidth = 1;
        ctx.stroke();

        // Pedals & Chainring
        ctx.fillStyle = isNight ? '#f1f5f9' : '#94a3b8';
        ctx.beginPath();
        ctx.arc(52, 24, 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.strokeStyle = isNight ? '#cbd5e1' : '#1e1e1e';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(52, 18); ctx.lineTo(52, 30);
        ctx.stroke();

        // Front Wheel with Spokes
        ctx.strokeStyle = isNight ? '#f8fafc' : '#1e1e1e';
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        ctx.arc(105, 24, 22, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = isNight ? '#e2e8f0' : '#cbd5e1';
        ctx.lineWidth = isNight ? 1.5 : 1;
        ctx.beginPath();
        ctx.moveTo(105, 2); ctx.lineTo(105, 46);
        ctx.moveTo(83, 24); ctx.lineTo(127, 24);
        if (isNight) {
            ctx.moveTo(89, 8); ctx.lineTo(121, 40);
            ctx.moveTo(89, 40); ctx.lineTo(121, 8);
        }
        ctx.stroke();

        // Front Hubcap
        ctx.fillStyle = isNight ? '#ffd700' : '#94a3b8';
        ctx.beginPath();
        ctx.arc(105, 24, 4, 0, Math.PI * 2);
        ctx.fill();

        // Chrome Handlebars & Gold Bell
        ctx.strokeStyle = isNight ? '#f8fafc' : '#94a3b8';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(88, -12);
        ctx.lineTo(88, -20);
        ctx.quadraticCurveTo(90, -24, 98, -18);
        ctx.stroke();
        // Bell
        ctx.fillStyle = '#ffd700';
        ctx.beginPath();
        ctx.arc(86, -22, 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Wicker Front Basket Overflowing with Fresh Birthday Flowers
        ctx.fillStyle = isNight ? '#d8b068' : '#c5a059';
        ctx.fillRect(94, -26, 24, 16);
        ctx.strokeStyle = isNight ? '#fef08a' : '#8a6828';
        ctx.lineWidth = 1.2;
        ctx.strokeRect(94, -26, 24, 16);
        ctx.font = '18px serif';
        ctx.fillText('💐', 96, -14);

        // In Night Mode: Sparkling Fairy Lights & Vintage Dynamo Headlamp
        if (isNight) {
            // Fairy lights nestled in the birthday flowers
            const basketLights = [
                {x: 96, y: -22, c: '#fff3b0'},
                {x: 104, y: -25, c: '#ffcbf2'},
                {x: 112, y: -22, c: '#ffd166'},
                {x: 100, y: -16, c: '#cbf3f0'},
                {x: 114, y: -16, c: '#ff9ebb'}
            ];
            basketLights.forEach(bl => {
                ctx.fillStyle = bl.c;
                ctx.beginPath();
                ctx.arc(bl.x, bl.y, 2.2, 0, Math.PI * 2);
                ctx.fill();
            });

            // Chrome Dynamo Headlamp mounted to front fork
            ctx.fillStyle = '#cbd5e1';
            ctx.beginPath();
            ctx.arc(114, -14, 5, 0, Math.PI * 2);
            ctx.fill();

            // Radiant Headlamp Aura
            const bikeGlow = ctx.createRadialGradient(116, -14, 2, 116, -14, 20);
            bikeGlow.addColorStop(0, '#ffffff');
            bikeGlow.addColorStop(0.35, '#fff6bd');
            bikeGlow.addColorStop(0.7, 'rgba(255, 215, 100, 0.45)');
            bikeGlow.addColorStop(1, 'rgba(255, 215, 100, 0)');
            ctx.fillStyle = bikeGlow;
            ctx.beginPath();
            ctx.arc(116, -14, 20, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(116, -14, 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#ffd700';
            ctx.lineWidth = 1.8;
            ctx.stroke();
        }

    // ==========================================
    // 3. VINTAGE CABRIOLET CONVERTIBLE
    // ==========================================
    } else {
        // Rear Whitewall Wheel
        ctx.fillStyle = '#1e1e1e';
        ctx.beginPath();
        ctx.arc(18, 26, 17, 0, Math.PI * 2);
        ctx.fill();
        if (isNight) {
            ctx.strokeStyle = '#f8fafc';
            ctx.lineWidth = 2;
            ctx.stroke();
        }
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(18, 26, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ffd700';
        ctx.beginPath();
        ctx.arc(18, 26, 6, 0, Math.PI * 2);
        ctx.fill();
        if (isNight) {
            // Gold center spinner star
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(18, 26, 2.5, 0, Math.PI * 2);
            ctx.fill();
        }

        // Rear Chassis Body - Richer, luminous ruby red in night mode!
        ctx.fillStyle = isNight ? '#b02a42' : '#7a1c2c';
        ctx.beginPath();
        ctx.moveTo(-14, 18);
        ctx.quadraticCurveTo(-8, -6, 28, -6);
        ctx.lineTo(44, 2);
        ctx.lineTo(36, 22);
        ctx.closePath();
        ctx.fill();

        if (isNight) {
            // Rear Tailfin Ruby Light with radiant red aura
            const tailGlow = ctx.createRadialGradient(-14, 8, 1, -14, 8, 14);
            tailGlow.addColorStop(0, '#ff1a40');
            tailGlow.addColorStop(0.55, 'rgba(255, 30, 60, 0.6)');
            tailGlow.addColorStop(1, 'rgba(255, 0, 0, 0)');
            ctx.fillStyle = tailGlow;
            ctx.beginPath();
            ctx.arc(-14, 8, 14, 0, Math.PI * 2);
            ctx.fill();

            ctx.fillStyle = '#ff2b54';
            ctx.beginPath();
            ctx.arc(-14, 8, 4, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#ffd700';
            ctx.lineWidth = 1;
            ctx.stroke();

            // Specular sheen along rear fender
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(-6, -4);
            ctx.quadraticCurveTo(12, -5, 26, -5);
            ctx.stroke();
        }

        // Cream Leather Interior Seats
        ctx.fillStyle = isNight ? '#fff9f0' : '#f7ede2';
        ctx.beginPath();
        ctx.roundRect(22, -18, 16, 24, 4);
        ctx.fill();
        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = 1.2;
        ctx.stroke();

        // Mahogany Wood Steering Wheel
        ctx.strokeStyle = '#8c5332';
        ctx.lineWidth = 3.5;
        ctx.beginPath();
        ctx.ellipse(78, -14, 5, 12, Math.PI / 6, 0, Math.PI * 2);
        ctx.stroke();

        // In Night Mode: Illuminated Dashboard Cockpit Gauges
        if (isNight) {
            ctx.fillStyle = '#38bdf8'; // Aqua fuel/speed gauge
            ctx.beginPath();
            ctx.arc(68, -4, 2.5, 0, Math.PI * 2);
            ctx.fill();
            ctx.fillStyle = '#fef08a'; // Amber clock gauge
            ctx.beginPath();
            ctx.arc(75, -4, 2.5, 0, Math.PI * 2);
            ctx.fill();
        }

        // Chrome Windscreen Frame with Tinted Glass
        ctx.strokeStyle = isNight ? '#f8fafc' : '#e2e8f0';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(82, 0);
        ctx.lineTo(88, -26);
        ctx.stroke();

        // Car Body Door Sill & Front Hood
        ctx.fillStyle = isNight ? '#b02a42' : '#7a1c2c';
        ctx.beginPath();
        ctx.moveTo(34, 0);
        ctx.lineTo(84, 0);
        ctx.lineTo(136, 6);
        ctx.quadraticCurveTo(144, 18, 138, 24);
        ctx.lineTo(34, 24);
        ctx.closePath();
        ctx.fill();

        if (isNight) {
            // Luminous gloss sheen along top of front hood
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.75)';
            ctx.lineWidth = 2.2;
            ctx.beginPath();
            ctx.moveTo(36, 1);
            ctx.lineTo(82, 1);
            ctx.lineTo(134, 7);
            ctx.stroke();
        }

        // Gold Trim Coachline
        ctx.strokeStyle = '#ffd700';
        ctx.lineWidth = 2.8;
        ctx.beginPath();
        ctx.moveTo(34, 6);
        ctx.lineTo(138, 10);
        ctx.stroke();

        // Chrome Bullet Side Mirror & Hood Mascot
        ctx.fillStyle = isNight ? '#f8fafc' : '#cbd5e1';
        ctx.beginPath();
        ctx.arc(84, -4, 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ffd700';
        ctx.beginPath();
        ctx.arc(136, 4, 3.5, 0, Math.PI * 2);
        ctx.fill();

        // Front Whitewall Wheel
        ctx.fillStyle = '#1e1e1e';
        ctx.beginPath();
        ctx.arc(114, 26, 17, 0, Math.PI * 2);
        ctx.fill();
        if (isNight) {
            ctx.strokeStyle = '#f8fafc';
            ctx.lineWidth = 2;
            ctx.stroke();
        }
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(114, 26, 12, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ffd700';
        ctx.beginPath();
        ctx.arc(114, 26, 6, 0, Math.PI * 2);
        ctx.fill();
        if (isNight) {
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(114, 26, 2.5, 0, Math.PI * 2);
            ctx.fill();

            // Twin Projector Headlamps on front bumper with radiant aura
            const headGlow = ctx.createRadialGradient(138, 12, 2, 138, 12, 22);
            headGlow.addColorStop(0, '#ffffff');
            headGlow.addColorStop(0.35, '#fff6bd');
            headGlow.addColorStop(0.7, 'rgba(255, 215, 100, 0.5)');
            headGlow.addColorStop(1, 'rgba(255, 215, 100, 0)');
            ctx.fillStyle = headGlow;
            ctx.beginPath();
            ctx.arc(138, 12, 22, 0, Math.PI * 2);
            ctx.fill();

            // Twin projector lenses
            ctx.fillStyle = '#ffffff';
            ctx.beginPath();
            ctx.arc(138, 12, 6, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#ffd700';
            ctx.lineWidth = 1.8;
            ctx.stroke();

            ctx.fillStyle = '#fff9db';
            ctx.beginPath();
            ctx.arc(135, 5, 4, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#ffd700';
            ctx.lineWidth = 1.2;
            ctx.stroke();
        }
    }

    ctx.restore();
}

// --- STAGE 2: BOUTIQUE (SAREES & JEWELRY) ---
function initBoutiqueUI() {
    // 1. Saree Catalog
    const sareeListEl = document.getElementById('boutiqueSareeGrid');
    if (sareeListEl) {
        sareeListEl.innerHTML = '';
        SAREE_COLLECTION.forEach(saree => {
            const card = document.createElement('div');
            card.className = `saree-item-card ${StoryState.sareeId === saree.id ? 'selected' : ''}`;
            card.innerHTML = `
                <div class="saree-swatch" style="background: linear-gradient(135deg, ${saree.baseColor}, ${saree.blouseColor});">
                    ✨
                </div>
                <div class="saree-title">${saree.name}</div>
                <div class="saree-fabric">${saree.type}</div>
            `;
            card.addEventListener('click', () => {
                StoryState.sareeId = saree.id;
                window.sfx.playGentleChime();
                updateBoutiqueAvatar();
                initBoutiqueUI();
            });
            sareeListEl.appendChild(card);
        });
    }


    // 3. Fine Jewelry pills
    const jewelryListEl = document.getElementById('boutiqueJewelryPills');
    if (jewelryListEl) {
        jewelryListEl.innerHTML = '';
        JEWELRY_SETS.forEach(j => {
            const pill = document.createElement('div');
            pill.className = `pill-btn ${StoryState.jewelryId === j.id ? 'active' : ''}`;
            pill.textContent = j.name;
            pill.title = j.desc;
            pill.addEventListener('click', () => {
                StoryState.jewelryId = j.id;
                window.sfx.playGentleChime();
                updateBoutiqueAvatar();
                initBoutiqueUI();
            });
            jewelryListEl.appendChild(pill);
        });
    }

    // 4. Hair flowers / ornaments pills
    const flowerListEl = document.getElementById('boutiqueFlowerPills');
    if (flowerListEl) {
        flowerListEl.innerHTML = '';
        HAIR_FLOWERS.forEach(f => {
            const pill = document.createElement('div');
            pill.className = `pill-btn ${StoryState.flowerId === f.id ? 'active' : ''}`;
            pill.textContent = f.name;
            pill.title = f.desc;
            pill.addEventListener('click', () => {
                StoryState.flowerId = f.id;
                window.sfx.playGentleChime();
                updateBoutiqueAvatar();
                initBoutiqueUI();
            });
            flowerListEl.appendChild(pill);
        });
    }

    // Button to proceed to evening drive
    const finishShoppingBtn = document.getElementById('finishShoppingBtn');
    if (finishShoppingBtn) {
        finishShoppingBtn.onclick = () => {
            window.sfx.playGentleChime();
            triggerCelebrationConfetti(80);
            goToStage('stage-ride-restaurant');
        };
    }

    const twirlBtn = document.getElementById('mirrorTwirlBtn');
    if (twirlBtn) {
        twirlBtn.onclick = () => {
            window.sfx.playGentleChime();
            triggerCelebrationConfetti(100);
            const mirrorBox = document.getElementById('boutiqueMirrorView');
            if (mirrorBox) {
                mirrorBox.style.transition = 'transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
                mirrorBox.style.transform = 'scale(1.05) rotate(2deg)';
                setTimeout(() => mirrorBox.style.transform = 'scale(1.05) rotate(-2deg)', 300);
                setTimeout(() => mirrorBox.style.transform = 'scale(1) rotate(0deg)', 600);
            }
        };
    }
}

function updateBoutiqueAvatar() {
    const mirrorBox = document.getElementById('boutiqueMirrorView');
    if (mirrorBox) {
        mirrorBox.innerHTML = generateAvatarSVG({
            sareeId: StoryState.sareeId,
            hairstyleId: StoryState.hairstyleId,
            jewelryId: StoryState.jewelryId,
            flowerId: StoryState.flowerId,
            bindiId: StoryState.bindiId,
            pose: 'standing',
            width: 310,
            height: 490
        });
    }
}

// --- STAGE 3: TWILIGHT RIDE TO RESTAURANT ENGINE ---
let restAnimFrame = null;
let restCanvas = null;
let restCtx = null;
let restRoadOffset = 0;
let isDrivingRest = false;

function initRideRestaurant() {
    restCanvas = document.getElementById('rideRestaurantCanvas');
    if (!restCanvas) return;
    restCtx = restCanvas.getContext('2d');
    restCanvas.width = 800;
    restCanvas.height = 380;

    // Vehicle cards click for Stage 3
    const restVCards = document.querySelectorAll('#stage-ride-restaurant .vehicle-option-card');
    restVCards.forEach(card => {
        if (card.dataset.vehicle === StoryState.selectedVehicle) {
            card.classList.add('selected');
        } else {
            card.classList.remove('selected');
        }
        card.onclick = () => {
            restVCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            StoryState.selectedVehicle = card.dataset.vehicle;
            document.querySelectorAll('#stage-ride-mall .vehicle-option-card').forEach(c1 => {
                c1.classList.toggle('selected', c1.dataset.vehicle === StoryState.selectedVehicle);
            });
            window.sfx.playGentleChime();
            renderRestaurantRide();
        };
    });

    // Interactive Manual Drive Button (Hold to Drive)
    const driveHoldBtn = document.getElementById('driveRestHoldBtn');
    if (driveHoldBtn) {
        const startDriving = (e) => {
            if (e && e.type !== 'mousedown') e.preventDefault();
            isDrivingRest = true;
            StoryState.restaurantDistance = Math.min(100, StoryState.restaurantDistance + 8);
            driveHoldBtn.style.transform = 'scale(0.97)';
        };
        const stopDriving = (e) => {
            if (e && e.type !== 'mouseup' && e.type !== 'mouseleave') e.preventDefault();
            isDrivingRest = false;
            driveHoldBtn.style.transform = 'scale(1)';
        };

        driveHoldBtn.addEventListener('mousedown', startDriving);
        driveHoldBtn.addEventListener('mouseup', stopDriving);
        driveHoldBtn.addEventListener('mouseleave', stopDriving);
        driveHoldBtn.addEventListener('touchstart', startDriving, { passive: false });
        driveHoldBtn.addEventListener('touchend', stopDriving, { passive: false });
        driveHoldBtn.addEventListener('touchcancel', stopDriving, { passive: false });
    }

    // Keyboard support (Right Arrow / D / Space)
    window.addEventListener('keydown', (e) => {
        if (StoryState.currentStage === 'stage-ride-restaurant') {
            if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D' || e.key === ' ') {
                isDrivingRest = true;
            }
        }
    });
    window.addEventListener('keyup', (e) => {
        if (StoryState.currentStage === 'stage-ride-restaurant') {
            if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D' || e.key === ' ') {
                isDrivingRest = false;
            }
        }
    });

    const proceedRestBtn = document.getElementById('enterRestaurantBtn');
    if (proceedRestBtn) {
        proceedRestBtn.addEventListener('click', () => {
            window.sfx.playGentleChime();
            goToStage('stage-flowers');
        });
    }

    startRestaurantRideLoop();
}

function startRestaurantRideLoop() {
    if (restAnimFrame) cancelAnimationFrame(restAnimFrame);

    function loop() {
        if (StoryState.currentStage !== 'stage-ride-restaurant') return;
        updateRestaurantRide();
        renderRestaurantRide();
        restAnimFrame = requestAnimationFrame(loop);
    }
    loop();
}

function updateRestaurantRide() {
    const veh = VEHICLES.find(v => v.id === StoryState.selectedVehicle) || VEHICLES[0];
    
    // Advance distance when player is driving (Fast & Snappy: ~3-4 seconds)
    if (isDrivingRest) {
        restRoadOffset += veh.speed * 1.6;
        StoryState.restaurantDistance = Math.min(100, StoryState.restaurantDistance + 0.45);
    }

    // Pulse stars
    restStars.forEach(s => {
        s.opacity += s.pulseSpeed;
        if (s.opacity > 1 || s.opacity < 0.2) s.pulseSpeed *= -1;
    });

    const distEl = document.getElementById('restDistanceText');
    const progBar = document.getElementById('restProgressBar');
    if (distEl) distEl.textContent = `${Math.floor(StoryState.restaurantDistance * 10)} m / 1000 m`;
    if (progBar) progBar.style.width = `${StoryState.restaurantDistance}%`;

    const enterBtn = document.getElementById('enterRestaurantBtn');
    if (StoryState.restaurantDistance >= 100 && !StoryState.restaurantArrived) {
        StoryState.restaurantArrived = true;
        if (enterBtn) {
            enterBtn.disabled = false;
            enterBtn.style.opacity = '1';
            enterBtn.innerHTML = '🌸 Arrived! Receive Your Birthday Flowers →';
            triggerCelebrationConfetti(80);
            window.sfx.playGentleChime();
        }
    }
}

// Enchanting, romantic twilight Barbie promenade with glowing fairy lights!
function renderRestaurantRide() {
    if (!restCtx || !restCanvas) return;
    const ctx = restCtx;
    const w = restCanvas.width;
    const h = restCanvas.height;

    ctx.clearRect(0, 0, w, h);

    // 1. Twilight / Golden Evening Sky
    const skyGrad = ctx.createLinearGradient(0, 0, 0, h);
    skyGrad.addColorStop(0, '#1d122e');
    skyGrad.addColorStop(0.35, '#4a1e46');
    skyGrad.addColorStop(0.7, '#912f56');
    skyGrad.addColorStop(1, '#e37874');
    ctx.fillStyle = skyGrad;
    ctx.fillRect(0, 0, w, h);

    // 2. Crescent Moon with Warm Golden Aura
    ctx.save();
    ctx.fillStyle = 'rgba(255, 230, 150, 0.2)';
    ctx.beginPath();
    ctx.arc(80, 50, 26, 0, Math.PI * 2);
    ctx.fill();

    // Crescent shape
    ctx.fillStyle = '#fff4cc';
    ctx.beginPath();
    ctx.arc(80, 50, 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = '#1d122e';
    ctx.beginPath();
    ctx.arc(86, 46, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // 3. Twinkling Evening Stars & Fairy Dust
    restStars.forEach(s => {
        ctx.fillStyle = `rgba(255, 248, 220, ${s.opacity})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
    });

    // 4. Distant Illuminated Palace Restaurant Pavilion
    const pavX = w - 280;
    ctx.fillStyle = 'rgba(255, 240, 220, 0.9)';
    ctx.fillRect(pavX, 70, 260, 115);
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 2;
    ctx.strokeRect(pavX, 70, 260, 115);

    // Glowing arched palace windows
    for (let win = 0; win < 4; win++) {
        const wx = pavX + 20 + win * 60;
        ctx.fillStyle = '#ffd166';
        ctx.beginPath();
        ctx.arc(wx + 18, 115, 16, Math.PI, 0);
        ctx.lineTo(wx + 34, 150);
        ctx.lineTo(wx + 2, 150);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = '#b8860b';
        ctx.stroke();
    }

    // Pavilion Gilded Crest
    ctx.fillStyle = '#7a1c2c';
    ctx.font = 'bold 12px "Playfair Display", serif';
    ctx.fillText("L'ÉTOILE PALACE DINING", pavX + 46, 95);

    // 5. Evening Road with Streetlamp Glow Reflections & High-Contrast Twilight Tarmac
    const roadGrad = ctx.createLinearGradient(0, 185, 0, h);
    roadGrad.addColorStop(0, '#3a2334');
    roadGrad.addColorStop(0.35, '#2e1c28');
    roadGrad.addColorStop(1, '#1e111b');
    ctx.fillStyle = roadGrad;
    ctx.fillRect(0, 185, w, h - 185);

    // Golden Sidewalk Curb with illuminated bevel
    ctx.fillStyle = '#f5c542';
    ctx.fillRect(0, 182, w, 3);
    ctx.fillStyle = 'rgba(245, 197, 66, 0.35)';
    ctx.fillRect(0, 185, w, 5);

    // 6. Fairy-Light Trees along the Avenue
    for (let t = 0; t < 5; t++) {
        const treeX = ((t * 220) - (restRoadOffset * 0.75)) % (w + 240);
        const actualTX = treeX < -120 ? treeX + w + 360 : treeX;

        // Tree trunk
        ctx.fillStyle = '#3a1f18';
        ctx.fillRect(actualTX - 5, 140, 10, 45);

        // Dark lush canopy
        ctx.fillStyle = '#223824';
        ctx.beginPath();
        ctx.arc(actualTX, 110, 32, 0, Math.PI * 2);
        ctx.fill();

        // Glowing golden fairy lights wrapped around branches
        ctx.fillStyle = '#ffe082';
        for (let fl = 0; fl < 8; fl++) {
            const fx = actualTX + Math.sin(fl * 1.2) * 24;
            const fy = 110 + Math.cos(fl * 1.2) * 20;
            ctx.beginPath();
            ctx.arc(fx, fy, 2.5, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // 7. Glowing Street Lanterns with Radiant Pools of Light
    for (let l = 0; l < 4; l++) {
        const postX = ((l * 280 + 100) - (restRoadOffset * 0.85)) % (w + 260);
        const actualLX = postX < -80 ? postX + w + 360 : postX;

        // Lantern post
        ctx.strokeStyle = '#d4af37';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(actualLX, 184);
        ctx.lineTo(actualLX, 90);
        ctx.stroke();

        // Warm glowing light halo on road (smooth radial gradient)
        const lampPool = ctx.createRadialGradient(actualLX, 225, 5, actualLX, 225, 75);
        lampPool.addColorStop(0, 'rgba(255, 215, 110, 0.28)');
        lampPool.addColorStop(0.5, 'rgba(255, 200, 90, 0.12)');
        lampPool.addColorStop(1, 'rgba(255, 190, 80, 0)');
        ctx.fillStyle = lampPool;
        ctx.beginPath();
        ctx.ellipse(actualLX, 225, 75, 24, 0, 0, Math.PI * 2);
        ctx.fill();

        // Glowing lantern lamp with soft luminous aura
        const lanternGlow = ctx.createRadialGradient(actualLX, 86, 2, actualLX, 86, 20);
        lanternGlow.addColorStop(0, '#ffffff');
        lanternGlow.addColorStop(0.3, '#ffd166');
        lanternGlow.addColorStop(0.8, 'rgba(255, 209, 102, 0.3)');
        lanternGlow.addColorStop(1, 'rgba(255, 209, 102, 0)');
        ctx.fillStyle = lanternGlow;
        ctx.beginPath();
        ctx.arc(actualLX, 86, 20, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#fff0a6';
        ctx.beginPath();
        ctx.arc(actualLX, 86, 7, 0, Math.PI * 2);
        ctx.fill();
    }

    // Dedicated Boulevard Promenade Ambient Spotlight bathing the vehicle driving lane
    const vehicleAvenueGlow = ctx.createRadialGradient(160, 220, 25, 160, 220, 190);
    vehicleAvenueGlow.addColorStop(0, 'rgba(255, 230, 165, 0.24)');
    vehicleAvenueGlow.addColorStop(0.6, 'rgba(255, 210, 130, 0.08)');
    vehicleAvenueGlow.addColorStop(1, 'rgba(255, 200, 110, 0)');
    ctx.fillStyle = vehicleAvenueGlow;
    ctx.fillRect(0, 185, w, h - 185);

    // 8. Glowing dividing line
    ctx.strokeStyle = '#ffd166';
    ctx.lineWidth = 3;
    ctx.setLineDash([22, 22]);
    ctx.lineDashOffset = -restRoadOffset % 44;
    ctx.beginPath();
    ctx.moveTo(0, 260);
    ctx.lineTo(w, 260);
    ctx.stroke();
    ctx.setLineDash([]);

    // 8b. Cat's-Eye Road Studs / Amber Lane Markers
    for (let c = 0; c < 14; c++) {
        const catX = ((c * 70) - (restRoadOffset % 70));
        if (catX >= 0 && catX <= w) {
            ctx.fillStyle = 'rgba(255, 245, 190, 0.85)';
            ctx.beginPath();
            ctx.arc(catX, 260, 2.5, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // 9. Draw Standalone Luxury Vehicle in Twilight Promenade with Radiant Lighting
    drawPromenadeRider(ctx, 120, 220, true);
}

// --- FLOATING LOCKED TOAST NOTIFICATION ---
let toastTimer = null;
function showLockedToast(message) {
    const toast = document.getElementById('lockedToast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove('show');
    }, 3200);
}

// --- STAGE 4: WARM WELCOME & BIRTHDAY FLOWERS (WITH SEALED LETTER) ---
function initFlowersStage() {
    const bouquetBox = document.getElementById('bouquetDisplayBox');
    if (bouquetBox) {
        bouquetBox.innerHTML = generateBouquetSVG(240, 240);
    }

    renderSealedLetterCard();

    // Bouquet welcome celebration
    if (!StoryState.bouquetReceived) {
        StoryState.bouquetReceived = true;
        triggerCelebrationConfetti(140);
        window.sfx.playGentleChime();
    }

    const proceedBtn = document.getElementById('proceedToCakeBtn');
    if (proceedBtn) {
        proceedBtn.onclick = () => {
            window.sfx.playGentleChime();
            goToStage('stage-cake');
        };
    }
}

function renderSealedLetterCard() {
    const envelopeBox = document.getElementById('sealedEnvelopeBox');
    if (envelopeBox) {
        envelopeBox.innerHTML = generateSealedEnvelopeSVG(StoryState.cakeCut);
    }

    const statusPill = document.getElementById('sealedLetterStatusPill');
    const statusIcon = document.getElementById('sealedStatusIcon');
    const statusText = document.getElementById('sealedStatusText');
    const btnText = document.getElementById('sealedBtnText');
    const sealedBtn = document.getElementById('sealedLetterBtn');

    if (StoryState.cakeCut) {
        if (statusPill) {
            statusPill.className = 'sealed-status-pill unlocked';
        }
        if (statusIcon) statusIcon.textContent = '🔓';
        if (statusText) statusText.textContent = 'Unlocked! Ready to Read 💌';
        if (btnText) btnText.textContent = '💌 Open Birthday Letter →';
    } else {
        if (statusPill) {
            statusPill.className = 'sealed-status-pill locked';
        }
        if (statusIcon) statusIcon.textContent = '🔒';
        if (statusText) statusText.textContent = 'Locked — Opens After Cake Cutting 🎂';
        if (btnText) btnText.textContent = '🔒 Attempt to Open Letter';
    }

    const handleLetterAttempt = (e) => {
        if (e) e.stopPropagation();
        if (!StoryState.cakeCut) {
            if (envelopeBox) {
                envelopeBox.classList.remove('shake-locked');
                void envelopeBox.offsetWidth; // trigger reflow
                envelopeBox.classList.add('shake-locked');
            }
            window.sfx.playLockedAlert();
            showLockedToast("🔒 Cake cutting ritual first, Ma'am! Blow out the candles and cut the cake to open your letter! 🎂✨");
        } else {
            window.sfx.playGentleChime();
            goToStage('stage-letter');
        }
    };

    if (envelopeBox) envelopeBox.onclick = handleLetterAttempt;
    if (sealedBtn) sealedBtn.onclick = handleLetterAttempt;
}

// --- STAGE 5: THE BIRTHDAY CAKE CELEBRATION ---
function initCakeStage() {
    renderArtisanCake();

    const blowBtn = document.getElementById('restBlowCandlesBtn');
    const cutBtn = document.getElementById('restCutCakeBtn');
    const letterBtn = document.getElementById('openBirthdayLetterBtn');
    const unlockBanner = document.getElementById('cakeUnlockedBanner');

    // Update initial UI state if already blown or cut
    if (!StoryState.candlesLit) {
        if (blowBtn) {
            blowBtn.disabled = true;
            blowBtn.innerHTML = '✨ Candles Blown (Wish Made)';
        }
        if (cutBtn && !StoryState.cakeCut) {
            cutBtn.disabled = false;
            cutBtn.style.opacity = '1';
        }
    }

    if (StoryState.cakeCut) {
        if (cutBtn) {
            cutBtn.disabled = true;
            cutBtn.innerHTML = '🍰 Cake Cut with Love';
        }
        if (unlockBanner) unlockBanner.style.display = 'block';
        if (letterBtn) letterBtn.style.display = 'inline-flex';
    }

    if (blowBtn) {
        blowBtn.onclick = () => {
            if (!StoryState.candlesLit) return;
            window.sfx.playBlowCandle();
            StoryState.candlesLit = false;
            renderArtisanCake();
            triggerCelebrationConfetti(60);

            blowBtn.disabled = true;
            blowBtn.innerHTML = '✨ Candles Blown (Wish Made)';
            if (cutBtn) {
                cutBtn.disabled = false;
                cutBtn.style.opacity = '1';
            }
        };
    }

    if (cutBtn) {
        cutBtn.onclick = () => {
            if (StoryState.candlesLit || StoryState.cakeCut) return;
            StoryState.cakeCut = true;
            renderArtisanCake();
            triggerCelebrationConfetti(220);

            // Play the celebratory Happy Birthday melody on cake cut
            window.sfx.playCakeCuttingHappyBirthday();

            cutBtn.disabled = true;
            cutBtn.innerHTML = '🍰 Cake Cut with Love';

            if (unlockBanner) unlockBanner.style.display = 'block';
            if (letterBtn) {
                letterBtn.style.display = 'inline-flex';
                setTimeout(() => {
                    letterBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 100);
            }
        };
    }

    if (letterBtn) {
        letterBtn.onclick = () => {
            window.sfx.playGentleChime();
            goToStage('stage-letter');
        };
    }
}

function renderArtisanCake() {
    const cakeBox = document.getElementById('cakeDisplayBox');
    if (cakeBox) {
        cakeBox.innerHTML = generateArtisanCakeSVG(StoryState.candlesLit, StoryState.cakeCut ? 1 : 0);
    }
}

// --- STAGE 6: CUSTOM BIRTHDAY LETTER ---
function renderCustomLetter() {
    const contentEl = document.getElementById('customLetterContent');
    if (contentEl) {
        contentEl.textContent = StoryState.customLetterText;
    }

    const editBtn = document.getElementById('editLetterBtn');
    if (editBtn) {
        editBtn.onclick = () => {
            openEditLetterModal();
        };
    }

    const finishBtn = document.getElementById('finishToGameBtn');
    if (finishBtn) {
        finishBtn.onclick = () => {
            window.sfx.playGentleChime();
            triggerCelebrationConfetti(120);
            goToStage('stage-funny-game');
        };
    }
}

function openEditLetterModal() {
    const modal = document.getElementById('letterModal');
    const textarea = document.getElementById('editLetterTextarea');
    if (!modal || !textarea) return;

    textarea.value = StoryState.customLetterText;
    modal.classList.add('active');

    const saveBtn = document.getElementById('saveCustomLetterBtn');
    if (saveBtn) {
        saveBtn.onclick = () => {
            const newText = textarea.value.trim();
            if (newText) {
                StoryState.customLetterText = newText;
                renderCustomLetter();
                window.sfx.playChime();
                triggerCelebrationConfetti(80);
            }
            modal.classList.remove('active');
        };
    }

    const closeBtn = document.getElementById('closeLetterModalBtn');
    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.classList.remove('active');
        };
    }
}

// --- STAGE 7: FUNNY BIRTHDAY GAME (THE GREAT BIRTHDAY CAKE CAPER) ---
let gameCanvas = null;
let gameCtx = null;
let gameAnimFrame = null;
let gameTimerInterval = null;
let gameScore = 0;
let gameTimeLeft = 30;
let isGameRunning = false;
let basketX = 180;
let basketTargetX = 180;
let fallingItems = [];
let itemSpawnCooldown = 0;

const FUNNY_ITEMS = [
    { type: 'cake', emoji: '🍰', name: 'Cake Slice', pts: 15, isGood: true, quote: 'Delicious cake slice caught! 🍰' },
    { type: 'rose', emoji: '🌹', name: 'Fresh Rose', pts: 20, isGood: true, quote: 'A fresh fragrant rose for Ma\'am! 🌹' },
    { type: 'crown', emoji: '👑', name: 'Golden Tiara', pts: 25, isGood: true, quote: 'Royal Birthday Tiara collected! 👑' },
    { type: 'tea', emoji: '☕', name: 'Royal Chai', pts: 10, isGood: true, quote: 'Chai break energy boost! ☕' },
    { type: 'clue', emoji: '🔍', name: 'Sherlock Clue', pts: 30, isGood: true, quote: 'Sherlock: "Case Solved! Ma\'am is the best ever!" 🕵️‍♂️' },
    { type: 'alarm', emoji: '⏰', name: '8 AM Alarm', pts: -5, isGood: false, quote: 'Ma\'am snoozed the alarm: "No morning classes on my birthday!" ⏰' },
    { type: 'exam', emoji: '📝', name: 'Surprise Exam', pts: -5, isGood: false, quote: 'Exam paper dodged with 100% elegance! 📝' }
];

function initFunnyGame() {
    gameCanvas = document.getElementById('funnyGameCanvas');
    if (!gameCanvas) return;
    gameCtx = gameCanvas.getContext('2d');

    // Resize canvas to match display size
    const wrap = gameCanvas.parentElement;
    gameCanvas.width = wrap ? wrap.clientWidth : 600;
    gameCanvas.height = wrap ? wrap.clientHeight : 400;
    basketX = gameCanvas.width / 2;
    basketTargetX = basketX;

    // Reset game state
    gameScore = 0;
    gameTimeLeft = 30;
    fallingItems = [];
    itemSpawnCooldown = 0;
    isGameRunning = true;

    updateGameUI();
    const overlay = document.getElementById('funnyGameOverOverlay');
    if (overlay) overlay.style.display = 'none';

    const comm = document.getElementById('gameLiveCommentary');
    if (comm) comm.textContent = '🕵️‍♂️ Sherlock Riddy: "Catch the cakes and flowers, Ma\'am! Dodge the alarms!"';

    // Touch & pointer events on canvas
    const handleMove = (clientX) => {
        if (!gameCanvas) return;
        const rect = gameCanvas.getBoundingClientRect();
        const x = clientX - rect.left;
        basketTargetX = Math.max(45, Math.min(gameCanvas.width - 45, x));
    };

    gameCanvas.onpointermove = (e) => {
        handleMove(e.clientX);
    };

    gameCanvas.ontouchmove = (e) => {
        if (e.touches && e.touches[0]) {
            handleMove(e.touches[0].clientX);
        }
        e.preventDefault();
    };

    // Mobile navigation buttons
    const leftBtn = document.getElementById('gameLeftBtn');
    const rightBtn = document.getElementById('gameRightBtn');
    if (leftBtn) {
        leftBtn.onclick = () => {
            basketTargetX = Math.max(45, basketTargetX - 45);
        };
    }
    if (rightBtn) {
        rightBtn.onclick = () => {
            basketTargetX = Math.min(gameCanvas.width - 45, basketTargetX + 45);
        };
    }

    // Keyboard controls
    window.onkeydown = (e) => {
        if (StoryState.currentStage !== 'stage-funny-game' || !isGameRunning) return;
        if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
            basketTargetX = Math.max(45, basketTargetX - 40);
        } else if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
            basketTargetX = Math.min(gameCanvas.width - 45, basketTargetX + 40);
        }
    };

    // Buttons in game over overlay
    const restartBtn = document.getElementById('restartGameBtn');
    if (restartBtn) {
        restartBtn.onclick = () => {
            window.sfx.playGentleChime();
            initFunnyGame();
        };
    }

    const returnBtn = document.getElementById('returnToLetterBtn');
    if (returnBtn) {
        returnBtn.onclick = () => {
            window.sfx.playGentleChime();
            goToStage('stage-letter');
        };
    }

    // Exit buttons
    const exitOverlayBtn = document.getElementById('exitGameOverlayBtn');
    if (exitOverlayBtn) {
        exitOverlayBtn.onclick = () => {
            window.sfx.playGentleChime();
            goToStage('stage-finish');
        };
    }

    const exitHeaderBtn = document.getElementById('exitGameHeaderBtn');
    if (exitHeaderBtn) {
        exitHeaderBtn.onclick = () => {
            window.sfx.playGentleChime();
            goToStage('stage-finish');
        };
    }

    // Timer countdown
    if (gameTimerInterval) clearInterval(gameTimerInterval);
    gameTimerInterval = setInterval(() => {
        if (!isGameRunning) return;
        gameTimeLeft--;
        const timerEl = document.getElementById('gameTimerVal');
        if (timerEl) timerEl.textContent = `${gameTimeLeft}s`;

        if (gameTimeLeft <= 0) {
            endFunnyGame();
        }
    }, 1000);

    startFunnyGameLoop();
}

function updateGameUI() {
    const scoreEl = document.getElementById('gameScoreVal');
    const rankEl = document.getElementById('gameRankVal');
    const timerEl = document.getElementById('gameTimerVal');

    if (scoreEl) scoreEl.textContent = gameScore;
    if (timerEl) timerEl.textContent = `${gameTimeLeft}s`;

    let rank = 'Certified Favourite 💖';
    if (gameScore >= 160) rank = 'Certified Favourite 👑';
    else if (gameScore >= 90) rank = 'Certified Favourite 💖';
    else if (gameScore >= 40) rank = 'Certified Favourite ✨';
    else rank = 'Certified Favourite 🎀';

    if (rankEl) rankEl.textContent = rank;
}

function startFunnyGameLoop() {
    if (gameAnimFrame) cancelAnimationFrame(gameAnimFrame);

    function loop() {
        if (StoryState.currentStage !== 'stage-funny-game' || !isGameRunning) return;
        updateFunnyGame();
        renderFunnyGame();
        gameAnimFrame = requestAnimationFrame(loop);
    }
    loop();
}

function updateFunnyGame() {
    if (!gameCanvas) return;
    const w = gameCanvas.width;
    const h = gameCanvas.height;

    // Smooth basket movement towards target
    basketX += (basketTargetX - basketX) * 0.3;

    // Spawn falling items
    itemSpawnCooldown--;
    if (itemSpawnCooldown <= 0) {
        const itemType = FUNNY_ITEMS[Math.floor(Math.random() * FUNNY_ITEMS.length)];
        const itemX = 40 + Math.random() * (w - 80);
        const itemSpeed = 2.4 + Math.random() * 2.0;
        fallingItems.push({
            ...itemType,
            x: itemX,
            y: -20,
            speed: itemSpeed
        });
        itemSpawnCooldown = 30 + Math.floor(Math.random() * 22);
    }

    const basketY = h - 45;
    const basketW = 86;

    for (let i = fallingItems.length - 1; i >= 0; i--) {
        const it = fallingItems[i];
        it.y += it.speed;

        // Collision check with basket
        if (it.y >= basketY - 15 && it.y <= basketY + 25) {
            if (Math.abs(it.x - basketX) < basketW / 2 + 12) {
                // Caught!
                gameScore = Math.max(0, gameScore + it.pts);
                updateGameUI();

                const comm = document.getElementById('gameLiveCommentary');
                if (comm) comm.textContent = `🕵️‍♂️ ${it.quote}`;

                if (it.isGood) {
                    window.sfx.playGentleChime();
                    triggerCelebrationConfetti(30);
                } else {
                    window.sfx.playLockedAlert();
                }

                fallingItems.splice(i, 1);
                continue;
            }
        }

        // Off bottom of screen
        if (it.y > h + 30) {
            fallingItems.splice(i, 1);
        }
    }
}

function renderFunnyGame() {
    if (!gameCtx || !gameCanvas) return;
    const ctx = gameCtx;
    const w = gameCanvas.width;
    const h = gameCanvas.height;

    // Clear
    ctx.clearRect(0, 0, w, h);

    // Dreamy, luminous pastel rose & champagne gradient
    const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
    bgGrad.addColorStop(0, '#fff4f6');
    bgGrad.addColorStop(0.45, '#fde6ec');
    bgGrad.addColorStop(0.85, '#f7d3dd');
    bgGrad.addColorStop(1, '#ebd0da');
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Subtle fairy sparkles & golden stars
    ctx.fillStyle = 'rgba(212, 175, 55, 0.7)';
    for (let i = 0; i < 22; i++) {
        const sx = (i * 41 + Date.now() * 0.015) % w;
        const sy = (i * 53) % (h - 60);
        ctx.beginPath();
        ctx.arc(sx, sy, 2, 0, Math.PI * 2);
        ctx.fill();
    }

    ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
    for (let i = 0; i < 18; i++) {
        const sx = (i * 29 + Date.now() * 0.008) % w;
        const sy = (i * 37) % (h - 70);
        ctx.beginPath();
        ctx.arc(sx, sy, 2.5, 0, Math.PI * 2);
        ctx.fill();
    }

    // Draw Falling Items
    fallingItems.forEach(it => {
        ctx.save();
        ctx.translate(it.x, it.y);
        ctx.font = '28px serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = it.isGood ? 'rgba(255, 215, 0, 0.6)' : 'rgba(255, 50, 50, 0.6)';
        ctx.shadowBlur = 10;
        ctx.fillText(it.emoji, 0, 0);
        ctx.restore();
    });

    // Draw Royal Velvet Tray / Basket
    const basketY = h - 45;
    const basketW = 86;
    const basketH = 22;

    ctx.save();
    ctx.translate(basketX, basketY);

    // Shadow
    ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
    ctx.shadowBlur = 12;
    ctx.shadowOffsetY = 4;

    // Outer Gilded Oval Base
    ctx.fillStyle = '#c5a059';
    ctx.beginPath();
    ctx.ellipse(0, 4, basketW / 2 + 6, basketH / 2 + 4, 0, 0, Math.PI * 2);
    ctx.fill();

    // Inner Crimson Velvet Lining
    ctx.fillStyle = '#7a1c2c';
    ctx.beginPath();
    ctx.ellipse(0, 2, basketW / 2, basketH / 2, 0, 0, Math.PI * 2);
    ctx.fill();

    // Gold Trim & Ribbon
    ctx.strokeStyle = '#faecc8';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.restore();
}

function endFunnyGame() {
    isGameRunning = false;
    if (gameTimerInterval) clearInterval(gameTimerInterval);
    if (gameAnimFrame) cancelAnimationFrame(gameAnimFrame);

    window.sfx.playCakeCuttingHappyBirthday();
    triggerCelebrationConfetti(240);

    const overlay = document.getElementById('funnyGameOverOverlay');
    const summary = document.getElementById('overlayScoreSummary');
    const degree = document.getElementById('overlayFunnyDegree');

    let rankTitle = 'Certified Favourite 👑';
    if (gameScore >= 100) rankTitle = 'Certified Favourite 👑';
    else rankTitle = 'Certified Favourite 💖';

    if (summary) {
        summary.textContent = `Ma'am scored a grand ${gameScore} points! — Title: ${rankTitle}`;
    }

    if (degree) {
        degree.textContent = `"After a thorough investigation, Sherlock Riddy has determined that today deserves a little extra celebration. The evidence is clear: it's Ma'am's birthday! Case closed. Happy Birthday, Ma'am! 💗"`;
    }

    if (overlay) overlay.style.display = 'flex';
}

// --- STAGE 8: CELEBRATION COMPLETE / GRAND FAREWELL ---
function initFinishStage() {
    isGameRunning = false;
    if (gameTimerInterval) clearInterval(gameTimerInterval);
    if (gameAnimFrame) cancelAnimationFrame(gameAnimFrame);

    window.sfx.playCakeCuttingHappyBirthday();
    triggerCelebrationConfetti(260);

    const replayBtn = document.getElementById('replayEverythingBtn');
    if (replayBtn) {
        replayBtn.onclick = () => {
            window.sfx.playGentleChime();
            triggerCelebrationConfetti(100);
            // Reset ceremony states so she can re-enjoy the ride & cake cutting
            StoryState.candlesLit = true;
            StoryState.cakeCut = false;
            StoryState.restaurantDistance = 0;
            StoryState.restaurantArrived = false;
            goToStage('stage-intro');
        };
    }
}

// --- TOP AUDIO CONTROLS & INITIALIZATION ---
function initApp() {
    resizeCanvases();
    initSparkles();
    updateSparkles();
    updateConfetti();

    // 1. Enter Button on Welcome Surface -> Transitions to Sherlock Riddy Warning
    const enterBtn = document.getElementById('enterCelebrationBtn');
    if (enterBtn) {
        enterBtn.addEventListener('click', (e) => {
            if (e) e.stopPropagation();
            window.sfx.playGentleChime();
            goToStage('stage-warning');
        });
    }

    // 2. Sherlock Riddy Warning Surface -> Press anywhere to continue to Privacy Surface
    const warningStage = document.getElementById('stage-warning');
    if (warningStage) {
        let warningHandled = false;
        const advanceFromWarning = (e) => {
            if (warningHandled) return;
            warningHandled = true;
            if (e) e.stopPropagation();
            window.sfx.playGentleChime();
            goToStage('stage-privacy');
            setTimeout(() => { warningHandled = false; }, 400);
        };
        warningStage.addEventListener('click', advanceFromWarning);
        warningStage.addEventListener('touchend', advanceFromWarning);
    }

    // 3. Privacy Surface -> Enter Button proceeds to Chapter 1 (The Ride)
    const privacyBtn = document.getElementById('privacyEnterBtn');
    if (privacyBtn) {
        privacyBtn.addEventListener('click', (e) => {
            if (e) e.stopPropagation();
            window.sfx.playGentleChime();
            triggerCelebrationConfetti(120);
            goToStage('stage-ride-mall');
        });
    }

    // Audio toggles
    const musicBtn = document.getElementById('topMusicBtn');
    if (musicBtn) {
        musicBtn.addEventListener('click', () => {
            if (window.sfx.bgMusicPlaying) {
                window.sfx.stopBgMusic();
                musicBtn.innerHTML = '🎵 Play Birthday Melody';
            } else {
                window.sfx.startBgMusicLoop();
                musicBtn.innerHTML = '🎶 Pause Melody';
            }
        });
    }

    const soundBtn = document.getElementById('topSoundBtn');
    if (soundBtn) {
        soundBtn.addEventListener('click', () => {
            const isMuted = window.sfx.toggleMute();
            soundBtn.innerHTML = isMuted ? '🔇 Sound Off' : '🔊 Sound On';
        });
    }

    // Initialize Boutique
    initBoutiqueUI();

    // Start at Intro stage
    goToStage('stage-intro');
}

document.addEventListener('DOMContentLoaded', initApp);
