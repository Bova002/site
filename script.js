// function changeQuote(){
//     let quotes = {
//         "В любом начинании тебя будет преследовать удача!": '',
//         "Ты будешь купаться в любви весь год!": '',
//         "Будь уверен в завтрашнем дне! Этот год принесет стабильность!": '',
//         "Благие вести на пороге! Радость наполнит твой дом!": '',
//         "Каждый твой шаг важен. Смело иди к своей цели! Она рядом.": '',
//         "Все в твоих руках! Цени себя – и тебя будут ценить окружающие!": '',
//         "Тебя ждет год плодотворной работы и соответствующего вознаграждения за труды!": '',
//         "Ты научишься новому в этом году и получишь прекрасный опыт!": '',
//         "Ты будешь чаще улыбаться: мечты начнут сбываться!": '',
//         "Весь год ты будешь ощущать большую поддержку семьи!": '',
//         "Благоприятный год для твоей самореализации!": '',
//         "Весь твой год будет наполнен любовью и теплом!": '',
//         "Мир, покой и гармония – вот твои попутчики в новом году!": '',
//         "За твоей дверью стоит большое счастье!": '',
//         "Готовься к году, полному романтики!": '',
//         "Смело иди вперед! Ты все делаешь правильно!": '',
//         "Тебя ожидает стремительный карьерный рост в этом году!": '',
//         "Весь год тебе будут помогать люди, которые сейчас рядом!": '',
//     }
//     let authors = Object.keys(quotes);
//     let author = authors[Math.floor(Math.random() * authors.length)];
//     let quote = quotes[author];

//     document.getElementById('quote').innerHTML = quote;
//     document.getElementById('author').innerHTML = author;
// }

let quote = document.getElementById("quote")
let h=(Math.random()*18); 
 if (h < 1) quote.innerHTML = "В любом начинании тебя будет преследовать удача!"; 
 if (h > 1 && h < 2) quote.innerHTML = "Весь год тебе будут помогать люди, которые сейчас рядом!"; 
 if (h > 2 && h < 3) quote.innerHTML = "Тебя ожидает стремительный карьерный рост в этом году!"; 
 if (h > 3 && h < 4) quote.innerHTML = "Смело иди вперед! Ты все делаешь правильно!"; 
 if (h > 4 && h < 5) quote.innerHTML = "Готовься к году, полному романтики!"; 
 if (h > 5 && h < 6) quote.innerHTML = "За твоей дверью стоит большое счастье!"; 
 if (h > 6 && h < 7) quote.innerHTML = "Мир, покой и гармония – вот твои попутчики в новом году!"; 
 if (h > 7 && h < 8) quote.innerHTML = "Весь твой год будет наполнен любовью и теплом!"; 
 if (h > 8 && h < 9) quote.innerHTML = "Благоприятный год для твоей самореализации!"; 
 if (h > 9 && h <10) quote.innerHTML ="Весь год ты будешь ощущать большую поддержку семьи!"; 
 if (h > 10 && h <11) quote.innerHTML ="Ты будешь чаще улыбаться: мечты начнут сбываться!";
 if (h > 11 && h <12) quote.innerHTML ="Ты научишься новому в этом году и получишь прекрасный опыт!";
 if (h > 12 && h <13) quote.innerHTML ="Тебя ждет год плодотворной работы и соответствующего вознаграждения за труды!";
 if (h > 13 && h <14) quote.innerHTML ="Все в твоих руках! Цени себя – и тебя будут ценить окружающие!";
 if (h > 14 && h <15) quote.innerHTML ="Каждый твой шаг важен. Смело иди к своей цели! Она рядом.";
 if (h > 15 && h <16) quote.innerHTML ="Благие вести на пороге! Радость наполнит твой дом!";
 if (h > 16 && h <17) quote.innerHTML ="Будь уверен в завтрашнем дне! Этот год принесет стабильность!";
 if (h > 17 && h <18) quote.innerHTML ="Ты будешь купаться в любви весь год!";
