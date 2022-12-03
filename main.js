// ambil elemen
let audio = document.querySelector("audio")

let play = document.querySelector(".main")


// ketika tombol play di mainkan
play.addEventListener("click", e => {
 // memainkannya musik
 audio.play()
 play.innerHTML = `<a href="/demons v jar hearts.mp3"  download="">unduh</a>`

 document.querySelector(".lirik").innerHTML = "memuat!!!"

 // panggil fungsi goo untuk lirik
 goo(true)
})

// fungsi ambil data dan lirik
async function goo(mulai) {
 // ambil dara
 return await fetch("/lirik").then(data => data.text()).then(data => {
  // tiap baris ubah ke array
  let lirik = data.trim().split("\n")

  // loop semua lirik, ambil waktunya
  lirik.forEach(baris => {

   baris = baris.trim()
   // ambil waktu
   let menit = parseInt(baris.substr(1, 2))
   let detik = parseInt(baris.substr(4, 5))

   // jika baris kosong
   if (isNaN(menit) || isNaN(detik)) return

   // simpan di variabel 
   let teks = baris.substr(baris.indexOf("]") + 1, baris.length).trim()


   // ubah isi elemen dengan lirik
   setTimeout(() => {
    // ambil elemen lirik
    document.querySelector(".lirik").innerHTML = teks
   }, (detik + (menit * 60)) * 1000)


  })
 })

}

// untuk timer
setInterval(() => {
 // ambil durasi audio
 let durasi = Math.floor(audio.currentTime)

 // ambil menit
 let menit = Math.floor(durasi / 60)
 // ambil detik
 let detik = durasi % 60

 // ubah isi elemen dengan timer
 document.querySelector('.durasi').textContent = `${menit}:${detik}`

 // tiap 1 detik fungsi di ulang
}, 1000)

// 

let info = document.querySelector(".info")

info.querySelector(".tutup").addEventListener("click", () => {
 info.classList.remove("geser")
})

setInterval(() => {
 info.classList.add("geser")
}, 30000)