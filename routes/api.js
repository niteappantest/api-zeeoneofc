__path = process.cwd()

var express = require('express');
var db = require(__path + '/database/db');
try {
var zahirr = db.get("zahirr");
} catch (e) {
	console.log('')
}

var creatorList = ['@zahirrr','@zhirrrgans','@zhirr_ajalah','@zahiranjay', '@zahirganssss','@zhirrganteng','@zahirrgantengg'];
var creator = creatorList[Math.floor(Math.random() * creatorList.length)];

var anjay = ['https://c4.wallpaperflare.com/wallpaper/800/831/598/digital-art-neon-mountains-lake-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/133/969/139/artwork-nature-landscape-fantasy-art-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/760/955/638/artwork-landscape-sky-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/297/22/531/lake-blue-moonlight-moon-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/242/236/855/mountains-river-snow-forest-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/767/612/930/nature-landscape-trees-digital-art-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/384/818/513/himalayas-mountains-landscape-nature-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/983/716/976/mount-scenery-national-park-alberta-banff-national-park-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/658/800/994/simple-simple-background-minimalism-black-background-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/600/360/964/digital-art-landscape-forest-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/142/751/831/landscape-anime-digital-art-fantasy-art-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/71/196/981/digital-art-minimalism-nature-hills-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/268/96/863/anime-anime-girls-original-characters-short-hair-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/428/434/322/art-computer-digital-art-concept-art-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/946/379/721/artwork-landscape-mountains-forest-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/558/625/87/fox-trees-fantasy-art-dreamland-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/531/951/621/digital-digital-art-artwork-illustration-minimalism-hd-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/649/484/984/photography-landscape-nature-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/52/465/301/illustration-landscape-digital-art-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/13/960/9/digital-art-fantasy-art-colorful-space-art-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/714/495/609/landscape-artwork-digital-art-fantasy-art-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/531/351/797/firewatch-video-games-forest-nature-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/919/575/783/nature-landscape-lake-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/976/74/465/multiple-display-mountains-snow-nature-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/375/751/675/mountains-landscape-winter-snow-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/305/537/127/middle-earth-shadow-of-mordor-eagle-video-games-fire-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/758/252/42/firewatch-video-games-mountains-nature-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/816/62/518/digital-art-nature-trees-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/616/719/787/stars-planet-space-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/229/745/183/world-1920x1200-sea-coast-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/203/203/693/sunset-drawing-animals-lake-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/339/179/774/digital-art-low-poly-artwork-minimalism-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/664/373/122/forest-mikael-gustafsson-landscape-horizon-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/125/959/654/multiple-display-space-planet-space-art-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/36/569/176/nature-landscape-mist-lake-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/591/300/904/mountains-minimalism-forest-firewatch-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/57/819/651/sky-nature-starry-night-night-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/325/997/284/chains-landscape-tera-online-digital-art-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/944/10/504/reflection-nature-sky-water-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/542/842/420/stars-mountains-nebula-landscape-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/186/380/857/your-name-sky-stars-kimi-no-na-wa-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/687/194/405/digital-digital-art-artwork-illustration-concept-art-hd-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/55/897/164/science-fiction-landscape-space-planet-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/615/294/495/artwork-deer-antlers-forest-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/537/664/855/nature-water-mountains-trees-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/734/890/487/nature-landscape-spring-lake-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/788/765/277/nature-landscape-mountains-mist-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/750/664/987/night-starry-stars-milky-way-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/1004/4/846/synthwave-background-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/203/697/217/fkyhdino-landscape-artwork-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/799/610/330/blue-stars-mountains-starry-night-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/462/564/865/mountains-reflection-lake-water-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/83/363/762/skull-and-bones-game-concept-art-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/802/141/184/milky-way-nature-sky-atmosphere-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/444/19/627/sunrise-annapurna-massif-himalayas-minimal-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/9/859/737/train-canada-landscape-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/912/256/892/landscape-forest-deer-artwork-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/772/543/720/close-up-photo-of-spiral-form-smoke-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/734/254/409/sky-purple-atmosphere-galaxy-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/566/335/681/forest-firewatch-nature-digital-art-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/908/576/938/nature-landscape-mountains-trees-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/270/709/236/macos-mojave-macbook-pro-apple-computer-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/911/205/312/artwork-digital-art-landscape-river-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/884/751/661/artwork-fantasy-art-mountains-galaxy-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/742/683/711/landscape-the-lord-of-the-rings-fantasy-art-rivendell-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/621/301/89/macos-mojave-night-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/822/923/603/firewatch-mountains-forest-video-games-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/33/221/77/airships-digital-art-artwork-fantasy-art-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/764/431/702/river-trees-forest-clouds-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/749/524/21/artwork-fantasy-art-digital-art-forest-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/843/66/529/illustration-mountains-low-poly-minimalism-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/735/236/877/vaporwave-sun-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/890/877/129/landscape-lake-mountains-waterfall-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/535/907/806/mountain-landscape-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/320/987/627/lake-rock-formation-peak-chille-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/929/282/382/horizon-minimalism-illustration-artwork-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/33/261/282/5bd28eeaec175-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/235/432/34/painting-japan-winter-white-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/20/481/77/landscape-nature-lake-trees-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/191/747/794/mount-scenery-pink-sky-alps-national-park-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/973/932/1022/sunset-digital-art-mountains-low-poly-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/95/493/114/purple-flower-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/364/649/257/norway-pier-dock-landscape-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/1000/732/59/spring-8k-uhd-8k-asia-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/611/55/737/lake-mountains-nature-landscape-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/816/443/752/80s-retro-retro-style-style-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/142/135/685/winter-mountains-sky-clouds-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/868/284/966/landscape-mountains-sunset-snow-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/685/769/272/artwork-painting-digital-art-asian-architecture-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/7/954/516/snow-winter-lights-night-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/272/558/421/two-orange-and-red-flowers-with-drew-drops-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/908/148/844/nature-landscape-mountains-trees-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/97/833/155/mountains-firewatch-green-forest-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/165/657/130/monitor-montagne-mountain-multi-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/963/794/503/anime-anime-girls-cherry-blossom-fantasy-art-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/114/25/77/artwork-illustration-mountains-sky-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/631/667/675/reflection-hallstattersee-alps-tourism-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/324/728/62/nature-landscape-rock-bridge-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/132/401/75/painting-clouds-sky-landscape-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/127/310/423/cityscape-night-hallstatt-see-lake-chruch-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/533/163/784/digital-digital-art-artwork-illustration-minimalism-hd-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/981/660/903/retrowave-synthwave-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/208/967/794/lake-artwork-gradient-vector-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/662/647/638/nature-landscape-sea-clouds-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/375/1004/16/5k-cgi-dark-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/586/751/643/moraine-lake-valley-of-the-ten-peaks-banff-national-park-national-park-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/879/812/880/harry-potter-artistic-blue-castle-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/714/107/583/purple-nature-colorful-trees-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/312/159/584/firewatch-night-forest-nature-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/558/777/255/8k-ultra-hd-mountain-lake-nature-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/743/891/712/starry-sky-4k-8k-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/784/1005/239/son-goku-dragon-ball-dragon-ball-super-dragon-ball-super-movie-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/846/284/992/lofoten-norway-island-cityscape-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/612/299/795/anime-girls-anime-game-wlop-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/798/616/951/macos-sierra-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/651/1015/792/digital-art-landscape-sun-clouds-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/9/519/764/mountains-best-for-desktop-background-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/442/465/141/digital-art-mountains-forest-clouds-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/86/440/1017/digital-digital-art-artwork-illustration-drawing-hd-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/305/713/112/sawmill-landscape-minimalism-forest-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/87/851/622/laptop-backgrounds-nature-images-1920x1200-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/267/779/729/mark-kirkpatrick-illustration-mountains-minimalism-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/590/262/493/christmas-winter-4k-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/424/822/321/mark-kirkpatrick-illustration-mountains-sun-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/994/609/183/universe-space-digital-art-dual-monitors-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/48/742/559/retrowave-retrowave-digital-art-purple-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/1015/936/992/new-retro-wave-neon-synthwave-retro-style-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/982/411/642/green-bird-perching-on-branch-during-daytime-green-honeycreeper-green-honeycreeper-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/404/546/505/lake-deck-boat-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/540/477/194/dark-souls-dark-souls-ii-video-games-sword-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/134/543/610/mountain-grass-landscape-valley-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/89/831/798/mountains-field-hills-clouds-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/929/871/821/multiple-display-dual-monitors-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/994/253/68/japan-mountains-mount-fuji-asian-architecture-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/342/293/176/macos-sierra-new-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/487/168/1002/waffen-ss-nazi-world-war-ii-colorized-photos-mountains-hd-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/118/216/2/mountains-trees-moon-landscape-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/790/930/398/stars-blue-landscape-reflection-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/162/333/164/anime-kimi-no-na-wa-sky-anime-girls-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/581/138/530/nature-valley-mountain-landscape-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/766/754/564/wall-e-pixar-animation-studios-disney-movies-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/70/417/78/mountains-digital-art-artwork-trees-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/79/17/251/landscape-night-mountain-starry-night-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/609/51/728/nature-landscape-mountains-starry-night-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/48/337/112/nature-landscape-sunset-clouds-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/983/422/352/fantasy-art-sunset-digital-art-magic-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/92/397/293/movie-howl-s-moving-castle-black-hair-cloud-flower-hd-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/880/841/120/mountains-forest-artwork-firewatch-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/583/92/973/digital-art-landscape-mountains-palm-trees-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/367/978/496/mountains-deer-landscape-earth-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/449/968/939/pixel-art-fire-moon-the-sin-of-man-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/337/871/597/naruto-shippuuden-anime-uzumaki-naruto-uchiha-sasuke-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/851/831/580/the-witcher-the-witcher-3-wild-hunt-simple-background-monochrome-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/743/780/51/nature-landscape-lake-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/648/347/704/apple-ios-mountains-and-galaxy-hd-wallpaper-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/384/818/513/himalayas-clouds-landscape-snow-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/563/303/650/horizon-zero-dawn-snow-mountains-video-games-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/100/130/573/china-guangxi-guilin-li-river-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/615/739/666/digital-art-soldier-sword-warrior-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/133/434/430/nature-landscape-digital-art-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/92/666/432/digital-art-low-poly-artwork-minimalism-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/802/376/3/digital-digital-art-artwork-drawing-digital-painting-hd-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/551/480/932/island-sea-boat-mountains-wallpaper-preview.jpg','https://c1.wallpaperflare.com/preview/329/260/23/self-portrait-wanderer-above-the-sea-of-fog-caspar-david-friedrich-1818.jpg','https://c4.wallpaperflare.com/wallpaper/28/23/751/ultra-hd-8k-resolution-7680x4320-nature-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/568/75/606/cherry-blossom-volcano-mountain-fuji-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/786/722/475/snow-winter-nature-landscape-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/737/508/851/national-park-reflected-ten-peaks-valley-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/826/586/471/ultrawide-space-blue-nature-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/216/846/440/mount-fuji-japan-landscape-calm-waters-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/26/399/594/mountain-top-car-drive-movie-ford-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/648/708/35/nature-landscape-digital-art-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/455/253/179/artwork-fantasy-art-illustration-sunset-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/205/54/443/digital-art-nature-landscape-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/624/371/696/mountains-purple-synthwave-grid-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/724/892/981/clouds-trees-nature-hills-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/568/805/139/nature-pixel-art-pixels-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/790/734/537/landscape-digital-art-coast-sky-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/521/588/904/5k-uhd-gmunden-mountain-lake-bad-goisern-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/732/537/223/death-stranding-video-game-art-hideo-kojima-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/742/358/556/artwork-landscape-forest-mikael-gustafsson-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/535/845/69/digital-art-artwork-fantasy-art-planet-sun-hd-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/241/416/986/valley-alps-italy-bolzano-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/760/851/774/sake-sword-game-pirate-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/252/305/85/croatia-plitvice-lakes-national-park-nature-mountain-forest-landscape-waterfall-ultra-hd-4k-wallpaper-2560%C3%971600-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/548/569/72/castle-sunlight-landscape-ruin-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/393/911/700/mountain-range-world-dolomites-dolomite-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/723/362/489/funny-water-sea-sky-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/328/43/708/artwork-fantasy-art-chinese-architecture-mountains-cherry-blossom-hd-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/262/277/207/vancouver-sunset-city-landscape-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/86/598/484/star-wars-millennium-falcon-star-wars-the-force-awakens-c-3po-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/613/343/766/nature-minimalism-mountains-sunlight-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/637/229/82/1366x768-px-chapel-mountain-video-games-street-fighter-hd-art-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/800/831/598/neon-synthwave-digital-art-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/581/881/172/neon-genesis-evangelion-anime-girls-asuka-langley-soryu-spear-of-longinus-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/325/171/705/snow-winter-landscape-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/475/550/570/the-elder-scrolls-v-skyrim-mountains-snow-fantasy-art-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/446/500/946/digital-art-space-sky-abstract-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/134/234/391/photography-mountains-snow-landscape-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/794/366/406/tron-movies-tron-legacy-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/283/881/127/the-great-wave-off-kanagawa-painting-japanese-waves-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/274/570/535/nature-trees-hills-mist-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/778/821/245/minimalism-minimal-art-minimalist-airplane-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/759/478/411/video-games-video-game-art-assassin-s-creed-odyssey-greece-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/386/775/759/neon-genesis-evangelion-eva-unit-01-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/137/776/932/digital-art-mountains-landscape-science-fiction-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/744/875/623/sky-cloud-trees-pine-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/827/3/788/digital-art-fall-nature-mountain-chain-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/806/571/730/microsoft-windows-windows-10-galaxy-tent-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/773/113/197/illustration-landscape-mountains-nature-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/179/915/685/photography-water-reflection-bali-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/224/617/248/studio-ghibli-only-yesterday-multiple-display-artwork-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/732/347/681/lion-artwork-sky-animals-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/929/892/9/atmosphere-night-retrofuturism-graphic-design-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/1017/880/838/castle-the-legend-of-zelda-breath-of-the-wild-sunlight-video-games-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/1011/53/70/fantasy-art-lava-landscape-cherry-blossom-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/739/951/613/mountains-nature-landscape-waterfall-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/77/172/913/digital-art-fantasy-art-nature-landscape-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/669/485/176/nature-milky-way-stars-landscape-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/160/763/714/digital-art-pixel-art-pixels-8-bit-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/200/440/16/2d-digital-art-landscape-forest-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/406/760/960/digital-art-artwork-dark-fantasy-art-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/594/12/907/nature-landscape-grass-sky-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/916/933/131/mountains-fantasy-art-moon-night-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/517/94/410/winter-mountain-europe-snow-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/833/422/340/trees-landscape-flowers-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/772/500/970/photography-japan-mount-fuji-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/280/187/611/digital-art-warrior-landscape-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/218/264/7/reine-norway-lake-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/858/770/385/fantasy-art-sunset-dragon-birds-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/651/718/327/mountains-snow-bagaxiang-gang-rinpoche-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/15/689/131/nature-sky-atmosphere-matterhorn-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/693/720/1003/mountains-landscape-clouds-nature-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/33/730/564/the-legend-of-zelda-the-legend-of-zelda-breath-of-the-wild-mountains-dusk-trees-hd-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/931/578/348/phenomenon-astronomy-starry-sky-asia-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/242/236/855/river-landscape-mountains-forest-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/482/935/584/nature-landscape-clouds-bird-s-eye-view-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/811/818/436/planes-city-clouds-sky-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/352/18/330/4k-landscape-8k-panorama-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/75/818/456/nature-landscape-fall-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/877/196/900/pixel-art-mountains-waterfall-trees-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/742/496/36/firewatch-minimalism-sunset-landscape-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/836/482/377/5bd3c57fd2e8d-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/801/349/251/digital-art-mountains-cinema-4d-low-poly-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/878/61/227/landscape-nature-rice-paddy-terraces-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/903/720/59/architecture-old-building-ancient-montenegro-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/311/193/182/trees-nature-road-forest-wallpaper-preview.jpg','https://c1.wallpaperflare.com/preview/796/157/118/mount-kailash-mountains-snow-mountain-blue-sky.jpg','https://c4.wallpaperflare.com/wallpaper/972/669/149/fantasy-science-fiction-mountains-sci-fi-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/643/54/374/wubalubadubdub-mountains-gamer-rick-and-morty-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/344/980/911/mozilla-firefox-mozilla-night-forest-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/955/952/868/minimalist-minimalism-darkness-mountain-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/615/134/324/cloud-slovakia-strbske-pleso-high-tatras-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/881/154/323/nature-landscape-mountains-clouds-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/688/446/433/digital-digital-art-artwork-illustration-photography-hd-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/48/541/99/stars-sky-landscape-switzerland-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/901/769/79/nature-landscape-sky-travel-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/436/169/248/nature-landscape-mountains-clouds-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/466/488/974/winter-santa-claus-sleigh-sledge-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/187/748/909/animals-mountain-snow-ice-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/378/209/233/studio-ghibli-howl-s-moving-castle-mountains-anime-wallpaper-preview.jpg','https://c0.wallpaperflare.com/preview/789/637/166/backlit-chiemsee-dawn-desktop-backgrounds.jpg','https://c4.wallpaperflare.com/wallpaper/240/654/397/nature-landscape-painting-artwork-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/370/616/23/mountains-landscape-nature-snow-wallpaper-preview.jpg','https://c1.wallpaperflare.com/preview/673/855/752/lake-landscape-landscapes-mountains.jpg','https://c4.wallpaperflare.com/wallpaper/165/383/672/halo-video-games-halo-infinite-xbox-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/654/395/831/panoramas-nature-river-landscape-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/396/974/397/nature-landscape-panoramas-canada-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/921/610/548/the-witcher-3-wild-hunt-the-witcher-map-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/580/911/830/artwork-fantasy-art-waterfall-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/657/791/735/simple-background-nature-mountains-landscape-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/521/741/140/city-game-landscape-grand-theft-auto-v-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/4/947/761/closeup-photography-of-green-flower-buds-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/857/182/486/nature-snow-mountain-landscape-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/339/964/49/christmas-night-landscape-christmas-tree-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/1006/87/624/zermatt-valley-switzerland-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/590/145/272/nature-landscape-house-green-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/238/928/57/nature-landscape-mountains-canada-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/806/990/536/digital-digital-art-artwork-illustration-landscape-hd-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/375/206/386/firewatch-video-games-mountains-nature-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/637/947/777/village-salzkammergut-hallstatt-eu-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/11/417/189/nature-landscape-forest-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/36/14/561/minimalism-minimalist-mountains-landscape-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/608/802/518/nature-landscape-mist-forest-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/306/119/776/hawaii-haleakala-dawn-landscape-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/819/255/806/watchtower-in-oled-style-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/348/125/169/white-rose-petal-rose-rose-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/630/128/64/x-wing-star-wars-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/392/379/786/night-landscape-space-winter-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/1004/185/182/landscape-illustration-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/354/393/235/landscape-digital-art-minimalism-illustration-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/676/581/295/mountains-landscape-mist-clouds-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/487/794/386/landscape-mountains-artwork-digital-art-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/771/911/776/horizon-zero-dawn-playstation-4-video-games-forest-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/52/86/402/firewatch-animals-mountains-forest-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/731/628/1012/digital-art-artwork-fantasy-art-landscape-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/740/267/800/mountains-nature-ultrawide-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/18/908/42/nature-landscape-mount-roraima-venezuela-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/158/774/427/anime-studio-ghibli-spirited-away-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/885/382/474/nature-road-arches-national-park-utah-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/833/926/572/motivational-mountains-typography-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/651/988/888/mountains-nature-landscape-river-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/75/548/987/vaporwave-mountains-kanji-chinese-characters-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/520/293/126/sunset-fantasy-art-lava-trees-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/694/508/876/peak-mountains-switzerland-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/1014/396/913/hohenschwangau-valley-europe-bavaria-germany-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/888/138/364/moon-game-forest-sky-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/947/583/747/mountain-nature-hd-wallpapers-top-beautiful-desktop-nature-images-background-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/1/757/189/japan-mount-fuji-clean-sky-landscape-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/478/44/2/nature-landscape-desert-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/742/681/203/the-sun-mountains-music-space-star-hd-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/747/990/344/digital-art-fantasy-art-nature-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/125/1018/551/fantasy-art-drawing-nature-psychedelic-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/442/914/498/mountain-3840x2160-lake-nature-4k-14996-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/204/716/944/nature-travel-architecture-landscape-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/749/337/189/firewatch-video-games-mountains-nature-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/532/857/84/5k-good-morning-mountain-hill-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/460/28/989/drainage-between-black-metal-rail-surrounded-trees-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/24/265/239/digital-art-drawing-painting-landscape-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/852/748/905/stars-sky-milky-way-alone-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/815/503/612/sky-landscape-red-fall-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/672/956/927/tourism-sunset-europe-tatras-national-park-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/611/512/852/firewatch-video-games-mountains-nature-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/847/548/930/towns-hallstatt-austria-lake-mountain-hd-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/165/607/615/neon-1980s-retro-style-space-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/748/786/390/kimi-no-na-wa-your-name-landscape-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/242/969/144/nature-stars-water-mount-fuji-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/941/993/168/nature-mountains-mount-everest-landscape-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/996/982/388/the-witcher-3-wild-hunt-landscape-sunset-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/743/388/920/ultrawide-star-wars-x-wing-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/217/808/917/star-wars-star-destroyer-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/768/665/147/twilight-road-sky-desert-landscape-hd-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/920/697/298/nature-landscape-armenia-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/657/918/354/himalaya-afterglow-mountain-himalayas-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/64/826/489/peacock-feather-photography-moss-plant-moss-plant-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/948/572/925/digital-art-landscape-mountains-sunset-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/647/977/120/low-poly-mountains-abstract-poly-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/160/350/464/darth-vader-star-wars-sith-lightsaber-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/278/326/513/star-wars-desert-bounty-hunter-weapon-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/775/317/210/artwork-illustration-sky-fantasy-art-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/442/341/147/firewatch-forest-landscape-in-game-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/248/93/99/glacier-flower-sky-wildflower-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/612/219/718/reflection-nature-sky-mountainous-landforms-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/816/153/96/summer-nature-grass-beautiful-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/451/601/98/kimi-no-na-wa-anime-landscape-forest-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/747/760/958/close-up-photo-of-a-bald-eagle-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/575/581/148/nature-landscape-fjord-lofoten-islands-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/877/365/150/forest-mountains-landscape-trees-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/790/172/951/video-games-nier-automata-2b-nier-automata-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/248/866/542/oil-painting-artwork-house-fantasy-art-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/116/628/968/canada-moraine-lake-mountains-forest-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/859/455/634/horizon-zero-dawn-2017-video-game-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/431/256/977/house-near-green-grass-field-near-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/544/506/453/aenami-digital-art-landscape-fantasy-art-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/574/216/992/milky-way-stars-lake-space-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/552/667/818/atmosphere-tre-cime-natural-park-drei-zinnen-tyrol-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/404/577/296/mountains-cityscape-river-fall-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/167/388/37/low-poly-mountains-river-landscape-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/750/882/355/artwork-illustration-mountains-sunset-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/286/886/546/laptop-backgrounds-nature-images-1920x1200-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/502/940/904/panoramas-mountains-landscape-nature-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/58/607/585/emerald-lake-nature-canada-lake-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/171/592/851/trees-near-houses-on-green-grass-field-at-daytime-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/264/75/737/anime-sunset-piano-clouds-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/975/256/910/macos-mojave-macbook-pro-apple-computer-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/910/1001/198/sky-mountain-nature-ridge-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/747/990/502/nature-landscape-water-lake-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/810/815/814/star-trek-space-planet-spaceship-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/342/712/941/mark-kirkpatrick-landscape-illustration-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/218/805/101/makoto-shinkai-kimi-no-na-wa-anime-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/355/199/817/artwork-digital-art-science-fiction-space-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/407/727/668/north-america-canada-alberta-banff-national-park-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/978/43/763/digital-art-samurai-candles-sky-lanterns-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/744/678/482/landscape-ultra-wide-mountain-pass-panorama-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/680/388/949/nature-landscape-field-terraces-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/458/751/728/winter-austria-salzkammergut-bad-goisern-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/572/813/186/reflection-nature-wilderness-lake-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/478/648/872/grand-teton-national-park-8k-8k-uhd-blue-sky-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/702/511/709/upper-austria-salzkammergut-lake-hallstatt-hallstatter-see-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/92/340/6/the-sun-reflection-mountains-music-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/339/595/682/nature-bicycle-mountain-bikes-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/831/173/228/movies-fantasy-art-the-lord-of-the-rings-the-fellowship-of-the-ring-artwork-mountains-hd-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/478/661/225/5bd32176862fb-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/172/921/248/nature-water-sea-travel-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/672/517/150/fantasy-art-pagoda-asian-architecture-trees-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/621/17/260/neon-genesis-evangelion-eva-unit-01-vaporwave-synthwave-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/706/739/590/the-witcher-3-wild-hunt-geralt-of-rivia-triple-screen-the-witcher-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/333/691/669/rock-formation-on-brown-field-during-daytime-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/74/901/298/ultrawide-snow-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/829/247/731/grayscale-photo-of-storm-approaching-towards-isolated-house-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/621/280/939/fantasy-art-digital-art-artwork-nature-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/419/103/606/dragon-prince-netflix-rayla-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/237/22/441/two-white-and-gray-kitten-beside-wooden-surface-cats-cats-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/893/41/93/superhero-artwork-mountains-mount-rushmore-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/349/987/690/quote-motivational-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/296/180/986/synthwave-retrowave-retrowave-scanlines-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/681/948/838/architectural-photo-of-lake-under-the-bridge-during-daytime-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/533/443/658/5bd37e1a105dc-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/833/471/770/mountains-giant-sword-skeleton-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/578/978/337/landscape-photography-of-mountain-surrounded-by-trees-berchtesgaden-berchtesgaden-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/27/999/737/star-wars-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/985/28/56/mountain-range-united-states-cathedral-rocks-el-capitan-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/911/505/204/star-wars-star-destroyer-landscape-artwork-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/743/704/976/sunset-landscape-artwork-digital-art-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/645/897/163/egor-klyuchnyk-113-character-universe-113-character-poster-universe-113-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/433/770/366/studio-ghibli-anime-hauru-no-ugoku-shiro-howl-s-moving-castle-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/117/568/858/the-legend-of-zelda-breath-of-the-wild-the-legend-of-zelda-hyrule-video-games-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/134/676/941/artwork-fantasy-art-mountains-landscape-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/246/567/689/artwork-fantasy-art-landscape-sunset-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/689/806/460/mist-clouds-trees-dark-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/213/42/432/the-sky-water-clouds-sea-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/862/528/50/mountains-apple-mac-os-x-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/82/481/241/landscape-mountains-nature-annapurna-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/565/221/94/5bd32fc4eb6b8-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/885/928/937/nature-landscape-trees-forest-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/13/48/50/landscape-snow-reflection-monochrome-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/716/986/338/fjord-sea-cliff-canyon-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/1018/756/882/anime-neon-genesis-evangelion-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/435/718/386/typography-digital-art-2d-depth-of-field-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/610/917/261/sunset-mountains-firewatch-minimal-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/786/181/112/landscape-mountains-lake-water-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/411/895/583/water-north-america-ten-peaks-moraine-lake-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/194/860/902/nature-landscape-mist-valley-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/666/593/241/drawing-evening-sun-trees-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/365/858/383/landscape-sky-clouds-meadow-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/70/309/249/hot-air-balloons-landscape-nature-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/758/446/348/moon-fantasy-forest-dragon-sky-hd-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/857/365/312/vikings-mythology-fantasy-art-helmet-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/307/282/404/italy-mountain-backgrounds-lake-building-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/292/473/286/artwork-bears-sunrise-nature-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/512/839/621/landscape-nature-sea-resort-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/785/337/308/landscape-nature-mountains-clouds-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/18/952/1000/nature-landscape-lake-hills-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/75/688/62/reflection-nature-mountain-wilderness-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/404/91/620/nature-landscape-mountains-clouds-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/733/1023/808/mac-os-x-os-x-mountains-mist-wallpaper-preview.jpg','https://c0.wallpaperflare.com/preview/246/782/339/mountain-beside-sea-at-daytime.jpg','https://c4.wallpaperflare.com/wallpaper/754/312/1006/digital-art-nature-landscape-clouds-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/301/235/737/hot-air-balloons-clouds-snow-cliff-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/773/547/640/zermatt-switzerland-alps-snow-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/933/89/71/landscape-torii-cliff-artwork-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/175/80/887/vincent-van-gogh-the-starry-night-crescent-moon-painters-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/588/582/522/the-elder-scrolls-v-skyrim-video-games-fantasy-art-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/729/149/299/mountain-sky-star-snow-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/850/143/611/nature-lake-landscape-natural-light-wallpaper-preview.jpg','https://c1.wallpaperflare.com/preview/580/307/643/panorama-lake-panorama-mountain-panorama-reflection-panorama.jpg','https://c4.wallpaperflare.com/wallpaper/648/708/35/nature-digital-art-mountains-clouds-winter-house-snow-sunset-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/763/961/160/vaporwave-aesthetic-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/741/651/640/black-and-white-bird-taking-flight-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/953/540/909/mountain-low-poly-art-low-poly-lowpoly-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/463/647/742/nature-mountain-forest-landscape-fog-lake-ultrahd-4k-wallpaper-2560%C3%971600-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/807/727/815/natural-park-fanes-tyrol-dolomites-italy-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/147/193/227/avengers-infinity-war-planet-planet-titan-the-avengers-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/691/881/314/vaporwave-glitch-art-mountains-landscape-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/768/176/989/sunrise-yosemite-national-park-morning-macos-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/683/186/563/macos-mojave-day-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/158/888/959/nature-landscape-trees-forest-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/776/192/961/landscape-clouds-mountains-anime-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/306/751/641/mountains-nature-lake-water-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/213/499/697/moraine-lake-valley-of-the-ten-peaks-mountain-lake-mountain-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/929/282/382/valley-pine-trees-river-fox-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/547/574/576/firewatch-landscape-forest-minimalistic-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/285/770/344/dual-monitor-montagne-mountain-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/114/138/513/shrine-water-mountains-clouds-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/438/85/73/spring-yamanashi-fujiyoshida-chureito-pagoda-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/182/721/153/moraine-lake-reflection-wilderness-mountain-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/917/489/277/nature-mountains-trees-stars-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/451/789/111/nature-landscape-spring-sunset-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/692/579/812/tibet-everest-himalaya-himalayas-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/270/375/653/abstract-mountain-airplane-pink-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/951/871/643/nature-landscape-trees-forest-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/591/243/641/peru-cordillera-huayhuash-mountains-valley-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/54/779/831/national-park-cathedral-rocks-tunnel-view-california-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/1/706/520/4k-e3-2018-screenshot-death-stranding-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/758/323/699/nature-scenery-beautiful-mountain-wallpaper-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/52/86/402/mountains-forest-animals-firewatch-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/804/433/162/digital-digital-art-artwork-landscape-lines-hd-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/297/18/527/digital-art-artwork-illustration-science-fiction-planet-hd-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/106/429/185/digital-digital-art-artwork-drawing-digital-painting-hd-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/315/709/285/5bd37e2ab58d4-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/868/284/966/matterhorn-lake-snow-landscape-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/505/296/888/digital-art-cherry-blossom-fantasy-art-lava-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/492/895/726/god-of-war-god-of-war-2018-video-games-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/416/454/421/mont-blanc-mountains-nature-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/508/165/121/movies-oz-the-great-and-powerful-fantasy-art-digital-art-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/993/4/848/macro-photography-of-snowflake-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/607/154/376/pixel-art-pixels-8-bit-rock-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/140/141/156/landscape-4k-hd-backgrounds-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/179/758/386/nature-sky-snow-winter-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/998/886/524/digital-art-cgi-nature-hills-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/134/401/152/apple-ios-snow-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/386/596/1000/nature-landscape-road-trees-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/218/718/531/photo-of-green-leaf-plant-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/1006/393/192/landscape-mountains-sunlight-blurred-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/279/904/985/dragon-monochrome-digital-art-artwork-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/249/715/678/snow-night-animals-doge-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/895/488/925/neon-sunset-retro-style-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/291/558/355/landscape-simple-nature-moon-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/267/779/729/mountains-mark-kirkpatrick-low-poly-minimalism-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/752/656/1016/mountains-sky-snow-stars-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/535/519/712/road-mountains-fire-smoke-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/178/992/36/andes-mountain-range-santiago-chile-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/193/786/379/cityscape-river-castle-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/927/27/816/rice-terraces-mountain-landscape-wallpaper-preview.jpg','https://c1.wallpaperflare.com/preview/72/462/545/596ca0f862f70.jpg','https://c4.wallpaperflare.com/wallpaper/178/456/43/nature-painting-mountain-landscape-painting-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/29/996/894/landscape-nature-beach-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/605/836/6/ama-dablam-himalayas-sagarmatha-national-park-national-park-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/829/347/743/halo-master-chief-4gamers-xbox-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/542/937/244/lake-nature-sunset-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/311/862/574/nature-landscape-trees-forest-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/302/334/528/cinque-terre-italy-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/744/341/313/lofoten-norway-mountains-cityscape-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/327/367/757/illustration-fantasy-art-mountains-artwork-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/253/196/865/microsoft-windows-windows-10-rock-cliff-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/112/128/971/nature-fantasy-art-low-poly-digital-art-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/760/457/249/minimal-sky-nature-horizon-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/20/557/188/yellow-and-white-hummingbird-hovering-mid-air-selective-photography-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/823/216/51/switzerland-mountains-snow-winter-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/529/596/1018/artwork-fantasy-art-concept-art-sky-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/743/41/175/landscape-mountains-moon-moonlight-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/594/951/591/austria-nature-salzkammergut-clouds-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/872/192/890/minimalism-abstract-sun-geometry-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/905/864/941/nature-landscape-trees-forest-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/246/45/172/road-highway-sky-nature-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/309/141/221/digital-art-nature-mountains-artwork-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/756/1014/339/body-of-water-over-the-horizon-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/319/174/467/photography-landscape-nature-water-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/51/666/437/black-sea-rock-with-body-of-water-and-blue-skies-photography-during-daytime-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/268/205/96/nature-water-turquoise-sky-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/286/355/748/warrior-digital-art-landscape-fantasy-art-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/327/997/237/studio-ghibli-castle-in-the-sky-robot-anime-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/345/983/615/digital-art-nature-mountains-portrait-display-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/222/1004/1015/landscape-digital-art-river-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/335/558/345/untitled-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/429/174/526/landscape-nature-sailboats-lake-mountains-hd-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/1002/965/140/nevada-lake-tahoe-water-nature-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/146/645/120/landscape-mountains-sea-monochrome-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/174/141/137/5bd321bdb324e-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/737/853/236/digital-art-typography-sea-photoshop-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/405/133/235/landscape-nature-waterfall-iceland-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/456/346/437/firewatch-video-games-mountains-nature-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/406/131/696/mountain-torres-del-paine-sky-torres-del-paine-national-park-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/366/369/251/cityscape-city-mist-skyscraper-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/439/955/577/mountains-minimalism-red-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/821/540/865/artwork-fantasy-art-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/566/706/469/the-elder-scrolls-v-skyrim-video-games-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/960/458/514/mountain-blue-lake-8k-desktop-background-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/347/94/465/sunset-sky-water-digital-art-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/775/978/565/artwork-digital-art-mountains-snow-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/130/79/609/the-sky-trees-mountains-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/531/441/235/downhill-mountain-biking-mountain-bikes-dirt-sport-wallpaper-preview.jpg','https://c4.wallpaperflare.com/wallpaper/266/831/645/low-poly-3d-cinema-4d-digital-art-wallpaper-preview.jpg',]
var ambilRandom = anjay[Math.floor(Math.random() * anjay.length)];

