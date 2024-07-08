function calculateTimeToRead() {
  if (
    !document.getElementById("article") ||
    !document.getElementById("time-to-read")
  ) {
    return;
  }

  const articleText = document.getElementById("article").innerText;
  const timeToRead = document.getElementById("time-to-read");

  const wordsArray = articleText.split(" ");
  const wordCount = wordsArray.length;

  const wordsPerMinute = 200;
  let readingTime = Math.ceil(wordCount / wordsPerMinute);

  if (readingTime < 1) {
    readingTime = 1;
  }

  timeToRead.innerHTML = `${readingTime} minute read`;
  timeToRead.style.display = "initial";
}
