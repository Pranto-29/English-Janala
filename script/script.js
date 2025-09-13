
// // সব লেসন লোড করার ফাংশন
// const loadLessons = () => {
//   fetch('https://openapi.programming-hero.com/api/levels/all')
//     .then(res => res.json())
//     .then(json => displayLesson(json.data))

// };

// // // নির্দিষ্ট লেভেলের ভোকাব লোড করা
// const loadLevelWord = (id) => {
//   const url = `https://openapi.programming-hero.com/api/level/${id}`;
//   fetch(url)
//     .then(res => res.json())
//     .then(data => displayLevelWord(data.data));

// }
// const displayLevelWord = (words)=>{
//   const wordContainer = document.getElementById('word-container');
//   wordContainer.innerHTML="";


//   words.forEach((word) => {
  
//   if(words.length ==0) {
//       wordContainer.innerHTML =`
//       <div class="bg-pink-400 col-span-full rounded-xl py-10 space-y-4">
//     <p class="text-center justify-center items-center  font-medium gap-3 text-[30px] text-blue-900"এই lesson কোনো Vocabulary যুক্ত করা হয়নি!!</p>
//     <h2 class="text-center justify-center items-center font-bold text-[25px]" Lesson Seclect করুন</h2>
//   </div>
  
//       `;
//   }

//     const card = document.createElement('div');
//     card.innerHTML = `
//     <div class="bg-pink-200 text-center rounded-xl shadow-sm py-10 px-5 [box-shadow:1px_1px_1px_1px_rgba(0,0,0,0.2)] space-y-4">
//       <h2 class="text-2xl font-bold">${word.word}</h2>
//       <p class="font-semibold">Meaning / Pronunciation</p>
//       <div class="text-2xl font-bangla text-gray-700">${word.meaning} / ${word.pronunciation}</div>
//       <div class="flex justify-between items-center">
//         <button class="btn bg-sky-100 hover:bg-green-700"><i class="fa-solid fa-circle-info"></i></button>
//         <button class="btn bg-sky-100 hover:bg-green-700"><i class="fa-solid fa-volume-high"></i></button>
//       </div>
//     </div>
//    `;
//     wordContainer.append(card);
//   });
// };

// // লেসন লিস্ট ডিসপ্লে
// const displayLesson = (lessons) => {
//   const levelContainer = document.getElementById('level-container');
//   levelContainer.innerHTML = "";

//   lessons.forEach(lesson => {
//     const btnDiv = document.createElement('div');
//     btnDiv.innerHTML = `
//       <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
//         <i class="fa-solid fa-book-open"></i> Lesson-${lesson.level_no}
//       </button>
//     `;
//     levelContainer.append(btnDiv);
//   });
// }

// loadLessons();

// // সব লেসন লোড করার ফাংশন
// const loadLessons = () => {
//   fetch('https://openapi.programming-hero.com/api/levels/all')
//     .then(res => res.json())
//     .then(json => displayLesson(json.data));
// };

// // নির্দিষ্ট লেভেলের ভোকাব লোড করা
// const loadLevelWord = (id) => {
//   const url = `https://openapi.programming-hero.com/api/level/${id}`;
//   fetch(url)
//     .then(res => res.json())
//     .then(data => displayLevelWord(data.data));
// };

// // ভোকাব দেখানো
// const displayLevelWord = (words) => {
//   const wordContainer = document.getElementById('word-container');
//   wordContainer.innerHTML = "";

//   // ✅ প্রথমে খালি কিনা চেক করো
//   if (!words || words.length === 0) {
//     wordContainer.innerHTML = `
//       <div class="bg-pink-400 col-span-full rounded-xl py-10 space-y-4">
//         <p class="text-center font-medium gap-3 text-[30px] text-blue-900">
//           এই Lesson কোনো Vocabulary যুক্ত করা হয়নি!!
//         </p>
//         <h2 class="text-center font-bold text-[25px]">
//           Lesson Select করুন
//         </h2>
//       </div>
//     `;
//     return; // ❌ এখানে return না দিলে নিচে loop চলবে
//   }