var ytdl = require('ytdl-core');
var ytpl = require('ytpl');
var secure = require('ssl-express-www');
var cors = require('cors');
var scrapeYt = require("scrape-yt");
var fetch = require('node-fetch');
var cheerio = require('cheerio');
var request = require('request');
var TikTokScraper = require('tiktok-scraper');
var router  = express.Router();

var { color, bgcolor } = require(__path + '/lib/color.js');
var { fetchJson } = require(__path + '/lib/fetcher.js')
var options = require(__path + '/lib/options.js');
var {
	Nulis,
	Vokal,
	Base
} = require('./../lib');
var cookie = "HSID=A7EDzLn3kae2B1Njb;SSID=AheuwUjMojTWvA5GN;APISID=cgfXh13rQbb4zbLP/AlvlPJ2xBJBsykmS_;SAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;__Secure-3PAPISID=m82rJG4AC9nxQ5uG/A1FotfA_gi9pvo91C;VISITOR_INFO1_LIVE=RgZLnZtCoPU;LOGIN_INFO=AFmmF2swRQIhAOXIXsKVou2azuz-kTsCKpbM9szRExAMUD-OwHYiuB6eAiAyPm4Ag3O9rbma7umBK-AG1zoGqyJinh4ia03csp5Nkw:QUQ3MjNmeXJ0UHFRS3dzaTNGRmlWR2FfMDRxa2NRYTFiN3lfTEdOVTc4QUlwbUI4S2dlVngxSG10N3ZqcHZwTHBKano5SkN2dDlPSkhRMUtReE42TkhYeUVWS3kyUE1jY2I1QzA1MDZBaktwd1llWU9lOWE4NWhoZV92aDkxeE9vMTNlcG1uMU9rYjhOaDZWdno2ZzN3TXl5TVNhSjNBRnJaMExrQXpoa2xzRVUteFNWZDI5S0Fn;PREF=app=desktop&f4=4000000&al=id;SID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1njBpLTOpxSfN-EaYCRSiDg.;YSC=HCowA1fmvzo;__Secure-3PSID=2wezCMTUkWN3YS1VmS_DXaEU84J0pZIQdemM8Zry-uzWm8y1dajgWzlBh9TgKapGOwuXfA.;SIDCC=AJi4QfFK0ri9fSfMjMQ4tOJNp6vOb9emETXB_nf2S05mvr2jBlmeEvlSsQSzPMuJl_V0wcbL1r8;__Secure-3PSIDCC=AJi4QfGeWHx-c4uTpU1rXCciO1p0s2fJWU07KrkZhWyD1Tqi8LyR-kHuBwHY9mViVYu1fRh2PA";

