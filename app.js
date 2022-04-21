const $input = $("input");
const $search = $("#search");
const $remove = $("#remove");
const $form = $("form");
const $gifs = $("#gifs");

$form[0].addEventListener("submit", async function (event) {
  event.preventDefault();
  const searchTerm = $input.val();
  const res = await axios.get(
    `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
  );
  const gifs = res.data.data;
  console.log(gifs);
  const randomGifUrl =
    gifs[Math.floor(Math.random() * gifs.length)].images.original.url;
  const $gif = $(`<img src=${randomGifUrl}/>`);
  $gifs.append($gif);
});

$remove[0].addEventListener("click", function () {
  $gifs.empty();
});
