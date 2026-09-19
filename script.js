if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
}

///// PRELOAD ALL CHAR IMAGE
function preloadCharacterImages() {

    Object.values(chars).forEach((character) => {

        const img = new Image();

        img.src = character.images;

    });

}

const preloader = document.querySelector(".preloader");
const preloaderLogo = document.querySelector(".preloader svg");
const heroImg = document.querySelector(".hero");

///// SVG PRELOADER LOGO VARIABLE
const aStar = document.querySelector('#a-star');
const firstLeftlines = document.querySelector('#left-lines-1');
const secondLeftlines = document.querySelector('#left-lines-2');
const thirdLeftlines = document.querySelector('#left-lines-3');
const fourthLeftlines = document.querySelector('#left-lines-4');
const titleTop = document.querySelector('#title-top');
const titleBottom = document.querySelector('#title-bottom');
const leafGroup = document.querySelector('#leaf-group');
const firstLineBottom = document.querySelector('#line-bottom-1');
const secondLineBottom = document.querySelector('#line-bottom-2');
const bottomStar = document.querySelector('#bottom-star');
const firstText = document.querySelector('#text-1');
const secondText = document.querySelector('#text-2');

///// GET HERO BOTTOM SCROLL POSITION
function getHeroBottom() {

    return Math.max(
        0,
        heroImg.offsetTop +
        heroImg.offsetHeight -
        window.innerHeight
    );

}

///// INITIAL GSAP CONDITION
gsap.set(preloaderLogo, {
    opacity: 0
});

gsap.set(aStar, {
    opacity: 0,
    scale: 0,
    transformOrigin: "center",
});

gsap.set(firstLeftlines, {
    opacity: 0,
    scaleX: 0,
    transformOrigin: "left",
});

gsap.set(secondLeftlines, {
    opacity: 0,
    scaleX: 0,
    transformOrigin: "left",
});

gsap.set(thirdLeftlines, {
    opacity: 0,
    scaleX: 0,
    transformOrigin: "left",
});

gsap.set(fourthLeftlines, {
    opacity: 0,
    scaleX: 0,
    transformOrigin: "left",
});

gsap.set(titleTop, {
    opacity: 0,
});

gsap.set(titleBottom, {
    opacity: 0,
});

gsap.set(leafGroup, {
    opacity: 0,
});

gsap.set(firstLineBottom, {
    opacity: 0,
    scaleX: 0,
    transformOrigin: "left",
});

gsap.set(secondLineBottom, {
    opacity: 0,
    scaleX: 0,
    transformOrigin: "right",
});

gsap.set(bottomStar, {
    opacity: 0,
    scale: 0,
    transformOrigin: "center",
});

gsap.set(firstText, {
    opacity: 0
});

gsap.set(secondText, {
    opacity: 0
});