loghandler = {
    notparam: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter apikey',
        getApikey: 'gak punya apikey? chat gw aja yaaa di wa.me/6283898698875 , key nya gratis kok gan, jadi santuyy ajaa'
    },
    notkey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter key'
    },
    noturl: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter url'
    },
    notkata: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter kata'
    },
    nottext: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text'
    },
    nottext2: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text2'
    },
    nottext3: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter text3'
    },
    nottheme: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter theme'
    },
    notusername: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter username'
    },
    notvalue: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter value'
    },
    notheme: {
    	status: false,
        creator: `${creator}`,
        code: 406,
        message: 'theme tidak tersedia silahkan masukkan texmaker/list atau baca documentasi'
     },
    invalidKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'apikey invalid, gak punya apikey? chat gw aja yaaa di wa.me/6283898698875 , key nya gratis kok gan, jadi santuyy ajaa'
    },
    invalidlink: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin link anda tidak valid.'
    },
    invalidkata: {
        status: false,
        creator: `${creator}`,
        message: 'error, mungkin kata tidak ada dalam api.'
    },
    notAddApiKey: {
        status: false,
        creator: `${creator}`,
        code: 406,
        message: 'masukan parameter status, apikeyInput, email, nomorhp, name, age, country, exp'
    },
    error: {
        status: false,
        creator: `${creator}`,
        message: 'mungkin sedang dilakukan perbaikan'
    }
}

