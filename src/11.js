// Generate a random number between 1 and 10
function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

// Get a random user's GitHub profile
async function getRandomUserProfile() {
  try {
    const response = await fetch('https://api.github.com/users');
    const data = await response.json();
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
  } catch (error) {
    console.log(error);
  }
}
