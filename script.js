// script.js

const profiles = [
    {
      name: "atmin😂",
      desc: "Si atmin ini nama aslinya repan, orang ini tuh paling berpengaruh. Misal si atmin mau ke kantin member lain pada ikutan njir😹",
      Image: "Img/atmin.jpeg"
    },
    {
      name: "jawir😨",
      desc: "jawir satu ini nama nya dafa, ni orang sekalinya koar-koar yang perempuan langsung pada diem karna jawir satu ini wong tulus 😏",
      Image: "Img/jawir.jpeg"
    },
    {
      name: "mbob😘",
      desc: "mbob ini nama aslinya epan, orangnya sih kalo di ledek ga baperan🤭.",
      Image: "img/mbobee.jpeg"
    },
    {
      name: "peyang😪",
      desc: "dasar peyang nama aslinya ajwin, cuma satu kalimat anak ini plonga-plongo.",
      Image: "Img/peyang.jpeg"
    },
    {
      name: "cokocip🍪",
      desc: "ini alip, kenapa bisa di panggil cokocip? tuh di dagu nempel cokocip permanen😂",
      Image: "Img/cokocip.jpeg"
    },
    {
      name: "mmmoyy🥱",
      desc: "moy moy moy, anomali satu ini namanya fajar teman-temannya biasa manggil dia moy karna itu nama bapaknya, kalo main ke rumah dia jangan sampe sebut moy😱",
      Image: "Img/mmoyy.jpeg"
    },
    {
      name: "zayyyiinal😪",
      desc: "ini rival nya mbobee, nama asli dia dapa bisa di panggil adit juga, konon katanya jika zayyyiinal ini di pertemukan dengan mbobee maka dunia akan hancur🤯",
      Image: "Img/zayyyiinal.jpeg"
    }
  ];
  
  function showDetail(index) {
    const modal = document.getElementById("profileDetail");
    const nameEl = document.getElementById("profileName");
    const descEl = document.getElementById("profileDesc");
    const imgEl = document.getElementById("profile-image");
  
    console.log("Index:", index); 
    console.log("Image Path:", profiles[index].Image); 
  
    nameEl.textContent = profiles[index].name;
    descEl.textContent = profiles[index].desc;
    imgEl.src = profiles[index].Image;
  
    modal.classList.remove("hidden");
  
  
  
    
    nameEl.textContent = profiles[index].name;
    descEl.textContent = profiles[index].desc;

    if (profiles[index].Image) {
      imageEl.src = profiles[index].Image;
      imageEl.style.display = "block";
    } else {
      imageEl.style.display = "none";
    }
  
    modal.classList.remove("hidden");
  }
  
  
  function closeDetail() {
    const modal = document.getElementById("profileDetail");
    modal.classList.add("hidden");
  }
  