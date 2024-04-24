const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = '#ccc';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange'; //kalo mau pilih array yang diwarnain

// const sectionB = document.querySelector('section#b');
// const p4 = sectionB.getElementsByTagName('p')[0];
// p4.style.backgroundColor = 'orange';

// // const sectionA = document.querySelector('section#a');
// // sectionA.innerHTML = '<div><p>paragraf1</p></div>';

// const a = document.querySelector('section#a a');
// a.setAttribute('id', 'link');

// //dom manipulation

// //buat element baru
// const pBaru = document.createElement('p');
// const teksPBaru = document.createTextNode('Paragraf Baru');
// //simmpan tulisan ke dalam paragraf
// pBaru.appendChild(teksPBaru)
// //simpan disection a barisan akhir
// const sectionA = document.getElementById('a');
// sectionA.appendChild(pBaru);

// // buat element baru tpi urutan custom

// //buatelement dulu
// const liBaru = document.createElement('li');
// const teksLiBaru = document.createTextNode('item baru');
// // buat paragrafnya
// liBaru.appendChild(teksLiBaru);
// //simpan paragraf di barisan ke 2
// const ul = document.querySelector('section#b ul');
// const li2 = li.querySelector('li:nth-child(2)');
// //kompenen mau dimasukin dmn
// ul.insertBefore(liBaru,li2);

//pake replace child
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('judul baru!');
h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru,p4);
