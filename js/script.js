navigator.getBattery().then(battery => {
  let content = document.querySelector('.battery-content'),
    percent = document.querySelector('.percent'),
    isCharging = document.querySelector('.isCharging')

  function updateAllParametrs() {
    updateChargeInfo()
    updateLevelInfo()
  }

  updateAllParametrs()

  function updateLevelInfo() {
    content.style.width = Math.round(battery.level * 100) + '%'
    percent.innerHTML = Math.round(battery.level * 100) + '%'
  }

  function updateChargeInfo() {
    isCharging.innerHTML = battery.charging ? 'Your device is charging' : ''
  }

  battery.addEventListener('levelchange', () => {
    updateLevelInfo()
  })

  battery.addEventListener('chargingchange', () => {
    updateChargeInfo()
  })
})