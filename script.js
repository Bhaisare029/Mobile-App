// get the data
let users = [
  {
    profilePic:
      "https://images.unsplash.com/photo-1460402642842-fa689e470581?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D",
    pendingMessage: 4,
    location: "Delhi,India",
    name: "Sharon",
    age: 27,
    interests: [
      {
        icon: `<i class="ri-music-2-fill"></i>`,
        interest: "Music",
      },
      {
        icon: `<i class="ri-trophy-line"></i>`,
        interest: "Cricket",
      },
    ],
    bio: "Be YourSelf Because an Original is Worth more than a Copy.",
    isFriend: null,
  },

  {
    profilePic:
      "https://images.unsplash.com/photo-1462804993656-fac4ff489837?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1612553688442-a77ffce9d226?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 9,
    location: "Bhopal,India",
    name: "Kritika",
    age: 22,
    interests: [
      {
        icon: `<i class="ri-snapchat-fill"></i>`,
        interest: "Snapchat Lover",
      },
      {
        icon: `<i class="ri-game-fill"></i>`,
        interest: "Game",
      },
    ],
    bio: "You are the Atrist of Your life don't give the Paintbrush to anyOne Else.",
    isFriend: null,
  },

  {
    profilePic:
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1699729589505-d1791e32d925?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 13,
    location: "Bangalore,India",
    name: "Mini",
    age: 25,
    interests: [
      {
        icon: `<i class="ri-video-add-fill"></i>`,
        interest: "Video-editor",
      },
      {
        icon: `<i class="ri-paint-brush-fill"></i>`,
        interest: "Painter",
      },
    ],
    bio: "Because You judge me.'Make Sure that You'RE Perfect...?'",
    isFriend: null,
  },

  {
    profilePic:
      "https://images.unsplash.com/photo-1618481212093-a0286ef0cc95?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1621784562807-cb450c2f5efc?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    pendingMessage: 20,
    location: "Mumbai,India",
    name: "Nisha",
    age: 28,
    interests: [
      {
        icon: `<i class="ri-twitter-fill"></i>`,
        interest: "Twitter",
      },
      {
        icon: `<i class="ri-brush-fill"></i>`,
        interest: "Make-up Artist",
      },
    ],
    bio: "I'm Working MySelf,On MySelf,For mySelf,By MySelf.....✌",
    isFriend: null,
  },

  {
    profilePic:
      "https://images.unsplash.com/photo-1529687501878-c1e83dbc4411?q=80&w=1576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1618375325729-03447ed04aa2?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 7,
    location: "Indore,India",
    name: "Vartika",
    age: 24,
    interests: [
      {
        icon: `<i class="ri-microsoft-fill"></i>`,
        interest: "Microsoftware",
      },
      {
        icon: `<i class="ri-football-line"></i>`,
        interest: "Football-Lover",
      },
    ],
    bio: "Motivate YourSelf.Dont't listen to those People Who Only See Your Mistakes🌼...! ",
    isFriend: null,
  },

  {
    profilePic:
      "https://images.unsplash.com/photo-1571348635303-dabc89cff3be?q=80&w=1430&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1540875716262-8c2b2c4c00ff?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 12,
    location: "Kolkata,India",
    name: "Divya",
    age: 23,
    interests: [
      {
        icon: `<i class="ri-video-line"></i>`,
        interest: "Hip-Hop Dancer",
      },
      {
        icon: `<i class="ri-youtube-line"></i>`,
        interest: "Youtube",
      },
    ],
    bio: "Dance before the Music is Over.Live before Your Life is Over. ",
    isFriend: null,
  },

  {
    profilePic:
      "https://images.unsplash.com/photo-1554963984-67eb1b95f33f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1510353870436-88cfcd4e8fb7?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 3,
    location: "Raipur,India",
    name: "Riya",
    age: 20,
    interests: [
      {
        icon: `<i class="ri-nurse-line"></i>`,
        interest: "Nursing Student",
      },
      {
        icon: `<i class="ri-palette-fill"></i>`,
        interest: "Palette",
      },
    ],
    bio: "'When things get tough,look at the people who Love You ! You willl get energy from them.'",
    isFriend: null,
  },

  {
    profilePic:
      "https://images.unsplash.com/photo-1492362764835-5733512e3ddc?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 15,
    location: "Maharashtra,India",
    name: "Urvashi",
    age: 29,
    interests: [
      {
        icon: `<i class="ri-boxing-fill"></i>`,
        interest: "Boxing",
      },
      {
        icon: `<i class="ri-basketball-fill"></i>`,
        interest: "Basketball",
      },
    ],
    bio: "Close the window that hurts you No matter how Beautiful the view is.🙂",
    isFriend: null,
  },

  {
    profilePic:
      "https://images.unsplash.com/photo-1539784259147-c586d7ae2226?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1525358004167-bee2ae2de7c1?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 8,
    location: "Pune,India",
    name: "Anamika",
    age: 21,
    interests: [
      {
        icon: `<i class="ri-apps-line"></i>`,
        interest: "App Developer",
      },
      {
        icon: `<i class="ri-riding-fill"></i>`,
        interest: "Rider",
      },
    ],
    bio: "My talkative nature depends on the level of comfort zone I have with that Person.",
    isFriend: null,
  },

  {
    profilePic:
      "https://images.unsplash.com/photo-1535418193292-403b64871181?q=80&w=1370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    displayPic:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    pendingMessage: 19,
    location: "Agra,India",
    name: "Ruchi",
    age: 26,
    interests: [
      {
        icon: `<i class="ri-spotify-line"></i>`,
        interest: "Spotify",
      },
      {
        icon: `<i class="ri-tiktok-fill"></i>`,
        interest: "Tiktok",
      },
    ],
    bio: "Don't be too humble,don't be too rude,just treat people according to their attitude...!!",
    isFriend: null,
  },
];
function select(elem) {
  return document.querySelector(elem);
}

