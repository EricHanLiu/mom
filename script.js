let text = `Wendy's wedding!; What a beautiful day in the Conservatory of Flowers, and the three of us look pretty stellar ✨🌟😏. Wendy is staring in the wrong direction but that's okay, she's trying her best. They really grow up so quickly don't they? You looked beautiful here mom, loved your dress!
Dinner at Rubs BBQ; This was really quite a delicious spot, and one of our many dinners together during my time at McGill. I really enjoyed whenever we got to eat together, and not just because it usually meant a free meal 😉. In fact I very much miss our dinners together at Kantapia even though they charged like $10 for a Nongshim ramen equivalent 🍜
Brunch at Eggspectation, Mother's Day 2018; Another great meal together 🥰. Funny how I'm still taller than you when you're standing a step higher than me 😏
You and Wendy in China; Wendy looks SO adorable ☺️ and you look so happy! I like the overalls, cute outfit. Wendy really did deserve the title of China's healthiest baby
Wendy's wedding (cont.); We make quite the attractive family 🔥. I'm pretty sure I was plastered by this picture, but you both look absolutely beautiful!
Dinner on Parc; I don't fully recall the name of this restaurant, but we went here on June 20th, 2018 for dinner and I remember it's directly south of Milton street. We look cute as always, though I'm hiding my reluctance to take photos at restaurants pretty well. Funny that Sasa also loves taking photos, I tried to escape it but I failed 😭
Dinner in China Town; Another dinner together, this time in Feb 2019! I like your shirt, it looks very nice 😊
You and Wendy in Montreal; Wearing the sunglasses you stole! What a great visit and great week spending time together 👩‍👧‍👦
You and Wendy in Montreal (cont.); Wendy wearing the stolen sunglasses 😎
You and Wendy in Montreal (cont.); Post manicure together! Just two girls on the town, stunting with their freshly painted nails 💅
Family meal; What a hilarious representative picture of our personalities - Wendy looks unamused and annoyed, I look amazing, hilarious, and so handsome (you can even see my beautiful silver teeth), and you look beautiful just trying to take a photo together 📸
Discovering filters; Even though we lived across the continent from each other and further had Covid keeping us apart, we still found time to see each others' beautiful, unaltered faces 🥰
All you can eat with 姨妈; It was so great seeing her in Montreal, though I wish my Mandarin was better so I could talk with her more (you have to help me practice!). I still vividly remember spending time in China with her and your parents, eating chocolate loonies and loads of fruit. Hope she's doing well 😊
Dinner with 姨妈; Another dinner together in the Old Port! Two beautiful sisters together 👯‍♀️
My birthday!; You and Sasa bonding and you making us a delicious dinner after such a long time apart was incredible. So great to see you two spending time together (planning future walks!) and eat some classic Chinese cooking
You and me in China; Don't think I was conscious back then but these are some nice photos you showed Sasa and I while we visited Montreal. We should go back to China together!
You and Wendy at the condo; Crazy throwback to when we all lived here together way back in the day! Wendy with the widest smile I've ever seen 😁
You and Wendy in China (cont.); So cute! Very nice hairstyles 💈
You and Wendy in China (cont.); You look beautiful mom! Wendy looks adorable as well 👩‍❤️‍💋‍👩
You and me in Montreal; It was amazing seeing you in Montreal mom, glad we could spend time together all 3 of us and I can't wait until your visit in December! Have a fantastic birthday, we love you very much!<br><br>Love,<br>Eric and Wendy`;

let parent = document.querySelector('#parent');
let leftTemplate = document.querySelector('#left-template');
let rightTemplate = document.querySelector('#right-template');
let numImages = 21;
let texts = text.split('\n');

for (let i = 0; i < numImages - 1; i += 2) {
    let l = leftTemplate.cloneNode(true);
    let r = rightTemplate.cloneNode(true);
    l.classList.remove('is-hidden');
    r.classList.remove('is-hidden');

    // Set the image and text.
    l.querySelector('img').src = `images/img${i}.JPG`;
    r.querySelector('img').src = `images/img${i + 1}.JPG`;
    if (texts[i] === undefined || texts[i+1] === undefined) {
        break;
    }
    let [leftDate, leftPar] = texts[i].split(';');
    let [rightDate, rightPar] = texts[i + 1].split(';');
    l.querySelector('.box').innerHTML = `<b>${leftDate}</b><br>${leftPar}`;
    r.querySelector('.box').innerHTML = `<b>${rightDate}</b><br>${rightPar}`;

    parent.appendChild(l);
    parent.appendChild(r);
}

window.addEventListener('load', function() { AOS.init(); });

