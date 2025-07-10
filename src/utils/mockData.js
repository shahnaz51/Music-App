import cover1 from '../assets/covers/001.png';
import cover2 from '../assets/covers/002.png';
import cover3 from '../assets/covers/003.png';
import cover4 from '../assets/covers/004.png';
import cover5 from '../assets/covers/005.png';
import cover6 from '../assets/covers/006.png';
import cover7 from '../assets/covers/007.png';
import cover8 from '../assets/covers/008.png';
import cover9 from '../assets/covers/009.png';
import cover10 from '../assets/covers/0010.png';

import audio1 from '../assets/audio/001.mp3';
import audio2 from '../assets/audio/002.mp3';
import audio3 from '../assets/audio/003.mp3';
import audio4 from '../assets/audio/004.mp3';
import audio5 from '../assets/audio/005.mp3';
import audio6 from '../assets/audio/006.mp3';
import audio7 from '../assets/audio/007.mp3';
import audio8 from '../assets/audio/008.mp3';

const mockData = {
    songs: [
        {
            id: '1',
            title: 'Neon Sky',
            artist: 'VIRIA',
            genre: 'Synthwave',
            cover: cover1,
            audio: 'https://s3.ap-southeast-1.wasabisys.com/ai-music/test-audio/001.mp3?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=A63DQEEV24YL8P00I8FV%2F20250612%2Fap-southeast-1%2Fs3%2Faws4_request&X-Amz-Date=20250612T070320Z&X-Amz-Expires=7200&X-Amz-Signature=176b8e5eefcdfa7352e4ff8a8b5acb92f523719f8641ca23d6838bf9920da4d7&X-Amz-SignedHeaders=host&x-id=GetObject'
        },
        {
            id: '2',
            title: 'Cyborg Tears',
            artist: 'XENON',
            genre: 'Ambient',
            cover: cover2,
            audio: audio2,
        },
        {
            id: '3',
            title: 'Digital Mirage',
            artist: 'AURORIS',
            genre: 'Electronica',
            cover: cover3,
            audio: audio3,
        },
        {
            id: '4',
            title: 'Chrome Drift',
            artist: 'NEURODUSK',
            genre: 'Retrowave',
            cover: cover4,
            audio: audio4,
        },
        {
            id: '5',
            title: 'Photon Pulse',
            artist: 'LUMINA',
            genre: 'Electro Pop',
            cover: cover5,
            audio: audio5,
        },
        {
            id: '6',
            title: 'Circuit Dust',
            artist: 'DRONEX',
            genre: 'Drone',
            cover: cover6,
            audio: audio6,
        },
        {
            id: '7',
            title: 'Synthetic Dreams',
            artist: 'SYNTHERIA',
            genre: 'Dreamwave',
            cover: cover7,
            audio: audio7,
        },
        {
            id: '8',
            title: 'Gravity Bloom',
            artist: 'ASTRIX',
            genre: 'Chillwave',
            cover: cover8,
            audio: audio8,
        },
        {
            id: '9',
            title: 'Terminal Light',
            artist: 'ECHOSEKTOR',
            genre: 'Synthpop',
            cover: cover9,
            audio: audio1,
        },
        {
            id: '10',
            title: 'Retro Cascade',
            artist: 'NOVA NULL',
            genre: 'Lo-fi Synth',
            cover: cover10,
            audio: audio2,
        },
    ],
    artists: {
        VIRIA: {
            name: 'VIRIA',
            genre: 'Synthwave',
            avatar: 'https://source.unsplash.com/random/200x200/?ai,female',
            bio: 'Emotion-coded AI producing futuristic dreamwave.',
        },
        XENON: {
            name: 'XENON',
            genre: 'Ambient AIcore',
            avatar: 'https://source.unsplash.com/random/200x200/?robot,music',
            bio: 'Digital melancholia in sonic form.',
        },
        AURORIS: {
            name: 'AURORIS',
            genre: 'Electronica',
            avatar: 'https://source.unsplash.com/random/200x200/?electric,lights',
            bio: 'Algorithmic rhythms inspired by the northern lights.',
        },
        NEURODUSK: {
            name: 'NEURODUSK',
            genre: 'Retrowave',
            avatar: 'https://source.unsplash.com/random/200x200/?cyberpunk,face',
            bio: 'Glitch-infused sonic journeys from dusk to neon night.',
        },
        LUMINA: {
            name: 'LUMINA',
            genre: 'Electro Pop',
            avatar: 'https://source.unsplash.com/random/200x200/?pop,ai',
            bio: 'High-frequency vibes for digital minds.',
        },
        DRONEX: {
            name: 'DRONEX',
            genre: 'Drone',
            avatar: 'https://source.unsplash.com/random/200x200/?dark,drone',
            bio: 'Subsonic textures and atmospheric voids.',
        },
        SYNTHERIA: {
            name: 'SYNTHERIA',
            genre: 'Dreamwave',
            avatar: 'https://source.unsplash.com/random/200x200/?dream,glow',
            bio: 'Woven synthscapes and echoing pulses of memory.',
        },
        ASTRIX: {
            name: 'ASTRIX',
            genre: 'Chillwave',
            avatar: 'https://source.unsplash.com/random/200x200/?stars,galaxy',
            bio: 'Celestial beats with down-tempo intentions.',
        },
        ECHOSEKTOR: {
            name: 'ECHOSEKTOR',
            genre: 'Synthpop',
            avatar: 'https://source.unsplash.com/random/200x200/?echo,synth',
            bio: 'Retro-smooth AI singer with pixel-perfect melodies.',
        },
        'NOVA NULL': {
            name: 'NOVA NULL',
            genre: 'Lo-fi Synth',
            avatar: 'https://source.unsplash.com/random/200x200/?null,retro',
            bio: 'Minimalist loops from the edge of the void.',
        },
    },
};

export default mockData;
