// get id function
function getId(id) {
  return document.getElementById(id);
}

// get class
function getClass(className) {
  return document.getElementsByClassName(className);
}

const profile = getId('user-profile-details');
const settings = getId('user-profile-settings');

const profileDetails = getClass('profile-details');
const settingsDetails = getClass('settings-details');

settings.addEventListener('click', () => {
  settingsDetails[0].classList.remove('d-none');
  profile.classList.remove('activeClass');
  profileDetails[0].classList.add('d-none');
  settings.classList.add('activeClass');
});

profile.addEventListener('click', () => {
  settingsDetails[0].classList.add('d-none');
  settings.classList.remove('activeClass');
  profileDetails[0].classList.remove('d-none');
  profile.classList.add('activeClass');
});