///// RUN GSAP ANIMATION WHEN THE PAGE LOADS
window.addEventListener("load", () => {

    ///// CALL CHAR PRELOAD
    preloadCharacterImages();

    ///// MOVE THE SCROLL TO THE BOTTOM HERO
    window.scrollTo( 0,getHeroBottom() );

    const introTimeline = gsap.timeline();

    ///// GSAP PRELOADER TIMELINE
    introTimeline
        .to(preloaderLogo, {

            opacity: 1,

            duration: 0,

            ease: "power2.out"
        })

        .to(titleTop, {

            opacity: 1,

            duration: 0.9,

            ease: "power2.out"
        })

        .to(titleBottom, {

            opacity: 1,
            
            duration: 0.9,

            ease: "power2.out"

        }, "<")

        .to(firstLineBottom, {

            opacity: 1,

            scaleX: 1,

            duration: 0.5,

            ease: "power5.out"

        }, "-=0.5")

        .to(secondLineBottom, {

            opacity: 1,

            scaleX: 1,

            duration: 0.5,

            ease: "power5.out"

        }, "<")

        .to(bottomStar, {

            opacity: 1,

            scale: 1,

            duration: 0.7,

            ease: "power2.out"

        }, "-=0.15")

        .to(firstText, {

            opacity: 1,

            duration: 0.7,

            ease: "power2.out"

        }, "-=0.6")

        .to(secondText, {

            opacity: 1,

            duration: 0.7,

            ease: "power2.out"

        }, "-=0.5")

        .to(firstLeftlines, {

            opacity: 1,

            scale: 1,

            duration: 0.6,

            ease: "power1.out"

        }, "<")

        .to(secondLeftlines, {

            opacity: 1,

            scale: 1,

            duration: 0.5,

            ease: "power1.out"

        }, "-=0.5")

        .to(thirdLeftlines, {

            opacity: 1,

            scale: 1,

            duration: 0.4,

            ease: "power1.out"

        }, "-=0.3")

        .to(fourthLeftlines, {

            opacity: 1,

            scale: 1,

            duration: 0.3,

            ease: "power1.out"

        }, "-=0.2")

        .to(aStar, {

            opacity: 1,

            scale: 1,

            duration: 0.6,

            ease: "back.out(2.5)"

        }, "<")

        .to(leafGroup, {

            opacity: 1,

            duration:0.8,

            ease: "back.out(2)"

        }, "<")

        .to({}, {

            duration: 1

        })
        
        .to({}, {

            duration: 1

        })

        .to(preloader, {

            opacity: 0,

            duration: 0.5,

            ease: "power2.inOut",

            onComplete: () => {

                preloader.style.display = "none";

                document.body.classList.remove("preloading");
                document.documentElement.classList.remove("preloading");

            }

        })

        .to({}, {

            duration: 0.4

        })

        ///// HERO ANIMATION
        .to(window, {

            duration: 2.2,

            scrollTo: {
                y: 0
            },

            ease: "expo.inOut"

        })

        ///// AOS INIT
        .call(() => {

            AOS.init({once: true});

        }, null, "-=0.27");

});

///// HERO SCROLL BUTTON ANIMATION
const scrollBtn = document.querySelector('.scroll');

scrollBtn.addEventListener('click', (e) => {

        e.preventDefault();

        const target = scrollBtn.getAttribute('href');

        gsap.to(window, {

            duration: 1.5,

            scrollTo: target,

            ease: "power3.inOut"

        });

});

///// HIDE HERO SCROLL BUTTON
window.addEventListener("scroll", () => scrollBtn.classList.toggle("hide", window.scrollY > 1100) );

const hamburgerMenu = document.querySelector(".hamburger-menu");
const sidebarWrapper = document.querySelector(".sidebar-wrapper");
const hamburgerMenuSpans = hamburgerMenu.querySelectorAll("span");

///// FUNCTION FOR LOOPING HAMBURGER MENU TOGGLE BUTTON
function hamburgerMenuSpanBtnToggle() {

    hamburgerMenuSpans.forEach( (hamburgerMenuSpan) => hamburgerMenuSpan.classList.toggle("active") );

}

///// HAMBURGER MENU ANIMATION
hamburgerMenu.addEventListener("click", () => {

    hamburgerMenuSpanBtnToggle();

    sidebarWrapper.classList.toggle("active");
    document.body.classList.toggle("active");
    document.documentElement.classList.toggle("active");
    
});

///// MINI NAVIGATION SHOW AFTER HERO SCROLLED
const hero = document.querySelector(".hero");
const navbarMenu = document.querySelector(".main-menu");
let miniNavActive = false;

window.addEventListener("scroll", () => {

    if( window.scrollY > hero.offsetHeight - 1 ) {

        if(!miniNavActive) {

            miniNavActive = true;
            navbarMenu.classList.add("active");
        
        }

    } else {

        if(miniNavActive) {

            miniNavActive = false;
            navbarMenu.classList.remove("active");

        }

    }

});

///// MINI NAVBAR CLICK ANIMATION & SIDEBAR WRAPPER HIDE
const navLinks = document.querySelectorAll(".main-menu li a");

