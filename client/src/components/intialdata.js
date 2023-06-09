const games = [
  {
    id:1,
    gamename: 'Assassin\'s Creed ',
    price: '$59.99',
    image: 'https://www.shutterstock.com/image-vector/old-cartoon-zombie-biker-head-600w-1399347653.jpg',
    available: true,
    description: 'Embark on a Viking adventure in the epic world of Assassin\'s Creed Valhalla.'
  },
  {
    id:2,
    gamename: 'The Witcher 3: Wild Hunt',
    price: '$39.99',
    image: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Witcher_3_cover_art.jpg',
    available: true,
    description: 'Join Geralt of Rivia on an unforgettable journey in the open world of The Witcher 3: Wild Hunt.'
  },
  {
    id:3,
    gamename: 'Uncharted 4: A Thief',
    price: '$19.99',
    image: 'https://assets2.ignimgs.com/2016/05/05/uncharted-fortune-hunter-buttonjpg-652dfd.jpg?width=560&crop=16%3A9&dpr=2',
    available: true,
    description: 'Join Nathan Drake on his final adventure and unravel the mysteries in Uncharted 4: A Thief\'s End.'
  },
  {
    id:4,
    gamename: 'Red Dead Redemption',
    price: '$49.99',
    image: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Red_Dead_Redemption.jpg',
    available: true,
    description: 'Experience the expansive and immersive Wild West in Red Dead Redemption 2.'
  },
  {
    id:5 ,
    gamename: 'Final Fantasy VII Remake',
    price: '$59.99',
    image: 'https://m.media-amazon.com/images/I/81J-uEoQ6WL._SX679_.jpg',
    available: true,
    description: 'Final Fantasy VII Remake'
  },
  {
    id:6,
    gamename: 'Cyberpunk 2077',
    price: '$59.99',
    image: 'https://www.zastavki.com/pictures/1024x1024/2019Games_Poster_computer_game_Cyberpunk_2077_135966_31.jpg',
    available: true,
    description: 'Enter the futuristic open world of Night City in the highly anticipated Cyberpunk 2077.'
  },
  {
    id:7,
    gamename: 'God of War',
    price: '$19.99',
    image: 'https://m.media-amazon.com/images/I/61-exm7GfhL._SY346_.jpg',
    available: true,
    description: 'Unleash your inner warrior as Kratos in the action-packed God of War.'
  },
  {
    id:8,
    gamename: 'Call of Duty: ',
    price: '$59.99',
    image: 'https://e0.pxfuel.com/wallpapers/101/194/desktop-wallpaper-call-of-duty-ideas-in-2021-call-of-duty-call-off-duty-call-of-duty-black-urban-tracker.jpg',
    available: true,
    description: 'Engage in heart-pounding combat in the critically acclaimed Call of Duty: Modern Warfare.'
  },
  {
    id:9,
    gamename: 'Marvel\'s Spider-Man: ',
    price: '$49.99',
    image: 'https://artprojectsforkids.org/wp-content/uploads/2021/05/How-to-Draw-Spiderman.jpg',
    available: true,
    description: 'Swing through New York City as Miles Morales and protect the city as Spider-Man.'
  },
  {
    id:10,
    gamename: 'Horizon Zero Dawn',
    price: '$19.99',
    image: 'https://m.media-amazon.com/images/I/81rWhbu6z+L._SL1500_.jpg',
    available: true,
    description: 'Uncover the mysteries of a post-apocalyptic world in the thrilling Horizon Zero Dawn.'
  },
  {
    id:11,
    gamename: 'Minecraft',
    price: '$26.95',
    image: 'https://m.media-amazon.com/images/I/71d42pH3wDL._SL1500_.jpg',
    available: true,
    description: 'Unleash your creativity and build endless worlds in the popular sandbox game Minecraft.'
  },
  {
    id:12,
    gamename: 'FIFA 22',
    price: '$59.99',
    image: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blta5e7f5f498b84fbc/615eb91753c1047dae1daf00/a48a6ad8815492a3ed2057e8d462f3955858090d.jpg?format=pjpg&auto=webp&width=828&quality=60',
    available: true,
    description: 'Experience the thrill of football with realistic gameplay in FIFA 22.'
  },
  {
    id:13,
    gamename: 'Grand Theft Auto V',
    price: '$29.99',
    image: 'https://play-lh.googleusercontent.com/tuYtl9M4l9ukrxKY3e6NZyLlz7iZItE0CgzRuiDBPGNUYnholCnt2HT-73YSQWr3Qjqa=w1052-h592-rw',
    available: true,
    description: 'Explore the vast open world of Los Santos and indulge in a life of crime in Grand Theft Auto V.'
  },
  {
    id:14,
    gamename: 'The Last of Us Part II',
    price: '$59.99',
    image: 'https://m.media-amazon.com/images/I/41aVFsvwTQL._SX300_SY300_QL70_FMwebp_.jpg',
    available: true,
    description: 'Embark on an emotional and action-packed journey in The Last of Us Part II.'
  },
  {
    id:15,
    gamename: 'Resident Evil Village',
    price: '$59.99',
    image: 'https://rukminim1.flixcart.com/image/832/832/ku4ezrk0/code-in-the-box-game/y/q/s/pc-resident-evil-8-village-death-edition-original-imag7b4pyp5u3vdh.jpeg?q=70',
    available: true,
    description: 'Enter a village plagued by horror and survival in Resident Evil Village.'
  },
  {
    id:16,
    gamename: 'Assassin\'s Creed ',
    price: '$59.99',
    image: 'https://images.axios.com/2RC7iw8JDzTSY6V3UjUp7_dMGus=/0x0:3840x2160/1920x1080/2022/09/10/1662835722250.jpg?w=1920',
    available: true,
    description: 'Embark on an epic odyssey in ancient Greece with Assassin\'s Creed Odyssey.'
  },
  {
    id:17,
    gamename: 'Hades',
    price: '$24.99',
    image: 'https://upload.wikimedia.org/wikipedia/en/5/52/Assassin%27s_Creed.jpg',
    available: true,
    description: 'Descend into the underworld and battle your way out in the roguelike game Hades.'
  },
  {
    id:18,
    gamename: 'Bioshock Infinite',
    price: '$29.99',
    image: 'https://upload.wikimedia.org/wikipedia/en/a/a3/Official_cover_art_for_Bioshock_Infinite.jpg',
    available: true,
    description: 'Uncover the secrets of Columbia and navigate through a mind-bending narrative in Bioshock Infinite.'
  },
  {
    id:19,
    gamename: 'Monster Hunter:',
    price: '$29.99',
    image: 'https://i.insider.com/5589cdf02acae732118b47f7?width=1000&format=jpeg&auto=webp',
    available: true,
    description: 'Embark on thrilling hunts and face majestic creatures in the expansive world of Monster Hunter: World.'
  },
  {
    id:20,
    gamename: 'The Legend of Zelda: ',
    price: '$59.99',
    image: 'https://kbimages1-a.akamaihd.net/7b328da7-860e-47c7-9d3f-014cf7134e16/353/569/90/False/the-legend-of-zelda-a-link-between-worlds-strategy-guide.jpg',
    available: true,
    description: 'Embark on an epic adventure in the breathtaking open world of The Legend of Zelda: Breath of the Wild.'
  },
  
  ];
  
  export default games