const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const today = new Date();
  const currentDay = daysOfWeek[today.getDay()];
  
  document.getElementById('dayOfWeek').textContent = currentDay;
  
  function updateElapsedTime() {
    const elapsedTimeElement = document.getElementById('utcTime');
  
    const currentTimeMs = Date.now();
  
    elapsedTimeElement.textContent = currentTimeMs.toString();
  }
  updateElapsedTime();
  setInterval(updateElapsedTime, 1000);