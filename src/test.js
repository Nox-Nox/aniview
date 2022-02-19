var query = `
{
  Page(page: 1, perPage: 40) {

    media(season: WINTER, type: ANIME, status: NOT_YET_RELEASED, format: TV) {
      id
      coverImage{
        large
      }
      title {
        romaji
      }
      genres
      description
      source
    }
  }
}
`;

let data = {
  data: {
    Page: {
      media: [
        {
          id: 109820,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx109820-Jqi84mtDWyAi.png",
          },
          title: {
            romaji: "Sabiiro no Armor: Reimei",
          },
          genres: ["Action"],
          description:
            "The anime adaptation of Rusted Armors, a multimedia project that first started with a stage play and a manga adaptation. The project focuses on the relationship between the gun-toting Magoichi — who is the leader of the Saika Ikki mercenary group — and the Sengoku era warlord Oda Nobunaga.\n<br><br>\n(Source: Anime News Network)",
          source: "OTHER",
        },
        {
          id: 112323,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx112323-C6nlP84x8jH8.png",
          },
          title: {
            romaji: "Arifureta Shokugyou de Sekai Saikyou 2nd season",
          },
          genres: ["Action", "Adventure", "Fantasy", "Psychological"],
          description:
            "The second season of <i>Arifureta Shokugyou de Sekai Saikyou</i>.<br>\n<br>\nTransported to another world and left behind by his former friends, Hajime had to make his rise from literal rock bottom. It was in the labyrinth where he strengthened his weak magic and found several beautiful allies. Now after saving his classmates, he ventures for Erisen to escort Myuu and her mother. He'll fight and defeat anyone he has to in order to find a way home—including a god!<br>\n<br>\n(Source: Funimation)",
          source: "LIGHT_NOVEL",
        },
        {
          id: 112719,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx112719-wQN19vr1cLc3.png",
          },
          title: {
            romaji: "Futsal Boys!!!!!",
          },
          genres: ["Sports"],
          description:
            "The franchise's story is set in a world over a decade after futsal has skyrocketed in global popularity. Protagonist Haru Yamato watches the championship of the U-18 world cup and is inspired by a Japanese player named Tokinari Tenouji. He joins the Koyo Academy High School's futsal team with the goal of becoming a player like Tenouji. There, he finds friends, and together they face their rivals.<br></br>\n\n(Source: Anime News Network)",
          source: "ORIGINAL",
        },
        {
          id: 118465,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx118465-EGB0OajA5rei.jpg",
          },
          title: {
            romaji: "Shuumatsu no Harem",
          },
          genres: ["Ecchi", "Sci-Fi"],
          description:
            'The time is near future-Tokyo, Japan in 2040. Reito, a young man suffering from an intractable disease, vows to reunite with his childhood friend Erisa and decides to "cold sleep" to cure her illness. When he wakes up five years later, the world was undergoing a major transformation. The MK (Male Killer) virus kills 99.9% of men on the planet. The ground was a super harem with 5 billion women for every 5 men. <br>\n<br>\n(Source: Crunchyroll)\n<br><br>\n<i>Note: Episode 1 aired on October 8, 2021 and Episodes 2 and beyond have been delayed until January 2022.</i>\n',
          source: "MANGA",
        },
        {
          id: 119056,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx119056-v9Ls3eKyf0Nf.png",
          },
          title: {
            romaji: "Kenja no Deshi wo Nanoru Kenja",
          },
          genres: ["Adventure", "Fantasy"],
          description:
            "Kagami Sakimori plays as the great mage Danblf in his favorite MMO. He falls asleep after a night of testing new character appearances, but instead of waking up to a suspended game, he’s inside of Arch Earth Online—as a girl! Now named Mira, he must convince the game’s people that Mira is a pupil of Danblf, who vanished without a trace 30 years ago…and figure out how he got here.<br>\n<br>\n(Source: Funimation)",
          source: "LIGHT_NOVEL",
        },
        {
          id: 122808,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx122808-TUKyfYWKmOX3.jpg",
          },
          title: {
            romaji: "Princess Connect! Re:Dive Season 2",
          },
          genres: ["Adventure", "Comedy", "Fantasy"],
          description: "The second season of <i>Princess Connect! Re:Dive</i>.",
          source: "VIDEO_GAME",
        },
        {
          id: 124060,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx124060-gPb5UWbdQgj9.jpg",
          },
          title: {
            romaji: "Baraou no Souretsu",
          },
          genres: ["Action", "Drama", "Supernatural"],
          description:
            "Richard, the ambitious third son of the House of York, believes he is cursed, damned from birth to eternal darkness. But is it truly fate that sets him on the path to personal destruction? Or his own tormented longings? Based on an early draft of Shakespeare’s Richard III, Aya Kanno’s dark fantasy finds the man who could be king standing between worlds, between classes, between good and evil.\n<br><br>\n(Source: Viz Media)",
          source: "MANGA",
        },
        {
          id: 125682,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx125682-aJ1KNMq8wPvz.jpg",
          },
          title: {
            romaji: "CUE!",
          },
          genres: ["Music"],
          description:
            "Based on an idol-training mobile game produced by <i>Liber Entertainment</i> and <i>Pony Canyon</i>.",
          source: "VIDEO_GAME",
        },
        {
          id: 126288,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx126288-LDuOrj9RFv3E.jpg",
          },
          title: {
            romaji: "Sasaki to Miyano",
          },
          genres: ["Comedy", "Romance", "Slice of Life"],
          description:
            "Miyano spends his days peacefully reading Boys' Love comics and worrying about how girly his face is-until a chance encounter leads to a scuffle with his senior Sasaki. Intrigued by his feisty junior Miyano, delinquent Sasaki uses every opportunity he can to get closer...\n<br><br>\n(Source: Yen Press)",
          source: "MANGA",
        },
        {
          id: 127050,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx127050-kJ3pIbJzLDYT.png",
          },
          title: {
            romaji: "Koroshi Ai",
          },
          genres: ["Action", "Psychological", "Romance"],
          description:
            'Two assassins face off. The cool bounty hunter Chateau and the mysterious and powerful Ryang-ha. Chateau and Ryang-ha become enemies after this fight—at least, they should have, but for some reason Ryang-ha takes a liking to Chateau and begins following her around.<br>\n<br>\nLittle by little, Chateau develops a cooperative partnership with Ryang-ha, which gets her caught up in the struggle against the organizations hunting him down. Furthermore, that battle is related to her past as well. Two mismatched assassins weave together a twisted "Assassin X Assassin" thriller. The strange gears of fate begin to move.<br>\n<br>\n\n<i>Note: The first episode had an early premiere at AnimeNYC 2021.</i>\n<br><br>\n(Source: Crunchyroll)',
          source: "MANGA",
        },
        {
          id: 127549,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx127549-fr324YPdXb3D.jpg",
          },
          title: {
            romaji: "Slow Loop",
          },
          genres: ["Slice of Life"],
          description:
            "When Hiyori⁠—a young girl whose deceased father taught her the joys of fishing⁠—headed out to sea for some alone time, she never thought that she would encounter another girl there.<br>\n<br>\nAfter a while, this girl⁠—named Koharu⁠—and her end up fishing and cooking together, and they get to know each other a bit in the meantime. During their brief time together Koharu finds out that the reason Hiyori went out to sea that day was because she's hesitant towards meeting her new step family that same evening. But what a coincidence! Koharu is also meeting her new family tonight! \"No. It can't be a coincidence...\" Follow these two 'sisters' and their new life together!",
          source: "MANGA",
        },
        {
          id: 128034,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx128034-PHcAWDtmPuAK.jpg",
          },
          title: {
            romaji: "ORIENT",
          },
          genres: ["Action", "Adventure", "Comedy", "Fantasy"],
          description:
            "At age 10, best friends Musashi and Kojirou sat in excited silence as Kojirou's father spun tales of evil demons who preyed on the innocent, and the warriors who defeated them. Practicing swordplay, the two swear an oath to become the strongest in the world, but as they grow up, Kojirou turns cynical, and Musashi comes to the realization that he can't overturn 150 years of demon rule on his own. He's being called a prodigy with a pickaxe, and he's almost ready to settle into a life of labor. Yet he can't shake the feeling that he is still has a responsibility to act... and soon, the injustices of his world will force his hand...\n<br><br>\n(Source: Kodansha USA)",
          source: "MANGA",
        },
        {
          id: 128400,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx128400-ETJZtEh2jQQn.jpg",
          },
          title: {
            romaji: "Saiyuuki RELOAD: ZEROIN",
          },
          genres: ["Action", "Adventure", "Supernatural"],
          description:
            "When the monstrous Gyumaoh was defeated by the war god Nataku Taishi and imprisoned in Houtou Castle, an era of peace began in the land of Togenkyo. Now, hundreds of years later, those seeking to resurrect Gyumaoh have unleashed a plague upon the world. The wave of negative power generated by his attempted resurrection has driven youkai to the brink of insanity. To save humanity from violent slaughter, Kanzeon Bosatsu sends Son Goku, Genjou Sanzou, Sha Gojyo, and Cho Hakkai to the west in order to prevent Gyumaoh from rising once again.<br>\n<br>\n(Source: Sentai Filmworks)",
          source: "MANGA",
        },
        {
          id: 128828,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx128828-Lhulr8Niitey.png",
          },
          title: {
            romaji: "Dolls' Frontline",
          },
          genres: ["Action", "Drama"],
          description:
            'After the third world war, nations devastated by biological warfare no longer have the ability to protect the wastelands, so the defense of these territories is left to private military companies like Griffin & Kryuger, whose android soldiers or "tactical dolls" are tasked with fighting the rogue android army of Sangvis Ferri. Now M4A1, the indecisive but potentially capable leader of the elite "Anti-Rain" team must protect her comrades in a series of operations to try and regain the upper hand against Sangvis Ferri.',
          source: "VIDEO_GAME",
        },
        {
          id: 129190,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx129190-UnaPbNhTCTOR.jpg",
          },
          title: {
            romaji: "Tensai Ouji no Akaji Kokka Saisei Jutsu",
          },
          genres: ["Fantasy"],
          description:
            "Once upon a time in a far away land there lived a prince, a genius prince. The genius prince fought alongside his people and led them to a great many triumphs. However, truth be told, he just wants to let everything go and live in tranquility.<br>\n<br>\n(Source: Funimation)",
          source: "LIGHT_NOVEL",
        },
        {
          id: 129191,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx129191-F80AgCUP79yE.jpg",
          },
          title: {
            romaji: "Shikkakumon no Saikyou Kenja",
          },
          genres: [
            "Action",
            "Adventure",
            "Comedy",
            "Fantasy",
            "Romance",
            "Slice of Life",
          ],
          description:
            "His strength limited by the magical crest with which he was born, Mathias, the world’s most powerful sage, decides reincarnation is necessary to become the strongest of all. Upon his rebirth as a young boy, Mathias is thrilled to discover he’s been born with the optimal crest for magical combat on his first try! Unfortunately, the world he’s been born into has abysmally poor standards when it comes to magic, and everyone thinks he’s still marked for failure! Now it’s up to Mathias to prove everyone wrong…world’s strongest sage-style!<br>\n<br>\n(Source: Crunchyroll)",
          source: "LIGHT_NOVEL",
        },
        {
          id: 130166,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx130166-ouR45L32gVOq.jpg",
          },
          title: {
            romaji: "Leadale no Daichi nite",
          },
          genres: ["Adventure", "Fantasy"],
          description:
            'After being put on life support after a tragic accident, Keina Kagami\'s only freedom comes from the VRMMO RPG Leadale. One day her life support system shuts off and Keina passes away. When she wakes up, she finds herself in Leadale two hundred years in the future. As the high elf Cayna, with lost skills but incredible stats, she must forge relationships with the residents of this new world... which, shockingly, include the ""children"" characters she designed herself! A leisurely adventure tale is about to begin, featuring a girl transported to a game world and the smiles and tears she shares with her quirky companions!<br>\n<br>\n(Source: Crunchyroll)',
          source: "LIGHT_NOVEL",
        },
        {
          id: 130591,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx130591-Q2InVmESmcQc.png",
          },
          title: {
            romaji: "Sabikui Bisco",
          },
          genres: ["Action", "Adventure", "Fantasy"],
          description:
            "Japan’s post-apocalyptic wasteland replete with dust can only be saved by one thing—fungus. Bisco Akaboshi, a wanted criminal and skilled archer, searches for a legendary mushroom, known as Sabikui, said to devour any and all rust. Joining him on this epic saga to save the country is a giant crab and a young doctor. Can this unlikely trio find the fabled fungi and save the land?<br>\n<br>\n(Source: Funimation)",
          source: "LIGHT_NOVEL",
        },
        {
          id: 131548,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx131548-gc2z64TGWIH6.jpg",
          },
          title: {
            romaji: "Akebi-chan no Sailor Fuku",
          },
          genres: ["Slice of Life"],
          description:
            "It’s Komichi Akebi’s first year of junior high and she has her heart set on one thing: Robai Private Academy’s sailor uniform. As the next chapter of her life gets closer, she dreams of all the exciting new experiences she’ll get to have—school lunches, classes, club activities, and of course, making lots of friends! With her favorite outfit on, Komichi feels ready for anything.<br>\n<br>\n(Source: Funimation)",
          source: "MANGA",
        },
        {
          id: 131681,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx131681-ODIRpBIbR5Eu.jpg",
          },
          title: {
            romaji: "Shingeki no Kyojin: The Final Season Part 2",
          },
          genres: ["Action", "Drama", "Fantasy", "Mystery", "Psychological"],
          description:
            "The second part of <i>Shingeki no Kyojin: The Final Season</i>.<br>\n<br>\nThe war for Paradis zeroes in on Shiganshina just as Jaegerists have seized control. After taking a huge blow from a surprise attack led by Eren, Marley swiftly acts to return the favor. With Zeke’s true plan revealed and a military forced under new rule, this battle might be fought on two fronts. Does Eren intend on fulfilling his half-brother’s wishes or does he have a plan of his own?<br>\n<br>\n(Source: Funimation)",
          source: "MANGA",
        },
        {
          id: 132405,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx132405-tjm6ZiVgIZMu.jpg",
          },
          title: {
            romaji: "Sono Bisque Doll wa Koi wo Suru",
          },
          genres: ["Comedy", "Ecchi", "Romance", "Slice of Life"],
          description:
            "High schooler Wakana Gojou cares about one thing: making Hina dolls. With nobody to share his obsession, he has trouble finding friends—or even holding conversation. But after the school’s most popular girl, Marin Kitagawa, reveals a secret of her own, he discovers a new purpose for his sewing skills. Together, they’ll make her cosplay dreams come true! <br>\n<br>\n(Source: Funimation)",
          source: "MANGA",
        },
        {
          id: 134252,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx134252-CPWo3hqNmvnu.jpg",
          },
          title: {
            romaji: "Fantasy Bishoujo Juniku Ojisan to",
          },
          genres: ["Comedy", "Fantasy", "Romance"],
          description:
            'A dull old man and his handsome best friend were summoned to another world by a naked goddess! However, because of the goddess\'s mischief, he has turned into a peerless beautiful girl?! To get back his body, he has to go on a journey with his best friend to defeat the demon king!! "An old man that became a beautiful girl" and "A handsome old man"! Let the madness filled another world journey rom-com begin!!',
          source: "MANGA",
        },
        {
          id: 135136,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx135136-wVMApb1FEmkz.jpg",
          },
          title: {
            romaji: "Vanitas no Carte Part 2",
          },
          genres: ["Drama", "Mystery", "Supernatural"],
          description:
            "The second cour of <i>Vanitas no Carte</i>.<br>\n<br>\nIt’s 19th-century Paris, and young vampire Noé hunts for the Book of Vanitas. Attacked by a vampire driven insane, a human doctor called Vanitas tempts Noé with a mad crusade to “cure” the entire vampire race. While allying with him may be dangerous, news reaches Vanitas that the Beast of Gévaudan has returned, and Noé is being brought along to investigate this phantom from the past.<br>\n<br>\n(Source: Funimation)",
          source: "MANGA",
        },
        {
          id: 136428,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx136428-DYv9Q1IPg5cp.png",
          },
          title: {
            romaji: "Kaijin Kaihatsubu no Kuroitsu-san",
          },
          genres: ["Comedy", "Fantasy"],
          description:
            "Kuroitsu is an assistant researcher in the superhuman research & development department of Agastya, a villainous secret organization that battles with heroes who try to save the world. Kuroitsu lives a busy life in Agastya, caught between the absurd requests of her bosses; making presentations; implementing new features into superhumans; and getting results within the allotted time, budget, and spec requests; all without vacation.<br>\n<br>\n(Source: Anime News Network)",
          source: "MANGA",
        },
        {
          id: 137247,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx137247-AIbVGkVl2Dlb.png",
          },
          title: {
            romaji: "Gensou Sangokushi: Tengen Reishinki",
          },
          genres: ["Fantasy"],
          description:
            "When the Three Kingdoms are ravaged by demons and monsters, four heroes with little in common must unite to fight the realm’s most vicious enemies. Together the heroes unveil an insidious conspiracy while sharing the joys and sorrows of battling a mysterious organization intent on tearing them and the kingdoms apart.<br>\n<br>\n(Source: Funimation)",
          source: "VIDEO_GAME",
        },
        {
          id: 137312,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx137312-hlWRtCt25oMg.jpg",
          },
          title: {
            romaji: "Hakozume: Koban Joshi no Gyakushuu",
          },
          genres: ["Comedy", "Drama", "Slice of Life"],
          description:
            "Female police officer Kawai had enough of a career she wasn't even that into and was about to hand in her registration, when the unthinkable happened—she met the new, female director of her station! And after spending a little time with this gorgeous role model, Kawai realizes that maybe she isn't quite done being an officer after all.<br>\n<br>\n(Source: Kodansha USA)",
          source: "MANGA",
        },
        {
          id: 138424,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx138424-97Nz1P7M3O2d.png",
          },
          title: {
            romaji: "Karakai Jouzu no Takagi-san 3",
          },
          genres: ["Comedy", "Romance", "Slice of Life"],
          description:
            "The third season of <i>Karakai Jouzu no Takagi-san</i>.",
          source: "MANGA",
        },
        {
          id: 139648,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx139648-Gc88ZbCFeKCQ.jpg",
          },
          title: {
            romaji: "Genjitsu Shugi Yuusha no Oukoku Saikenki Part 2",
          },
          genres: ["Action", "Adventure", "Fantasy", "Romance"],
          description:
            "The second part of <i>Genjitsu Shugi Yuusha no Oukoku Saikenki</i>.<br>\n<br>\nSummoned to a fantasy world, Kazuya Souma is ruling a kingdom with a nontraditional (and very human) route of administrative reform. He’s tackling food shortages, mastering dark magic, and dazzling a few ladies along the way. Despite his latest good intentions, Kazuya breaks the ban on war to defeat a military dictatorship. Now, he must answer to the Gran Chaos Empire’s idealistic leader…uh oh.<br>\n<br>\n(Source: Funimation)",
          source: "LIGHT_NOVEL",
        },
        {
          id: 139804,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx139804-xRSaLGPmYpvU.jpg",
          },
          title: {
            romaji: "TRIBE NINE",
          },
          genres: ["Action", "Sports"],
          description:
            'Haru Shirogane is a weak-minded person who is constantly bullied while Taiga has traveled from across the sea in hopes of becoming the strongest man in the world. One night, the two meet up with Shun Kamiya, the strongest XB (Extreme Baseball) player, and leader of the Minato Tribe. When they meet, each of the Tribes scattered throughout Neo-Tokyo are about to face a major threat.<br>\n<br>\nOn the orders of the King of Neo-Tokyo, "Houtenshin", the Chiyoda Try, led by the mysterious Ojiro Otori, has started to take control of all the tribes in the country. Their evil clutches are about to reach the Minato Tribe...<br>\n<br>\n(Source: MyAnimeList)',
          source: "OTHER",
        },
        {
          id: 140502,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx140502-FKZLPLVkZjKu.jpg",
          },
          title: {
            romaji: "Ryman's Club",
          },
          genres: ["Sports"],
          description:
            "The story centers on Mikoto Shiratori, a childhood prodigy at badminton, but who never recovered from a major loss during a high school competition. Now, he works in the sales department of the Sunlight Beverage company, playing badminton on the side.\n<br><br>\n(Source: Anime News Network)",
          source: "ORIGINAL",
        },
        {
          id: 140643,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx140643-RpKlGdwDa7r7.jpg",
          },
          title: {
            romaji: "Tokyo 24-ku",
          },
          genres: [],
          description:
            "Enter the 24th Ward, a man-made island inside Tokyo Bay. Three of its inhabitants: Shuuta, Ran, and Kouki, have been best friends since childhood, but after a deadly incident, everything changed. A year later, reunited for the first time, they receive a mysterious phone call. On the other line is a familiar voice—from a friend who’s supposed to be dead. Together, they’ll have to save their home.\n<br><br>\n(Source: Funimation)\n<br><br>\n<i>Note: The first episode was a 1-hour special.</i>",
          source: "ORIGINAL",
        },
        {
          id: 142274,
          coverImage: {
            large:
              "https://s4.anilist.co/file/anilistcdn/media/anime/cover/medium/bx142274-bTiZikJyhWtG.jpg",
          },
          title: {
            romaji: "Ninjala",
          },
          genres: ["Action", "Comedy", "Sci-Fi"],
          description:
            "The year is 20XX. The ninja, who once forged the history of Japan, were scattered across the country during the Meiji Restoration. As these ninja mingled with the other clans, their bloodline thinned, and they gradually faded from sight. The descendants of these ninja clans, seeking to preserve their heritage, formed the WNA (World Ninja Association) in the hope of carrying on their legacy.\n\nAnd so it was that the WNA succeeded in developing Ninja-Gum, an art which could summon forth the strength of the Shinobi. And yet creating the most powerful Ninja-Gum requires the strongest of ninja DNA. So it was that the Ninjala Tournament was held, that the mightiest of all ninjas could be found...\n\n(Source: Official Game website)",
          source: "VIDEO_GAME",
        },
      ],
    },
  },
};
const items = [];
for (const [key, value] of Object.entries(data["data"]["Page"]["media"])) {
  //console.log("key ", key, "value ", value);
  const item = {
    id: key,
    ...value,
  };
  items.push(item);
}
console.log(items);
