console.log('this is news application using of core javaScript.')

let mainDiv = document.getElementById('mainDiv');
console.log(mainDiv)

let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=61203bed44d740ffaa4d4b0f74e33416'

let html = ''

let xhr = new XMLHttpRequest()
xhr.open('Get', url, true)

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText)

        json.articles.forEach(element => {
            let date = new Date(element.publishedAt)

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

    } else {
        console.err("this is Error")
    }
}

xhr.onreadystatechange = function () {
    console.log(`ready state is   ${xhr.readyState}`)
}

xhr.send()