navLinks.forEach( (navLink) => {

    navLink.addEventListener("click", (e) => {

        e.preventDefault();

        const target = navLink.getAttribute('href');

        gsap.to(window, {

            duration: 1.5,

            scrollTo: target,

            ease: "power3.inOut"

        });

        navLinks.forEach( (navbarLink) => navbarLink.classList.remove("active") );

        navLink.classList.add("active");

        sidebarWrapper.classList.remove("active");
        document.body.classList.remove("active");
        document.documentElement.classList.remove("active");

        hamburgerMenuSpanBtnToggle();

    });

}) ;

///// KEY VISUAL THUMBNAIL ANIMATION 
let istransitioning = false;
const kvThumbnail = document.querySelector(".kv-list");
const keyVisualImgs = document.querySelectorAll(".kv-list img");

const heroSources = Array.from( keyVisualImgs, (_, i) => `assets/img/hero/hero-${i + 1}.webp` );

///// PRELOAD HERO
const heroPreloads = heroSources.map( (src) => {

    const img = new Image();

    img.src = src;

    return img;

});

keyVisualImgs[0].classList.add("active");

///// KEY VISUAL CLICK ACTION
keyVisualImgs.forEach((keyVisualImg, i) => {

    keyVisualImg.addEventListener("click", () => {

        if (istransitioning) return;

        if (keyVisualImg.classList.contains("active")) return;

        const newHero = heroPreloads[i];


        function changeHero() {

            istransitioning = true;

            kvThumbnail.classList.add("is-transitioning");

            hero.style.filter = "brightness(0) contrast(0)";

            setTimeout(() => {

                hero.style.backgroundImage = `url("${heroSources[i]}")`;

                keyVisualImgs.forEach((img) => {

                    img.classList.remove("active");

                });

                keyVisualImg.classList.add("active");

                requestAnimationFrame(() => {

                    requestAnimationFrame(() => {

                        hero.style.filter = "brightness(1) contrast(100%)";

                    });

                });

            }, 60);

            setTimeout(() => {

                istransitioning = false;

                kvThumbnail.classList.remove("is-transitioning");

            }, 900);

        }

        if( newHero.complete ) {

            if( newHero.decode ) {

                newHero
                    .decode()
                    .then(changeHero)
                    .catch(changeHero);

            } else {

                changeHero();

            }

        } else {

            newHero.addEventListener("load", changeHero, { once: true });

        }

    });

});

