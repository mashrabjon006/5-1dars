// 1. IIFE (Immediately Invoked Function Expression)

// 1.1. Massiv ichidagi sonlarning yig‘indisini hisoblaydigan IIFE
(function(aArr) {
    const bSum = aArr.reduce((bAcc, bNum) => bAcc + bNum, 0);
    console.log(bSum);
})([1, 2, 3, 4]);

// 1.2. Berilgan ikki sonning ko‘paytmasini hisoblab, natijani konsolga chiqadigan IIFE
(function(cA, cB) {
    const dProduct = cA * cB;
    console.log(dProduct);
})(5, 3);

// 2. Object, array copy

// 2.1. Ob'ektdan nusxa olib, yangi xususiyat qo‘shadigan funksiya
function aAddProperty(dObj, aKey, bValue) {
    return { ...dObj, [aKey]: bValue };
}

const aOriginal = { name: "Ali", age: 25 };
const bUpdated = aAddProperty(aOriginal, "city", "Tashkent");

// 2.2. Massivdan nusxa olib, barcha elementlarini 2 barobarga oshiradigan funksiya
function cDoubleArray(aArr) {
    return aArr.map(bNum => bNum * 2);
}

const dOriginalArray = [1, 2, 3];
const aDoubledArray = cDoubleArray(dOriginalArray);

// 2.3. Ob'ektning ichki ob'ektlarini ham chuqur nusxalashni amalga oshiradigan funksiya
function aDeepCopy(dObj) {
    return JSON.parse(JSON.stringify(dObj));
}

const bOriginalObject = { person: { name: "Ali" } };
const cCopiedObject = aDeepCopy(bOriginalObject);

// 3. Pure function

// 3.1. Berilgan ikkita massivni birlashtiradigan funksiya
function aMergeArrays(dArr1, dArr2) {
    return [...dArr1, ...dArr2];
}

const bMergedArray = aMergeArrays([1, 2], [3, 4]);

// 3.2. Massivdagi barcha sonlarning o‘rtacha qiymatini hisoblab qaytaradigan funksiya
function cAverage(aArr) {
    const bSum = aArr.reduce((bAcc, bNum) => bAcc + bNum, 0);
    return bSum / aArr.length;
}

const bAvg = cAverage([2, 4, 6, 8]);

// 4. Callback function

// 4.1. Berilgan massivning har bir elementiga callback funksiyasini qo‘llab, natijani qaytaradigan funksiya
function aApplyCallback(dArr, dCallback) {
    return dArr.map(dCallback);
}

const bres = aApplyCallback([1, 2, 3], x => x * 2);

// 4.2. Callback funksiyasi yordamida berilgan massivdan faqat toq sonlarni qaytaradigan dastur
function cFilterOdds(aArr) {
    return aArr.filter(x => x % 2 !== 0);
}

const bOddNumbers = cFilterOdds([1, 2, 3, 4]);

// 5. Rekursiv function

// 5.1. Rekursiya yordamida berilgan sonning faktorialini hisoblaydigan funksiya


// 5.2. Rekursiya yordamida Fibonacci ketma-ketligining `n`-chi elementini topadigan funksiya


// 5.3. Rekursiya yordamida massiv ichidagi barcha sonlarning yig‘indisini hisoblaydigan funksiya
function aSumArray(cArr) {
    if (cArr.length === 0) return 0;
    return cArr[0] + aSumArray(cArr.slice(1));
}

const bTotal = aSumArray([1, 2, 3, 4]);

// 6. Object metodlariga oid

// 6.1. Ob'ektdagi barcha kalitlarni qaytaruvchi funksiya
function aGetKeys(dObj) {
    return Object.keys(dObj);
}

const bKeys = aGetKeys({ name: "Ali", age: 25 });

// 6.2. Ob'ektdagi barcha qiymatlarni qaytaruvchi funksiya
function aGetValues(dObj) {
    return Object.values(dObj);
}

const bValues = aGetValues({ name: "Ali", age: 25 });

// 6.3. Ob'ektni kalitlari va qiymatlarini massiv sifatida qaytaruvchi funksiya

// 7. JSON ga oid