let current = 0;
let isAnimating = false;

function setData(index) {
  select(".prfling img").src = users[index].profilePic;
  select(".badge h5").textContent = users[index].pendingMessage;
  select(".location h3").textContent = users[index].location;
  select(".name h1:nth-child(1)").textContent = users[index].name;
  select(".name h1:nth-child(2)").textContent = users[index].age;

  var clutter = "";
  users[index].interests.forEach(function (interest) {
    clutter += `<div
class="tag flex gap-2 items-center bg-white/20 px-3 py-2 rounded-full overflow-hidden"
>
${interest.icon}
<h3 class="text-sm tracking-tight">${interest.interest}</h3>
</div> `;
  });

  select(".tags").innerHTML = clutter;
  select(".bio p").textContent = users[current].bio;
}

(function setInitial() {
  select(".maincard img").src = users[current].displayPic;
  select(".incomingcard img").src = users[current + 1]?.displayPic;

  //   select(".prfling img").src = users[current].profilePic;
  //   select(".badge h5").textContent = users[current].pendingMessage;
  //   select(".location h3").textContent = users[current].location;
  //   select(".name h1:nth-child(1)").textContent = users[current].name;
  //   select(".name h1:nth-child(2)").textContent = users[current].age;

  //   var clutter = "";
  //   users[current].interests.forEach(function (interest) {
  //     clutter += `<div
  // class="tag flex gap-2 items-center bg-white/20 px-3 py-2 rounded-full"
  // >
  // ${interest.icon}
  // <h3 class="text-sm tracking-tight">${interest.interest}</h3>
  // </div> `;
  //   });

  //   select(".tags").innerHTML = clutter;
  //   select(".bio p").textContent = users[current].bio;
  setData(current);
  current = 2;
})();

function imageChange() {
  if (!isAnimating) {
    isAnimating = true;
    let tl = gsap.timeline({
      onComplete: function () {
        isAnimating = false;
        // alert("")
        let main = select(".maincard");
        let incomingcard = select(".incomingcard");

        incomingcard.classList.remove("z-[2]");
        incomingcard.classList.add("z-[3]");
        incomingcard.classList.remove("incomingcard");

        main.classList.remove("z-[3]");
        main.classList.add("z-[2]");
        gsap.set(main, {
          sacle: 1,
          opacity: 1,
        });
        if (current === users.length) current = 0;
        select(".maincard img").src = users[current].displayPic;
        current++;
        main.classList.remove("maincard");
        incomingcard.classList.add("maincard");
        main.classList.add("incomingcard");
      },
    });
    tl.to(
      ".maincard",
      {
        sacle: 1.1,
        opacity: 0,
        ease: Circ,
        duration: 0.9,
      },
      "a"
    ).from(
      ".incomingcard",
      {
        sacle: 0.9,
        opacity: 0,
        ease: Circ,
        duration: 1.1,
      },
      "a"
    );
  }
}

let deny = select(".deny");
let accept = select(".accept");

deny.addEventListener("click", function () {
  imageChange();
  setData(current - 1);
  gsap.from(".details .element", {
    y: "100%",
    // opacity: 0,
    stagger: 0.06,
    ease: Power4.easeInOut,
    duration: 1.5,
  });
});
accept.addEventListener("click", function () {
  imageChange();
  setData(current - 1);
  gsap.from(".details .element", {
    y: "100%",
    // opacity: 0,
    stagger: 0.06,
    ease: Power4.easeInOut,
    duration: 1.5,
  });
});
(function containerCreator() {
  document.querySelectorAll(".element").forEach(function (element) {
    let div = document.createElement("div");
    div.classList.add(`${element.classList[1]}container`, "overflow-hidden");
    // console.log(div);
    div.appendChild(element);
    select(".details").appendChild(div);
  });
})();
