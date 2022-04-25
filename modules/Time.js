const siteDate = document.querySelector('#time');

const Time = () => {
  const date = new Date();
  const locale = navigator.language;
  const options = {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: 'false',
  };
  siteDate.textContent = `${date.toLocaleTimeString(locale, options)}`;
};

export default Time;
