async function renderInfo() {
  let url = "https://mocki.io/v1/08021574-f46d-4231-bca1-ffd6a3315b7c";

  fetch(url, {
      method: "GET",
  })
      .then((response) => response.json())
      .then((response) => {
          let html = "";
          response.data.forEach((info) => {
              html += `<div>
                            <div class="slide">
                            <img src="${info.image}" class="slide__img" />
                            <h1 class="slide__heading">${info.title}</h1>
                            <p class="slide__text">${info.content}</p>
                            <div class="slide__more-container">
                                <p class="slide__more">More</p>
                                <img src="images/arrow.png" class="slide__arrow" alt="an arrow" />
                            </div>
                            </div>
                       </div>`;
          });

          let container = document.querySelector(".my-slider");
          container.innerHTML = html;
      
          let slider = tns({
            container : ".my-slider",
            "slideBy" : "1",
            "speed" : 500,
            "nav" : false,
            autoplay : true,
            controls : false,
            autoplayButtonOutput : false,
            responsive : {
                1900: {
                    items : 5,
                    gutter : 10
                },
                1300: {
                    items : 4,
                    gutter : 10
                },
                750: {
                    items : 3,
                    gutter : 10
                },
                600: {
                    items : 1,
                }
            }
        
        })  })
      .catch((error) => {
          console.error(error);

          let container = document.querySelector(".my-slider");
          html = `<div>
                      <img src="https://tinyurl.com/2mmoqtkv" />
                      <h1>Error</h1>
                      <p>Error</p>
                  </div>`;
          container.innerHTML = html;
      });
}

renderInfo();