///// EPISODES OBJECT DATA INFORMATION
const episodes = {

    1: {
        number: "01",
        title: "Hari Pertama",
        images: [
            "assets/img/episodes/1/episode-1-1.webp",
            "assets/img/episodes/1/episode-1-2.webp",
            "assets/img/episodes/1/episode-1-3.webp"
        ],
        summary: "Alya Hasanah, seorang siswi yang dikenal pintar sejak SMP dan memiliki paras cantik, memasuki masa SMA nya di SMA Negeri 1112 Medan pada kelas 1-3. Ini menjadi titik awal dari berbagai kisah dan kejadian yang dialaminya selama di sekolah."
    },

    2: {
        number: "02",
        title: "Menjadi Perhatian",
        images: [
            "assets/img/episodes/2/episode-2-1.webp",
            "assets/img/episodes/2/episode-2-2.webp",
            "assets/img/episodes/2/episode-2-3.webp"
        ],
        summary: "Di kelas, Alya mulai memperlihatkan sisi lain dari kehidupan SMA. Dalam proses belajar dan beradaptasi, kemampuan Alya perlahan mulai terlihat hingga menarik perhatian teman-teman sekelasnya. Kepintaran dan parasnya membuat Alya semakin dikenal, tanpa menyadari bahwa perhatian tersebut kelak membawa berbagai konsekuensi."
    },

    3: {
        number: "03",
        title: "Teman Pertama",
        images: [
            "assets/img/episodes/3/episode-3-1.webp",
            "assets/img/episodes/3/episode-3-2.webp",
            "assets/img/episodes/3/episode-3-3.webp"
        ],
        summary: "Memasuki hari-hari berikutnya di sekolah, Alya mulai menjalin interaksi sosial yang lebih dekat dengan teman-teman di kelasnya hingga dia mendapatkan teman pertamanya di kelas. Beberapa teman mulai mendekatinya dan meminta bantuan dalam berbagai hal, sementara sikap berbeda dari beberapa siswi perlahan mulai terlihat. Di tengah perhatian yang semakin besar kepadanya, tanpa disadari mulai muncul persaingan kecil yang menjadi awal dari berbagai dinamika baru dalam kehidupan Alya di sekolah."
    },

    4: {
        number: "04",
        title: "Konsekuensi",
        images: [
            "assets/img/episodes/4/episode-4-1.webp",
            "assets/img/episodes/4/episode-4-2.webp",
            "assets/img/episodes/4/episode-4-3.webp"
        ],
        summary: "Di tengah kegiatan belajar yang terus berlanjut, Alya beberapa kali meraih nilai tinggi dalam berbagai tugas hingga semakin sering menjadi tempat teman-temannya bertanya dan meminta bantuan. Namun, perhatian yang diterimanya mulai menimbulkan rasa iri di antara beberapa siswi. Beberapa teman sekelasnya mulai menunjukkan sikap kurang menyukainya, hingga salah seorang dari mereka mendekati Alya dan melakukan intimidasi ringan."
    },

    5: {
        number: "05",
        title: "Perhatian",
        images: [
            "assets/img/episodes/5/episode-5-1.webp",
            "assets/img/episodes/5/episode-5-2.webp",
            "assets/img/episodes/5/episode-5-3.webp"
        ],
        summary: "Memasuki hari-hari berikutnya di sekolah, Alya mulai menjalin interaksi sosial yang lebih dekat dengan teman-teman di kelasnya hingga dia mendapatkan teman pertamanya di kelas. Beberapa teman mulai mendekatinya dan meminta bantuan dalam berbagai hal, sementara sikap berbeda dari beberapa siswi perlahan mulai terlihat. Di tengah perhatian yang semakin besar kepadanya, tanpa disadari mulai muncul persaingan kecil yang menjadi awal dari berbagai dinamika baru dalam kehidupan Alya di sekolah."
    },

    6: {
        number: "06",
        title: "Jawaban",
        images: [
            "assets/img/episodes/6/episode-6-1.webp",
            "assets/img/episodes/6/episode-6-2.webp",
            "assets/img/episodes/6/episode-6-3.webp"
        ],
        summary: "Sikap Vina dan Annisa terhadap Alya semakin menunjukkan ketidaksukaan, bahkan Vina mulai melontarkan ancaman secara halus. Annisa masih cenderung menahan diri, sementara Zara memilih diam meski mengetahui apa yang terjadi. Di sisi lain, Revan sempat melihat perlakuan tersebut, namun hanya mengamatinya dari kejauhan tanpa ikut campur."
    },

    7: {
        number: "07",
        title: "Perasaan",
        images: [
            "assets/img/episodes/7/episode-7-1.webp",
            "assets/img/episodes/7/episode-7-2.webp",
            "assets/img/episodes/7/episode-7-3.webp"
        ],
        summary: "Ketegangan antara Alya, Zara, Vina, dan Annisa semakin memuncak hingga berujung pada perlakuan kasar terhadap Alya. Revan yang tanpa sengaja menyaksikan kejadian tersebut mulai menyadari bahwa masalah yang dihadapi Alya jauh lebih serius dari yang ia kira. Meski Alya memilih menutup diri dan menolak bantuan, rasa penasaran dan kepedulian Revan mulai tumbuh, membuatnya semakin memperhatikan apa yang sebenarnya terjadi."
    },

    8: {
        number: "08",
        title: "Ikatan",
        images: [
            "assets/img/episodes/8/episode-8-1.webp",
            "assets/img/episodes/8/episode-8-2.webp",
            "assets/img/episodes/8/episode-8-3.webp"
        ],
        summary: "Tugas kelompok kimia mempertemukan Alya, Revan, Rizky, dan Zara dalam satu tim. Kedekatan Alya dan Revan membuat kecemburuan Vina semakin sulit disembunyikan. Saat emosinya memuncak, Vina merusak pulpen kesayangan Alya dan mendapat teguran langsung dari Revan. Namun, hal itu tidak menghentikan Vina untuk terus memperingatkan Alya agar menjauh dari Revan."
    },

    9: {
        number: "09",
        title: "Bantuan",
        images: [
            "assets/img/episodes/9/episode-9-1.webp",
            "assets/img/episodes/9/episode-9-2.webp",
            "assets/img/episodes/9/episode-9-3.webp"
        ],
        summary: "Ketegangan di kelas semakin memuncak saat Annisa mulai mengikuti sikap Vina terhadap Alya. Meja Alya dicoret hingga kotor, membuat Revan turun tangan membantu membersihkannya. Revan pun menduga Vina dan Annisa yang melakukannya. Setelah Vina dan Annisa akhirnya mengakui perbuatannya, Revan dengan tegas memperingatkan keduanya agar tidak mengulangi tindakan tersebut."
    },

    10: {
        number: "10",
        title: "Kebersamaan",
        images: [
            "assets/img/episodes/10/episode-10-1.webp",
            "assets/img/episodes/10/episode-10-2.webp",
            "assets/img/episodes/10/episode-10-3.webp"
        ],
        summary: "Saat pelajaran olahraga berlangsung, Alya yang tidak ikut kegiatan hanya sendiri di kelas hingga Revan datang dan duduk di dekatnya. Percakapan panjang untuk pertama kalinya membuat Alya mempertanyakan alasan Revan beberapa kali membantunya dan ikut campur. Revan menegaskan bahwa tindakannya murni berasal dari hati nurani dan kepedulian, tanpa maksud lain maupun karena penampilan Alya. Ia juga pernah melakukan hal serupa saat SMP ketika membela teman dekatnya yang menjadi korban perundungan. Dari sini, hubungan pertemanan Alya dan Revan mulai tumbuh semakin dekat secara perlahan."
    },

    11: {
        number: "11",
        title: "Menuju Puncak",
        images: [
            "assets/img/episodes/11/episode-11-1.webp",
            "assets/img/episodes/11/episode-11-2.webp",
            "assets/img/episodes/11/episode-11-3.webp"
        ],
        summary: "Memasuki ujian semester ganjil, Alya menghadapi masa yang cukup penting dalam perjalanan sekolahnya. Sebelum ujian dimulai, Zara akhirnya meminta maaf atas keterlibatannya dalam perlakuan Vina dan Annisa, membuka kembali hubungan pertemanan mereka. Keduanya kembali belajar bersama, sementara Alya yang sejak SMP terbiasa mempersiapkan materi dan latihan jauh hari merasa cukup percaya diri menghadapi ujian. Setelah seluruh rangkaian ujian selesai, para siswa pun mulai menantikan hasil nilai dan pembagian rapor semester."
    },

    12: {
        number: "12",
        title: "Target",
        images: [
            "assets/img/episodes/12/episode-12-1.webp",
            "assets/img/episodes/12/episode-12-2.webp",
            "assets/img/episodes/12/episode-12-3.webp"
        ],
        summary: "Setelah seluruh rangkaian ujian semester ganjil berakhir, hasil belajar akhirnya diumumkan. Alya berhasil mempertahankan prestasinya dengan meraih peringkat pertama di kelas, sementara Revan berada di peringkat ke-13 dan Vina secara mengejutkan menempati peringkat kelima. Masuknya Alya dan Vina dalam jajaran lima besar membuat persaingan akademik di antara keduanya semakin terasa, sekaligus memunculkan tekad baru dalam diri Vina untuk mengungguli Alya pada semester berikutnya. Bagi Alya, pencapaian tersebut menjadi bukti bahwa kebiasaan belajarnya sejak SMP masih ia pertahankan hingga masa SMA."
    }

};