// 7.1. Ob'ektni JSON formatiga o‘tkazuvchi va qaytadan ob'ektga aylantiruvchi funksiya
function aObjectToJson(dObj) {
    return JSON.parse(JSON.stringify(dObj));
}

const bJsonObject = aObjectToJson({ name: "Ali", age: 25 });

// 7.2. JSON formatidagi matnni o‘qib, undagi ma'lumotni ob'ektga aylantiradigan funksiya
function aJsonToObject(dJsonString) {
    return JSON.parse(dJsonString);
}

const bObj = aJsonToObject('{"name": "Ali", "age": 25}');

// 8. String metodlariga oid

// 8.1. Matndan barcha bo‘sh joylarni olib tashlaydigan funksiya

// 8.2. Berilgan so‘zni katta harfga aylantiradigan funksiya
function aToUpperCase(dStr) {
    return dStr.toUpperCase();
}

const bUpper = aToUpperCase("hello");

// 8.3. Matndagi birinchi harfni katta qilib, qolgan qismini kichik qilib qaytaradigan funksiya
function aCapitalizeFirstLetter(dStr) {
    return dStr.charAt(0).toUpperCase() + dStr.slice(1).toLowerCase();
}

const bCapitalized = aCapitalizeFirstLetter("hello");

// 8.4. Matnning oxiridagi ortiqcha bo‘sh joylarni olib tashlaydigan funksiya

// 8.5. Matn ichidan so‘zlarni ajratib massiv qaytaruvchi funksiya
function aSplitWords(dStr) {
    return dStr.split(' ');
}

const bWordsArray = aSplitWords("hello world");

// 8.6. Matnni orqadan oldinga o‘zgartiruvchi funksiya
function aReverseString(dStr) {
    return dStr.split('').reverse().join('');
}

const bReversed = aReverseString("abc");

// 8.7. Matndagi berilgan so‘z nechta borligini hisoblaydigan funksiya
function aCountOccurrences(dStr, dWord) {
    return dStr.split(dWord).length - 1;
}

const bCount = aCountOccurrences("hello hello world", "hello");

// 8.8. Matndagi barcha unli harflarni olib tashlaydigan funksiya
function aRemoveVowels(dStr) {
    return dStr.replace(/[aeiou]/gi, '');
}

const bConsonantsOnly = aRemoveVowels("hello");

// 8.9. Matn ichidan ma'lum bir indeksdan boshlab yangi matn qaytaradigan funksiya


const bSubstring = aSubstringFromIndex("hello", 2);

// 8.10. Matnni ma'lum bir uzunlikka kesib, qolgan qismini olib tashlaydigan funksiya
function aTruncateString(dStr, dLength) {
    return dStr.substring(0, dLength);
}

const bTruncated = aTruncateString("hello world", 5);

// 8.11. Matndan ma'lum bir so‘zni boshqasiga almashtiruvchi funksiya
function aReplaceWord(dStr, dTarget, dReplacement) {
    return dStr.replace(dTarget, dReplacement);
}

const bReplaced = aReplaceWord("hello world", "world", "universe");

// 8.12. Matndagi barcha katta harflarni kichikka o‘zgartiruvchi funksiya
function aToLowerCase(dStr) {
    return dStr.toLowerCase();
}

const bLower = aToLowerCase("Hello");

// 8.13. Matndan faqat raqamlarni ajratib massiv qaytaradigan funksiya

// 8.14. Matn boshida va oxirida berilgan belgilarni olib tashlaydigan funksiya
function aTrimCharacters(dStr, dChar) {
    const dRegex = new RegExp(`^${dChar}+|${dChar}+$`, 'g');
    return dStr.replace(dRegex, '');
}

const bTrimmedChars = aTrimCharacters("***hello***", "*");

// 8.15. Matnning biror qismidagi so‘zlarni teskari aylantirib qaytaradigan funksiya
function aReverseWord(dStr, dWord) {
    const dRegex = new RegExp(`(${dWord})`, 'g');
    return dStr.replace(dRegex, dWord.split('').reverse().join(''));
}

const bResult = aReverseWord("hello world", "world");