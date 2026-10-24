// Sound Synthesizer using Web Audio API - Smooth Melodies & Birthday Tune
class SoundEffects {
    constructor() {
        this.ctx = null;
        this.isMuted = false;
        this.rideMusicPlaying = false;
        this.rideMusicInterval = null;
        this.bgMusicPlaying = false;
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        if (this.isMuted) {
            this.stopSmoothRideMusic();
            this.stopBgMusic();
        }
        return this.isMuted;
    }

    playTone(freq, type = 'sine', duration = 0.35, gainVal = 0.08, delay = 0) {
        if (this.isMuted) return;
        this.init();
        setTimeout(() => {
            try {
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();
                osc.type = type;
                osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
                
                // Gentle fade in and smooth exponential fade out (no clicking/beeping)
                gain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(gainVal, this.ctx.currentTime + 0.04);
                gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start();
                osc.stop(this.ctx.currentTime + duration);
            } catch (e) {
                console.log(e);
            }
        }, delay * 1000);
    }

    // Gentle Sparkle Chime for UI clicks
    playGentleChime() {
        const notes = [523.25, 659.25, 783.99, 1046.50];
        notes.forEach((f, idx) => {
            this.playTone(f, 'sine', 0.5, 0.04, idx * 0.08);
        });
    }

    // Gentle alert when tapping locked letter before cutting cake
    playLockedAlert() {
        if (this.isMuted) return;
        this.init();
        this.playTone(440.00, 'triangle', 0.16, 0.05, 0);
        this.playTone(349.23, 'triangle', 0.24, 0.05, 0.12);
    }

    // Soft whoosh for blowing candle
    playBlowCandle() {
        if (this.isMuted) return;
        this.init();
        try {
            const bufferSize = this.ctx.sampleRate * 0.4;
            const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
            const output = buffer.getChannelData(0);
            for (let i = 0; i < bufferSize; i++) {
                output[i] = Math.random() * 2 - 1;
            }
            const whiteNoise = this.ctx.createBufferSource();
            whiteNoise.buffer = buffer;
            
            const filter = this.ctx.createBiquadFilter();
            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(800, this.ctx.currentTime);
            filter.frequency.exponentialRampToValueAtTime(60, this.ctx.currentTime + 0.4);

            const gain = this.ctx.createGain();
            gain.gain.setValueAtTime(0.07, this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.4);

            whiteNoise.connect(filter);
            filter.connect(gain);
            gain.connect(this.ctx.destination);

            whiteNoise.start();
        } catch (e) {
            console.log(e);
        }
    }

    // --- SMOOTH AMBIENT MUSIC WHILE ON VEHICLE ---
    // Calm, dreamy, lo-fi melodic progression (Fmaj7 -> G -> Em7 -> Am7)
    startSmoothRideMusic() {
        if (this.rideMusicPlaying || this.isMuted) return;
        this.init();
        this.rideMusicPlaying = true;

        const smoothChords = [
            // Fmaj7 arpeggio (dreamy)
            [
                { f: 174.61, d: 1.2, p: 0 },    // F3 bass
                { f: 261.63, d: 0.8, p: 0.3 },  // C4
                { f: 329.63, d: 0.8, p: 0.6 },  // E4
                { f: 440.00, d: 1.0, p: 0.9 },  // A4
                { f: 329.63, d: 0.8, p: 1.4 }   // E4
            ],
            // G6 arpeggio
            [
                { f: 196.00, d: 1.2, p: 0 },    // G3 bass
                { f: 293.66, d: 0.8, p: 0.3 },  // D4
                { f: 329.63, d: 0.8, p: 0.6 },  // E4
                { f: 493.88, d: 1.0, p: 0.9 },  // B4
                { f: 293.66, d: 0.8, p: 1.4 }   // D4
            ],
            // Em7 arpeggio
            [
                { f: 164.81, d: 1.2, p: 0 },    // E3 bass
                { f: 246.94, d: 0.8, p: 0.3 },  // B3
                { f: 329.63, d: 0.8, p: 0.6 },  // E4
                { f: 392.00, d: 1.0, p: 0.9 },  // G4
                { f: 329.63, d: 0.8, p: 1.4 }   // E4
            ],
            // Am7 arpeggio (warm resolve)
            [
                { f: 220.00, d: 1.2, p: 0 },    // A3 bass
                { f: 261.63, d: 0.8, p: 0.3 },  // C4
                { f: 329.63, d: 0.8, p: 0.6 },  // E4
                { f: 523.25, d: 1.1, p: 0.9 },  // C5
                { f: 440.00, d: 0.9, p: 1.4 }   // A4
            ]
        ];

        let chordIdx = 0;
        const playNextBar = () => {
            if (!this.rideMusicPlaying || this.isMuted) return;
            const bar = smoothChords[chordIdx];
            bar.forEach(note => {
                this.playTone(note.f, 'sine', note.d, 0.05, note.p);
            });
            chordIdx = (chordIdx + 1) % smoothChords.length;
        };

        playNextBar();
        this.rideMusicInterval = setInterval(playNextBar, 2000);
    }

