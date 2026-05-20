export type Locale = "id" | "en";

export const translations = {
  // ─── Navbar ────────────────────────────────────────────────────────────────
  nav: {
    about: { id: "Tentang", en: "About" },
    features: { id: "Fitur", en: "Features" },
    join: { id: "Gabung", en: "Join" },
    joinDiscord: { id: "Gabung Discord", en: "Join Discord" },
  },

  // ─── Hero ─────────────────────────────────────────────────────────────────
  hero: {
    badge: { id: "✦ Komunitas VTuber ✦", en: "✦ VTuber Community ✦" },
    heading: { id: "Selamat Datang di", en: "Welcome to" },
    subheading: {
      id: "Komunitas VTuber generasi baru tempat kreator dan fans bersatu. Livestream, gaming, event, dan momen seru — semua ada di sini.",
      en: "A next-generation VTuber community where creators and fans unite. Livestreams, gaming, events, and unforgettable moments — all in one place.",
    },
    cta: { id: "Gabung Sekarang", en: "Join The Vanguard" },
    learnMore: { id: "Pelajari Lebih", en: "Learn More" },
  },

  // ─── About ────────────────────────────────────────────────────────────────
  about: {
    label: { id: "Tentang Kami", en: "About Us" },
    heading: { id: "Lahir dari Dunia Digital", en: "Born from the Digital Frontier" },
    desc1: {
      id: "Re:Dawn bukan cuma server Discord biasa — ini sebuah gerakan. Kami menyatukan penggemar VTuber, content creator, gamer, dan digital artist dalam satu atap. Misi kami? Membangun komunitas yang seru, inklusif, dan penuh kreativitas.",
      en: "Re:Dawn is more than a Discord server — it's a movement. We bring together VTuber enthusiasts, content creators, gamers, and digital artists under one roof. Our mission is to foster a vibrant, inclusive community where creativity thrives and every voice matters.",
    },
    desc2: {
      id: "Mau kamu VTuber berpengalaman, kreator pemula, atau sekadar fans yang suka budaya VTuber — kamu punya tempat di sini. Langkah ke fajar yang baru.",
      en: "Whether you're a seasoned VTuber, an aspiring creator, or simply a fan who loves the culture — you belong here. Step into the dawn of something extraordinary.",
    },
    foundersLabel: { id: "Kepemimpinan", en: "Leadership" },
    foundersHeading: { id: "Para Pendiri", en: "The Founders" },
  },

  // ─── Features ──────────────────────────────────────────────────────────────
  features: {
    label: { id: "Yang Kami Tawarkan", en: "What We Offer" },
    heading: { id: "Semua yang Kamu Butuhkan", en: "Everything You Need" },
    subheading: {
      id: "Dari hiburan live sampai ikatan komunitas yang erat, Re:Dawn punya semuanya.",
      en: "From live entertainment to tight-knit community bonds, Re:Dawn has it all.",
    },
    items: [
      {
        title: { id: "Livestream", en: "Livestreams" },
        description: {
          id: "Tonton dan interaksi bareng VTuber kami saat siaran langsung di berbagai platform.",
          en: "Watch and interact with our VTubers during live broadcasts across multiple platforms.",
        },
      },
      {
        title: { id: "Sesi Gaming", en: "Gaming Sessions" },
        description: {
          id: "Ikutan game night, turnamen, dan sesi co-op bareng member lainnya.",
          en: "Join community game nights, tournaments, and co-op sessions with fellow members.",
        },
      },
      {
        title: { id: "Event & Kolaborasi", en: "Events & Collabs" },
        description: {
          id: "Event komunitas eksklusif, kolaborasi VTuber, dan perayaan musiman.",
          en: "Exclusive community events, VTuber collabs, and seasonal celebrations.",
        },
      },
      {
        title: { id: "Hub Komunitas", en: "Community Hub" },
        description: {
          id: "Tempat yang nyaman buat ngobrol, share art, diskusi anime, dan bikin pertemanan baru.",
          en: "A welcoming space to connect, share art, discuss anime, and make lasting friendships.",
        },
      },
      {
        title: { id: "Voice Hangout", en: "Voice Hangouts" },
        description: {
          id: "Channel voice buat karaoke night, nonton bareng, dan ngobrol santai.",
          en: "Chill voice channels for karaoke nights, watch parties, and casual conversations.",
        },
      },
      {
        title: { id: "Konten Eksklusif", en: "Exclusive Content" },
        description: {
          id: "Akses behind-the-scenes, pengumuman awal, dan keuntungan khusus member.",
          en: "Behind-the-scenes access, early announcements, and member-only perks.",
        },
      },
    ],
  },

  // ─── CTA ───────────────────────────────────────────────────────────────────
  cta: {
    heading: { id: "Siap Gabung ke", en: "Ready to Join the" },
    headingAccent: { id: "Vanguard", en: "Vanguard" },
    subheading: {
      id: "Masuk ke Re:Dawn dan jadi bagian dari komunitas yang lagi nge-redefine budaya VTuber. Fajar barumu dimulai di sini.",
      en: "Step into Re:Dawn and become part of a community that's redefining VTuber culture. Your new dawn starts here.",
    },
    button: { id: "Gabung Sekarang", en: "Join The Vanguard" },
  },

  // ─── Footer ────────────────────────────────────────────────────────────────
  footer: {
    rights: { id: "Hak cipta dilindungi.", en: "All rights reserved." },
  },
} as const;