///// VARIABLE OF EPISODES ELEMENT
const episodeTh = document.getElementById("eps-number");
const episodeTitle = document.getElementById("eps-title");
const episodeSummary = document.getElementById("episode-summary");
const mainPreviewImg = document.getElementById("main-preview-img");
const epsThumbnails = document.querySelectorAll(".list-preview-img button");
const episodeButtons = document.querySelectorAll(".episode-list button");

///// CURRENT EPISODE
let currentEpisode = 1;

///// FUNCTION SHOW EPISODE INFORMATION
function showEpisodeInfo(episodeNumber) {

    currentEpisode = episodeNumber;

    const episode = episodes[currentEpisode];

    episodeTh.textContent = episode.number;
    episodeTitle.textContent = episode.title;
    episodeSummary.textContent = episode.summary;
    
    mainPreviewImg.style.backgroundImage = `url(${episode.images[0]})`;
    mainPreviewImg.style.transition = '0.2s';
    
    ///// EPISODE THUMBNAILS CLICK CHANGE MAIN IMAGE & REMOVE STYLE
    epsThumbnails.forEach( (epsThumbnail, i) => {

        epsThumbnail.style.backgroundImage = `url(${episode.images[i]})`;
        epsThumbnail.classList.remove("active");

    });

    epsThumbnails[0].classList.add("active");

}

