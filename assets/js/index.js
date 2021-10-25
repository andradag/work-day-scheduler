const workingHours = [
  {
    hour: "09:00",
    localStorage: "9",
  },
  {
    hour: "10:00",
    localStorage: "10",
  },
  {
    hour: "11:00",
    localStorage: "11",
  },
  {
    hour: "12:00",
    localStorage: "12",
  },
  {
    hour: "13:00",
    localStorage: "13",
  },
  {
    hour: "14:00",
    localStorage: "14",
  },
  {
    hour: "15:00",
    localStorage: "15",
  },
  {
    hour: "16:00",
    localStorage: "16",
  },
  {
    hour: "17:00",
    localStorage: "17",
  },
];
const activitiesByHour = [];

const onLoad = function () {
  // on record load, check local storage
  initializeLocalStorage();

  //render Clock
  renderClock();

  // render Hour Block
  constructHourBlocks();
  renderEventDiary();
};

const initializeLocalStorage = function () {
  const dataFromLS = localStorage.getItem("activitiesByHour");

  if (!dataFromLS) {
    localStorage.setItem("activitiesByHour", JSON.stringify({}));
  }
};
const renderClock = function () {
  function update() {
    $("#clock").html(moment().format("DD MMMM YYYY H:mm:ss"));
  }

  setInterval(update, 1000);
};

// Construct Hour Blocks in workingHours Array
const constructHourBlocks = function () {
  for (let i = 0; i < workingHours.length; i++) {
    const data = workingHours[i];
    const userInput = $("<textarea/>");
    userInput.attr("id", "user-event");
    userInput.addClass(getTimeBlockClassName(data.localStorage));

    const timeLabel = $("<label>", {
      name: "time-label",
      id: "time-label",
      class: "time-of-day",
    });

    timeLabel.text(data.hour);

    const saveBtn = $("<button/>", {
      text: "Save Event",
      id: data.localStoragekey,
      class: "saveBtn",
    });
    const eventContainer = $("<div>");
    eventContainer.addClass("event-container");
    eventContainer.attr("data-time, data.localStorageKey);");
    eventContainer.append(timeLabel, userInput, saveBtn);
    const container = $("#container");
    container.append(eventContainer);
  }
};
const saveData = function (event) {
  if ($(event.target).is("button")) {
    const timeOfEvent = $(event.target).attr("id");
    const userInput = $(event.target).prev().val();
    const dataFromLocalStorage = JSON.parse(
      localStorage.getItem("activitiesByHour")
    );
    dataFromLocalStorage[timeOfEvent] = userInput;
    localStorage.setItem(
      "activitiesByHour",
      JSON.stringify(dataFromLocalStorage)
    );
  }
};

$("#container").click(saveData);

const currentHour = moment().hour() - 10;
console.log(currentHour);

const getTimeBlockClassName = function (hour) {
  if (hour > currentHour) {
    return "future";
  } else if (hour == currentHour) {
    return "present";
  } else {
    return "past";
  }
};

const renderEventDiary = function () {
  const dataFromLocalStorage = JSON.parse(
    localStorage.getItem("activitiesByHour")
  );

  const renderText = function (index) {
    const hour = $(this).next().attr("id");

    if (dataFromLocalStorage.hasOwnProperty(hour)) {
      $(this).text(dataFromLocalStorage[hour]);
    }
  };

  $("textarea").each(renderText);
};

const clearLS = function (event) {
  console.log(event.target);
  localStorage.clear();
  window.location.reload();
};

$("#clear-ls").click(clearLS);

window.addEventListener("load", onLoad);
