const [isCurrentSeason, setCurrentSeason] = useState();
const [isStatus, setStatus] = useState(status);

function getCurrentSeason() {
  var today = new Date();
  var year = today.getFullYear();
  var month = today.getMonth();
  var day = today.getDate();

  if (day >= 1 && month >= 2 && month <= 4) {
    setCurrentSeason("SPRING");
    setStatus("RELEASING");
  } else if (day >= 1 && month >= 5 && month <= 7) {
    setCurrentSeason("SUMMER");
    setStatus("RELEASING");
  } else if (day >= 1 && month >= 8 && month <= 10) {
    setCurrentSeason("FALL");
    setStatus("RELEASING");
  } else {
    setCurrentSeason("WINTER");
    setStatus("RELEASING");
  }
}