///// EPISODE THUMBNAILS CLICK CHANGE STYLE
epsThumbnails.forEach( (episodeThumbnail) => {

    episodeThumbnail.addEventListener("click", () => {

        epsThumbnails.forEach( (epsThumb) => epsThumb.classList.remove("active") );

        episodeThumbnail.classList.add("active");

    });

});

///// EPISODE THUMBNAILS CLICK CHANGE MAIN IMAGE
epsThumbnails.forEach( (imgThumbnail, i) => {

    imgThumbnail.addEventListener("click", () => {

        const episode = episodes[currentEpisode];

        mainPreviewImg.style.backgroundImage = `url(${episode.images[i]})`;

    });

});

///// EPISODE BUTTON CLICK
episodeButtons.forEach( (episodeButton) => {

    episodeButton.addEventListener("click", () => {

        const episodeNumber = episodeButton.getAttribute("data-episode");

        episodeButtons.forEach( (episodeBtn) => episodeBtn.classList.remove("active") );

        episodeButton.classList.add("active");

        showEpisodeInfo(episodeNumber);

    });

});

///// EPISODE 1 SHOW FIRST TIME
episodeButtons[0].classList.add("active");
showEpisodeInfo(currentEpisode);

///// CHARS OBJECT DATA INFORMATION
const chars = {

    1: {

        images: "assets/img/character/char/alya.webp",
        name: "Alya Hasanah",
        description: "Tokoh utama di serial ini, merupakan murid SMA Swasta Panah Hijau yang cantik dan pintar dan berprestasi, selalu menduduki ranking pertama sejak SMP. Selain itu, dia juga merupakan anak orang kaya."

    },

    2: {

        images: "assets/img/character/char/revan.webp",
        name: "Revan Nazario",
        description: "Tokoh utama di serial ini. Murid SMA Swasta Panah Hijau yang merupakan murid biasa yang bersifat kalem dan santai. Dia tidak terlalu suka keributan."

    },

    3: {

        images: "assets/img/character/char/zara.webp",
        name: "Zara Mikhaila",
        description: "Teman pertama Alya dan teman terdekat alya. Dia juga sering bergabung dengan kelompok Vina dan Annisa."

    },

    4: {

        images: "assets/img/character/char/rizky.webp",
        name: "Rizky Saputra",
        description: "Teman dekat Revan yang berpostur tinggi dan atletis."

    },

    5: {

        images: "assets/img/character/char/vina.webp",
        name: "Vina Serliza",
        description: "Murid di kelas yang iri dan tidak terlalu suka ke Alya, dan cemburu jika Alya berdekatan dengan Revan."

    },

    6: {

        images: "assets/img/character/char/annisa.webp",
        name: "Annisa Zahra",
        description: "Teman dekat Vina yang rajin menyapu kelas, memiliki sifat yang hampir mirip dengan Vina."

    }
    
}

