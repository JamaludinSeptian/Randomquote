const arrayOfQuotes = [
    { 'author' : 'MIFTAH',
      'quote' : 'Kadang Jatuh Kadang Naik, Itu Biasa.'
    },
    { 'author' : 'JAMAL',
      'quote' : 'Bermainlah sampai lupa waktu.'
    },
    { 'author' : 'AGUNG FAHMI',
      'quote' : 'Jangan terlalu nyaman, kadang kenyamanan adalah suatu perangkap untuk mencegahmu menjadi lebih baik.'
    },
    { 'author' : 'FRICO',
      'quote' : 'Hidup Seperti Bermain Basket.'
    },
    { 'author' : 'JAMAL PAHLEVI',
      'quote' : 'Bagi ku 1+1=2'
    },
    { 'author' : 'FADEL',
      'quote' : 'Jalan-jalan yang mengasikan adalah tidur.'
    },
    { 'author' : 'SAMIN',
      'quote' : 'Berenang Dulu Baru Mandi.'
    },
    { 'author' : 'YESKY',
      'quote' : 'Bersakit-sakit dahulu, berenang ke Cijantung.'
    },
    { 'author' : 'FADEL',
      'quote' : 'Satu dua tiga angka, Tak jadi pun Tak papa.'
    },
    { 'author' : 'FADEL',
      'quote' : 'Perkuat imun, iman dibarengi dengan amin.'
    },
    { 'author' : 'JAMAL PAHLEVI',
      'quote' : 'Sakit itu biasa, sakit maag baru nyesek.'
    },
    { 'author' : 'RONALDO',
      'quote' : 'Main bola itu adalah kehidupan, dapet duit adalah hasilnya.'
    },
    { 'author' : 'ALBERT ENSTEIN',
      'quote' : 'KALAU BEGO YA BEGO AJA'
    },
    { 'author' : 'PAK RT 008',
      'quote' : 'Warga saya banyak yang ngaggur daripada beli anggur.'
    },
    { 'author' : 'ALID',
      'quote' : 'Rumah Jauh Enggak Masalah, Yang Penting Gas.'
    },
    { 'author' : 'TEGAR',
      'quote' : 'Lu mau gw pukul!!!.'
    },
    { 'author' : 'RAKA',
      'quote' : 'Saat motor ku gas, Disitu Lu Was-Was.'
    },
    { 'author' : 'TIO',
      'quote' : 'Keep Calm, Walaupun Portofolio Merah.'
    },
    { 'author' : 'ASRI',
      'quote' : 'ABDI MAH GEULIS.'
    },
    { 'author' : 'TAUFIK',
      'quote' : 'Mau ku tembak kau dengan cinta.'
    },
    { 'author' : 'JORDAN',
      'quote' : 'Coba Dari G, Dari G.'
    },
    { 'author' : 'ADI',
      'quote' : 'ANJIRRRRR.'
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `${arrayOfQuotes[random].author}`;}