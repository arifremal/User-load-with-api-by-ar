const handleSearch = () => {
  const inputValue = document.getElementById("input-value").value;

  if (inputValue) {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.title === "No Definitions Found") {
          alert(data.message);
        } else {
          displayAudio(data);
        }
      });
  } else {
    alert("not a valid value");
  }
};

const displayAudio = (data) => {
  const parent = document.getElementById("audio-container");
  data[0].phonetics.forEach((element) => {
    const audio = document.createElement("audio");
    audio.src = element.audio;
    // console.log(audio);
    const button = document.createElement("btn");
    button.innerHTML = "play";
    button.onclick = () => {
      audio.play();
    };
    const div = document.createElement("div");
    parent.appendChild(button);
    parent.appendChild(audio);
    parent.appendChild(div);
  });
};


const loadGithubUsers = () => {
    fetch("https://api.github.com/users?per_page=10")
      .then((res) => res.json())
      .then((result) => {
        displayUser(result);
      });
  };
  

const displayUser=(result)=>{
const parentContainer = document.getElementById('user-cotnainer')
// console.log(result);
result.forEach((user)=>{
    fetch(user.followers_url)
.then(res=>res.json())
.then(data =>{
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
      <img class="card-img" src=${user.avatar_url} alt="">
      <h4>${user.login}</h4>
      <div>FOllowers:
      <img class="card-imgf" src=${data[0].avatar_url} alt="">
      <img class="card-imgf" src=${data[1].avatar_url} alt="">
      </div>

      `;
      parentContainer.appendChild(div);
})
})

}