const charImg = document.getElementById("char-display-img");
const charName = document.querySelector(".char-name");
const charDescription = document.querySelector(".char-description");

let currentChar = null;
let isChangingCharacter = false;

///// WAIT FOR THE ANIMATION TO RUN
charImg.addEventListener("animationend", (e) => {

    if( e.animationName === "charAnimation" ) {
        
        charImg.classList.remove("enter");
        isChangingCharacter = false;

    }

});

///// SHOW CHAR INFO FUNCTION
function showCharInfo(charNumber) {

    if( currentChar === charNumber || isChangingCharacter ) return;

    isChangingCharacter = true;

    const character = chars[charNumber];
    
    charImg.classList.remove("enter");
    charImg.classList.add("exit");

    charName.classList.add("fade-out");
    charDescription.classList.add("fade-out");

    function handleExit(e) {

        if( e.propertyName !== "opacity" ) return;

        charImg.removeEventListener("transitionend", handleExit);

        charImg.addEventListener("load", () => {

            currentChar = charNumber;

            setActiveThumbnail(charNumber);

            charImg.classList.remove("exit");
            charImg.classList.add("enter");

        }, { once: true });

        charImg.addEventListener("error", () => {

            charImg.classList.remove("exit");

            isChangingCharacter = false;

            console.error(

                "Gambar karakter gagal dimuat:",
                character.images

            );

        }, { once: true });

        charImg.src = character.images;
        charImg.alt = character.name;
    }

    charImg.addEventListener("transitionend", handleExit);

    setTimeout( () => {

        charName.textContent = character.name;
        charDescription.textContent = character.description;
        
        charName.classList.remove("fade-out");
        charDescription.classList.remove("fade-out");

    }, 200);

}

///// ACTIVE THUMBNAIL FUNCTION
const charThumbnails = document.querySelectorAll(".char-thumb-item");

function setActiveThumbnail(charNumber) {

    charThumbnails.forEach( (charThumbnail) => {

        const thumbNumber = +charThumbnail.dataset.char;

        charThumbnail.classList.toggle("active", thumbNumber === charNumber);

    });

}

///// CHARS THUMBNAIL CLICK
charThumbnails.forEach( (charThumbnail) => {

    charThumbnail.addEventListener("click", () => {

        const charNumber = +charThumbnail.dataset.char;
        showCharInfo(charNumber);

    });

});

///// FIRST CHARACTER SHOW
charThumbnails[0].classList.add("active");
showCharInfo(1);

///// PAGE TOP BUTTON ANIMATION
const pageTopBtn = document.querySelector(".page-top");

pageTopBtn.addEventListener("click", (e) => {

    e.preventDefault();

    const target = pageTopBtn.getAttribute('href');

        gsap.to(window, {

            duration: 1.5,

            scrollTo: target,

            ease: "power2.inOut"

        });

});

///// SCROLL SPY
const sections = document.querySelectorAll("section");
const activationOffset = window.innerHeight * 0.6;

window.addEventListener("scroll", () => {

    let activeSection = null;

    sections.forEach( (section) => {

        let sectionBoundary = section.offsetTop - activationOffset;
        
        if( window.scrollY >= sectionBoundary ) activeSection = section;

    });

    navLinks.forEach( (navigationLink) => {

        const linkTarget = navigationLink.getAttribute("href").replace("#", "");

        linkTarget === activeSection.id ? 
            navigationLink.classList.add("active") : navigationLink.classList.remove("active");

    });

});