//   // ✅ ডাটা থাকলে লুপ করে কার্ড বানাও
//   words.forEach((word) => {
//     const card = document.createElement('div');
//     card.innerHTML = `
//       <div class="bg-pink-200 text-center rounded-xl shadow-sm py-10 px-5 [box-shadow:1px_1px_1px_1px_rgba(0,0,0,0.2)] space-y-4">
//         <h2 class="text-2xl font-bold">${word.word}</h2>
//         <p class="font-semibold">${word.meaning} / ${word.pronunciation}</p>
//         <div class="text-2xl font-bangla text-gray-700">${word.meaning_bangla ?? ""}</div>
//         <div class="flex justify-between items-center">
//           <button class="btn bg-sky-100 hover:bg-green-700"><i class="fa-solid fa-circle-info"></i></button>
//           <button class="btn bg-sky-100 hover:bg-green-700"><i class="fa-solid fa-volume-high"></i></button>
//         </div>
//       </div>
//     `;
//     wordContainer.append(card);
//   });
// };

// // লেসন লিস্ট ডিসপ্লে
// const displayLesson = (lessons) => {
//   const levelContainer = document.getElementById('level-container');
//   levelContainer.innerHTML = "";

//   lessons.forEach(lesson => {
//     const btnDiv = document.createElement('div');
//     btnDiv.innerHTML = `
//       <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
//         <i class="fa-solid fa-book-open"></i> Lesson-${lesson.level_no}
//       </button>
//     `;
//     levelContainer.append(btnDiv);
//   });
// };

// // সব লেসন লোড
// loadLessons();
// 

// সব লেসন লোড করার ফাংশন
const loadLessons = () => {
  fetch('https://openapi.programming-hero.com/api/levels/all')
    .then(res => res.json())
    .then(json => displayLesson(json.data));
};

// নির্দিষ্ট লেভেলের ভোকাব লোড করা
const loadLevelWord = (id) => {
  manageSpinner(true)
  const wordContainer = document.getElementById('word-container');
  wordContainer.innerHTML = "";

  //  Lesson 4–7 হলে শুধু মেসেজ দেখাবে
if (id === 4 || id === 7) {
  wordContainer.innerHTML = `
    <div class="bg-pink-400 col-span-full rounded-xl py-10 space-y-4">
      <img class="mx-auto" src="assets/alert-error.png">
      <p class="text-center font-medium gap-3 text-[30px] text-blue-900">
        এই Lesson কোনো Vocabulary যুক্ত করা হয়নি!!
      </p>
      <h2 class="text-center font-bold text-[25px]">
       Next Lesson Select করুন
      </h2>
    </div>
  `;
  manageSpinner(false)
  return; 
}


  // অন্য লেসনের জন্য API থেকে ডাটা আনা
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  fetch(url)
    .then(res => res.json())
    .then(data => displayLevelWord(data.data));
};

// ভোকাব দেখানো
const displayLevelWord = (words) => {
  const wordContainer = document.getElementById('word-container');
  wordContainer.innerHTML = "";

  words.forEach((word) => {
    const card = document.createElement('div');
    card.innerHTML = `
      <div class="bg-pink-200 text-center rounded-xl shadow-sm py-10 px-5 space-y-4">
        <h2 class="text-2xl font-bold">${word.word ? word.word:"শব্দ পাওয়া যায় নি"}</h2>
        <p class="font-semibold text-blue">Meaning / Pronunciation</p>
        <div class="text-2xl font-bangla text-gray-700">${word.meaning ? word.meaning :" অর্থ পাওয়া যায় নি "} / ${word.pronunciation ? word.pronunciation: "Pronuciation পাওয়া যায় নি "}</div>
        <div class="flex justify-between items-center">
          <button onclick= "my_modal_5.showModal()"class="btn bg-sky-100 hover:bg-green-700"><i class="fa-solid fa-circle-info"></i></button>
          <button class="btn bg-sky-100 hover:bg-green-700"><i class="fa-solid fa-volume-high"></i></button>
        </div>
      </div>
    `;
    wordContainer.append(card);
  });
  manageSpinner(false)
};
const manageSpinner = (status) => {
  if(status ==true) {
    document.getElementById('spinner').classList.remove("hidden");
    document.getElementById('word-container').classList.add("hidden");
  } else{
    document.getElementById("word-container").classList.remove("hidden");
    document.getElementById("spinner").classList.add("hidden");
  }
}
// লেসন লিস্ট ডিসপ্লে
const displayLesson = (lessons) => {
  const levelContainer = document.getElementById('level-container');
  levelContainer.innerHTML = "";

  lessons.forEach(lesson => {
    const btnDiv = document.createElement('div');
    btnDiv.innerHTML = `
      <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
        <i class="fa-solid fa-book-open"></i> Lesson-${lesson.level_no}
      </button>
    `;
    levelContainer.append(btnDiv);
  });
};
// মডাল ওপেন করার ফাংশন



// সব লেসন লোড
loadLessons();