var len = 15
        var arr = '123456789abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------ZahirGanteng'+'ZHIRRR--GANS';
        
 
 async function cekApiKey(api) {
 	ap = await zahirr.findOne({apikey:api})
 return ap;
 }
router.get('/find', async (req, res, next) => {
    var apikey = req.query.apikey
    if (!apikey) return res.json(loghandler.notparam)
    if (apikey != 'zahirgans') return res.json(loghandler.invalidKey)

    try {
        zahirr.find()
            .then(result => {
                res.json({
                    status: true,
                    creator: `${creator}`,
                    result
                })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

router.get('/cekapikey', async (req, res, next) => {
	var apikeyInput = req.query.apikey
	if(!apikeyInput) return res.json(loghandler.notparam)
	a = await cekApiKey(apikeyInput)
	if (a) {
	json = JSON.stringify({
		status: true,
		creator: creator,
		result: {
            status:a.status,
			id: a._id,
			apikey: a.apikey,
			more_info: {
				email: a.email,
				nomor_hp: a.nomor_hp,
				name: a.name,
				age: a.age,
				country: a.country,
				exp:a.exp,
			},
		},
		message: `jangan lupa follow ${creator}`
	})
} else {
	json = JSON.stringify({
		status: false
	})
}
res.send(JSON.parse(json))
})

router.get('/addapikey', (req, res, next) => {
    var apikey = req.query.apikey,
        status = req.query.status,
        apikeyInput  = req.query.apikeyInput,
        email = req.query.email,
        nomorhp = req.query.nomorhp
        name = req.query.name,
        age = req.query.age,
        country = req.query.country;
        exp = req.query.exp;

    if (!apikey) return res.json(loghandler.notparam)
    if (!(status && apikeyInput && email && nomorhp && name && age && country && exp)) return res.json(loghandler.notAddApiKey)
    if (apikey != 'zahirgans') return res.json(loghandler.invalidKey)

    try {
        zahirr.insert({
        	status: status,
            apikey: apikeyInput,
            email: email,
            nomor_hp: nomorhp,
            name: name,
            age: age,
            country: country,
            exp: exp
        })
        .then(() => {
              res.json({
                  status: true,
                  creator: `${creator}`,
                  result: 'berhasil menambah data, status : ' + status + ', apikey : ' + apikeyInput + ', email : ' + email + ', nomor_hp : ' + nomorhp + ', name :  ' + name + ', age : ' + age + ', country : ' + country + ', exp : ' + exp
              })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

router.get('/remove', (req, res, next) => {
    var apikey = req.query.apikey,
        status = req.query.status,
        apikeyInput  = req.query.apikeyInput,
        email = req.query.email,
        nomorhp = req.query.nomorhp
        name = req.query.name,
        age = req.query.age,
        country = req.query.country;
        exp = req.query.exp;

    if (!apikey) return res.json(loghandler.notparam)
    if (!(status && apikeyInput && email && nomorhp && name && age && country && exp)) return res.json(loghandler.notAddApiKey)
    if (apikey != 'zahirgans') return res.json(loghandler.invalidKey)

    try {
        zahirr.remove({
            status: status,
            apikey: apikeyInput,
            email: email,
            nomor_hp: nomorhp,
            name: name,
            age: age,
            country: country,
            exp: exp
        })
        .then(() => {
             res.json({
                  status: true,
                  creator: `${creator}`,
                  result: 'berhasil menghapus data, status : ' + status + ', apikey : ' + apikeyInput + ', email : ' + email + ', nomor_hp : ' + nomorhp + ', name :  ' + name + ', age : ' + age + ', country : ' + country + ', exp : ' + exp
              })
        })
    } catch (e) {
        console.log(e)
        res.json(loghandler.error)
    }
})

router.get('/tiktod', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url


	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'zahirgans') return res.json(loghandler.invalidKey)
     if (!url) return res.json(loghandler.noturl)

     TikTokScraper.getVideoMeta(url, options)
         .then(vid => {
             console.log(vid)
             res.json({
                 status: true,
                 creator: `${creator}`,
                 videoNoWm: vid
             })
         })
         .catch(e => {
             res.json(loghandler.invalidlink)
         })
})

router.get('/tiktod/stalk', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        username = req.query.username

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'zahirgans') return res.json(loghandler.invalidKey)
    if (!username) return res.json(loghandler.notusername)


    TikTokScraper.getUserProfileInfo(username)
        .then(user => {
            res.json({
                status : true,
                creator : `${creator}`,
                result : user
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 creator : `${creator}`,
                 message : "error, mungkin username anda tidak valid"
             })
         })
})

router.get('/randomquote', (req, res, next) => {
    var apikey = req.query.apikey

    if (!apikey) return res.json(loghandler.notparam)
    if (apikey != 'zahirgans') return res.json(loghandler.invalidKey)

    fetch(encodeURI(`https://mhankbarbar.tech/api/randomquotes`))
        .then(response => response.json())
        .then(data => {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : {
                     author : `${data.author}`,
                     quotes : `${data.quotes}`,
                 },
                 message : `jangan lupa follow ${creator}`
             })
         })
         .catch(e => {})
})

router.get('/randomwallpaper', async (req, res, next) => {
        var apikeyInput = req.query.apikey
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'zahirgans') return res.json(loghandler.invalidKey)

             res.json({
                 status : true,
                 creator : `${creator}`,
                 image : `${ambilRandom}`,
                 message : `jangan lupa follow ${creator}`
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})

router.get('/infonpm', async (req, res, next) => {
        var apikeyInput = req.query.apikey,
            query = req.query.query,
            host = req.hostname
            
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'zahirgans') return res.json(loghandler.invalidKey)
    if (!query) return res.json({ status : false, creator : `${creator}`, message : "masukan parameter query"})

       fetch(encodeURI(`https://registry.npmjs.org/${query}`))
        .then(response => response.json())
        .then(data => {
        var result = data;
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result,
                 message : `jangan lupa follow ${creator}`
             })
         })
         .catch(e => {
         	res.json(loghandler.error)
})
})


router.get('/short/tiny', async (req, res, next) => {
    var apikeyInput = req.query.apikey,
        url = req.query.url

	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'zahirgans') return res.json(loghandler.invalidKey)
     if (!url) return res.json(loghandler.noturl)

     request(`https://tinyurl.com/api-create.php?url=${url}`, function (error, response, body) {
         try {
             res.json({
                 status : true,
                 creator : `${creator}`,
                 result : {
                     link : `${body}`,
                 },
                 message : `jangan lupa follow ${creator}`
             })
         } catch (e) {
             console.log('Error :', color(e,'red'))
             res.json(loghandler.invalidlink)
         }
     })
})

router.get('/base', async (req, res, next) => {
	var type = req.query.type,
		encode = req.query.encode,
		decode = req.query.decode,
		apikeyInput = req.query.apikey;
		if (!apikeyInput) return res.json(loghandler.notparam)
		if (apikeyInput != 'zahirgans') return res.json(loghandler.invalidKey)
		if (!type) return res.json({status: false, creator, code: 404, message: 'masukan parameter type, type yang tersedia : base64 , base32'})
		if (type == 'base64' && encode){
				Base("b64enc", encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base64' && decode){
				Base("b64dec", decode)
				.then(result => {
					res.json({
						status: true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && encode){
				Base('b32enc', encode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if (type == 'base32' && decode){
				Base('b32dec', decode)
				.then(result => {
					res.json({
						status:true,
						creator: `${creator}`,
						result
					})
				})
			} else if(!(encode || decode)){
				res.json({
					status:false,
					creator: `${creator}`,
					message: "tambahkan parameter encode/decode"
				})
			} else {
				res.json(loghandler.error)
			}
})

router.get('/nulis', async (req, res, next) => {
	var text = req.query.text,
		 apikeyInput = req.query.apikey;
	if(!apikeyInput) return res.json(loghandler.notparam)
     if(apikeyInput != 'zahirgans') return res.json(loghandler.invalidKey)
	 if(!text) return res.json(loghandler.nottext)
		Nulis(text)
		 .then(hasil => {
			fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${hasil}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
            })
           .catch(err => {
		  res.json(loghandler.error)
		   })
})

router.get('/textmaker', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'zahirgans') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'glitch' && theme != 'google-suggestion') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'glitch') {
        	if (!text2) return res.json(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'google-suggestion') {
        	if (!text2) return res.json(loghandler.nottext2)
        if (!text3) return res.json(loghandler.nottext3)
            request.post({
                url: "https://photooxy.com/other-design/make-google-suggestion-photos-238.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&text_3=${text3}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/game', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'zahirgans') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'pubg' && theme != 'battlefield') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'pubg') {
        	if (!text2) return res.json(loghandler.nottext2)
            try {
            request.post({
                url: "https://photooxy.com/battlegrounds/make-wallpaper-battlegrounds-logo-text-146.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'battlefield') {
        	if (!text2) return res.json(loghandler.nottext2)
            request.post({
                url: "https://photooxy.com/fps-game-effect/create-battlefield-4-rising-effect-152.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

router.get('/textmaker/senja', async (req, res, next) => {
        var theme = req.query.theme,
             text = req.query.text,
             text2 = req.query.text2,
             text3 = req.query.text3,
             apikeyInput = req.query.apikey;
        
	if(!apikeyInput) return res.json(loghandler.notparam)
	if(apikeyInput != 'zahirgans') return res.json(loghandler.invalidKey)
        if (!theme) return res.json(loghandler.nottheme)
        if (theme != 'coffee-cup' && theme != 'coffee-cup2') return res.json(loghandler.notheme)
        if (!text) return res.json(loghandler.nottext)

        if (theme == 'coffee-cup') {
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-any-text-in-to-coffee-cup-371.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                })
                } catch (e) {
                	console.log(e);
                res.json(loghandler.error)
                }
        } else if (theme == 'coffee-cup2') {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/put-your-text-on-a-coffee-cup--174.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?expiration=120&key=761ea2d5575581057a799d14e9c78e28&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${creator}`,
                                            message : `jangan lupa follow ${creator}`,
                                            result:{
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json(loghandler.error)
        }
})

module.exports = router
