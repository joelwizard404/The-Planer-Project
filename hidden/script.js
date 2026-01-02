const links = document.querySelectorAll(".download");

links.forEach(link => {
  link.addEventListener("click", () => {
    console.log("Download started:", link.getAttribute("href"));
  });
});

// - _ - _ - _ - _ - _ - _ - _ - _ - _ -

const repositoryLinks = document.querySelectorAll(".repositorys");

repositoryLinks.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    
    const href = link.getAttribute("href");
    console.log("Repository visit started:", href);
    
    const banner = document.getElementById("visitBanner");
    banner.classList.remove("hidden");
    
    setTimeout(() => {
      window.open(href, "_blank");
      banner.classList.add("hidden");
    }, 3000);
  });
});

function closeDownloadBanner() {
  const banner = document.getElementById("visitBanner");
  banner.classList.add("hidden");
}

document.getElementById("visitBanner")?.addEventListener("click", (event) => {
  if (event.target.classList.contains("banner-overlay")) {
    closeDownloadBanner();
  }
});

const errorMessages = [
  "The hamster powering this server has escaped.",
  "This page was eaten by a bug.",
  "404 – The bits are missing.",
  "The file went on vacation.",
  "Error: Reality not found.",
  "This page does not exist. Like my motivation.",
  "You broke the internet. Congratulations.",
  "The server shrugged and gave up. (We dont have a server so donate us ;) )",
  "Nothing to see here. Move along.",
  "This link is older than Internet Explorer 6.",
  "Yo why you put cheese on my cheeseburger",
  "67 tuff boi",
];
