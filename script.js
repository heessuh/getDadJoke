async function getJoke() {
  const response = await fetch("https://icanhazdadjoke.com/", {
    method: "GET",
    headers: {
      Accept: "text/plain",
    },
  })
  const joke = await response.text()
  document.querySelector("p").innerText = joke
  console.log(joke)
}