    stopSmoothRideMusic() {
        this.rideMusicPlaying = false;
        if (this.rideMusicInterval) {
            clearInterval(this.rideMusicInterval);
            this.rideMusicInterval = null;
        }
    }

    // --- CELEBRATORY "HAPPY BIRTHDAY" TUNE FOR CAKE CUTTING ---
    playCakeCuttingHappyBirthday() {
        if (this.isMuted) return;
        this.init();

        // Harmonized, warm chime version of Happy Birthday to You
        const melody = [
            { f: 261.63, d: 0.3, p: 0.0 },     // Hap-
            { f: 261.63, d: 0.3, p: 0.35 },    // py
            { f: 293.66, d: 0.6, p: 0.7 },     // Birth-
            { f: 261.63, d: 0.6, p: 1.35 },    // day
            { f: 349.23, d: 0.6, p: 2.0 },     // to
            { f: 329.63, d: 1.1, p: 2.65 },    // you

            { f: 261.63, d: 0.3, p: 3.9 },     // Hap-
            { f: 261.63, d: 0.3, p: 4.25 },    // py
            { f: 293.66, d: 0.6, p: 4.6 },     // Birth-
            { f: 261.63, d: 0.6, p: 5.25 },    // day
            { f: 392.00, d: 0.6, p: 5.9 },     // to
            { f: 349.23, d: 1.1, p: 6.55 },    // you

            { f: 261.63, d: 0.3, p: 7.8 },     // Hap-
            { f: 261.63, d: 0.3, p: 8.15 },    // py
            { f: 523.25, d: 0.6, p: 8.5 },     // Birth-
            { f: 440.00, d: 0.6, p: 9.15 },    // day
            { f: 349.23, d: 0.6, p: 9.8 },     // dear
            { f: 329.63, d: 0.6, p: 10.45 },   // Risala
            { f: 293.66, d: 1.0, p: 11.1 },    // Ma'am

            { f: 466.16, d: 0.3, p: 12.2 },    // Hap-
            { f: 466.16, d: 0.3, p: 12.55 },   // py
            { f: 440.00, d: 0.6, p: 12.9 },    // Birth-
            { f: 349.23, d: 0.6, p: 13.55 },   // day
            { f: 392.00, d: 0.7, p: 14.2 },    // to
            { f: 349.23, d: 1.5, p: 14.9 }     // you!
        ];

        melody.forEach(n => {
            // Main warm bell chime
            this.playTone(n.f, 'triangle', n.d, 0.09, n.p * 0.72);
            // Sweet upper shimmer
            this.playTone(n.f * 2, 'sine', n.d * 0.5, 0.02, n.p * 0.72);
        });
    }

    startBgMusicLoop() {
        if (this.bgMusicPlaying) return;
        this.bgMusicPlaying = true;
        this.playCakeCuttingHappyBirthday();
    }

    stopBgMusic() {
        this.bgMusicPlaying = false;
    }
}

window.sfx = new SoundEffects();
