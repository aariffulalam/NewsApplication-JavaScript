console.log('this is news application using of core javaScript.')

let mainDiv = document.getElementById('mainDiv');
console.log(mainDiv)

// https://newsapi.org/v2/everything?q=Apple&from=2022-05-21&sortBy=popularity&apiKey=61203bed44d740ffaa4d4b0f74e33416f

let html = ''

let xhr = new XMLHttpRequest()
xhr.open('Get', 'https://newsapi.org/v2/top-headlines?country=us&apiKey=61203bed44d740ffaa4d4b0f74e33416', true)

xhr.onload = function () {
    if (this.status === 200) {
        console.log("hello i am working")
        let json = JSON.parse(this.responseText)
        // console.log(json.totalResults)
        console.log(json)

        json.articles.forEach(element => {
            // console.log(element)
            // console.log(element.publishedAt)

            let date = new Date(element.publishedAt)
            // date.slice(0, 25)
            // console.log(date)
            // console.log(typeof (date))


            html += `
                <div class="card order-3 p-2 bd-highlight my-3" style="width: 18rem">
                    <p>source :-    <strong>${!element.source.name ? 'unknown' : element.source.name}</strong></p>
                    <img
                    src=${!element.urlToImage ? './No_Image.jpg' : element.urlToImage}
                    class="card-img-top"
                    alt="..."
                    />
                    <div class="card-body">
                    <h5 class="card-title">${!element.title ? 'No Title Available' : element.title}</h5>
                    <p class="card-text">
                        ${!element.description ? 'No Description Available' : element.description}
                    </p>
                    <p>author:-  <strong>${!element.author ? 'Unknown' : element.author}</strong></p>
                    <p>${element.publishedAt}</p>
                    <a href=${!element.url ? '#' : element.url} class="btn btn-sm btn-primary">More Details</a>
                    </div>
                </div>
                `
        });

        document.getElementById('mainDiv').innerHTML = html
        const buttons = `
        <div class="d-flex justify-content-between">
          <button id="button1" onclick= ${button1} type="button" class="btn btn-danger">
            &larr; Previous
          </button>
          <button id="button2" onclick=${button2} type="button" class="btn btn-danger">
            Next &rarr;
          </button>
        </div>`

        // html += buttons
        document.querySelector('.container').innerHTML += buttons


        // console.log(html)
        // mainDiv.innerHTML = html
        // console.log(mainDiv)

    } else {
        console.err("this is Error")
    }
}

xhr.onreadystatechange = function () {
    console.log(`ready state is   ${xhr.readyState}`)
}

xhr.send()

// console.log(html)

function button1() {

}
function button2() {

}
// let body = document.getElementById('body')
// console.log(body)

// const buttons = `
//     <div class="d-flex justify-content-between">
//       <button id="button1" onclick= ${button1} type="button" class="btn btn-danger">
//         &larr; Previous
//       </button>
//       <button id="button2" onclick=${button2} type="button" class="btn btn-danger">
//         Next &rarr;
//       </button>
//     </div>`

// document.body.innerHTML += buttons


// mainDiv.innerHTML = buttons

// body.appendChild(buttons)
















// const newsItem = `< div class="card" style = "width: 18rem" >
//         <img
//           src="./Screenshot from 2021-12-10 17-46-14.png"
//           class="card-img-top"
//           alt="..."
//         />
//         <div class="card-body">
//           <h5 class="card-title">Dhinchak Pooja</h5>
//           <p class="card-text">
//             Mujhe nahi jana school fir kiun mujhko beje, fir kiun mujhe haye fir
//             kiun mujhko bheje. me tak gayi hun mujhe mat bhejo.
//           </p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//         </div>
//       </>`

// mainDiv.innerHTML = newsItem