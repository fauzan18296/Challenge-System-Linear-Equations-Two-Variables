/*
Challenge Algebra
Buat fungsi di Python atau JavaScript yang dapat menerima input koefisien dari SPLDV(Sistem Persamaan Linear Dua Variabel) 
di atas secara dinamis dan mengembalikan nilai x dan y. 
Jangan gunakan library eksternal; gunakan logika aljabar murni yang baru saja dipelajari.

Metode yg digunakan pada Challenge Sistem Persamaan Linear Dua Variabel(SPLDV) sebagai berikut:
1. Metode Eliminasi
2. Metode Substitusi
*/

// ? Soal 'Aljabar' yg akan diterapkan pada metode SPLDV
// * persamaan 1 -> x + y = 7
// * persamaan 2 -> 2x - y = 2 


console.log(`${"=".repeat(20)} ${"Metode Eliminasi".toUpperCase()} ${"=".repeat(20)}\n`)
const method_elimination = (x, y, konstanta_equation_1 = 7, konstanta_equation_2 = 2 ) => {
    /*  
    * Penjelasan alasan di kurangi:
    * Kenapa di kurangi pada persamaan dan konstanta nya? karena kedua persamaan pada
    * variabel 'x' memiliki simbol yg sama atau simpel nya sama-sama positif tetapi jika
    * pada salah satu pada persamaan variabel 'x' nya simbol nya berbeda maka bukan di kurangi
    * tetapi di tambahkan.
    `
    */

    /* 
    * Penjelasan langkah-langkah mencari nilai variabel 'y':
    * Untuk Mencari nilai 'x' dengan menghilangkan variabel 'y' dan
    * untuk mencari hasil nilai dari x adalah dengan mengurangi 
    * 'konstansa_persamaan_1' dan 'konstansta_persaamaan_2'
    */
    
    x = (x - (2 * x)) + (y - y)
    x = konstanta_equation_1 - konstanta_equation_2

    /* 
    * Penjelasan langkah-langkah mencari nilai variabel 'y':
    * Untuk mencari nilai 'y' kita harus
    * mengkalikan masing-masing persamaan dengan nilai koefisien variabel 'x' 
    * supaya variabel 'x' bisa di hilangkan.
    * Setelah itu kita kalikan juga konstanta nya dan kurangi konstanta nya supaya
    * mendapatkan hasil nilai dari variabel 'y'
    */

    y = (x * 2) - (2 * x * 1) - (y * 2) - (-y * 1)
    y = (konstanta_equation_1 * 2) - (konstanta_equation_2 * 1)

    console.log(`${"=".repeat(9)} ${"Hasil mencari nilai masing-masing variabel".toUpperCase()} ${"=".repeat(9)}`)
    console.log(`Nilai Variabel 'x' yg di dapatkan: ${x}\nNilai Variabel 'y' yg di dapatkan: ${y}`)
    console.log("=".repeat(62), "\n")

    console.log(`${"=".repeat(9)} ${"Hasil Akhir Eliminasi 2 Persamaan".toUpperCase()} ${"=".repeat(9)}`)
    const result_equation_1 = x + y
    const result_equation_2 = 2 * x - y
    return `Persamaan 1: x + y = ${result_equation_1}\nPersamaan 2: 2 * x - y = ${result_equation_2} \n${"=".repeat(43)}\n`
    }

console.log(method_elimination(1, 1))


console.log(`${"=".repeat(20)} ${"Metode Substitusi".toUpperCase()} ${"=".repeat(20)}\n`)
const method_subtitution = (x, y, konstanta_equation_1 = 7, konstanta_equation_2 = 2) => {
    /* 
    * Kita lihat dulu persamaan mana yang membuat jadi lebih sederhana.
    */

    /*  
    * Mencari nilai variabel y
    */
    let equation_1 = x + y
    y = konstanta_equation_1 - x

    /* 
    * Mencari nilai variabel x 
    */
    let equation_2 = (2 * x) - (y) 
    equation_2 = 2 * x - (- x * konstanta_equation_1 - x * - x)
    equation_2 = 2 * x - 7 + x

    // ? Transposisi untuk menjaga keseimbangan persamaan(equation) dengan membalikan symbol pengoperasian nya contoh 
    // ? - kalau dipindah ruas akan menjadi +. Lalu kegunaan transposiss selain menjaga keseimbangan
    // ? juga bertujuan untuk mengelompokkan jenis bilangan seperti koefisien(2x) dengan koefisien(x atau 1x) begitupun juga sebaliknya.
    let tranposisi_equation_2 = konstanta_equation_2 + 7
    x = 2 * x + x
    equation_2 = x / tranposisi_equation_2

    console.log(`${"=".repeat(9)} ${"Hasil mencari nilai masing-masing variabel".toUpperCase()} ${"=".repeat(9)}`)
    console.log(`Nilai variabel 'x' di dapatkan: ${x}\nNilai variabel 'y' di dapatkan: ${y}`)
    console.log("=".repeat(62), "\n")

    console.log(`${"=".repeat(9)} ${"Hasil Akhir substitusi 2 Persamaan".toUpperCase()} ${"=".repeat(9)}`)
    y = y + x
    return `Hasil akhir substitution: ${y}\n${"=".repeat(54)}` 
}


console.log(method_subtitution(1, 1))