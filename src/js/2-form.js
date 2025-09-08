const formEl = document.querySelector('.feedback-form');

const formData = {
  email: '',
  message: '',
};
formEl.addEventListener('input', e => {
  const email = e.currentTarget.elements.email.value;
  const message = e.currentTarget.elements.message.value;
  formData.email = email;
  formData.message = message;

  saveToLS('formData', formData);
});

// ============================================
document.addEventListener("DOMContentLoaded", ()=>{
    const lsData = getFromLs("formData");
    formEl.elements.email.value = lsData.email;
    formEl.elements.message.value = lsData.message;
})

// ============================================
function saveToLS(key, value) {
  const jsonData = JSON.stringify(value);
  localStorage.setItem(key, jsonData);
}

function getFromLs(key, defaultValue) {
  const jsonData = localStorage.getItem(key);
  try {
    const data = JSON.parse(jsonData);
    return data;
  } catch {
    return defaultValue || jsonData;
  }
}
